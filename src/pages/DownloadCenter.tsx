import { useEffect, useState } from 'react';
import './css/DownloadCenter.css';

/* ══════════════════════════════
   TYPES
══════════════════════════════ */
type CategoryGroupKey = 'company' | 'technical' | 'projects' | 'compliance';
type FilterKey = 'all' | CategoryGroupKey;
type IconType = 'document' | 'technical' | 'project' | 'compliance';

interface DocCard {
  id: number;
  group: CategoryGroupKey;
  categoryLabel: string;   // text shown in .doc-category on the card
  modalCategory: string;   // category tag shown in the PDF viewer topbar
  categoryColor: string;
  previewBg?: string;      // inline override for .doc-preview background
  pdfTag: string;
  icon: IconType;
  sizeBadge: string;
  isNew?: boolean;
  title: string;
  description: string;
  date: string;
}

interface PageContent {
  h2: string;
  lines: string[];
}

interface CurrentDoc {
  title: string;
  cat: string;
  size: string;
  date: string;
}

/* ══════════════════════════════
   DATA
══════════════════════════════ */
const CATEGORY_GROUPS: { key: CategoryGroupKey; label: string; count: number }[] = [
  { key: 'company', label: 'Company', count: 3 },
  { key: 'technical', label: 'Technical', count: 4 },
  { key: 'projects', label: 'Project Profiles', count: 3 },
  { key: 'compliance', label: 'Compliance', count: 2 },
];

const FILTER_BUTTONS: { key: FilterKey; label: string; count: number }[] = [
  { key: 'all', label: 'All Documents', count: 12 },
  { key: 'company', label: 'Company', count: 3 },
  { key: 'technical', label: 'Technical', count: 4 },
  { key: 'projects', label: 'Project Profiles', count: 3 },
  { key: 'compliance', label: 'Compliance', count: 2 },
];

const TECH_PREVIEW_BG = 'linear-gradient(155deg,#1a3040 0%,#112030 60%,#0b1820 100%)';
const PROJECT_PREVIEW_BG = 'linear-gradient(155deg,#1e3848 0%,#122436 60%,#0c1a26 100%)';
const COMPLIANCE_PREVIEW_BG = 'linear-gradient(155deg,#1c3042 0%,#102030 60%,#0a1820 100%)';

