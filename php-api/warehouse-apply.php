<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit();
}

$smtpUser = 'delivery@dropyhub.com';
$toEmail  = 'delivery@dropyhub.com';

function clean($val) {
    return htmlspecialchars(strip_tags(trim((string)$val)), ENT_QUOTES, 'UTF-8');
}

$name           = clean($data['name'] ?? 'N/A');
$phone          = clean($data['phone'] ?? 'N/A');
$city           = clean($data['city'] ?? 'N/A');
$area           = clean($data['area'] ?? 'N/A');
$age            = clean($data['age'] ?? 'N/A');
$experience     = clean($data['experience'] ?? 'N/A');
$preferredStore = isset($data['preferredStore']) && is_array($data['preferredStore'])
    ? implode(', ', array_map('clean', $data['preferredStore']))
    : 'None selected';

$date = date('d M Y, h:i A');

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'></head>
<body style='margin:0;padding:0;background:#f0f2f5;font-family:Helvetica Neue,Arial,sans-serif;'>

  <table width='100%' cellpadding='0' cellspacing='0' style='background:#f0f2f5;padding:40px 20px;'>
    <tr><td align='center'>
      <table width='620' cellpadding='0' cellspacing='0' style='max-width:620px;width:100%;'>

        <!-- ===== HEADER ===== -->
        <tr>
          <td style='background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;border-bottom:4px solid #D81B60;'>
            <img src='https://dropyhub.com/logo.png' alt='DropyHub' style='height:52px;display:block;margin:0 auto 14px auto;'/>
            <p style='margin:0;color:#D81B60;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;'>dropyhub.com</p>
          </td>
        </tr>

        <!-- ===== BADGE STRIP ===== -->
        <tr>
          <td style='background:#D81B60;padding:14px 40px;text-align:center;'>
            <p style='margin:0;color:#ffffff;font-size:15px;font-weight:700;letter-spacing:2px;text-transform:uppercase;'>
              &#x1F3ED;&nbsp; New Warehouse &amp; Stores Application
            </p>
          </td>
        </tr>

        <!-- ===== BODY ===== -->
        <tr>
          <td style='background:#ffffff;padding:36px 40px 28px 40px;'>

            <!-- Greeting -->
            <p style='margin:0 0 6px 0;color:#1a1a1a;font-size:22px;font-weight:700;'>Hello, Team DropyHub! &#x1F44B;</p>
            <p style='margin:0 0 28px 0;color:#666;font-size:15px;line-height:1.6;'>
              A new candidate has submitted a <strong>Warehouse &amp; Stores Application</strong> through the DropyHub website. Please find the details below.
            </p>

            <!-- Applicant Name Banner -->
            <div style='background:linear-gradient(135deg,#D81B60,#ff6b9d);border-radius:10px;padding:18px 24px;margin-bottom:28px;'>
              <p style='margin:0;color:rgba(255,255,255,0.8);font-size:12px;letter-spacing:2px;text-transform:uppercase;'>Applicant Name</p>
              <p style='margin:6px 0 0 0;color:#ffffff;font-size:24px;font-weight:700;'>{$name}</p>
            </div>

            <!-- Details Table -->
            <table width='100%' cellpadding='0' cellspacing='0' style='border-radius:10px;overflow:hidden;border:1px solid #eee;'>
              <tr style='background:#fafafa;'>
                <td colspan='2' style='padding:12px 18px;border-bottom:1px solid #eee;'>
                  <p style='margin:0;color:#D81B60;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;'>Application Details</p>
                </td>
              </tr>
              <tr style='background:#fff;'>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#888;font-size:14px;width:42%;'>&#x1F4DE; Mobile Number</td>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:14px;font-weight:600;'>{$phone}</td>
              </tr>
              <tr style='background:#fafafa;'>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#888;font-size:14px;'>&#x1F3D9;&#xFE0F; City</td>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:14px;font-weight:600;'>{$city}</td>
              </tr>
              <tr style='background:#fff;'>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#888;font-size:14px;'>&#x1F4CD; Area / Location</td>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:14px;font-weight:600;'>{$area}</td>
              </tr>
              <tr style='background:#fafafa;'>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#888;font-size:14px;'>&#x1F382; Age</td>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:14px;font-weight:600;'>{$age} years</td>
              </tr>
              <tr style='background:#fff;'>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#888;font-size:14px;'>&#x1F3ED; Preferred Store</td>
                <td style='padding:13px 18px;border-bottom:1px solid #f0f0f0;color:#1a1a1a;font-size:14px;font-weight:600;'>{$preferredStore}</td>
              </tr>
              <tr style='background:#fafafa;'>
                <td style='padding:13px 18px;color:#888;font-size:14px;'>&#x2B50; Experience</td>
                <td style='padding:13px 18px;color:#1a1a1a;font-size:14px;font-weight:600;'>{$experience}</td>
              </tr>
            </table>

            <!-- Action Note -->
            <div style='background:#fff8e1;border-left:4px solid #ffc107;border-radius:6px;padding:14px 18px;margin-top:28px;'>
              <p style='margin:0;color:#7c6000;font-size:14px;'>&#x26A1; <strong>Action Required:</strong> Please contact this applicant within <strong>24 hours</strong> to schedule their warehouse placement process.</p>
            </div>

          </td>
        </tr>

        <!-- ===== FOOTER ===== -->
        <tr>
          <td style='background:#1a1a1a;border-radius:0 0 16px 16px;padding:28px 40px;text-align:center;'>
            <img src='https://dropyhub.com/logo.png' alt='DropyHub' style='height:32px;display:block;margin:0 auto 12px auto;opacity:0.7;'/>
            <p style='margin:0 0 6px 0;color:#aaa;font-size:13px;'>&#x1F310; <a href='https://dropyhub.com' style='color:#D81B60;text-decoration:none;'>dropyhub.com</a> &nbsp;|&nbsp; &#x2709;&#xFE0F; delivery@dropyhub.com</p>
            <p style='margin:8px 0 0 0;color:#555;font-size:12px;'>Received on: {$date}</p>
            <p style='margin:6px 0 0 0;color:#444;font-size:11px;'>This is an automated notification from the DropyHub website. Do not reply to this email.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>";

$subject = "&#x1F3ED; New Warehouse Application: {$name} | DropyHub";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: DropyHub Notifications <{$smtpUser}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($toEmail, $subject, $htmlBody, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Application sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send application. Please try again.']);
}
?>
