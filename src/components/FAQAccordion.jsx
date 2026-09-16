import React, { useState, useRef, useEffect } from 'react';
import './FAQAccordion.css';

const faqs = [
  {
    q: 'Is registration really free?',
    a: 'Yes. Always. There is no registration fee, no deposit, and no documentation charge — ever. DropyHub was founded on the principle that cost should never be a barrier for a delivery executive wanting to build a better life. We make 100% of our income from our platform partnerships, not from you.'
  },
  {
    q: 'How quickly can I start working?',
    a: 'After registration, our onboarding team coordinates with you within 24–48 hours. This includes uniform fitting, equipment handover, ID card issuance, and platform profile setup. Most partners are actively delivering within 72 hours of signing up.'
  },
  {
    q: 'Do I need my own vehicle?',
    a: 'No. DropyHub offers affordable daily and monthly vehicle rental programmes for 2-wheelers (bikes/scooters) and 3-wheelers (auto-rickshaws). Every rented vehicle comes with full maintenance, insurance, and roadside assistance included. You just show up and ride.'
  },
  {
    q: 'When are bonuses paid and how much can I earn?',
    a: 'Weekly performance bonuses are credited directly to your registered bank account every Monday. On average, our partners earn between ₹18,000 and ₹32,000 per month (base salary + weekly bonuses + monthly incentives). Top performers have earned upwards of ₹45,000 in a single month during peak seasons like Diwali and New Year.'
  },
  {
    q: 'Can I work with multiple delivery companies at once?',
    a: 'Yes, and that is one of DropyHub\'s biggest advantages. We connect you to multiple platforms simultaneously — Swiggy, Zomato, Blinkit, Amazon, BookMyShow, Zepto, Flipkart, and more. You are never dependent on just one company, which means more orders, higher earnings, and greater stability.'
  },
  {
    q: 'How do I apply for a financial loan?',
    a: 'Once registered, you can apply for a financial loan of up to ₹10 Lakhs through the DropyHub partner portal. We have tied up with licensed NBFCs and financial institutions to provide quick-disbursement loans for personal needs, vehicle purchases, medical emergencies, or business expansion. Loan approval typically takes 3–5 working days.'
  },
  {
    q: 'What cities does DropyHub currently operate in?',
    a: 'DropyHub currently operates across 12+ cities with strong presence in Hyderabad, Secunderabad, Bangalore, Chennai, Vijayawada, Visakhapatnam, Nellore, Kavali, Ongole, Guntur, Tirupati, and surrounding areas in Nellore, Kavali, and Prakasam districts. We are actively expanding to more cities every quarter.'
  },
  {
    q: 'What is the IT Training Programme?',
    a: 'DropyHub\'s IT Training Programme is a free, certified skill development initiative for active delivery partners. We offer courses in data entry, basic software skills, customer support operations, and digital tools. Top performers get access to advanced tracks in web development and IT operations — a genuine pathway from delivery executive to tech professional.'
  },
  {
    q: 'Is there insurance coverage?',
    a: 'Yes. Every active DropyHub partner is covered under our comprehensive accidental insurance policy from day one of joining — at zero additional cost. Coverage includes medical expenses, temporary disability benefits, and vehicle damage support. We also offer 24/7 SOS emergency assistance through our partner app.'
  },
  {
    q: 'What is the SRH partnership and what does it mean for me?',
    a: 'DropyHub is the Official Partner of Sunrisers Hyderabad (SRH) for TATA IPL 2026. This is a landmark recognition of DropyHub\'s strength and credibility as a platform. For you as a partner, it means exclusive match ticket rewards for top performers, co-branded merchandise, special SRH Edition Monthly Awards, and national-level visibility that reflects our platform\'s professional stature.'
  },
  {
    q: 'How does DropyHub support my career growth long-term?',
    a: 'DropyHub is not just a delivery aggregator — we are a career platform. Through our IT Training Programme, monthly recognition awards, financial tools, and leadership promotion tracks, we actively invest in helping partners grow beyond delivery into supervisory, coordinator, and even tech roles within the DropyHub ecosystem.'
  },
  {
    q: 'Can I refer friends and earn extra?',
    a: 'Yes! Our Refer & Earn programme lets you invite friends and fellow delivery executives to join DropyHub. For every successful referral who completes their first month, you earn a cash bonus credited directly to your account. There is no limit on the number of referrals.'
  },
];

const FAQItem = ({ id, q, a, open, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (open) {
      const height = el.scrollHeight;
      el.style.height = height + 'px';
    } else {
      el.style.height = '0px';
    }
  }, [open]);

  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        id={`faq-${id}-btn`}
        className="faq-question"
        aria-expanded={open}
        aria-controls={`faq-${id}-panel`}
        onClick={() => onToggle(id)}
      >
        <span className="faq-icon" aria-hidden="true">❓</span>
        <span className="faq-q-text">{q}</span>
        <span className="faq-chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      <div
        id={`faq-${id}-panel`}
        role="region"
        aria-labelledby={`faq-${id}-btn`}
        className="faq-answer"
        ref={contentRef}
      >
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
};

const FAQAccordion = ({ single = true }) => {
  const [openIndex, setOpenIndex] = useState(single ? 0 : null);

  const toggle = (i) => {
    if (single) setOpenIndex(prev => (prev === i ? null : i));
    else setOpenIndex(prev => {
      if (!Array.isArray(prev)) prev = [];
      if (prev.includes(i)) return prev.filter(x => x !== i);
      return [...prev, i];
    });
  };

  const headerRefs = useRef([]);
  useEffect(() => {
    headerRefs.current = headerRefs.current.slice(0, faqs.length);
  }, []);

  const onKeyDown = (e, idx) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (idx + 1) % faqs.length;
      headerRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (idx - 1 + faqs.length) % faqs.length;
      headerRefs.current[prev]?.focus();
    }
  };

  return (
    <section className="faq-accordion section">
      <div className="container">
        <div className="faq-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title"><span className="gradient-text">Common</span> Questions</h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>Everything you need to know about DropyHub — tap any question to expand.</p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className="faq-wrap">
              <button
                ref={el => headerRefs.current[i] = el}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="sr-only-focus"
                aria-hidden
                style={{ display: 'none' }}
              />
              <FAQItem id={i} q={f.q} a={f.a} open={single ? openIndex === i : (Array.isArray(openIndex) && openIndex.includes(i))} onToggle={toggle} />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FAQAccordion;
