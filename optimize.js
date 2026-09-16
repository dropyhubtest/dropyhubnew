import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const srcDir = path.resolve('src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const publicFiles = getAllFiles(publicDir);
const srcFiles = getAllFiles(srcDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.css'));

async function processImages() {
  const imagesToConvert = publicFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    const isImage = ext === '.png' || ext === '.jpg' || ext === '.jpeg';
    // Let's only convert files > 500KB to speed up the process and target the worst offenders
    // wait, actually even 1MB is big. Let's just convert any image > 250KB
    if (!isImage) return false;
    const stat = fs.statSync(f);
    return stat.size > 250 * 1024; // > 250KB
  });

  console.log(`Found ${imagesToConvert.length} images > 250KB to convert to WebP...`);

  for (const imgPath of imagesToConvert) {
    const ext = path.extname(imgPath);
    const basename = path.basename(imgPath, ext);
    const relativeDir = path.dirname(imgPath);
    
    const newWebpPath = path.join(relativeDir, basename + '.webp');
    
    console.log(`Converting ${path.basename(imgPath)} -> ${basename}.webp`);
    
    try {
      // Use sharp to convert
      await sharp(imgPath)
        .webp({ quality: 75 })
        .toFile(newWebpPath);
        
      // Delete old file
      fs.unlinkSync(imgPath);
      
      // Update references in src
      const oldNameStr = path.basename(imgPath);
      const newNameStr = basename + '.webp';
      
      for (const srcFile of srcFiles) {
        let content = fs.readFileSync(srcFile, 'utf8');
        if (content.includes(oldNameStr)) {
          // Replace all occurrences of the old filename with the new webp filename
          const regex = new RegExp(oldNameStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          content = content.replace(regex, newNameStr);
          fs.writeFileSync(srcFile, content, 'utf8');
          console.log(`Updated reference in ${path.relative(srcDir, srcFile)}`);
        }
      }
    } catch (err) {
      console.error(`Failed on ${imgPath}:`, err);
    }
  }
  
  console.log('Done optimizing images.');
}

processImages();