const DOCS: DocCard[] = [
  // ─── COMPANY ───
  {
    id: 1,
    group: 'company',
    categoryLabel: 'Company',
    modalCategory: 'Company',
    categoryColor: 'var(--gold)',
    pdfTag: 'PDF Document',
    icon: 'document',
    sizeBadge: '2.4 MB',
    isNew: true,
    title: 'Company Profile 2025',
    description: 'Full overview of Earth Technologies — history, services, project portfolio, regional reach, and key client references.',
    date: 'Jan 2025',
  },
  {
    id: 2,
    group: 'company',
    categoryLabel: 'Company',
    modalCategory: 'Company',
    categoryColor: 'var(--gold)',
    pdfTag: 'PDF Document',
    icon: 'document',
    sizeBadge: '1.8 MB',
    title: 'Services Brochure',
    description: 'Detailed breakdown of all 12 service lines — EPC, storage, consultancy, O&M, micro-grid, and energy transition advisory.',
    date: 'Mar 2025',
  },
  {
    id: 3,
    group: 'company',
    categoryLabel: 'Company',
    modalCategory: 'Company',
    categoryColor: 'var(--gold)',
    pdfTag: 'PDF Document',
    icon: 'document',
    sizeBadge: '3.1 MB',
    title: 'Annual Capability Statement',
    description: 'Year-in-review capability statement covering completed projects, team qualifications, certifications, and regional expansion.',
    date: 'Dec 2024',
  },
  // ─── TECHNICAL ───
  {
    id: 4,
    group: 'technical',
    categoryLabel: 'Technical',
    modalCategory: 'Technical',
    categoryColor: 'var(--steel)',
    previewBg: TECH_PREVIEW_BG,
    pdfTag: 'Technical Spec',
    icon: 'technical',
    sizeBadge: '4.2 MB',
    title: 'BESS Technical Datasheet',
    description: 'Full specifications for our containerised battery energy storage systems — capacity range, chemistry, BMS, and integration requirements.',
    date: 'Feb 2025',
  },
  {
    id: 5,
    group: 'technical',
    categoryLabel: 'Technical',
    modalCategory: 'Technical',
    categoryColor: 'var(--steel)',
    previewBg: TECH_PREVIEW_BG,
    pdfTag: 'Technical Spec',
    icon: 'technical',
    sizeBadge: '2.9 MB',
    title: 'Solar PV System Design Guide',
    description: 'Engineering guidelines for rooftop and ground-mount solar PV design — load analysis, sizing methodology, inverter selection, and grid connection.',
    date: 'Nov 2024',
  },
  {
    id: 6,
    group: 'technical',
    categoryLabel: 'Technical',
    modalCategory: 'Technical',
    categoryColor: 'var(--steel)',
    previewBg: TECH_PREVIEW_BG,
    pdfTag: 'Technical Spec',
    icon: 'technical',
    sizeBadge: '1.6 MB',
    isNew: true,
    title: 'Micro-Grid Architecture Overview',
    description: 'Technical overview of micro-grid system architecture — control logic, islanding protection, SCADA integration, and off-grid transition protocols.',
    date: 'Apr 2025',
  },
  {
    id: 7,
    group: 'technical',
    categoryLabel: 'Technical',
    modalCategory: 'Technical',
    categoryColor: 'var(--steel)',
    previewBg: TECH_PREVIEW_BG,
    pdfTag: 'Technical Spec',
    icon: 'technical',
    sizeBadge: '3.8 MB',
    title: 'O&M Service Manual',
    description: 'Operations and maintenance procedures for installed solar and storage systems — inspection schedules, fault codes, and remote monitoring setup.',
    date: 'Jan 2025',
  },
  // ─── PROJECT PROFILES ───
  {
    id: 8,
    group: 'projects',
    categoryLabel: 'Project Profile',
    modalCategory: 'Projects',
    categoryColor: 'var(--gold-light)',
    previewBg: PROJECT_PREVIEW_BG,
    pdfTag: 'Project Profile',
    icon: 'project',
    sizeBadge: '5.4 MB',
    title: 'Lebanon Portfolio 2024',
    description: 'Showcase of completed Lebanon projects — site photography, system specs, client names, and performance data across 36 installations.',
    date: 'Dec 2024',
  },
  {
    id: 9,
    group: 'projects',
    categoryLabel: 'Project Profile',
    modalCategory: 'Projects',
    categoryColor: 'var(--gold-light)',
    previewBg: PROJECT_PREVIEW_BG,
    pdfTag: 'Project Profile',
    icon: 'project',
    sizeBadge: '4.7 MB',
    isNew: true,
    title: 'International Projects — Africa & MEA',
    description: 'Case studies from West Africa, East Africa, and the Middle East — off-grid micro-grids, donor-funded installations, and C&I deployments.',
    date: 'Mar 2025',
  },
  {
    id: 10,
    group: 'projects',
    categoryLabel: 'Project Profile',
    modalCategory: 'Projects',
    categoryColor: 'var(--gold-light)',
    previewBg: PROJECT_PREVIEW_BG,
    pdfTag: 'Project Profile',
    icon: 'project',
    sizeBadge: '2.2 MB',
    title: 'Storage & Hybrid Systems Showcase',
    description: 'Selected BESS and hybrid project profiles — system architecture, performance metrics, and client outcomes from Lebanon and international sites.',
    date: 'Feb 2025',
  },
  // ─── COMPLIANCE ───
  {
    id: 11,
    group: 'compliance',
    categoryLabel: 'Compliance',
    modalCategory: 'Compliance',
    categoryColor: '#4a7a5a',
    previewBg: COMPLIANCE_PREVIEW_BG,
    pdfTag: 'Compliance',
    icon: 'compliance',
    sizeBadge: '1.1 MB',
    title: 'HSE Policy & Procedures',
    description: 'Earth Technologies Health, Safety & Environment policy — site safety standards, risk assessment frameworks, and incident reporting procedures.',
    date: 'Jan 2025',
  },
  {
    id: 12,
    group: 'compliance',
    categoryLabel: 'Compliance',
    modalCategory: 'Compliance',
    categoryColor: '#4a7a5a',
    previewBg: COMPLIANCE_PREVIEW_BG,
    pdfTag: 'Compliance',
    icon: 'compliance',
    sizeBadge: '0.8 MB',
    title: 'Quality Management Certificate',
    description: 'ISO quality management certification and associated documentation — scope of certification, audit history, and quality assurance standards applied.',
    date: 'Oct 2024',
  },
];

