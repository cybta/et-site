import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './css/InstitutionalCredibility.css';

interface ProjectMarker {
  lat: number;
  lng: number;
  name: string;
  big: boolean;
  specs: [string, string][];
  desc: string;
}

// ════════════════════════════════
// LEBANON MARKERS
// ════════════════════════════════
const lbMarkers: ProjectMarker[] = [
  {
    lat: 33.8886, lng: 35.4955,
    name: 'Burj Hammoud — UNOPS', big: true,
    specs: [['Capacity', '320 kWp'], ['Type', 'On-Grid Rooftop'], ['Client', 'UNOPS']],
    desc: 'One of the largest donor-funded solar projects in Greater Beirut, supporting UN humanitarian operations.',
  },
  {
    lat: 33.8736, lng: 35.5074,
    name: 'Indoor – Outdoor Lighting', big: false,
    specs: [['Capacity', '45 kWp'], ['Type', 'Lighting EPC'], ['Location', 'Beirut']],
    desc: 'Custom solar-integrated LED lighting system across a mixed-use commercial site.',
  },
  {
    lat: 33.8819, lng: 35.4936,
    name: 'Manufacturing Operation', big: false,
    specs: [['Capacity', '195 kWp'], ['Type', 'Industrial Rooftop'], ['Grid', 'Hybrid']],
    desc: 'Large industrial rooftop installation near Beirut Port with battery backup for critical process lines.',
  },
  {
    lat: 33.8938, lng: 35.5042,
    name: 'V-Tower', big: false,
    specs: [['Capacity', '60 kWp'], ['Type', 'High-rise'], ['Grid', 'On-Grid']],
    desc: 'Solar integration on a high-rise residential tower — roof and facade mounting across occupied floors.',
  },
  {
    lat: 33.9833, lng: 35.6333,
    name: 'Spinneys Jounieh', big: false,
    specs: [['Capacity', '160 kWp'], ['Type', 'Retail Rooftop'], ['Grid', 'On-Grid']],
    desc: 'On-grid rooftop installation integrated with building management for real-time monitoring.',
  },
  {
    lat: 34.1236, lng: 35.6514,
    name: 'Spinneys Jbeil', big: false,
    specs: [['Capacity', '145 kWp'], ['Type', 'Retail Rooftop'], ['Grid', 'On-Grid']],
    desc: 'Second Spinneys location EPC — same technical standard as Jounieh with centralised monitoring.',
  },
  {
    lat: 33.8547, lng: 35.9019,
    name: 'Alfa Interfood', big: true,
    specs: [['Capacity', '102.7 kWp'], ['Mounting', 'Aluminum Rail'], ['Grid', 'On-Grid']],
    desc: 'Industrial rooftop on a food-processing facility in the Bekaa Valley with REFUsol inverters.',
  },
  {
    lat: 33.8400, lng: 35.9100,
    name: 'Tanmiya', big: false,
    specs: [['Capacity', '130 kWp'], ['Type', 'Agricultural'], ['Grid', 'On-Grid']],
    desc: 'Ground-mounted array powering irrigation pumps and cold chain for agricultural development.',
  },
  {
    lat: 33.7500, lng: 35.8900,
    name: 'Shahar El Gharbe', big: false,
    specs: [['Capacity', '66 kWp'], ['Type', 'Hybrid System'], ['Grid', 'Off-Grid Capable']],
    desc: 'Solar, battery, and diesel backup hybrid providing 24/7 reliable power for farming operations.',
  },
  {
    lat: 33.9000, lng: 35.9200,
    name: 'Mushroom Factory', big: false,
    specs: [['Capacity', '74 kWp'], ['Type', 'Agricultural'], ['Grid', 'On-Grid']],
    desc: 'Solar for controlled-environment mushroom cultivation with consistent high energy demands.',
  },
  {
    lat: 34.4333, lng: 35.8333,
    name: 'Tripoli Hospital', big: true,
    specs: [['Capacity', '120 kWp'], ['Type', 'Healthcare Hybrid'], ['Grid', 'Hybrid']],
    desc: 'Multi-string solar and storage hybrid across multiple roof sections at Tripoli\'s main hospital.',
  },
  {
    lat: 34.4200, lng: 35.8500,
    name: 'Sir El Dunniyeh', big: false,
    specs: [['Capacity', '36 kWp'], ['Type', 'Rural Off-Grid'], ['Grid', 'Off-Grid']],
    desc: 'Off-grid solar providing electricity to a rural community with no viable grid connection.',
  },
  {
    lat: 34.2500, lng: 35.6500,
    name: 'Noor Anfeh', big: false,
    specs: [['Capacity', '55 kWp'], ['Type', 'Agricultural Hybrid'], ['Grid', 'Hybrid']],
    desc: 'Solar and battery for an agricultural facility — irrigation supply with cold storage backup.',
  },
  {
    lat: 34.2522, lng: 36.5667,
    name: 'Bechtayel', big: false,
    specs: [['Capacity', '78 kWp'], ['Type', 'Agricultural'], ['Grid', 'On-Grid']],
    desc: 'Ground-mounted array serving an agricultural operation in North Lebanon.',
  },
  {
    lat: 34.0000, lng: 35.6500,
    name: 'SKAFF', big: true,
    specs: [['Capacity', '180 kWp'], ['Type', 'Retail Multi-building'], ['Grid', 'On-Grid']],
    desc: 'Coordinated rooftop installation across the SKAFF retail portfolio with minimal operational disruption.',
  },
  {
    lat: 34.0053, lng: 35.6281,
    name: 'Dora Flour Mills (DFM)', big: true,
    specs: [['Capacity', '310 kWp (expanded)'], ['Type', 'Industrial'], ['Grid', 'On-Grid']],
    desc: 'Major industrial rooftop installation — expanded twice, now incorporating VFD motor efficiency integration.',
  },
  {
    lat: 34.3672, lng: 36.2021,
    name: 'Rachaya', big: false,
    specs: [['Capacity', '42 kWp'], ['Type', 'Community Hybrid'], ['Grid', 'Off-Grid Capable']],
    desc: 'Hybrid solar and storage for a community facility in a region with variable grid availability.',
  },
  {
    lat: 34.0156, lng: 35.6389,
    name: 'Khoury General Hospital', big: true,
    specs: [['Capacity', '110 kWp'], ['Type', 'Healthcare Hybrid'], ['Battery Autonomy', '72 hours']],
    desc: 'Medical-grade solar and storage hybrid with UPS integration for critical hospital loads.',
  },
  {
    lat: 34.2453, lng: 35.6558,
    name: 'Bsharre Hospital', big: false,
    specs: [['Capacity', '70 kWp'], ['Type', 'Healthcare Hybrid'], ['Note', 'High-altitude design']],
    desc: 'High-altitude installation engineered for heavy snow load with elevated tilt angle for winter performance.',
  },
  {
    lat: 34.5803, lng: 36.1733,
    name: 'Lebanese Armed Forces', big: true,
    specs: [['Type', 'Multi-site Hybrid'], ['Grid', 'Off-Grid'], ['Client', 'LAF (Institutional)']],
    desc: 'Multi-site solar and storage for strategic LAF locations across Lebanon — off-grid hybrid systems.',
  },
];

