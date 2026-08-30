import './css/Home.css';

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content wrap">
        <div className="hero-eyebrow mono">Regional EPC · Solar / Storage / Hybrid</div>
        <h1>Regional energy EPC for solar, storage &amp; hybrid power systems</h1>
        <p className="hero-sub">Engineering reliable energy infrastructure across Lebanon, Africa, and the Middle East — from rooftop arrays to grid-scale hybrid builds.</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">Start a Project →</a>
          <a href="/project-portfolio" className="btn btn-outline">View Our Work</a>
        </div>
      </div>
      <div className="ticker">
        <div className="wrap">
          <div className="ticker-item"><b>2010</b>Founded · Beirut, LB</div>
          <div className="ticker-item"><b>10</b>Countries Served</div>
          <div className="ticker-item"><b>EPC</b>Solar · Storage · Hybrid</div>
          <div className="ticker-item"><b>LB / MEA</b>Lebanon, Africa &amp; Middle East</div>
        </div>
      </div>
    </section>
  );
}
