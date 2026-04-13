import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="section section-hero">
        <div className="hero-layout">
          <div className="hero-text">
            <p className="eyebrow">Akın Öztorun · Senior Frontend Engineer</p>
            <h1 className="hero-title">
              Contracts, slices, and calm releases.
            </h1>
            <p className="hero-lead">
              I help product teams ship thin vertical slices that match real
              data, not guesses. Contract first, clear quality checks, and UI
              that fits the rest of the system.
            </p>
            <div className="hero-actions">
              <Link
                href="mailto:hi@akinoztorun.dev"
                className="button button-primary"
              >
                Email me
              </Link>
              <Link
                href="https://www.linkedin.com/in/oztorun"
                className="button button-ghost"
                target="_blank"
              >
                View LinkedIn
              </Link>
              <Link
                href="https://ownershipinpractice.substack.com"
                className="button button-ghost"
                target="_blank"
              >
                Read the newsletter
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <p className="hero-card-label">What I do best</p>
            <ul className="hero-chip-list">
              <li className="chip">API first frontend work</li>
              <li className="chip">Vertical slices</li>
              <li className="chip">Quality in CI</li>
              <li className="chip">Performance and reliability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Selected projects</h2>
          <p className="section-subtitle">
            Architecture demos that show how I approach contracts, data
            fetching, and quality.
          </p>
        </header>

        <div className="card-grid">
          <article className="card">
            <header className="card-header">
              <h3 className="card-title">Energy portfolio slice</h3>
              <span className="pill">Full stack</span>
            </header>
            <p className="card-body-text">
              An architecture demo modelling customers, projects, and assets
              with a typed GraphQL contract and a thin React UI on top.
            </p>
            <div className="card-tag-row">
              <span className="tag">TypeScript</span>
              <span className="tag">GraphQL</span>
              <span className="tag">React</span>
              <span className="tag">Node</span>
            </div>
            <div className="card-actions">
              <Link
                href="https://github.com/akin-oz/energy-portfolio-slice"
                target="_blank"
                className="button button-secondary"
              >
                View repository
              </Link>
            </div>
          </article>

          <article className="card">
            <header className="card-header">
              <h3 className="card-title">Next SWR quality demo</h3>
              <span className="pill">Frontend</span>
            </header>
            <p className="card-body-text">
              Next.js app that shows how I handle data fetching, caching,
              loading states, and error paths with SWR and a clear quality
              setup.
            </p>
            <div className="card-tag-row">
              <span className="tag">Next.js</span>
              <span className="tag">SWR</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Testing</span>
            </div>
            <div className="card-actions">
              <Link
                href="https://next-swr-quality-demo.vercel.app/"
                target="_blank"
                className="button button-primary"
              >
                Live demo
              </Link>
              <Link
                href="https://github.com/akin-oz/next-swr-quality-demo"
                target="_blank"
                className="button button-secondary"
              >
                View repository
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Writing */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Writing</h2>
          <p className="section-subtitle">
            Short, practical pieces for engineers who want more ownership.
          </p>
        </header>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Clarify Before You Code</h3>
            <span className="pill">Newsletter</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              A growing series on contracts, slices, and small habits that make
              teams calmer and faster. Focus is on real tickets, not theory.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://ownershipinpractice.substack.com"
              target="_blank"
              className="button button-secondary"
            >
              Read on Substack
            </Link>
          </div>
        </article>
      </section>

      {/* Experience */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Nine years owning frontend in product teams.
          </p>
        </header>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Senior Frontend Engineer (Freelance)</h3>
            <span className="pill">Proxify · 2025–present</span>
          </header>
          <p className="card-body-text">
            Frontend architecture owner for a Vue 3 / Nuxt platform. Led a Nuxt
            4 migration to Feature-Sliced Design, established a token-driven
            design system over PrimeVue, and introduced structured observability
            with Mixpanel and Sentry.
          </p>
          <div className="card-tag-row">
            <span className="tag">Vue.js</span>
            <span className="tag">Nuxt.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">FSD</span>
            <span className="tag">Storybook</span>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Senior Software Engineer</h3>
            <span className="pill">Proxify · 2022–2025</span>
          </header>
          <p className="card-body-text">
            Owned an ATS funnel processing ~400K applications/year. Increased
            completion from 39% to 65% through instrumentation-driven iteration.
            Built a shared UI component library, instituted Lighthouse CI and
            SonarQube, and received the Proxify Quality Award 2024.
          </p>
          <div className="card-tag-row">
            <span className="tag">Vue.js</span>
            <span className="tag">Nuxt.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">CI/CD</span>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Frontend Engineer</h3>
            <span className="pill">Skeyl · 2016–2022</span>
          </header>
          <p className="card-body-text">
            Primary React/TypeScript owner for client SPAs and dashboards.
            Raised Lighthouse scores from the 40s to the 90s. Built backend
            utilities with Node.js and AWS Lambda.
          </p>
          <div className="card-tag-row">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Node.js</span>
            <span className="tag">AWS Lambda</span>
          </div>
        </article>
      </section>

      {/* How I work */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">How I work</h2>
          <p className="section-subtitle">
            What it is like to ship a slice together.
          </p>
        </header>

        <article className="card card-wide card-how">
          <div className="how-grid">
            <div className="how-item">
              <div className="how-number">1</div>
              <div className="how-content">
                <h3 className="how-title">Contracts first</h3>
                <p className="how-text">
                  Agree on the API and data shapes before building screens.
                  Generate types, mock early, and keep a simple contract check
                  in CI.
                </p>
              </div>
            </div>

            <div className="how-item">
              <div className="how-number">2</div>
              <div className="how-content">
                <h3 className="how-title">Vertical slices</h3>
                <p className="how-text">
                  Own one slice end to end, from user goal to contract, UI
                  states, monitoring, and a calm rollout plan.
                </p>
              </div>
            </div>

            <div className="how-item">
              <div className="how-number">3</div>
              <div className="how-content">
                <h3 className="how-title">Quality in the pipeline</h3>
                <p className="how-text">
                  Linting, tests, code checks, and basic performance checks live
                  in CI so they run on every change, not only before big
                  releases.
                </p>
              </div>
            </div>

            <div className="how-item">
              <div className="how-number">4</div>
              <div className="how-content">
                <h3 className="how-title">Clear collaboration</h3>
                <p className="how-text">
                  Ask precise questions, write short docs, and make trade offs
                  visible so others can decide with you, not after you.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Contact */}
      <section className="section section-last">
        <header className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            For roles, slices, or just to talk about product engineering.
          </p>
        </header>

        <article className="card card-wide">
          <p className="card-body-text">
            Best fit: product companies in EU time zones that care about
            contracts, tests, and clear ownership.
          </p>
          <div className="card-actions">
            <Link
              href="mailto:hi@akinoztorun.dev"
              className="button button-primary"
            >
              Email me
            </Link>
            <Link
              href="https://www.linkedin.com/in/oztorun"
              target="_blank"
              className="button button-ghost"
            >
              LinkedIn
            </Link>
          </div>
        </article>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>
            © {new Date().getFullYear()} Akın Oztorun. All rights reserved.
          </span>
          <div className="footer-links">
            <Link href="https://github.com/akin-oz" target="_blank">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/oztorun" target="_blank">
              LinkedIn
            </Link>
            <Link
              href="https://ownershipinpractice.substack.com"
              target="_blank"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
