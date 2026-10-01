import { useState } from 'react';
import './css/Contact.css';
import ContactMap from '../components/ContactMap';

const CONTACT_COUNTRIES = [
  'Lebanon',
  'Saudi Arabia',
  'Iraq',
  'Ivory Coast',
  'Nigeria',
  'Rwanda',
  'Cameroon',
  'Zambia',
  'Burkina Faso',
  'Mali',
];

export default function Contact() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <div className="contact-hero">
        <div className="wrap inner">
          <div className="tag">Earth Technologies</div>
          <h1>Contact Us</h1>
          <p className="sub">Earth Technologies delivers energy infrastructure projects across a growing footprint in Africa and the Middle East. Reach out to discuss your next project.</p>
        </div>
      </div>

      <div className="contact-section">
        <div className="wrap contact-grid">
          <div className="contact-map-wrap">
            <ContactMap hoveredCountry={hovered} />
          </div>
          <div className="contact-info">
            <div className="tag">Where We Work</div>
            <ul className="contact-countries">
              {CONTACT_COUNTRIES.map((country) => (
                <li
                  key={country}
                  onMouseEnter={() => setHovered(country)}
                  onMouseLeave={() => setHovered(null)}
                  className={hovered === country ? 'active' : ''}
                >
                  {country}
                </li>
              ))}
            </ul>
            <a href="mailto:info@earthtechnologies.com" className="btn btn-gold">Get in Touch →</a>
          </div>
        </div>
      </div>
    </>
  );
}