// ════════════════════════════════
// INTERNATIONAL MARKERS
// ════════════════════════════════
const intlMarkers: ProjectMarker[] = [
  {
    lat: -13.1339, lng: 27.8493,
    name: 'Zambia — Rural Electrification', big: true,
    specs: [['Capacity', '220 kWp'], ['Type', 'Off-Grid Micro-grid'], ['Grid', 'Off-Grid']],
    desc: 'Solar and battery micro-grid delivering first-ever electricity to rural villages, a health post, and a school.',
  },
  {
    lat: 6.5244, lng: 3.3792,
    name: 'Nigeria — Commercial Complex', big: false,
    specs: [['Capacity', '480 kWp'], ['Type', 'C&I On-Grid'], ['Location', 'Lagos']],
    desc: 'Large rooftop installation designed around Lagos\'s unreliable grid with seamless diesel switchover.',
  },
  {
    lat: -1.9441, lng: 30.0619,
    name: 'Rwanda — Health Centre', big: false,
    specs: [['Capacity', '75 kWp'], ['Type', 'Healthcare Hybrid'], ['Battery', '48 hrs autonomy']],
    desc: 'Donor-funded solar and storage for a rural health centre — medical-grade reliability in remote setting.',
  },
  {
    lat: 3.8480, lng: 11.5021,
    name: 'Cameroon — Agricultural Site', big: false,
    specs: [['Capacity', '160 kWp'], ['Type', 'Agricultural Hybrid'], ['Grid', 'Hybrid']],
    desc: 'Hybrid ground-mounted system powering refrigeration, packaging, and lighting on a processing facility.',
  },
  {
    lat: 5.3599, lng: -4.0082,
    name: 'Ivory Coast — Industrial Plant', big: true,
    specs: [['Capacity', '340 kWp'], ['Type', 'Industrial On-Grid'], ['Grid', 'On-Grid']],
    desc: 'One of Earth Technologies\' largest single-site deployments — industrial-scale rooftop in West Africa.',
  },
  {
    lat: 12.3714, lng: -1.5197,
    name: 'Burkina Faso — School Campus', big: false,
    specs: [['Capacity', '55 kWp'], ['Type', 'Education Off-Grid'], ['Grid', 'Off-Grid']],
    desc: 'NGO-funded off-grid solar powering classrooms, labs, and boarding facilities for a school campus.',
  },
  {
    lat: 12.6392, lng: -8.0029,
    name: 'Mali — Off-Grid Community', big: false,
    specs: [['Capacity', '95 kWp'], ['Type', 'Community Micro-grid'], ['Grid', 'Off-Grid']],
    desc: 'Solar plus storage micro-grid managed by a local energy committee trained by Earth Technologies.',
  },
  {
    lat: 24.6877, lng: 46.7219,
    name: 'Saudi Arabia — Commercial', big: false,
    specs: [['Capacity', '285 kWp'], ['Type', 'C&I On-Grid'], ['Modules', 'Bifacial']],
    desc: 'Rooftop installation engineered for high ambient temperatures with bifacial modules and ventilated racking.',
  },
  {
    lat: 33.3152, lng: 44.3661,
    name: 'Iraq — Government Facility', big: false,
    specs: [['Capacity', '190 kWp'], ['Type', 'Institutional Hybrid'], ['Monitoring', 'SCADA remote']],
    desc: 'Solar and storage hybrid with active cooling for inverter rooms and full SCADA remote monitoring.',
  },
];

