import { useEffect, useMemo, useState } from 'react';
import './css/ProjectPortfolio.css';

type RegionKey = 'lebanon' | 'international';

interface Project {
  name: string;
  loc: string;
  kw: string;
  mount: string;
  grid: string;
  type: string;
  desc: string;
}

const GRADIENTS = [
  'linear-gradient(155deg,#2e4a5e 0%,#182d3c 55%,#0f1e29 100%)',
  'linear-gradient(155deg,#3a5670 0%,#1d3145 55%,#14222f 100%)',
  'linear-gradient(155deg,#2c4760 0%,#16263a 55%,#0f1c28 100%)',
  'linear-gradient(155deg,#3c5a73 0%,#1c2f40 55%,#121f2c 100%)',
  'linear-gradient(155deg,#344f62 0%,#182636 55%,#0f1c28 100%)',
  'linear-gradient(155deg,#2a4258 0%,#14222f 55%,#0d1920 100%)',
  'linear-gradient(155deg,#385268 0%,#1a2c3a 55%,#121e28 100%)',
  'linear-gradient(155deg,#304960 0%,#162838 55%,#0e1c28 100%)',
  'linear-gradient(155deg,#3e5c72 0%,#1e3142 55%,#14202e 100%)',
];

const PROJECTS: Record<RegionKey, Project[]> = {
  lebanon: [
    { name: 'Indoor – Outdoor Lighting', loc: 'Beirut', kw: '45 kWp', mount: 'Custom', grid: 'On-Grid', type: 'Lighting EPC', desc: 'Custom indoor and outdoor lighting infrastructure across a mixed-use commercial site in Beirut — energy-efficient LED systems integrated with solar supply.' },
    { name: 'Alfa Interfood', loc: 'Bekaa Valley', kw: '102.7 kWp', mount: 'Aluminum Rail', grid: 'On-Grid', type: 'Industrial Roof', desc: '102.70 kWp on-grid rooftop installation on an industrial food-processing facility in the Bekaa Valley — aluminum rail mounting on a corrugated metal roof with REFUsol inverters.' },
    { name: 'Lebanese Armed Forces', loc: 'Multiple sites', kw: 'Classified', mount: 'Ground mount', grid: 'Off-Grid', type: 'Institutional', desc: 'Multi-site solar and storage deployment for the Lebanese Armed Forces — off-grid hybrid systems providing reliable power independence across strategic locations.' },
    { name: 'Burj Hammoud – UNOPS', loc: 'Burj Hammoud', kw: '320 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'UN Agency', desc: 'On-grid rooftop installation for UNOPS in Burj Hammoud — one of the largest donor-funded solar projects in Greater Beirut, supporting humanitarian operations.' },
    { name: 'Bechtayel', loc: 'North Lebanon', kw: '78 kWp', mount: 'Ground mount', grid: 'On-Grid', type: 'Agricultural', desc: 'Ground-mounted solar array serving an agricultural operation in North Lebanon — designed to offset diesel generation costs and provide stable daytime power.' },
    { name: 'Dora Flour Mills (DFM)', loc: 'Dora, Beirut', kw: '215 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Industrial', desc: 'Large-scale rooftop installation on the Dora Flour Mills industrial complex — engineered to offset high daytime energy consumption from milling operations.' },
    { name: 'V-Tower', loc: 'Beirut', kw: '60 kWp', mount: 'Facade/Roof', grid: 'On-Grid', type: 'High-rise', desc: 'Solar integration on a high-rise residential tower in Beirut — roof and facade mounting system designed around architectural constraints of an occupied building.' },
    { name: 'Serhal', loc: 'Mount Lebanon', kw: '92 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Commercial', desc: 'Rooftop solar installation on a commercial property in Mount Lebanon — system optimised for west-facing roof orientation with string inverter configuration.' },
    { name: 'Noor Anfeh', loc: 'Anfeh, North LB', kw: '55 kWp', mount: 'Ground mount', grid: 'Hybrid', type: 'Agricultural', desc: 'Hybrid solar and battery system for an agricultural facility in Anfeh — providing daytime solar supply with battery backup for irrigation and cold storage loads.' },
    { name: 'SKAFF', loc: 'Beirut', kw: '180 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Retail', desc: 'Rooftop solar installation across the SKAFF retail portfolio — multi-building design coordinated with active operations to minimise disruption during installation.' },
    { name: 'Tanmiya', loc: 'Bekaa Valley', kw: '130 kWp', mount: 'Ground mount', grid: 'On-Grid', type: 'Agricultural', desc: 'Large ground-mounted array serving the Tanmiya agricultural development in the Bekaa — designed to power irrigation pumps and post-harvest cold chain operations.' },
    { name: 'Spinneys Jounieh', loc: 'Jounieh', kw: '160 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Retail', desc: 'On-grid rooftop installation for Spinneys Jounieh — fully integrated with the supermarket\'s building management system for real-time generation monitoring.' },
    { name: 'Hawa Chicken', loc: 'Metn', kw: '88 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Industrial', desc: 'Rooftop solar for a poultry processing facility — system sized to cover high daytime refrigeration and processing loads with minimal payback period.' },
    { name: 'Rachaya', loc: 'West Bekaa', kw: '42 kWp', mount: 'Ground mount', grid: 'Hybrid', type: 'Community', desc: 'Hybrid solar and storage system in the Rachaya region — off-grid capable installation providing reliable power to a community facility with variable grid availability.' },
    { name: 'Spinneys Jbeil', loc: 'Jbeil (Byblos)', kw: '145 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Retail', desc: 'Second Spinneys location EPC — rooftop installation in Jbeil designed to the same technical standard as Jounieh, with remote monitoring from a centralised platform.' },
    { name: 'Halba', loc: 'Akkar, North LB', kw: '38 kWp', mount: 'Ground mount', grid: 'On-Grid', type: 'Commercial', desc: 'Ground-mounted installation in Halba, Akkar — serving a commercial site in an area with limited grid reliability, sized to maximise self-consumption.' },
    { name: 'Shahar El Gharbe', loc: 'Bekaa', kw: '66 kWp', mount: 'Ground mount', grid: 'Hybrid', type: 'Agricultural', desc: 'Agricultural hybrid system in Shahar El Gharbe — combined solar, battery storage, and diesel backup providing 24/7 reliable power for farming operations.' },
    { name: 'Sibleen', loc: 'South Lebanon', kw: '52 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Institutional', desc: 'On-grid rooftop installation at an institutional facility in Sibleen, South Lebanon — designed with a ballasted mounting system to protect the existing roof membrane.' },
    { name: 'Mushroom Factory', loc: 'Bekaa Valley', kw: '74 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Agricultural', desc: 'Solar installation for a controlled-environment mushroom cultivation facility — engineered around the high and consistent energy demands of climate-controlled growing chambers.' },
    { name: 'Mazda', loc: 'Beirut', kw: '58 kWp', mount: 'Rooftop/Canopy', grid: 'On-Grid', type: 'Automotive', desc: 'Solar canopy and rooftop installation at a Mazda automotive dealership in Beirut — dual-purpose design providing both energy generation and covered parking shade.' },
    { name: 'Volvo', loc: 'Beirut', kw: '62 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Automotive', desc: 'On-grid rooftop installation for a Volvo dealership and service centre — integrated with the facility\'s existing BMS with live generation dashboard for management.' },
    { name: 'Al Kanater', loc: 'Metn', kw: '48 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Commercial', desc: 'Rooftop installation on a commercial property in Metn — compact system design optimised for a partially shaded roof with micro-inverter technology to minimise losses.' },
    { name: 'Khoury General Hospital', loc: 'North Lebanon', kw: '110 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'Solar and storage hybrid for Khoury General Hospital — medical-grade reliability with automatic transfer switching, UPS integration, and 72-hour battery autonomy for critical loads.' },
    { name: 'Sir El Dunniyeh', loc: 'North Lebanon', kw: '36 kWp', mount: 'Ground mount', grid: 'Off-Grid', type: 'Rural', desc: 'Off-grid solar system serving a rural community in Sir El Dunniyeh — providing reliable electricity to a location with no viable grid connection.' },
    { name: 'Manufacturing Operation', loc: 'Beirut Port area', kw: '195 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Industrial', desc: 'Large industrial rooftop installation at a manufacturing facility near Beirut Port — system survives grid outages with battery backup for critical process lines.' },
    { name: 'Solar Street Lighting', loc: 'North Lebanon', kw: 'N/A', mount: 'Pole-mounted', grid: 'Off-Grid', type: 'Public Infra', desc: 'Stand-alone solar street lighting programme across multiple municipalities in North Lebanon — each unit is self-contained with monocrystalline panel and LFP battery.' },
    { name: 'Bouar Hospital', loc: 'Chouf', kw: '85 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'Hybrid solar system for Bouar Hospital in the Chouf — critical load prioritisation ensures uninterrupted power to operating theatres and ICU regardless of grid status.' },
    { name: 'Bsharre Hospital', loc: 'Bsharre, North LB', kw: '70 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'High-altitude solar installation at Bsharre Hospital — system designed for heavy snow load conditions with reinforced racking and elevated panel tilt for winter performance.' },
    { name: 'Halba Hospital', loc: 'Akkar', kw: '65 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'Solar and battery hybrid for Halba Hospital in Akkar — remote monitoring and automatic load-shedding protocol maintains power to priority medical equipment during extended outages.' },
    { name: 'Karantina Hospital', loc: 'Beirut', kw: '90 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Healthcare', desc: 'On-grid installation for Karantina Hospital — roof-mounted array with monitoring dashboard integrated into hospital facilities management system.' },
    { name: 'Monsif International School', loc: 'Metn', kw: '55 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Education', desc: 'On-grid rooftop installation for Monsif International School — educational facility solar system with student-facing generation display promoting environmental awareness.' },
    { name: 'Tripoli Hospital', loc: 'Tripoli, North LB', kw: '120 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'Solar and storage hybrid for Tripoli Hospital — Lebanon\'s second-largest city healthcare facility fitted with a multi-string system across multiple roof sections.' },
    { name: 'Saint Joseph – Mazraat Yachouh', loc: 'Metn', kw: '48 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Education', desc: 'Rooftop installation for Saint Joseph School in Mazraat Yachouh — system designed around an occupied school schedule with all installation work completed during summer break.' },
    { name: 'Saint Elie School – Batroun', loc: 'Batroun, North LB', kw: '38 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Education', desc: 'On-grid rooftop solar for Saint Elie School in Batroun — compact system maximising available south-facing roof area with high-efficiency monocrystalline modules.' },
    { name: 'Solar Street Lighting Tender', loc: 'Multiple', kw: 'N/A', mount: 'Pole-mounted', grid: 'Off-Grid', type: 'Public Tender', desc: 'Government tender for solar street lighting across multiple municipalities — design, supply, and installation of off-grid lighting units with remote monitoring capability.' },
    { name: 'Dora Flour Mills (DFM/VFD)', loc: 'Dora, Beirut', kw: '310 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Industrial', desc: 'Expanded installation at Dora Flour Mills incorporating Variable Frequency Drive integration — system upgrade combining additional panels with VFD technology to reduce motor energy consumption.' },
  ],

  international: [
    { name: 'Zambia – Rural Electrification', loc: 'Zambia', kw: '220 kWp', mount: 'Ground mount', grid: 'Off-Grid', type: 'Rural EPC', desc: 'Off-grid solar and battery micro-grid serving multiple villages in rural Zambia — providing electricity to homes, a health post, and a community school for the first time.' },
    { name: 'Nigeria – Commercial Complex', loc: 'Lagos, Nigeria', kw: '480 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'C&I Commercial', desc: 'Large rooftop on-grid installation across a commercial complex in Lagos — designed around unreliable grid conditions with seamless diesel backup switchover capability.' },
    { name: 'Rwanda – Health Centre', loc: 'Kigali, Rwanda', kw: '75 kWp', mount: 'Rooftop', grid: 'Hybrid', type: 'Healthcare', desc: 'Solar and storage hybrid for a rural health centre in Rwanda — medical-grade reliability with 48-hour battery autonomy, funded under an international donor programme.' },
    { name: 'Cameroon – Agricultural Site', loc: 'Cameroon', kw: '160 kWp', mount: 'Ground mount', grid: 'Hybrid', type: 'Agricultural', desc: 'Hybrid ground-mounted system for an agricultural processing facility in Cameroon — powering refrigeration, packaging lines, and lighting with solar-first dispatch logic.' },
    { name: 'Ivory Coast – Industrial Plant', loc: 'Ivory Coast', kw: '340 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'Industrial', desc: 'Industrial-scale rooftop installation on a manufacturing plant in Ivory Coast — one of Earth Technologies\' largest single-site deployments in West Africa.' },
    { name: 'Burkina Faso – School Campus', loc: 'Burkina Faso', kw: '55 kWp', mount: 'Rooftop', grid: 'Off-Grid', type: 'Education', desc: 'Off-grid solar system for a school campus in Burkina Faso — funded through a development NGO, providing reliable power for classrooms, labs, and boarding facilities.' },
    { name: 'Mali – Off-Grid Community', loc: 'Mali', kw: '95 kWp', mount: 'Ground mount', grid: 'Off-Grid', type: 'Community', desc: 'Community micro-grid in rural Mali — solar plus storage system serving a population centre with no grid access, managed by a local energy committee trained by Earth Technologies.' },
    { name: 'Saudi Arabia – Commercial', loc: 'Saudi Arabia', kw: '285 kWp', mount: 'Rooftop', grid: 'On-Grid', type: 'C&I Commercial', desc: 'On-grid rooftop installation for a commercial facility in Saudi Arabia — system engineered for high ambient temperatures with bifacial modules and ventilated racking.' },
    { name: 'Iraq – Government Facility', loc: 'Iraq', kw: '190 kWp', mount: 'Ground mount', grid: 'Hybrid', type: 'Institutional', desc: 'Solar and storage hybrid for a government facility in Iraq — system designed for extreme heat conditions with active cooling for inverter rooms and SCADA-based remote monitoring.' },
  ],
};

type View = 'landing' | 'grid' | 'detail';

interface CurrentProject {
  region: RegionKey;
  index: number;
}

export default function ProjectPortfolio() {
  const [view, setView] = useState<View>('landing');
  const [currentRegion, setCurrentRegion] = useState<RegionKey>('lebanon');
  const [currentProject, setCurrentProject] = useState<CurrentProject | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const showLanding = () => {
    setView('landing');
    window.scrollTo(0, 0);
  };

  const showGrid = (region: RegionKey) => {
    setCurrentRegion(region);
    setView('grid');
    window.scrollTo(0, 0);
  };

  const showDetail = (region: RegionKey, index: number) => {
    setCurrentRegion(region);
    setCurrentProject({ region, index });
    setView('detail');
    window.scrollTo(0, 0);
  };

  const proj = currentProject ? PROJECTS[currentProject.region][currentProject.index] : null;

  // Generate the same 5 gradients + captions used by the source's renderDetail()
  const photoGrads = useMemo(() => {
    if (!currentProject) return [];
    const baseIndex = (currentProject.index * 3) % GRADIENTS.length;
    return [0, 1, 2, 3, 4].map((i) => GRADIENTS[(baseIndex + i) % GRADIENTS.length]);
  }, [currentProject]);

  const lbPhotos = useMemo(() => {
    if (!proj) return [];
    return [
      `${proj.name} — site overview`,
      `${proj.name} — panel installation`,
      `${proj.name} — mounting detail`,
      `${proj.name} — electrical works`,
      `${proj.name} — completed installation`,
    ];
  }, [proj]);

  const openLightbox = (index: number) => {
    setLbIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const lbPrev = () => setLbIndex((i) => (i - 1 + lbPhotos.length) % lbPhotos.length);
  const lbNext = () => setLbIndex((i) => (i + 1) % lbPhotos.length);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, lbPhotos.length]);

  const specs = proj
    ? [
        { label: 'Capacity', val: proj.kw },
        { label: 'Mounting', val: proj.mount },
        { label: 'Grid Type', val: proj.grid },
        { label: 'Sector', val: proj.type },
        { label: 'Location', val: proj.loc },
      ]
    : [];

  return (
    <>
      {/* ════════════════════════════════════════════
           PAGE 1 — LANDING / REGION SELECTOR
      ════════════════════════════════════════════ */}
      <div id="page-landing" className={`page${view === 'landing' ? ' active' : ''}`}>

        <div className="page-hero">
          <div className="wrap inner">
            <div className="tag">Earth Technologies</div>
            <h1>Project<br />Portfolio</h1>
            <p className="sub">Hundreds of successfully delivered renewable energy installations across Lebanon, Africa, and the Middle East — select a region to explore.</p>
            <div className="hero-foot">
              <div className="ticker-item"><strong>100+</strong>Projects delivered</div>
              <div className="ticker-item"><strong>Lebanon</strong>HQ · largest base</div>
              <div className="ticker-item"><strong>International</strong>Africa · Middle East</div>
              <div className="ticker-item"><strong>EPC</strong>Design to O&amp;M</div>
            </div>
          </div>
        </div>

        <div className="region-select">
          <div className="wrap">
            <div className="region-cards">

              {/* Lebanon */}
              <div className="region-card" onClick={() => showGrid('lebanon')}>
                <div className="bg" style={{ background: 'linear-gradient(155deg,#2e4a5e 0%,#1a2e3e 50%,#0f1e29 100%)' }}></div>
                <div className="tex"></div>
                <div className="overlay">
                  <div className="region-label">Select region</div>
                  <h3>Lebanon</h3>
                  <div className="region-count mono">36 projects · 2010 – present</div>
                </div>
                <div className="arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>

              {/* International */}
              <div className="region-card" onClick={() => showGrid('international')}>
                <div className="bg" style={{ background: 'linear-gradient(155deg,#3a5268 0%,#1c3040 50%,#111e2a 100%)' }}></div>
                <div className="tex"></div>
                <div className="overlay">
                  <div className="region-label">Select region</div>
                  <h3>International</h3>
                  <div className="region-count mono">9 countries · Africa &amp; Middle East</div>
                </div>
                <div className="arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* ════════════════════════════════════════════
           PAGE 2 — PROJECT GRID
      ════════════════════════════════════════════ */}
      <div id="page-grid" className={`page${view === 'grid' ? ' active' : ''}`}>

        <div className="sub-hero">
          <div className="wrap inner">
            <div>
              <div className="tag">Project Portfolio</div>
              <h2 id="grid-title">{currentRegion === 'lebanon' ? 'Lebanon' : 'International'}</h2>
            </div>
            <button className="back-btn" onClick={showLanding}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Back to regions
            </button>
          </div>
        </div>

        <div className="grid-section">
          <div className="wrap">
            <div className="proj-grid" id="proj-grid-container">
              {PROJECTS[currentRegion].map((p, i) => {
                const g = GRADIENTS[i % GRADIENTS.length];
                return (
                  <div className="proj-thumb" key={p.name} onClick={() => showDetail(currentRegion, i)}>
                    <div className="pbg" style={{ background: g }}></div>
                    <div className="ptex"></div>
                    <div className="poverlay">
                      <div className="ploc">{p.loc}</div>
                      <div className="pname">{p.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>


      {/* ════════════════════════════════════════════
           PAGE 3 — PROJECT DETAIL
      ════════════════════════════════════════════ */}
      <div id="page-detail" className={`page${view === 'detail' ? ' active' : ''}`}>

        <div className="sub-hero">
          <div className="wrap inner">
            <div>
              <div className="tag" id="detail-region-tag">{currentRegion === 'lebanon' ? 'Lebanon' : 'International'}</div>
              <h2 id="detail-title">{proj ? proj.name : 'Project Name'}</h2>
            </div>
            <button className="back-btn" onClick={() => showGrid(currentProject ? currentProject.region : currentRegion)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M7 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Back to projects
            </button>
          </div>
        </div>

        <div className="detail-section">
          <div className="wrap">

            {/* Spec strip */}
            <div className="spec-strip" id="detail-specs">
              {specs.map((s) => (
                <div className="spec-chip" key={s.label}>
                  <div className="slabel">{s.label}</div>
                  <div className="sval">{s.val}</div>
                </div>
              ))}
            </div>

            {/* Photo grid (2x2) */}
            <div className="detail-grid" id="detail-photos-grid">
              {[0, 1, 2, 3].map((i) => (
                <div className="detail-photo" key={i} onClick={() => openLightbox(i)}>
                  <div className="dpbg" style={{ background: photoGrads[i] }}></div>
                  <div className="dptex"></div>
                  <div className="zoom-hint"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2h4M2 2v4M12 2h-4M12 2v4M2 12h4M2 12v-4M12 12h-4M12 12v-4" stroke="currentColor" strokeWidth="1.3" /></svg></div>
                  <div className="dpnum">0{i + 1} / 05</div>
                </div>
              ))}
            </div>

            {/* Wide bottom photo */}
            <div className="detail-photo-wide" id="detail-photo-wide" onClick={() => openLightbox(4)}>
              <div className="dpbg" id="detail-wide-bg" style={{ background: photoGrads[4] }}></div>
              <div className="dptex"></div>
              <div className="zoom-hint"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2h4M2 2v4M12 2h-4M12 2v4M2 12h4M2 12v-4M12 12h-4M12 12v-4" stroke="currentColor" strokeWidth="1.3" /></svg></div>
              <div className="dpnum">05 / 05</div>
            </div>

            {/* Description */}
            <div className="proj-description" id="detail-description">
              <div><h3>{proj ? proj.name : ''}</h3></div>
              <div>
                <p style={{ fontSize: '16px', color: 'var(--steel)', lineHeight: 1.78 }}>{proj ? proj.desc : ''}</p>
                <p style={{ fontSize: '14.5px', color: 'var(--steel)', lineHeight: 1.75, marginTop: '16px', opacity: 0.8 }}>
                  Installation carried out by Earth Technologies' in-house EPC team — covering design, procurement, civil works, electrical installation, commissioning, and handover with ongoing O&amp;M support.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* ════════════════════════════════════════════
           LIGHTBOX
      ════════════════════════════════════════════ */}
      <div
        className={`lightbox${lightboxOpen ? ' open' : ''}`}
        id="lightbox"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        <button className="lb-close" onClick={closeLightbox}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
        <div className="lb-inner">
          <button className="lb-arrow prev" onClick={lbPrev}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="lb-photo">
            <div className="lbbg" id="lb-bg" style={{ background: photoGrads[lbIndex] }}></div>
            <div className="lbtex"></div>
          </div>
          <button className="lb-arrow next" onClick={lbNext}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="lb-footer">
          <span className="lb-caption" id="lb-caption">{lbPhotos[lbIndex] ?? 'Image caption'}</span>
          <span className="lb-counter"><span id="lb-cur">{lbIndex + 1}</span> / <span id="lb-total">{lbPhotos.length}</span></span>
        </div>
      </div>
    </>
  );
}
