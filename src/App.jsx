import content from './data/siteContent.json';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Approach', href: '#approach' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const { hero, sections, contact } = content;

  return (
    <div className="page-shell">
      <header className="topbar" id="home">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="DHRC home">
            <span className="brand-mark">DHRC</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href="#contact" className="button button-primary nav-cta">
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">DHRC Master Blueprint 3.0</span>
              <h1>{hero.title}</h1>
              <p>{hero.lead}</p>
              <div className="cta-row">
                <a href="#contact" className="button button-primary">
                  {hero.primaryCta}
                </a>
                <a href="#about" className="button button-secondary">
                  {hero.secondaryCta}
                </a>
              </div>
              <ul className="trust-list" aria-label="Key public commitments">
                {hero.commitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-panel" aria-label="DHRC project highlights">
              <div className="panel-card panel-card-highlight">
                <span className="label">Public website foundation</span>
                <h2>Built for launch, clarity, and easy updates.</h2>
                <div className="status-grid">
                  <div>
                    <strong>Core</strong>
                    <span>Public website</span>
                  </div>
                  <div>
                    <strong>Focus</strong>
                    <span>Survivor-first</span>
                  </div>
                  <div>
                    <strong>Hosting</strong>
                    <span>Free to start</span>
                  </div>
                  <div>
                    <strong>CMS</strong>
                    <span>Content-driven</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">About DHRC</span>
              <h2>{sections.about.heading}</h2>
            </div>
            <div className="two-column">
              <div>
                <p>{sections.about.body}</p>
              </div>
              <div className="info-card">
                <h3>{sections.about.cardTitle}</h3>
                <ul>
                  {sections.about.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Programs</span>
              <h2>{sections.programs.heading}</h2>
            </div>
            <div className="card-grid">
              {sections.programs.items.map((item) => (
                <article key={item.title} className="feature-card">
                  <span className="feature-icon" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="approach">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Approach</span>
              <h2>{sections.approach.heading}</h2>
            </div>
            <div className="steps">
              {sections.approach.steps.map((step, index) => (
                <div key={step.title} className="step-item">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Resources</span>
              <h2>{sections.resources.heading}</h2>
            </div>
            <div className="resource-grid">
              {sections.resources.items.map((item) => (
                <article key={item.title} className="resource-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link}>Learn more</a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>{contact.heading}</h2>
            <p>{contact.subheading}</p>
          </div>

          <form className="contact-form" action="mailto:hello@yourdomain.co.za" method="post" encType="text/plain">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="How can we help?" />
            </label>
            <button type="submit" className="button button-primary">
              {contact.button}
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