function makeIcon(color: string, size = 14): L.DivIcon {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:${size}px; height:${size}px;
      background:${color};
      border:2px solid rgba(255,255,255,0.85);
      border-radius:50%;
      box-shadow:0 0 0 3px ${color === '#C79A43' ? 'rgba(199,154,67,0.35)' : 'rgba(224,189,114,0.35)'}, 0 2px 10px rgba(0,0,0,0.5);
      cursor:pointer;
      transition:transform 0.2s;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2 + 6)],
  });
}

function popup(region: string, name: string, specs: [string, string][], desc: string): string {
  const specsHTML = specs.map(([k, v]) => `
    <div class="pop-spec">
      <span class="sk">${k}</span>
      <span class="sv">${v}</span>
    </div>`).join('');
  return `
    <div class="pop-inner">
      <div class="pop-region">${region}</div>
      <div class="pop-name">${name}</div>
      <div class="pop-specs">${specsHTML}</div>
      <div class="pop-desc">${desc}</div>
    </div>`;
}

export default function InstitutionalCredibility() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [15, 25],
      zoom: 3,
      zoomControl: true,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    // Dark/muted tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_matter/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    const lbIcon = makeIcon('#C79A43', 14);
    const lbBig = makeIcon('#C79A43', 18);
    const intIcon = makeIcon('#E0BD72', 14);
    const intBig = makeIcon('#E0BD72', 18);

    const popOpts: L.PopupOptions = {
      maxWidth: 300,
      className: '',
    };

    lbMarkers.forEach((p) => {
      L.marker([p.lat, p.lng], { icon: p.big ? lbBig : lbIcon })
        .addTo(map)
        .bindPopup(popup('Lebanon', p.name, p.specs, p.desc), popOpts);
    });

    intlMarkers.forEach((p) => {
      L.marker([p.lat, p.lng], { icon: p.big ? intBig : intIcon })
        .addTo(map)
        .bindPopup(popup('International', p.name, p.specs, p.desc), popOpts);
    });

    // Enable scroll zoom only when map is clicked/focused
    map.on('click', () => map.scrollWheelZoom.enable());
    map.on('mouseout', () => map.scrollWheelZoom.disable());

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
           PAGE HERO
      ══════════════════════════════════════════ */}
      <div className="page-hero">
        <div className="wrap inner">
          <div className="tag">Earth Technologies</div>
          <h1>Institutional<br />Credibility</h1>
          <p className="sub">Trusted by United Nations agencies, governments, hospitals, and industry leaders across Lebanon, Africa, and the Middle East — a track record built project by project.</p>
          <div className="hero-foot">
            <div className="ticker-item"><strong>5.0 ★</strong>Google rating</div>
            <div className="ticker-item"><strong>100+</strong>Projects delivered</div>
            <div className="ticker-item"><strong>10+</strong>Countries served</div>
            <div className="ticker-item"><strong>UN Agencies</strong>UNDP · UNHCR · UNIFIL · UNOPS</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           SECTION 1 — GOOGLE REVIEWS
      ══════════════════════════════════════════ */}
      <div className="reviews-section">
        <div className="wrap">

          <div className="reviews-header">
            <div className="eyebrow gold">01 — Client Reviews</div>
            <h2>What our clients say</h2>
            <p>Independent reviews from clients across our project portfolio — reflecting our commitment to quality engineering, on-time delivery, and long-term support.</p>
          </div>

          {/* Rating summary */}
          <div className="rating-summary">
            <div className="rating-big">
              <div className="score">5.0</div>
              <div className="stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span>
                <span className="star">★</span><span className="star">★</span>
              </div>
              <div className="count">Google Reviews</div>
            </div>

            <div className="rating-bars">
              <div className="bar-row">
                <span className="bar-label">5★</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '100%' }}></div></div>
                <span className="bar-count">—</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">4★</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                <span className="bar-count">—</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">3★</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                <span className="bar-count">—</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">2★</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                <span className="bar-count">—</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">1★</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                <span className="bar-count">—</span>
              </div>
            </div>

            <div className="rating-badge">
              <div className="g-logo"><span>G</span>oogle</div>
              <p className="note">
                Reviews collected via<br />Google Business Profile.<br />
                <strong>Scan QR or click below</strong><br />to leave a review.
              </p>
              <a href="https://g.page/r/earth-technologies/review" target="_blank" rel="noreferrer" className="review-link">
                Leave a Review →
              </a>
            </div>
          </div>

          {/* Review cards */}
          <div className="reviews-grid">

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">AK</div>
                  <div>
                    <div className="reviewer-name">Ahmad K.</div>
                    <div className="reviewer-org">Facilities Manager · UNOPS Lebanon</div>
                  </div>
                </div>
                <div className="review-date">2024</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">Earth Technologies delivered our solar installation on time and within budget. The engineering team was professional throughout, and the post-commissioning support has been excellent. We've seen significant energy savings from day one.</p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">MN</div>
                  <div>
                    <div className="reviewer-name">Marie N.</div>
                    <div className="reviewer-org">Operations Director · Spinneys Lebanon</div>
                  </div>
                </div>
                <div className="review-date">2024</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">We've worked with Earth Technologies across multiple sites and they consistently deliver to a high standard. Their attention to detail during design and their responsiveness after handover make them our go-to EPC partner.</p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">JB</div>
                  <div>
                    <div className="reviewer-name">Jean-Pierre B.</div>
                    <div className="reviewer-org">CEO · Alfa Interfood</div>
                  </div>
                </div>
                <div className="review-date">2023</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">The Bekaa Valley installation was technically complex — a large industrial rooftop with challenging access. The team handled it with precision and delivered a system that has performed flawlessly since commissioning.</p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">RS</div>
                  <div>
                    <div className="reviewer-name">Rania S.</div>
                    <div className="reviewer-org">Hospital Director · Khoury General</div>
                  </div>
                </div>
                <div className="review-date">2024</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">For a hospital environment, reliability is non-negotiable. Earth Technologies understood that from day one — their hybrid solar and battery system has given us genuine energy independence and peace of mind during extended grid outages.</p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">KM</div>
                  <div>
                    <div className="reviewer-name">Kofi M.</div>
                    <div className="reviewer-org">Project Officer · UNDP West Africa</div>
                  </div>
                </div>
                <div className="review-date">2023</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">Deploying in remote West African locations comes with real logistical challenges. Earth Technologies navigated them expertly — arriving on schedule, training local staff, and leaving behind a system the community can maintain themselves.</p>
            </div>

            <div className="review-card">
              <div className="review-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">TA</div>
                  <div>
                    <div className="reviewer-name">Tarek A.</div>
                    <div className="reviewer-org">Director · Dora Flour Mills</div>
                  </div>
                </div>
                <div className="review-date">2024</div>
              </div>
              <div className="review-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="review-text">We've expanded our solar installation with Earth Technologies twice now. Their team understands our industrial energy profile deeply and each upgrade has delivered measurable improvements in our operating costs and grid independence.</p>
            </div>

          </div>{/* /reviews-grid */}

          <div className="placeholder-notice">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#C79A43" strokeWidth="1.3" />
              <line x1="9" y1="7" x2="9" y2="12" stroke="#C79A43" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="9" cy="5.5" r="0.8" fill="#C79A43" />
            </svg>
            <p>These are <strong>placeholder reviews</strong> representing the style and layout. Replace with real Google review content when available — the star ratings, reviewer names, organisations, and text are all editable in the HTML source.</p>
          </div>

        </div>
      </div>

      <div className="sec-divider"></div>

      {/* ══════════════════════════════════════════
           SECTION 2 — INTERACTIVE PROJECT MAP
      ══════════════════════════════════════════ */}
      <div className="map-section">
        <div className="wrap map-header">
          <div className="eyebrow light">02 — Project Locations</div>
          <h2>Where we operate</h2>
          <p>Click any marker to explore project details — from rooftop installations in Beirut to off-grid micro-grids in West Africa.</p>
        </div>

        <div id="project-map" ref={mapContainerRef}></div>

        <div className="map-legend">
          <div className="wrap legend-inner">
            <div className="legend-item">
              <div className="legend-dot gold"></div>
              Lebanon projects
            </div>
            <div className="legend-item">
              <div className="legend-dot light"></div>
              International projects
            </div>
            <div style={{ marginLeft: 'auto', fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
              Map data © OpenStreetMap contributors
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