// Simulated page content shared by every document (matches source's `pageContents.default`)
const PAGE_CONTENTS: PageContent[] = [
  { h2: 'Cover Page', lines: ['long', 'med', 'short'] },
  { h2: 'Table of Contents', lines: ['med', 'long', 'short', 'med', 'long', 'short'] },
  { h2: 'Introduction', lines: ['long', 'med', 'long', 'short', 'long', 'med', 'long'] },
  { h2: 'Technical Details', lines: ['long', 'med', 'long', 'med', 'short', 'long', 'med', 'long'] },
  { h2: 'Conclusion & Contact', lines: ['med', 'long', 'short', 'med', 'long'] },
];

function getPageContent(pageNum: number): PageContent {
  return PAGE_CONTENTS[(pageNum - 1) % PAGE_CONTENTS.length];
}

const PAGE_W_BASE = 620;
const PAGE_H_BASE = 877; // A4 ratio
const TOTAL_PAGES = 5;

/* ══════════════════════════════
   ICONS
══════════════════════════════ */
function DocIcon({ type }: { type: IconType }) {
  if (type === 'technical') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="22" height="28" rx="1.5" />
        <path d="M18 8v28" />
        <line x1="8" y1="14" x2="14" y2="14" />
        <line x1="8" y1="19" x2="14" y2="19" />
        <line x1="8" y1="24" x2="14" y2="24" />
        <path d="M30 14h6M30 20h6M30 26h4" strokeWidth="1.2" />
        <path d="M26 12l6-4v24l-6-4" />
      </svg>
    );
  }
  if (type === 'project') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="14" height="14" rx="1" />
        <rect x="6" y="24" width="14" height="10" rx="1" />
        <rect x="24" y="6" width="10" height="28" rx="1" />
        <line x1="9" y1="11" x2="17" y2="11" strokeWidth="1.2" />
        <line x1="9" y1="15" x2="14" y2="15" strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === 'compliance') {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4 L8 10v10c0 9 7 16 12 18 5-2 12-9 12-18V10Z" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    );
  }
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4h14l10 10v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M24 4v10h10" />
      <line x1="14" y1="20" x2="26" y2="20" />
      <line x1="14" y1="26" x2="22" y2="26" />
    </svg>
  );
}

function ViewIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 6s2-4 5-4 5 4 5 4-2 4-5 4-5-4-5-4Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v7M3 6l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ══════════════════════════════
   COMPONENT
