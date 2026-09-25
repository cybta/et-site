import './css/About.css';

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="about-hero">
        <div className="wrap inner">
          <div className="tag">Earth Technologies</div>
          <h1>About<br />Us</h1>
          <p className="sub">An energy engineering, procurement and construction contractor serving projects across Africa and the Middle East since 2010.</p>
          <div className="hero-foot">
            <div className="hero-foot-item"><strong>Est. 2010</strong>Beirut, Lebanon</div>
            <div className="hero-foot-item"><strong>10+ Countries</strong>LB · Africa · Middle East</div>
            <div className="hero-foot-item"><strong>EPC Contractor</strong>Solar · Storage · Hybrid</div>
            <div className="hero-foot-item"><strong>6 Sections</strong>Company profile</div>
          </div>
        </div>
      </div>

      {/* 01 — COMPANY OVERVIEW — bg: white | photo left | text right */}
      <div className="sec sec-white">
        <div className="wrap">
          <div className="two-col">
            <div className="photo-block" style={{ aspectRatio: '4/5' }}>
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="spec-stamp">
                <div className="srow"><span>Status</span><span>Active</span></div>
                <hr />
                <div className="srow"><span>Est.</span><span>2010</span></div>
                <div className="srow"><span>HQ</span><span>Beirut, LB</span></div>
                <div className="srow"><span>Sector</span><span>Energy EPC</span></div>
                <div className="srow"><span>Type</span><span>EPC Contractor</span></div>
              </div>
              <div className="photo-label">Residential rooftop installation — Lebanon</div>
            </div>

            <div>
              <div className="eyebrow">01 — Company Overview</div>
              <h2 className="sec-title">Delivering Energy Infrastrcture Since 2010</h2>
              <div className="founded-badge">
                <div className="dot"></div>
                Founded <strong>2010</strong> · Beirut, Lebanon
              </div>
              <p className="body">Established in 2010, Earth Technologies delivers engineering, procurement and construction services for energy infrastructure across Africa and the Middle East. Building on its experience in solar, battery storage and hybrid systems, the company is expanding its activities in the wider energy sector, including current involvement in a major gas development in Gabon.</p>
              <div className="stat-strip cols-3">
                <div className="stat-item"><b>16<em>+</em></b><span>Years active</span></div>
                <div className="stat-item"><b>10<em>+</em></b><span>Countries</span></div>
                <div className="stat-item"><b>5</b><span>Core services</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* 02 — PROJECT LOCATIONS — bg: navy | text left | visual right */}
      <div className="sec sec-navy">
        <div className="wrap">
          <div className="two-col flip">
            <div className="map-visual">
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="map-inner">
                <div className="reach-badge">Operational footprint</div>
                <div className="reach-number">10<span style={{ fontSize: '0.5em', color: 'var(--gold)' }}>+</span></div>
                <div className="reach-label">Countries active</div>
                <div className="reach-divider"></div>
                <div className="country-tags">
                  <span className="country-tag">Lebanon</span>
                  <span className="country-tag">Saudi Arabia</span>
                  <span className="country-tag">Iraq</span>
                  <span className="country-tag">Ivory Coast</span>
                  <span className="country-tag">Nigeria</span>
                  <span className="country-tag">Rwanda</span>
                  <span className="country-tag">Cameroon</span>
                  <span className="country-tag">Zambia</span>
                  <span className="country-tag">Burkina Faso</span>
                  <span className="country-tag">Mali</span>
                </div>
              </div>
              <div className="photo-label">Active project countries · 2013 – present</div>
            </div>

            <div>
              <div className="eyebrow light">02 — Project Locations</div>
              <h2 className="sec-title" style={{ color: 'var(--white)' }}>Our Presence Across Africa and the Middle East</h2>
              <p className="body light">Since its inception, Earth Technologies has experienced significant growth and expansion. In 2013, the company strategically extended its operations to Africa, seizing opportunities in emerging markets to make a lasting impact on the continent's energy landscape.</p>
              <p className="body light" style={{ marginTop: 14 }}>Leveraging its expertise and proven track record, Earth Technologies has undertaken a series of successful projects in Lebanon, Zambia, Iraq, Saudi Arabia, Cameroon, Rwanda, Ivory Coast, Nigeria and others.</p>

              <div className="region-list" style={{ marginTop: 32 }}>
                <div className="region-item">
                  <span className="region-num">01</span>
                  <div>
                    <div className="region-name">AFRICA</div>
                    <div className="region-desc">Zambia · Cameroon · Rwanda · Ivory Coast · Nigeria · Burkina Faso · Mali · Gabon</div>
                  </div>
                </div>
                <div className="region-item">
                  <span className="region-num">02</span>
                  <div>
                    <div className="region-name">Middle East</div>
                    <div className="region-desc">Saudi Arabia · Iraq</div>
                  </div>
                </div>
                <div className="region-item">
                  <span className="region-num">03</span>
                  <div>
                    <div className="region-name">Lebanon</div>
                    <div className="region-desc">Regional Base</div>
                  </div>
                  </div>
                <div className="region-item">
                  <span className="region-num">04</span>
                  <div>
                    <div className="region-name">Gabon</div>
                    <div className="region-desc">Utility-scale gas power development (Mayumba), alongside solar and storage.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* 03 — COMMUNITY IMPACT — bg: white | photo left | text right */}
      <div className="sec sec-white">
        <div className="wrap">
          <div className="two-col">
            <div className="impact-photo">
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="photo-label">Agricultural solar site — Sub-Saharan Africa</div>
            </div>

            <div>
              <div className="eyebrow">03 — Community Impact</div>
              <h2 className="sec-title">Reliable energy. Lasting Local Impact.</h2>
              <p className="body">Earth Technologies supports reliable energy access, local employment and technical skills development through its projects. Our approach combines engineering delivery with knowledge transfer and long-term operational support to help create lasting value for clients and communities.</p>
              <div className="impact-cards">
                <div className="impact-card" style={{ background: 'var(--sand)', borderColor: 'var(--line)' }}>
                  <svg className="impact-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 4C10.3 4 4 10.3 4 18s6.3 14 14 14 14-6.3 14-14S25.7 4 18 4Z" />
                    <path d="M12 20c1 2.5 3.5 4 6 4s5-1.5 6-4" />
                    <path d="M13 14h.01M23 14h.01" />
                  </svg>
                  <h4>Reduced Carbon Footprint</h4>
                  <p>Replacing diesel and grid dependency with clean solar across multiple markets.</p>
                </div>
                <div className="impact-card" style={{ background: 'var(--sand)', borderColor: 'var(--line)' }}>
                  <svg className="impact-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 4v6M18 26v6M4 18h6M26 18h6" />
                    <circle cx="18" cy="18" r="7" />
                    <path d="M10 10l4 4M22 22l4 4M22 10l-4 4M14 22l-4 4" />
                  </svg>
                  <h4>Energy Access</h4>
                  <p>Bringing reliable power to hospitals, schools, and municipalities in underserved regions.</p>
                </div>
                <div className="impact-card" style={{ background: 'var(--sand)', borderColor: 'var(--line)' }}>
                  <svg className="impact-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 28V16l10-8 10 8v12" />
                    <path d="M14 28v-8h8v8" />
                  </svg>
                  <h4>Local Employment</h4>
                  <p>Creating skilled jobs and transferring technical knowledge in every new market.</p>
                </div>
                <div className="impact-card" style={{ background: 'var(--sand)', borderColor: 'var(--line)' }}>
                  <svg className="impact-icon" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 26l8-8 6 6 10-12" />
                    <circle cx="30" cy="12" r="3" />
                  </svg>
                  <h4>Economic Growth</h4>
                  <p>Supporting sustainable development and lowering energy costs for businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* 04 — COMPANY TRACK RECORD — bg: sand | text left | photo right */}
      <div className="sec sec-sand">
        <div className="wrap">
          <div className="two-col flip">
            <div className="track-photo">
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="photo-label">Mountain rooftop array — North Lebanon</div>
            </div>

            <div>
              <div className="eyebrow">04 — Company Track Record</div>
              <h2 className="sec-title">Hundreds of sites. One standard.</h2>
              <p className="body">The company's proven track record includes hundreds of successfully delivered sites — from complex projects in remote locations across the Middle East and Africa, showcasing its expertise in overcoming logistical challenges and implementing high-impact renewable energy solutions.</p>

              <div className="stat-strip cols-4" style={{ marginTop: 36, paddingTop: 32 }}>
                <div className="stat-item"><b>100<em>+</em></b><span>Sites delivered</span></div>
                <div className="stat-item"><b>10<em>+</em></b><span>Countries</span></div>
                <div className="stat-item"><b>16<em>+</em></b><span>Years EPC</span></div>
                <div className="stat-item"><b>MEA</b><span>Coverage</span></div>
              </div>

              <div className="delivery-list">
                <div className="delivery-item">
                  <div className="tick"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#C79A43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span><strong>Remote site expertise</strong> — complex logistics in off-grid locations</span>
                </div>
                <div className="delivery-item">
                  <div className="tick"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#C79A43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span><strong>Grid-scale and rooftop</strong> — from single arrays to multi-MW plants</span>
                </div>
                <div className="delivery-item">
                  <div className="tick"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#C79A43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span><strong>Post-commissioning O&amp;M</strong> — ongoing monitoring and maintenance</span>
                </div>
                <div className="delivery-item">
                  <div className="tick"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#C79A43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span><strong>Public &amp; private sector</strong> — UN agencies, listed companies, municipalities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* 05 — PARTNERS & CUSTOMERS — bg: white | photo left | text right */}
      <div className="sec sec-white">
        <div className="wrap">
          <div className="two-col">
            <div className="partners-photo">
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="photo-label">Commercial installation — North Lebanon</div>
            </div>

            <div>
              <div className="eyebrow">05 — Partners &amp; Customers</div>
              <h2 className="sec-title">Selected Clients And Institutions</h2>
              <p className="body">Earth Technologies' clients include...</p>

              <div className="un-strip">
                <div className="un-item">
                  <div className="un-code">UNDP</div>
                  <div className="un-name">UN Development Programme</div>
                </div>
                <div className="un-item">
                  <div className="un-code">UNHCR</div>
                  <div className="un-name">UN Refugee Agency</div>
                </div>
                <div className="un-item">
                  <div className="un-code">UNIFIL</div>
                  <div className="un-name">UN Interim Force in Lebanon</div>
                </div>
                <div className="un-item">
                  <div className="un-code">UNOPS</div>
                  <div className="un-name">UN Office for Project Services</div>
                </div>
              </div>

              <div className="client-cats">
                <div className="client-cats-label">Also serving</div>
                <div className="client-cat-tags">
                  <span className="client-cat-tag">Spinneys</span>
                  <span className="client-cat-tag">SKAFF</span>
                  <span className="client-cat-tag">Alfa Interfood</span>
                  <span className="client-cat-tag">Dora Flour Mills</span>
                  <span className="client-cat-tag">Hospitals</span>
                  <span className="client-cat-tag">Schools</span>
                  <span className="client-cat-tag">Municipalities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-divider"></div>

      {/* 06 — COMPANY PHILOSOPHY — bg: ink | text left | photo right */}
      <div className="sec sec-ink">
        <div className="wrap">
          <div className="two-col flip">
            <div className="phil-photo">
              <div className="grid-tex"></div>
              <div className="corner tl"></div>
              <div className="corner br"></div>
              <div className="photo-label">Industrial rooftop — Bekaa Valley, Lebanon</div>
            </div>

            <div>
              <div className="eyebrow light">06 — Company Philosophy</div>
              <h2 className="sec-title" style={{ color: 'var(--white)' }}>Inclusion, diversity, local empowerment</h2>
              <p className="body light">The philosophy at Earth Technologies is one of inclusion and diversity. Empowering local communities and enabling knowledge transfer are core principles that Earth Technologies management encourages for every new market entry.</p>

              <div className="phil-pillars">
                <div className="pillar">
                  <span className="pillar-num">—</span>
                  <div>
                    <div className="pillar-title">Inclusion &amp; Diversity</div>
                    <p className="pillar-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Every project team reflects the local workforce. We hire and train locally first.</p>
                  </div>
                </div>
                <div className="pillar" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="pillar-num">—</span>
                  <div>
                    <div className="pillar-title">Knowledge Transfer</div>
                    <p className="pillar-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Skills, tools, and best practices are passed to local teams in every new market.</p>
                  </div>
                </div>
                <div className="pillar" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <span className="pillar-num">—</span>
                  <div>
                    <div className="pillar-title">Community-first Entry</div>
                    <p className="pillar-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Market expansion is guided by genuine community need — not just commercial opportunity.</p>
                  </div>
                </div>
                <div className="pillar" style={{ borderBottom: 'none' }}>
                  <span className="pillar-num">—</span>
                  <div>
                    <div className="pillar-title">Long-term Commitment</div>
                    <p className="pillar-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>We remain present after commissioning — monitoring, maintaining, improving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
