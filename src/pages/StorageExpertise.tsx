import './css/StorageExpertise.css';

export default function StorageExpertise() {
  return (
    <>
      {/* ══════════════════════════════════════════
           01 — HERO
      ══════════════════════════════════════════ */}
      <div className="hero">
        <div className="hero-inner wrap hero-content">
          <div className="hero-tag">Earth Technologies</div>
          <h1>Storage<br />Expertise</h1>
          <p className="hero-sub">Advanced battery energy storage systems engineered for resilience — from containerised BESS units to large-scale grid storage across the Middle East and Africa.</p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-gold">Explore Solutions →</a>
            <a href="#" className="btn btn-outline-light">Contact Our Team</a>
          </div>
        </div>

        <div className="hero-ticker">
          <div className="wrap">
            <div className="ticker-item"><b>BESS</b>Battery Energy Storage</div>
            <div className="ticker-item"><b>Grid-Scale</b>Utility &amp; C&amp;I</div>
            <div className="ticker-item"><b>Hybrid</b>Solar + Storage</div>
            <div className="ticker-item"><b>MEA</b>Regional deployment</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           02 — WHAT IS BESS / INTRO SPLIT
           White · Text left · Photo right
      ══════════════════════════════════════════ */}
      <div className="intro">
        <div className="wrap">
          <div className="two-col">

            {/* Text */}
            <div>
              <div className="eyebrow gold">01 — What We Deliver</div>
              <h2 className="sec-title">Industrial-grade storage for demanding environments</h2>
              <p className="body">Earth Technologies designs, supplies, and integrates battery energy storage systems engineered for the harsh conditions of the Middle East and Africa. From containerised lithium-ion BESS units to large utility-scale deployments, our storage solutions are built to perform reliably where it matters most.</p>
              <p className="body" style={{ marginTop: '15px' }}>Our in-house engineering team handles every stage — from load analysis and system sizing through to grid connection, commissioning, and ongoing remote monitoring — ensuring maximum uptime and return on investment.</p>

              <div className="spec-table">
                <div className="spec-row"><span className="spec-key">Technology</span><span className="spec-val">Lithium-Ion (LFP / NMC)</span></div>
                <div className="spec-row"><span className="spec-key">Form Factor</span><span className="spec-val">Containerised / Rack-mounted</span></div>
                <div className="spec-row"><span className="spec-key">Scale</span><span className="spec-val">C&amp;I · Utility · Off-grid</span></div>
                <div className="spec-row"><span className="spec-key">Integration</span><span className="spec-val">Solar · Grid · Diesel hybrid</span></div>
                <div className="spec-row"><span className="spec-key">Monitoring</span><span className="spec-val">Remote SCADA / BMS</span></div>
              </div>
            </div>

            {/* Photo */}
            <div className="photo" style={{ aspectRatio: '4/5', background: 'linear-gradient(155deg,#2e4a5e 0%,#182d3c 55%,#0f1e29 100%)' }}>
              <div className="tex"></div>
              <div className="corner tl"></div><div className="corner br"></div>
              <div className="badge">BESS Unit</div>
              <div className="cap">Containerised battery storage — deployment ready</div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           03 — TECHNOLOGY SECTION
           Sand · Photo left · Text right
      ══════════════════════════════════════════ */}
      <div className="technology">
        <div className="wrap">
          <div className="two-col flip">

            {/* Photo */}
            <div className="photo" style={{ aspectRatio: '4/5', background: 'linear-gradient(155deg,#3a5670 0%,#1d3145 55%,#14222f 100%)' }}>
              <div className="tex"></div>
              <div className="corner tl"></div><div className="corner br"></div>
              {/* spec stamp */}
              <div style={{
                position: 'absolute', top: '20px', right: '20px',
                border: '1px solid rgba(255,255,255,0.28)',
                padding: '13px 17px',
                background: 'rgba(15,27,38,0.5)',
                backdropFilter: 'blur(4px)',
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '10px', lineHeight: '2', letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.85)', minWidth: '160px',
              }}>
                <div style={{ display: 'flex', gap: '18px', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>Capacity</span><span>100 kWh–10 MWh</span></div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.15)', margin: '4px 0' }}></div>
                <div style={{ display: 'flex', gap: '18px', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>Power</span><span>50 kW–5 MW</span></div>
                <div style={{ display: 'flex', gap: '18px', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>DoD</span><span>Up to 95%</span></div>
                <div style={{ display: 'flex', gap: '18px', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>Cycle life</span><span>4,000+ cycles</span></div>
                <div style={{ display: 'flex', gap: '18px', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.4)' }}>Warranty</span><span>10 years</span></div>
              </div>
              <div className="cap">Utility-scale BESS — wind + storage hybrid site</div>
            </div>

            {/* Text */}
            <div>
              <div className="eyebrow gold">02 — Technology</div>
              <h2 className="sec-title">Proven chemistry. Engineered for the region.</h2>
              <p className="body">We deploy lithium iron phosphate (LFP) chemistry as our primary technology — chosen for its thermal stability, long cycle life, and safety performance in high-ambient-temperature environments across the Middle East and Africa.</p>
              <p className="body" style={{ marginTop: '15px' }}>Each system integrates a multi-layered Battery Management System (BMS) and is supervised by a SCADA platform that gives operators real-time visibility of state of charge, cell health, temperature, and grid interactions from anywhere in the world.</p>
              <p className="body" style={{ marginTop: '15px' }}>Our engineering team sizes every system from first principles — analysing load profiles, generation forecasts, and grid conditions to deliver a solution that performs at peak efficiency throughout its operational life.</p>

              <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-outline-dark" style={{ fontSize: '11.5px', padding: '12px 22px' }}>Technical Specs →</a>
                <a href="#" className="btn btn-gold" style={{ fontSize: '11.5px', padding: '12px 22px' }}>Request a Quote →</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           04 — FULL-WIDTH BANNER
      ══════════════════════════════════════════ */}
      <div className="banner">
        <div className="wrap" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="banner-inner">
            <div className="eyebrow light" style={{ marginBottom: '18px' }}>03 — Scale</div>
            <h2>From a single container to a grid-scale installation</h2>
            <p>Earth Technologies has deployed storage infrastructure alongside solar assets across Lebanon, Africa, and the Middle East — every project engineered from scratch by our in-house team to match the exact operational requirements of the site.</p>
            <a href="#" className="btn btn-gold">View Project Portfolio →</a>
          </div>

          <div className="banner-stats">
            <div className="banner-stat">
              <b>10<em>+</em></b>
              <span>Countries deployed</span>
            </div>
            <div className="banner-stat">
              <b>MWh<em>+</em></b>
              <span>Storage installed</span>
            </div>
            <div className="banner-stat">
              <b>24/7</b>
              <span>Remote monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           05 — APPLICATIONS GRID
           Navy · 4-column cards
      ══════════════════════════════════════════ */}
      <div className="applications">
        <div className="wrap">
          <div style={{ marginBottom: 0 }}>
            <div className="eyebrow light">04 — Applications</div>
            <h2 className="sec-title" style={{ color: 'var(--white)', maxWidth: '18ch' }}>Where our storage systems are deployed</h2>
          </div>

          <div className="app-grid">

            <div className="app-card">
              <span className="app-num">01</span>
              <div className="app-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="12" width="24" height="16" rx="1" />
                  <line x1="16" y1="12" x2="16" y2="28" />
                  <line x1="4" y1="20" x2="28" y2="20" />
                  <rect x="10" y="8" width="4" height="4" rx="0.5" />
                  <rect x="18" y="8" width="4" height="4" rx="0.5" />
                  <path d="M31 18l4 2-4 2" />
                </svg>
              </div>
              <div className="app-title">Solar + Storage Hybrid</div>
              <p className="app-text">Paired directly with solar PV to store excess daytime generation and dispatch it during evening peak demand — eliminating curtailment and extending self-consumption.</p>
            </div>

            <div className="app-card">
              <span className="app-num">02</span>
              <div className="app-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="10" width="26" height="20" rx="1" />
                  <line x1="6" y1="18" x2="32" y2="18" />
                  <line x1="16" y1="10" x2="16" y2="30" />
                  <rect x="9" y="6" width="5" height="4" rx="0.5" />
                  <rect x="24" y="6" width="5" height="4" rx="0.5" />
                  <path d="M19 34v4M15 38h8" />
                </svg>
              </div>
              <div className="app-title">C&amp;I Peak Shaving</div>
              <p className="app-text">Commercial and industrial sites use BESS to flatten demand peaks, reduce maximum demand charges, and smooth grid draw — with measurable savings from day one of operation.</p>
            </div>

            <div className="app-card">
              <span className="app-num">03</span>
              <div className="app-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 4 8 16h8v4l-6 2 4 4-6 2 11 6 11-6-6-2 4-4-6-2v-4h8Z" />
                </svg>
              </div>
              <div className="app-title">Off-Grid &amp; Micro Grid</div>
              <p className="app-text">For remote sites beyond grid reach, BESS provides the storage backbone of an autonomous micro-grid — ensuring stable, uninterrupted power independent of utility infrastructure.</p>
            </div>

            <div className="app-card">
              <span className="app-num">04</span>
              <div className="app-icon">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="19" cy="19" r="14" />
                  <path d="M19 8v3M19 27v3M8 19h3M27 19h3" />
                  <path d="M12 12l2 2M24 24l2 2M12 26l2-2M24 14l2-2" />
                  <circle cx="19" cy="19" r="5" />
                </svg>
              </div>
              <div className="app-title">Grid Stabilisation</div>
              <p className="app-text">Utility-scale BESS provides frequency regulation, voltage support, and spinning reserve services — strengthening grid stability and enabling higher penetration of variable renewables.</p>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           06 — BOTTOM CTA STRIP
      ══════════════════════════════════════════ */}
      <div className="cta-strip">
        <div className="wrap cta-inner">
          <div className="cta-text">
            <h2>Ready to explore storage for your project?</h2>
            <p>Our engineering team is available to assess your site, size the right system, and walk you through technology options and financing structures.</p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', minWidth: 0, maxWidth: '100%' }}>
            <a href="#" className="btn btn-gold">Start a Conversation →</a>
            <a href="#" className="btn btn-outline-light">Download Datasheet</a>
          </div>
        </div>
      </div>
    </>
  );
}
