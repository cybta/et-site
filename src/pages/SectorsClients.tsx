import './css/SectorsClients.css';

export default function SectorsClients() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="wrap inner">
          <div className="tag">Earth Technologies</div>
          <h1>Sectors &amp;<br />Clients We Serve</h1>
          <p className="sub">From hospitals and schools to government ministries and agribusinesses — Earth Technologies provides energy infrastructure and EPC services for commercial, industrial, public-sector and institutional clients across Africa and the Middle East.</p>
          <div className="hero-foot">
            <div className="ticker-item"><strong>15 Sectors</strong>Full market coverage</div>
            <div className="ticker-item"><strong>16 Client types</strong>Public &amp; private</div>
            <div className="ticker-item"><strong>10+</strong>Countries Served</div>
            <div className="ticker-item"><strong>EPC</strong>Design to O&amp;M</div>
          </div>
        </div>
      </div>

      {/* SECTION 1 — SECTORS (bg: white) */}
      <div className="section section-white">
        <div className="wrap">
          <div className="section-header">
            <div className="eyebrow">01 — Sectors</div>
            <h2>The sectors we power</h2>
            <p>Earth Technologies brings engineering and project delivery expertise to industries with different energy needs, reliability requirements and operating conditions.</p>
          </div>
        </div>
        <div className="wrap" style={{ padding: '0' }}>
          <div className="icon-grid">

            {/* 01 Hospitals */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="14" width="40" height="38" rx="1.5" />
                  <path d="M20 52V36h16v16" />
                  <line x1="8" y1="26" x2="48" y2="26" />
                  {/* cross */}
                  <line x1="28" y1="18" x2="28" y2="22" />
                  <line x1="26" y1="20" x2="30" y2="20" />
                  {/* windows */}
                  <rect x="13" y="30" width="8" height="7" rx="0.5" />
                  <rect x="35" y="30" width="8" height="7" rx="0.5" />
                  {/* roof cross */}
                  <line x1="24" y1="8" x2="24" y2="14" />
                  <line x1="32" y1="8" x2="32" y2="14" />
                  <line x1="22" y1="11" x2="34" y2="11" />
                </svg>
              </div>
              <div className="icon-label">Hospitals</div>
            </div>

            {/* 02 Hotels */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* building */}
                  <rect x="6" y="18" width="44" height="34" rx="1.5" />
                  <line x1="6" y1="30" x2="50" y2="30" />
                  {/* flag on top */}
                  <line x1="28" y1="8" x2="28" y2="18" />
                  <path d="M28 8 l10 4 -10 4Z" fill="currentColor" opacity="0.25" stroke="none" />
                  {/* windows row 1 */}
                  <rect x="11" y="22" width="7" height="5" rx="0.5" />
                  <rect x="24" y="22" width="7" height="5" rx="0.5" />
                  <rect x="37" y="22" width="7" height="5" rx="0.5" />
                  {/* windows row 2 */}
                  <rect x="11" y="33" width="7" height="5" rx="0.5" />
                  <rect x="37" y="33" width="7" height="5" rx="0.5" />
                  {/* door */}
                  <rect x="22" y="40" width="12" height="12" rx="0.5" />
                  <circle cx="31" cy="46" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="icon-label">Hotels</div>
            </div>

            {/* 03 Municipalities */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* columns */}
                  <rect x="6" y="26" width="44" height="26" rx="1" />
                  <line x1="16" y1="26" x2="16" y2="52" />
                  <line x1="26" y1="26" x2="26" y2="52" />
                  <line x1="36" y1="26" x2="36" y2="52" />
                  <line x1="46" y1="26" x2="46" y2="52" />
                  {/* pediment */}
                  <path d="M4 26 28 12 52 26Z" />
                  {/* dome top */}
                  <path d="M22 12 c0-4 12-4 12 0" strokeWidth="1.3" />
                  <line x1="28" y1="8" x2="28" y2="12" />
                  {/* door */}
                  <rect x="22" y="38" width="12" height="14" rx="0.5" />
                  {/* base */}
                  <line x1="4" y1="52" x2="52" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Municipalities</div>
            </div>

            {/* 04 Real Estate Developers */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* house */}
                  <path d="M10 30 28 14 46 30V52H10V30Z" />
                  <path d="M6 30 28 10 50 30" />
                  {/* door */}
                  <rect x="22" y="38" width="12" height="14" rx="0.5" />
                  {/* windows */}
                  <rect x="13" y="32" width="8" height="7" rx="0.5" />
                  <rect x="35" y="32" width="8" height="7" rx="0.5" />
                  {/* flag/develop marker */}
                  <line x1="28" y1="4" x2="28" y2="10" />
                  <path d="M28 4 l8 3 -8 3Z" fill="currentColor" opacity="0.3" stroke="none" />
                  {/* solar panel on roof */}
                  <rect x="23" y="20" width="10" height="6" rx="0.5" strokeWidth="1.2" />
                  <line x1="28" y1="20" x2="28" y2="26" />
                </svg>
              </div>
              <div className="icon-label">Real Estate Developers</div>
            </div>

            {/* 05 Architects */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* compass/triangle A-frame */}
                  <path d="M28 8 L10 48 L46 48 Z" />
                  <line x1="17" y1="34" x2="39" y2="34" />
                  {/* compass legs */}
                  <line x1="28" y1="8" x2="22" y2="48" />
                  <line x1="28" y1="8" x2="34" y2="48" />
                  {/* drafting circle */}
                  <circle cx="28" cy="8" r="3" />
                  {/* ruler marks */}
                  <line x1="12" y1="48" x2="12" y2="44" strokeWidth="1.2" />
                  <line x1="20" y1="48" x2="20" y2="46" strokeWidth="1.2" />
                  <line x1="28" y1="48" x2="28" y2="44" strokeWidth="1.2" />
                  <line x1="36" y1="48" x2="36" y2="46" strokeWidth="1.2" />
                  <line x1="44" y1="48" x2="44" y2="44" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="icon-label">Architects</div>
            </div>

            {/* 06 Donor Funds */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="28" cy="28" r="22" />
                  <circle cx="28" cy="28" r="16" strokeWidth="1.2" opacity="0.4" />
                  {/* dollar sign */}
                  <line x1="28" y1="14" x2="28" y2="42" />
                  <path d="M34 18c-3-2-12-2-12 5 0 8 14 5 14 13 0 7-9 8-14 5" />
                </svg>
              </div>
              <div className="icon-label">Donor Funds</div>
            </div>

            {/* 07 Schools */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* open book */}
                  <path d="M28 14 C28 14 18 12 8 16 L8 46 C18 42 28 44 28 44 C28 44 38 42 48 46 L48 16 C38 12 28 14 28 14Z" />
                  <line x1="28" y1="14" x2="28" y2="44" />
                  {/* lines on pages */}
                  <line x1="13" y1="22" x2="24" y2="21" strokeWidth="1.2" />
                  <line x1="13" y1="27" x2="24" y2="26" strokeWidth="1.2" />
                  <line x1="13" y1="32" x2="24" y2="31" strokeWidth="1.2" />
                  <line x1="32" y1="21" x2="43" y2="22" strokeWidth="1.2" />
                  <line x1="32" y1="26" x2="43" y2="27" strokeWidth="1.2" />
                  <line x1="32" y1="31" x2="43" y2="32" strokeWidth="1.2" />
                  {/* spine at bottom */}
                  <path d="M22 46 c2 3 10 3 12 0" />
                </svg>
              </div>
              <div className="icon-label">Schools</div>
            </div>

            {/* 08 Factories */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* chimney stacks */}
                  <rect x="10" y="12" width="8" height="22" rx="0.5" />
                  <rect x="22" y="18" width="8" height="16" rx="0.5" />
                  {/* factory body */}
                  <rect x="8" y="34" width="40" height="18" rx="1" />
                  {/* windows */}
                  <rect x="12" y="38" width="7" height="6" rx="0.5" />
                  <rect x="24" y="38" width="7" height="6" rx="0.5" />
                  <rect x="36" y="38" width="7" height="6" rx="0.5" />
                  {/* smoke */}
                  <path d="M14 10 c0 0 1-3 0-5" opacity="0.5" strokeWidth="1.2" />
                  <path d="M18 10 c0 0 1.5-4 0-6" opacity="0.5" strokeWidth="1.2" />
                  <path d="M26 16 c0 0 1-3 0-5" opacity="0.5" strokeWidth="1.2" />
                  {/* right section of factory */}
                  <line x1="36" y1="20" x2="48" y2="34" />
                  <line x1="48" y1="20" x2="48" y2="34" />
                  <line x1="36" y1="20" x2="48" y2="20" />
                  {/* ground */}
                  <line x1="6" y1="52" x2="50" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Factories</div>
            </div>

            {/* 09 Telecom & Tower Companies */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* tower frame */}
                  <path d="M28 8 L14 52" />
                  <path d="M28 8 L42 52" />
                  {/* cross braces */}
                  <line x1="17" y1="24" x2="39" y2="24" />
                  <line x1="15" y1="36" x2="41" y2="36" />
                  <line x1="14" y1="48" x2="42" y2="48" />
                  {/* diagonal braces */}
                  <line x1="17" y1="24" x2="26" y2="36" />
                  <line x1="39" y1="24" x2="30" y2="36" />
                  <line x1="15" y1="36" x2="22" y2="48" />
                  <line x1="41" y1="36" x2="34" y2="48" />
                  {/* signal arcs at top */}
                  <path d="M20 12 a10 10 0 0 1 16 0" strokeWidth="1.3" />
                  <path d="M16 8 a16 16 0 0 1 24 0" strokeWidth="1.1" opacity="0.5" />
                  {/* top dot */}
                  <circle cx="28" cy="8" r="2.5" fill="currentColor" stroke="none" opacity="0.4" />
                </svg>
              </div>
              <div className="icon-label">Telecom &amp; Tower Companies</div>
            </div>

            {/* 10 Agribusinesses */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* large tree left */}
                  <path d="M16 40 c0 0 -8-6-6-16 s10-12 14-10 c2-6 10-8 14-2 s2 14-4 18" />
                  {/* trunk */}
                  <line x1="18" y1="40" x2="18" y2="52" />
                  <line x1="28" y1="30" x2="28" y2="52" />
                  {/* small plant right */}
                  <path d="M42 46 c0 0 0-8 6-10" />
                  <path d="M42 46 c0 0 0-6-6-8" />
                  <line x1="42" y1="46" x2="42" y2="52" />
                  {/* wheat stalks */}
                  <line x1="36" y1="52" x2="36" y2="38" />
                  <line x1="36" y1="42" x2="33" y2="39" />
                  <line x1="36" y1="38" x2="39" y2="35" />
                  <line x1="44" y1="52" x2="44" y2="40" />
                  <line x1="44" y1="44" x2="41" y2="41" />
                  <line x1="44" y1="40" x2="47" y2="37" />
                  {/* ground */}
                  <line x1="6" y1="52" x2="50" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Agribusinesses</div>
            </div>

            {/* 11 Environmentalists */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* large leaf */}
                  <path d="M28 48 C28 48 8 38 10 18 C10 18 24 10 40 20 C40 20 44 38 28 48Z" />
                  {/* leaf veins */}
                  <line x1="28" y1="48" x2="22" y2="20" strokeWidth="1.2" />
                  <line x1="22" y1="30" x2="14" y2="26" strokeWidth="1.1" opacity="0.6" />
                  <line x1="22" y1="36" x2="30" y2="30" strokeWidth="1.1" opacity="0.6" />
                  <line x1="24" y1="42" x2="34" y2="36" strokeWidth="1.1" opacity="0.6" />
                  {/* stem */}
                  <line x1="28" y1="48" x2="28" y2="52" />
                  {/* sun rays top right */}
                  <circle cx="44" cy="14" r="4" />
                  <line x1="44" y1="6" x2="44" y2="8" />
                  <line x1="50" y1="8" x2="49" y2="9" />
                  <line x1="52" y1="14" x2="50" y2="14" />
                  <line x1="44" y1="22" x2="44" y2="20" />
                  <line x1="38" y1="20" x2="39" y2="19" />
                </svg>
              </div>
              <div className="icon-label">Environmentalists</div>
            </div>

            {/* 12 Ministries of Environment */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* circle */}
                  <circle cx="28" cy="28" r="22" />
                  {/* leaf inside */}
                  <path d="M28 42 C28 42 14 34 16 22 C16 22 24 16 36 22 C36 22 38 34 28 42Z" />
                  <line x1="28" y1="42" x2="22" y2="24" strokeWidth="1.2" />
                  <line x1="22" y1="30" x2="16" y2="27" strokeWidth="1.0" opacity="0.6" />
                  <line x1="23" y1="36" x2="30" y2="31" strokeWidth="1.0" opacity="0.6" />
                  <line x1="28" y1="42" x2="28" y2="46" />
                </svg>
              </div>
              <div className="icon-label">Ministries of Environment</div>
            </div>

            {/* 13 Banks */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* base platform */}
                  <rect x="6" y="46" width="44" height="6" rx="1" />
                  <rect x="4" y="44" width="48" height="3" rx="0.5" />
                  {/* columns */}
                  <rect x="10" y="26" width="5" height="18" rx="0.5" />
                  <rect x="20" y="26" width="5" height="18" rx="0.5" />
                  <rect x="30" y="26" width="5" height="18" rx="0.5" />
                  <rect x="40" y="26" width="5" height="18" rx="0.5" />
                  {/* entablature */}
                  <rect x="6" y="22" width="44" height="4" rx="0.5" />
                  {/* pediment */}
                  <path d="M4 22 L28 10 L52 22Z" />
                  {/* coin/money symbol */}
                  <line x1="28" y1="13" x2="28" y2="19" strokeWidth="1.2" />
                  <path d="M25 14.5c1-1 6-1 6 2.5 0 3-5 2.5-5 2.5" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="icon-label">Banks</div>
            </div>

            {/* 14 Ministries of Energy */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* sun */}
                  <circle cx="28" cy="22" r="8" />
                  <line x1="28" y1="8" x2="28" y2="11" />
                  <line x1="28" y1="33" x2="28" y2="36" />
                  <line x1="14" y1="22" x2="17" y2="22" />
                  <line x1="39" y1="22" x2="42" y2="22" />
                  <line x1="18" y1="12" x2="20" y2="14" />
                  <line x1="36" y1="30" x2="38" y2="32" />
                  <line x1="38" y1="12" x2="36" y2="14" />
                  <line x1="20" y1="30" x2="18" y2="32" />
                  {/* lightning bolt below */}
                  <path d="M32 34 L22 46 h10 L28 58 L40 44 H30 Z" />
                </svg>
              </div>
              <div className="icon-label">Ministries of Energy</div>
            </div>

            {/* 15 Universities */}
            <div className="icon-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* main building */}
                  <rect x="10" y="26" width="36" height="26" rx="1" />
                  {/* columns */}
                  <line x1="18" y1="26" x2="18" y2="52" />
                  <line x1="28" y1="26" x2="28" y2="52" />
                  <line x1="38" y1="26" x2="38" y2="52" />
                  {/* top triangle */}
                  <path d="M8 26 L28 14 L48 26Z" />
                  {/* book on top of triangle */}
                  <line x1="24" y1="10" x2="32" y2="10" />
                  <line x1="28" y1="7" x2="28" y2="14" />
                  {/* door */}
                  <rect x="22" y="40" width="12" height="12" rx="0.5" />
                  {/* windows */}
                  <rect x="13" y="30" width="6" height="5" rx="0.5" />
                  <rect x="37" y="30" width="6" height="5" rx="0.5" />
                  {/* ground stairs */}
                  <line x1="6" y1="52" x2="50" y2="52" />
                  <line x1="4" y1="54" x2="52" y2="54" strokeWidth="1.2" opacity="0.4" />
                </svg>
              </div>
              <div className="icon-label">Universities</div>
            </div>

          </div>{/* /icon-grid */}
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* SECTION 2 — OUR CLIENTS (bg: sand) */}
      <div className="section section-sand">
        <div className="wrap">
          <div className="section-header">
            <div className="eyebrow">02 — Our Clients</div>
            <h2>Our client base</h2>
            <p>Earth Technologies works directly with a broad client base spanning both the public and private sector — each bringing unique project requirements that our team is experienced in delivering.</p>
          </div>
        </div>
        <div className="wrap" style={{ padding: '0' }}>
          <div className="icon-grid">

            {/* 01 Hospitals */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="14" width="40" height="38" rx="1.5" />
                  <path d="M20 52V36h16v16" />
                  <line x1="8" y1="26" x2="48" y2="26" />
                  <line x1="28" y1="18" x2="28" y2="22" />
                  <line x1="26" y1="20" x2="30" y2="20" />
                  <rect x="13" y="30" width="8" height="7" rx="0.5" />
                  <rect x="35" y="30" width="8" height="7" rx="0.5" />
                  <line x1="24" y1="8" x2="24" y2="14" />
                  <line x1="32" y1="8" x2="32" y2="14" />
                  <line x1="22" y1="11" x2="34" y2="11" />
                </svg>
              </div>
              <div className="icon-label">Hospitals</div>
            </div>

            {/* 02 Hotels */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="18" width="44" height="34" rx="1.5" />
                  <line x1="6" y1="30" x2="50" y2="30" />
                  <line x1="28" y1="8" x2="28" y2="18" />
                  <path d="M28 8 l10 4 -10 4Z" fill="currentColor" opacity="0.2" stroke="none" />
                  <rect x="11" y="22" width="7" height="5" rx="0.5" />
                  <rect x="24" y="22" width="7" height="5" rx="0.5" />
                  <rect x="37" y="22" width="7" height="5" rx="0.5" />
                  <rect x="11" y="33" width="7" height="5" rx="0.5" />
                  <rect x="37" y="33" width="7" height="5" rx="0.5" />
                  <rect x="22" y="40" width="12" height="12" rx="0.5" />
                  <circle cx="31" cy="46" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="icon-label">Hotels</div>
            </div>

            {/* 03 Schools */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 14 C28 14 18 12 8 16 L8 46 C18 42 28 44 28 44 C28 44 38 42 48 46 L48 16 C38 12 28 14 28 14Z" />
                  <line x1="28" y1="14" x2="28" y2="44" />
                  <line x1="13" y1="22" x2="24" y2="21" strokeWidth="1.2" />
                  <line x1="13" y1="27" x2="24" y2="26" strokeWidth="1.2" />
                  <line x1="13" y1="32" x2="24" y2="31" strokeWidth="1.2" />
                  <line x1="32" y1="21" x2="43" y2="22" strokeWidth="1.2" />
                  <line x1="32" y1="26" x2="43" y2="27" strokeWidth="1.2" />
                  <line x1="32" y1="31" x2="43" y2="32" strokeWidth="1.2" />
                  <path d="M22 46 c2 3 10 3 12 0" />
                </svg>
              </div>
              <div className="icon-label">Schools</div>
            </div>

            {/* 04 Factories */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="10" y="12" width="8" height="22" rx="0.5" />
                  <rect x="22" y="18" width="8" height="16" rx="0.5" />
                  <rect x="8" y="34" width="40" height="18" rx="1" />
                  <rect x="12" y="38" width="7" height="6" rx="0.5" />
                  <rect x="24" y="38" width="7" height="6" rx="0.5" />
                  <rect x="36" y="38" width="7" height="6" rx="0.5" />
                  <path d="M14 10 c0 0 1-3 0-5" opacity="0.5" strokeWidth="1.2" />
                  <path d="M18 10 c0 0 1.5-4 0-6" opacity="0.5" strokeWidth="1.2" />
                  <path d="M26 16 c0 0 1-3 0-5" opacity="0.5" strokeWidth="1.2" />
                  <line x1="36" y1="20" x2="48" y2="34" />
                  <line x1="48" y1="20" x2="48" y2="34" />
                  <line x1="36" y1="20" x2="48" y2="20" />
                  <line x1="6" y1="52" x2="50" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Factories</div>
            </div>

            {/* 05 Municipalities */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="26" width="44" height="26" rx="1" />
                  <line x1="16" y1="26" x2="16" y2="52" />
                  <line x1="26" y1="26" x2="26" y2="52" />
                  <line x1="36" y1="26" x2="36" y2="52" />
                  <line x1="46" y1="26" x2="46" y2="52" />
                  <path d="M4 26 28 12 52 26Z" />
                  <path d="M22 12 c0-4 12-4 12 0" strokeWidth="1.3" />
                  <line x1="28" y1="8" x2="28" y2="12" />
                  <rect x="22" y="38" width="12" height="14" rx="0.5" />
                  <line x1="4" y1="52" x2="52" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Municipalities</div>
            </div>

            {/* 06 Banks */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="46" width="44" height="6" rx="1" />
                  <rect x="4" y="44" width="48" height="3" rx="0.5" />
                  <rect x="10" y="26" width="5" height="18" rx="0.5" />
                  <rect x="20" y="26" width="5" height="18" rx="0.5" />
                  <rect x="30" y="26" width="5" height="18" rx="0.5" />
                  <rect x="40" y="26" width="5" height="18" rx="0.5" />
                  <rect x="6" y="22" width="44" height="4" rx="0.5" />
                  <path d="M4 22 L28 10 L52 22Z" />
                  <line x1="28" y1="13" x2="28" y2="19" strokeWidth="1.2" />
                  <path d="M25 14.5c1-1 6-1 6 2.5 0 3-5 2.5-5 2.5" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="icon-label">Banks</div>
            </div>

            {/* 07 Telecom Operators */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* signal waves from hand device */}
                  <path d="M18 38 a14 14 0 0 1 0-20" strokeWidth="1.4" />
                  <path d="M22 34 a8 8 0 0 1 0-12" strokeWidth="1.4" />
                  <path d="M26 30 a4 4 0 0 1 0-4" strokeWidth="1.4" />
                  {/* tower stick */}
                  <line x1="38" y1="10" x2="38" y2="52" />
                  <path d="M30 14 a12 12 0 0 1 16 0" strokeWidth="1.3" />
                  <path d="M26 10 a18 18 0 0 1 24 0" strokeWidth="1.1" opacity="0.5" />
                  <line x1="32" y1="52" x2="44" y2="52" />
                  <line x1="34" y1="28" x2="42" y2="28" strokeWidth="1.2" />
                  <line x1="33" y1="36" x2="43" y2="36" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="icon-label">Telecom Operators</div>
            </div>

            {/* 08 Telecom Companies */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 8 L14 52" />
                  <path d="M28 8 L42 52" />
                  <line x1="17" y1="24" x2="39" y2="24" />
                  <line x1="15" y1="36" x2="41" y2="36" />
                  <line x1="14" y1="48" x2="42" y2="48" />
                  <line x1="17" y1="24" x2="26" y2="36" />
                  <line x1="39" y1="24" x2="30" y2="36" />
                  <line x1="15" y1="36" x2="22" y2="48" />
                  <line x1="41" y1="36" x2="34" y2="48" />
                  <path d="M20 12 a10 10 0 0 1 16 0" strokeWidth="1.3" />
                  <path d="M16 8 a16 16 0 0 1 24 0" strokeWidth="1.1" opacity="0.5" />
                  <circle cx="28" cy="8" r="2.5" fill="currentColor" stroke="none" opacity="0.4" />
                </svg>
              </div>
              <div className="icon-label">Telecom Companies</div>
            </div>

            {/* 09 Real Estate Developers */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 30 28 14 46 30V52H10V30Z" />
                  <path d="M6 30 28 10 50 30" />
                  <rect x="22" y="38" width="12" height="14" rx="0.5" />
                  <rect x="13" y="32" width="8" height="7" rx="0.5" />
                  <rect x="35" y="32" width="8" height="7" rx="0.5" />
                  <line x1="28" y1="4" x2="28" y2="10" />
                  <path d="M28 4 l8 3 -8 3Z" fill="currentColor" opacity="0.3" stroke="none" />
                  <rect x="23" y="20" width="10" height="6" rx="0.5" strokeWidth="1.2" />
                  <line x1="28" y1="20" x2="28" y2="26" />
                </svg>
              </div>
              <div className="icon-label">Real Estate Developers</div>
            </div>

            {/* 10 Architects */}
            {/* <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 8 L10 48 L46 48 Z" />
                  <line x1="17" y1="34" x2="39" y2="34" />
                  <line x1="28" y1="8" x2="22" y2="48" />
                  <line x1="28" y1="8" x2="34" y2="48" />
                  <circle cx="28" cy="8" r="3" />
                  <line x1="12" y1="48" x2="12" y2="44" strokeWidth="1.2" />
                  <line x1="20" y1="48" x2="20" y2="46" strokeWidth="1.2" />
                  <line x1="28" y1="48" x2="28" y2="44" strokeWidth="1.2" />
                  <line x1="36" y1="48" x2="36" y2="46" strokeWidth="1.2" />
                  <line x1="44" y1="48" x2="44" y2="44" strokeWidth="1.2" />
                </svg>
              </div>
              <div className="icon-label">Architects</div>
            </div> */}

            {/* 11 Agribusinesses */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 40 c0 0 -8-6-6-16 s10-12 14-10 c2-6 10-8 14-2 s2 14-4 18" />
                  <line x1="18" y1="40" x2="18" y2="52" />
                  <line x1="28" y1="30" x2="28" y2="52" />
                  <path d="M42 46 c0 0 0-8 6-10" />
                  <path d="M42 46 c0 0 0-6-6-8" />
                  <line x1="42" y1="46" x2="42" y2="52" />
                  <line x1="36" y1="52" x2="36" y2="38" />
                  <line x1="36" y1="42" x2="33" y2="39" />
                  <line x1="36" y1="38" x2="39" y2="35" />
                  <line x1="44" y1="52" x2="44" y2="40" />
                  <line x1="44" y1="44" x2="41" y2="41" />
                  <line x1="44" y1="40" x2="47" y2="37" />
                  <line x1="6" y1="52" x2="50" y2="52" />
                </svg>
              </div>
              <div className="icon-label">Agribusinesses</div>
            </div>

            {/* 12 Environmentalists */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 48 C28 48 8 38 10 18 C10 18 24 10 40 20 C40 20 44 38 28 48Z" />
                  <line x1="28" y1="48" x2="22" y2="20" strokeWidth="1.2" />
                  <line x1="22" y1="30" x2="14" y2="26" strokeWidth="1.1" opacity="0.6" />
                  <line x1="22" y1="36" x2="30" y2="30" strokeWidth="1.1" opacity="0.6" />
                  <line x1="24" y1="42" x2="34" y2="36" strokeWidth="1.1" opacity="0.6" />
                  <line x1="28" y1="48" x2="28" y2="52" />
                  <circle cx="44" cy="14" r="4" />
                  <line x1="44" y1="6" x2="44" y2="8" />
                  <line x1="50" y1="8" x2="49" y2="9" />
                  <line x1="52" y1="14" x2="50" y2="14" />
                  <line x1="44" y1="22" x2="44" y2="20" />
                  <line x1="38" y1="20" x2="39" y2="19" />
                </svg>
              </div>
              <div className="icon-label">Environmentalists</div>
            </div>

            {/* 13 Donor Countries */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {/* globe */}
                  <circle cx="28" cy="28" r="20" />
                  <path d="M28 8 c0 0 8 8 8 20 s-8 20-8 20 s-8-8-8-20 s8-20 8-20Z" />
                  <line x1="8" y1="28" x2="48" y2="28" />
                  <path d="M10 18 c6 2 26 2 36 0" strokeWidth="1.1" opacity="0.6" />
                  <path d="M10 38 c6-2 26-2 36 0" strokeWidth="1.1" opacity="0.6" />
                  {/* handshake overlay */}
                  <path d="M18 44 c3-2 6-2 8 0 s5 2 8 0" strokeWidth="1.3" opacity="0.7" />
                </svg>
              </div>
              <div className="icon-label">Donor Countries</div>
            </div>

            {/* 14 Ministries of Energy */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="28" cy="22" r="8" />
                  <line x1="28" y1="8" x2="28" y2="11" />
                  <line x1="28" y1="33" x2="28" y2="36" />
                  <line x1="14" y1="22" x2="17" y2="22" />
                  <line x1="39" y1="22" x2="42" y2="22" />
                  <line x1="18" y1="12" x2="20" y2="14" />
                  <line x1="36" y1="30" x2="38" y2="32" />
                  <line x1="38" y1="12" x2="36" y2="14" />
                  <line x1="20" y1="30" x2="18" y2="32" />
                  <path d="M32 34 L22 46 h10 L28 58 L40 44 H30 Z" />
                </svg>
              </div>
              <div className="icon-label">Ministries of Energy</div>
            </div>

            {/* 15 Ministries of Environment */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="28" cy="28" r="22" />
                  <path d="M28 42 C28 42 14 34 16 22 C16 22 24 16 36 22 C36 22 38 34 28 42Z" />
                  <line x1="28" y1="42" x2="22" y2="24" strokeWidth="1.2" />
                  <line x1="22" y1="30" x2="16" y2="27" strokeWidth="1.0" opacity="0.6" />
                  <line x1="23" y1="36" x2="30" y2="31" strokeWidth="1.0" opacity="0.6" />
                  <line x1="28" y1="42" x2="28" y2="46" />
                </svg>
              </div>
              <div className="icon-label">Ministries of Environment</div>
            </div>

            {/* 16 Universities */}
            <div className="icon-card sand-card">
              <div className="icon-wrap">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="10" y="26" width="36" height="26" rx="1" />
                  <line x1="18" y1="26" x2="18" y2="52" />
                  <line x1="28" y1="26" x2="28" y2="52" />
                  <line x1="38" y1="26" x2="38" y2="52" />
                  <path d="M8 26 L28 14 L48 26Z" />
                  <line x1="24" y1="10" x2="32" y2="10" />
                  <line x1="28" y1="7" x2="28" y2="14" />
                  <rect x="22" y="40" width="12" height="12" rx="0.5" />
                  <rect x="13" y="30" width="6" height="5" rx="0.5" />
                  <rect x="37" y="30" width="6" height="5" rx="0.5" />
                  <line x1="6" y1="52" x2="50" y2="52" />
                  <line x1="4" y1="54" x2="52" y2="54" strokeWidth="1.2" opacity="0.4" />
                </svg>
              </div>
              <div className="icon-label">Universities</div>
            </div>

          </div>{/* /icon-grid */}
        </div>
      </div>
    </>
  );
}
