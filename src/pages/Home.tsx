import './css/Home.css';

export default function Home() {
  return (
    <section className="home-hero" id="home">
      <div className="home-hero-content wrap">
        <div className="hero-eyebrow mono">Energy EPC / Engineering / Procurement / Construction</div>
        <h1>Energy EPC Across Africa &amp; The Middle East</h1>
        <p className="home-hero-sub">Engineering, procurement and construction for energy infrastructure across Africa and the Middle East. Our experience spans solar, storage and hybrid systems, with current involvement in a major gas development in Gabon.</p>
        <p className="home-hero-sub">Featured Project: Major Gas Development – Gabon</p>
        <div className="home-hero-ctas">
          {/* <a href="/contact" className="btn btn-primary">Start a Project →</a> */}
          <a href="/project-portfolio" className="btn btn-outline">View Our Work</a>
        </div>
      </div>
      <div className="ticker">
        <div className="wrap">
          <div className="home-ticker-item"><b>2010</b>Established in</div>
          <div className="home-ticker-item"><b>10+</b>Countries Served</div>
          <div className="home-ticker-item"><b>EPC</b>Engineering · Procurement · Construction · Gas</div>
          <div className="home-ticker-item"><b>REGIONAL REACH</b>Africa &amp; the Middle East</div>
        </div>
      </div>
    </section>
  );
}
