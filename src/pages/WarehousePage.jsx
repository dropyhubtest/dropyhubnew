import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './WarehousePage.css';
import '../components/Apply.css';

const WarehousePage = () => {
    const [form, setForm] = useState({
        name: '', phone: '', city: '', area: '', age: '',
        preferredStore: [], experience: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleCheckboxArrayChange = (e, fieldName) => {
        const { value, checked } = e.target;
        setForm(prev => {
            const currentArr = prev[fieldName];
            if (checked) {
                return { ...prev, [fieldName]: [...currentArr, value] };
            } else {
                return { ...prev, [fieldName]: currentArr.filter(item => item !== value) };
            }
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        
        // Validate preferred store
        if (form.preferredStore.length === 0) {
            setSubmitError('Please select at least one preferred warehouse/store.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/warehouse-apply.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setForm({
                    name: '', phone: '', city: '', area: '', age: '',
                    preferredStore: [], experience: ''
                });
            } else {
                setSubmitError(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setSubmitError('Failed to connect to the server. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const STORE_OPTIONS = ['Amazon Warehouse', 'Blinkit Stores', 'Zepto Stores', 'Swiggy Instamart'];

    const facilities = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: 'Workforce Deployment',
            desc: "Strategic manpower supply for major logistics giants. We bridge the gap between skilled labor and global fulfillment centers like Flipkart and Amazon."
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Real-time Operations',
            desc: "Our employees are trained to handle complex warehouse management systems, ensuring seamless inventory flow and accurate dispatching."
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Safe Standards',
            desc: "Safety is our priority. Every employee we supply is vetted and adheres to the highest safety standards required by tier-1 logistics hubs."
        }
    ];

    return (
        <div className="warehouse-page">
            <PageHero
                tag="Logistic Hubs"
                title="Supplying Talent to"
                highlight="Logistics Giants."
                subtitle="We empower the backend operations of India's biggest e-commerce platforms with elite workforce and reliable infrastructure."
                breadcrumb={['Home', 'Warehouse']}
                imageSrc="/warehouse_hero_new.webp"
            />

            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
                        <div className="section-tag">Tier-1 Partnerships</div>
                        <h2 className="section-title">Fueling the Engines of <span className="gradient-text">E-Commerce</span></h2>
                        <div className="divider-glow" style={{ margin: '16px auto 0' }} />
                        <p className="section-sub" style={{ fontSize: '1.2rem' }}>
                            DropyHub is a trusted partner for leaders like <strong>Flipkart</strong> and <strong>Amazon</strong>.
                            We don’t just supply labor; we build the specialized workforce that keeps the world’s largest supply chains moving efficiently.
                        </p>
                    </div>

                    <div className="warehouse-grid">
                        {facilities.map((item, i) => (
                            <div key={i} className="warehouse-card glass-card">
                                <div className="warehouse-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Transport Section */}
            <section className="section section-alt transport-section">
                <div className="container">
                    <div className="transport-flex">
                        <div className="transport-image">
                            <img src="/bus_transport.webp" alt="Employee Transportation Bus" />
                            <div className="glow-orb" style={{ top: '50%', right: '0', transform: 'translateX(50%)' }} />
                        </div>
                        <div className="transport-content">
                            <div className="section-tag">Zero Hassle Commute</div>
                            <h2 className="section-title" style={{ textAlign: 'left' }}>
                                Dedicated <span className="gradient-text">Bus Transportation</span>
                            </h2>
                            <p className="section-sub" style={{ textAlign: 'left', marginLeft: '0', maxWidth: '100%', fontSize: '1.15rem' }}>
                                We believe that a productive employee is one who reaches work refreshed and safe.
                                For our workforce stationed at Amazon and Flipkart fulfillment centers, we provide
                                <strong> premium shuttle bus services</strong>.
                            </p>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                marginTop: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                                {[
                                    { title: 'Safe Commute', desc: 'Secure, clean, and reliable shuttle services for all shifts.' },
                                    { title: 'Punctual Dispatch', desc: 'Strict timing for pickup and drop to ensure zero operational delays.' },
                                    { title: 'GPS Tracking', desc: 'Real-time vehicle tracking for employee safety and transparency.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ color: 'var(--accent-orange)', marginTop: '4px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px', fontSize: '1.1rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Warehouse Application Form Section */}
            <section className="section" id="warehouse-apply" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="apply__inner" style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <div className="apply__info" style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '100%' }}>
                            <div className="section-tag" style={{ justifyContent: 'center' }}>Join Our Workforce</div>
                            <h2 className="section-title">Warehouse & Stores <br /><span className="gradient-text">Application Form</span></h2>
                            <div className="divider-glow" style={{ margin: '16px auto' }} />
                            <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
                                Register now to get placed in top warehouses and dark stores. Start your logistics career with zero hassle.
                            </p>
                        </div>
                        
                        <div className="apply__form-wrap glass-card" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                            {submitted ? (
                                <div className="apply__success">
                                    <div className="apply__success-icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <h3>Application Received!</h3>
                                    <p>Thank you, <strong>{form.name}</strong>. Our team will contact you soon regarding warehouse placements and next steps.</p>
                                    <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another Application</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="apply__form apply__form--long">
                                    <div className="apply__row">
                                        <div className="apply__field">
                                            <label>Full Name *</label>
                                            <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                        </div>
                                        <div className="apply__field">
                                            <label>Mobile Number *</label>
                                            <input name="phone" type="number" placeholder="Enter mobile number" value={form.phone} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    
                                    <div className="apply__row">
                                        <div className="apply__field">
                                            <label>City *</label>
                                            <input name="city" type="text" placeholder="E.g., Hyderabad" value={form.city} onChange={handleChange} required />
                                        </div>
                                        <div className="apply__field">
                                            <label>Area / Location *</label>
                                            <input name="area" type="text" placeholder="E.g., Madhapur" value={form.area} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="apply__field">
                                        <label>Age *</label>
                                        <input name="age" type="number" placeholder="Enter your age" value={form.age} onChange={handleChange} required />
                                    </div>

                                    <div className="apply__field">
                                        <label>Preferred Warehouse/Store *</label>
                                        <div className="apply__checkbox-grid">
                                            {STORE_OPTIONS.map(store => (
                                                <label key={store} className="apply__check-label">
                                                    <input type="checkbox" value={store} onChange={(e) => handleCheckboxArrayChange(e, 'preferredStore')} />
                                                    <span>{store}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="apply__field">
                                        <label>Previous Experience in Warehouse/Store *</label>
                                        <select name="experience" value={form.experience} onChange={handleChange} required>
                                            <option value="">Select Experience...</option>
                                            <option value="Fresher">Fresher</option>
                                            <option value="0–6 Months">0–6 Months</option>
                                            <option value="6–12 Months">6–12 Months</option>
                                            <option value="1+ Year">1+ Year</option>
                                        </select>
                                    </div>

                                    {submitError && (
                                        <div className="apply__error-message" style={{ color: '#D81B60', fontSize: '13.5px', marginTop: '10px', textAlign: 'center', background: 'rgba(216, 27, 96, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                            {submitError}
                                        </div>
                                    )}

                                    <button type="submit" className="btn-primary apply__submit" disabled={isSubmitting} style={{ marginTop: '20px' }}>
                                        {isSubmitting ? 'Submitting Application...' : 'Apply Now'}
                                        {!isSubmitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Join Our <span className="gradient-text">Hub Network</span></h2>
                    <p className="section-sub" style={{ margin: '16px auto 32px' }}>
                        Ready to work with the biggest names in logistics? Start your journey with DropyHub today.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <a href="#warehouse-apply" className="btn-primary">Apply as Executive</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WarehousePage;
