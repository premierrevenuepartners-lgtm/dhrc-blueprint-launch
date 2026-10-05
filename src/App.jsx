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
  const { hero, stats, mission, pillars, approach, resources, faq, contact } = content;

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
            {hero.primaryCta}
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

              <ul className="trust-list" aria-label="Key commitments">
                {hero.commitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-panel" aria-label="DHRC project snapshot">
              <div className="panel-card panel-card-highlight">
                <span className="label">Launch-ready structure</span>
                <h2>{hero.panelTitle}</h2>

                <div className="status-grid">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.label}</strong>
                      <span>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="about">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">About</span>
              <h2>{mission.heading}</h2>
            </div>

            <div className="two-column">
              <div className="story-box">
                <p>{mission.body}</p>
                <p>{mission.bodyTwo}</p>
              </div>

              <div className="info-card">
                <h3>{mission.cardTitle}</h3>
                <ul>
                  {mission.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="container">
            <div className="section-heading center">
              <span className="eyebrow">Programs</span>
              <h2>{pillars.heading}</h2>
            </div>

            <div className="card-grid">
              {pillars.items.map((item) => (
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
            <div className="section-heading center">
              <span className="eyebrow">Approach</span>
              <h2>{approach.heading}</h2>
            </div>

            <div className="steps">
              {approach.steps.map((step, index) => (
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
            <div className="section-heading center">
              <span className="eyebrow">Resources</span>
              <h2>{resources.heading}</h2>
            </div>

            <div className="resource-grid">
              {resources.items.map((item) => (
                <article key={item.title} className="resource-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link}>Learn more</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted faq-section">
          <div className="container faq-wrap">
            <div className="section-heading center">
              <span className="eyebrow">FAQ</span>
              <h2>{faq.heading}</h2>
            </div>

            <div className="faq-list">
              {faq.items.map((item) => (
                <div key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
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