══════════════════════════════ */
export default function DownloadCenter() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<CurrentDoc | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomPct, setZoomPct] = useState(100);

  const openPdfViewer = (title: string, cat: string, size: string, date: string) => {
    setCurrentDoc({ title, cat, size, date });
    setCurrentPage(1);
    setZoomPct(100);
    setIsModalOpen(true);
  };

  const closePdfViewer = () => setIsModalOpen(false);

  const changePage = (dir: number) => {
    setCurrentPage(prev => {
      const next = prev + dir;
      if (next < 1 || next > TOTAL_PAGES) return prev;
      return next;
    });
  };

  const jumpToPage = (n: number) => setCurrentPage(n);

  const changeZoom = (delta: number) => {
    setZoomPct(prev => Math.min(200, Math.max(50, prev + delta)));
  };

  // Lock page scroll while the viewer is open (mirrors document.body.style.overflow toggling)
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  // Keyboard nav — only active while the modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changePage(-1);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePage(1);
      if (e.key === 'Escape') closePdfViewer();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const pg = getPageContent(currentPage);
  const pageWidth = Math.round(PAGE_W_BASE * zoomPct / 100);
  const pageHeight = Math.round(PAGE_H_BASE * zoomPct / 100);

  return (
    <>
      {/* ══════════════════════════════════════════
           PAGE HERO
      ══════════════════════════════════════════ */}
      <div className="page-hero">
        <div className="wrap inner">
          <div className="tag">Earth Technologies</div>
          <h1>Download<br />Center</h1>
          <p className="sub">Technical datasheets, company brochures, project profiles, and compliance documents — all available for download in PDF format.</p>
          <div className="hero-foot">
            <div className="ticker-item"><strong>12 Documents</strong>Available now</div>
            <div className="ticker-item"><strong>PDF</strong>All formats</div>
            <div className="ticker-item"><strong>4 Categories</strong>Organised by type</div>
            <div className="ticker-item"><strong>Free</strong>No login required</div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           FILTER BAR
      ══════════════════════════════════════════ */}
      <div className="filter-bar">
        <div className="wrap filter-inner">
          {FILTER_BUTTONS.map(btn => (
            <button
              key={btn.key}
              className={`filter-btn${activeFilter === btn.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(btn.key)}
            >
              {btn.label} <span className="filter-count">{btn.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
           DOWNLOADS
      ══════════════════════════════════════════ */}
      <div className="downloads-section">
        <div className="wrap">

          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow gold">Document Library</div>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', marginBottom: 16 }}>All documents</h2>
            <p style={{ fontSize: 16, color: 'var(--steel)', lineHeight: 1.75, maxWidth: '58ch' }}>
              Select a category above to filter, or browse all documents below. New files are added regularly — check back for updates.
            </p>
          </div>

          {CATEGORY_GROUPS.map(group => {
            const groupDocs = DOCS.filter(d => d.group === group.key);
            const placeholderCount = (4 - (groupDocs.length % 4)) % 4;
            const isVisible = activeFilter === 'all' || activeFilter === group.key;

            return (
              <div
                key={group.key}
                className="cat-group"
                data-cat={group.key}
                style={{ display: isVisible ? 'block' : 'none' }}
              >
                <div className="cat-label">
                  <h3>{group.label}</h3>
                  <span className="cat-count">{group.count} documents</span>
                </div>
                <div className="doc-grid">
                  {groupDocs.map(doc => (
                    <div className="doc-card" data-category={doc.group} key={doc.id}>
                      <div className="doc-preview" style={doc.previewBg ? { background: doc.previewBg } : undefined}>
                        <div className="cat-stripe" style={{ background: doc.categoryColor }}></div>
                        <div className="pdf-icon">
                          <DocIcon type={doc.icon} />
                          <span className="pdf-tag">{doc.pdfTag}</span>
                        </div>
                        <div className="size-badge">{doc.sizeBadge}</div>
                        {doc.isNew && <div className="new-badge">New</div>}
                      </div>
                      <div className="doc-body">
                        <div className="doc-category" style={{ color: doc.categoryColor }}>{doc.categoryLabel}</div>
                        <div className="doc-title">{doc.title}</div>
                        <p className="doc-desc">{doc.description}</p>
                      </div>
                      <div className="doc-footer">
                        <div className="doc-meta">
                          <span>PDF · {doc.sizeBadge}</span>
                          <span className="date">Updated {doc.date}</span>
                        </div>
                        <div className="doc-footer-btns">
                          <button
                            className="view-btn"
                            onClick={() => openPdfViewer(doc.title, doc.modalCategory, doc.sizeBadge, doc.date)}
                          >
                            <ViewIcon />
                            View
                          </button>
                          <a href="#" className="download-btn" download>
                            <DownloadIcon />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  {Array.from({ length: placeholderCount }).map((_, i) => (
                    <div style={{ visibility: 'hidden' }} className="doc-card" aria-hidden="true" key={`placeholder-${group.key}-${i}`}></div>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* ══════════════════════════════════════════
           BOTTOM CTA
      ══════════════════════════════════════════ */}
      <div className="cta-strip">
        <div className="wrap cta-inner">
          <div className="cta-text">
            <h2>Need a specific document?</h2>
            <p>If you're looking for a document that isn't listed here — a specific project profile, technical specification, or compliance certificate — get in touch and we'll prepare it for you.</p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', minWidth: 0, maxWidth: '100%' }}>
            <a href="#" className="btn-gold">Contact Our Team →</a>
            <a href="#" className="btn-outline">info@earthtechnologies.com</a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
           PDF VIEWER MODAL
      ══════════════════════════════════════════ */}
      <div className={`pdf-modal${isModalOpen ? ' open' : ''}`} id="pdfModal">

        {/* Top bar */}
        <div className="pdf-topbar">
          <div className="pdf-topbar-left">
            <span className="pdf-doc-tag" id="modalCatTag">{currentDoc?.cat ?? 'Company'}</span>
            <span className="pdf-doc-name" id="modalDocName">{currentDoc?.title ?? 'Document Title'}</span>
          </div>
          <div className="pdf-topbar-right">
            <button className="pdf-tb-btn gold" id="modalDownloadBtn">
              <DownloadIcon />
              Download PDF
            </button>
            <button className="pdf-tb-btn outline" onClick={closePdfViewer}>
              <CloseIcon />
              Close
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="pdf-body">

          {/* Sidebar thumbnails */}
          <div className="pdf-sidebar" id="pdfSidebar">
            <div className="pdf-sidebar-label">Pages</div>
            {Array.from({ length: TOTAL_PAGES }).map((_, idx) => {
              const pageNum = idx + 1;
              const thumbContent = getPageContent(pageNum);
              return (
                <div
                  key={pageNum}
                  className={`pdf-thumb${pageNum === currentPage ? ' active' : ''}`}
                  id={`thumb-${pageNum}`}
                  onClick={() => jumpToPage(pageNum)}
                >
                  <div className="pdf-thumb-lines">
                    {thumbContent.lines.slice(0, 6).map((_, lineIdx) => (
                      <span key={lineIdx}></span>
                    ))}
                  </div>
                  <div className="pdf-thumb-num">{pageNum}</div>
                </div>
              );
            })}
          </div>

          {/* Viewer area */}
          <div className="pdf-viewer-area">

            {/* Toolbar */}
            <div className="pdf-toolbar">
              <div className="pdf-page-nav">
                <button className="pdf-nav-btn" id="prevPage" onClick={() => changePage(-1)} disabled={currentPage <= 1}>
                  <ChevronLeftIcon />
                </button>
                <span className="pdf-page-indicator">Page <span id="curPageNum">{currentPage}</span> of <span id="totalPageNum">{TOTAL_PAGES}</span></span>
                <button className="pdf-nav-btn" id="nextPage" onClick={() => changePage(1)} disabled={currentPage >= TOTAL_PAGES}>
                  <ChevronRightIcon />
                </button>
              </div>
              <div className="pdf-divider"></div>
              <div className="pdf-zoom-group">
                <button className="pdf-zoom-btn" onClick={() => changeZoom(-10)}>−</button>
                <span className="pdf-zoom-level" id="zoomLevel">{zoomPct}%</span>
                <button className="pdf-zoom-btn" onClick={() => changeZoom(10)}>+</button>
              </div>
              <div className="pdf-divider"></div>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }} id="modalFileMeta">
                PDF · {currentDoc?.size ?? '2.4 MB'}
              </span>
            </div>

            {/* Page display */}
            <div className="pdf-page-display" id="pdfPageDisplay">
              <div className="pdf-page" id="pdfPage" style={{ width: pageWidth, height: pageHeight }}>
                <div className="pdf-watermark" id="pdfWatermark">Earth Technologies</div>
                <div className="pdf-page-content" id="pdfPageContent">
                  <div className="pdf-page-header">
                    <div className="pdf-page-logo">Earth <span>Technologies</span></div>
                    <div className="pdf-page-title-block">
                      <div className="pdf-page-doc-title">{currentDoc?.title ?? 'Document Title'}</div>
                    </div>
                  </div>
                  <div className="pdf-content-lines">
                    {currentPage === 1 ? (
                      <>
                        <div className="pdf-content-h1">{currentDoc?.title ?? 'Document Title'}</div>
                        <div className="pdf-line gold"></div>
                      </>
                    ) : (
                      <div className="pdf-content-h2">{pg.h2}</div>
                    )}
                    {pg.lines.map((l, i) => (
                      <div className={`pdf-line ${l}`} key={`main-${i}`}></div>
                    ))}
                    <div className="pdf-line gold"></div>
                    {pg.lines.slice(0, 3).map((l, i) => (
                      <div className={`pdf-line ${l}`} key={`extra-${i}`}></div>
                    ))}
                  </div>
                  <div className="pdf-page-footer">
                    <span>Earth Technologies · Confidential</span>
                    <span>Page {currentPage} of {TOTAL_PAGES}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /pdf-viewer-area */}
        </div>{/* /pdf-body */}
      </div>{/* /pdf-modal */}
    </>
  );
}
