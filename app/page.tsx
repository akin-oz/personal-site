import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="section section-hero">
        <div className="hero-layout">
          <div className="hero-text">
            <p className="eyebrow">Akın Öztorun · Senior Product Engineer</p>
            <h1 className="hero-title">
              Nine years finding the missing wires.
            </h1>
            <p className="hero-lead">
              The right architecture doesn&apos;t fail silently. Missing
              connections do. I instrument before I build, fix root causes
              before I patch, and wire prevention into CI so the same bug
              can&apos;t ship twice. My last funnel handled 400K applications
              a year; I took it from 39% to 65% by measuring first.
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
            <p className="hero-card-label">Track record</p>
            <div className="how-grid">
              <div className="how-item">
                <div className="how-content">
                  <h3 className="how-title">9+ years</h3>
                  <p className="how-text">product teams</p>
                </div>
              </div>
              <div className="how-item">
                <div className="how-content">
                  <h3 className="how-title">400K apps/year</h3>
                  <p className="how-text">system scale</p>
                </div>
              </div>
              <div className="how-item">
                <div className="how-content">
                  <h3 className="how-title">39% → 65%</h3>
                  <p className="how-text">funnel completion</p>
                </div>
              </div>
            </div>
            <p className="hero-card-note">
              Best fit: product teams in EU time zones that care about
              contracts, tests, and clear ownership. Teams that treat AI
              tooling as infrastructure, not autocomplete.
            </p>
          </div>
        </div>
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
            <h3 className="card-title">Senior Frontend Engineer</h3>
            <span className="pill">Proxify · 2025–present</span>
          </header>
          <p className="card-body-text">
            Architecture owner for a Vue 3 / Nuxt platform at a
            400K-application-per-year scale. Drove a Nuxt 4 migration to
            Feature-Sliced Design to enforce clear ownership boundaries.
            Established a token-driven design system over PrimeVue and
            introduced structured observability with Mixpanel and Sentry.
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
            Owned an ATS funnel processing 400K applications a year. Took
            completion from 39% to 65% by instrumenting first: measuring where
            users dropped, forming hypotheses, shipping targeted fixes,
            confirming with data. Built the shared UI component library, added
            Lighthouse CI and SonarQube, and received the Proxify Quality
            Award 2024.
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
            Moved Lighthouse scores from the 40s to the 90s, making performance
            regressions visible before they reached users. Built backend
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

            <div className="how-item">
              <div className="how-number">5</div>
              <div className="how-content">
                <h3 className="how-title">Agentic engineering</h3>
                <p className="how-text">
                  Claude Code runs as a configured system, not a chat window.
                  CLAUDE.md encodes stop rules and architectural constraints.
                  Hooks enforce what CLAUDE.md requests. The model gets routed
                  by task complexity. Every correction becomes a permanent
                  guardrail visible in git history. The loop improves itself.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Engineering decisions */}
      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Engineering decisions</h2>
          <p className="section-subtitle">
            Architecture Decision Records from production work. The context, the
            call, the rejected alternatives, and what I&apos;d do differently.
          </p>
        </header>

        <article className="card card-wide">
          <p className="card-body-text">
            14 ADRs spanning community platforms, a 400K-application ATS, a
            German legal-tech platform, and agentic tooling. Each one is a real
            decision under real constraints — incomplete specs, solo ownership,
            federated teams, production pressure. If you&apos;re evaluating me
            for senior or staff scope, start with the reversals: that&apos;s
            where the signal is.
          </p>
          <div className="card-tag-row">
            <span className="tag">Architecture</span>
            <span className="tag">Quality gates</span>
            <span className="tag">Contracts</span>
            <span className="tag">Observability</span>
            <span className="tag">Agentic tooling</span>
          </div>
          <div className="card-actions">
            <Link
              href="https://github.com/akin-oz/engineering-decisions"
              target="_blank"
              className="button button-primary"
            >
              Browse all 14 ADRs
            </Link>
          </div>
        </article>

        <div className="card-grid">
          <article className="card">
            <header className="card-header">
              <h3 className="card-title">
                Fix instrumentation before fixing UX
              </h3>
              <span className="pill">ADR-006</span>
            </header>
            <p className="card-body-text">
              The ATS funnel was at 39%. The team wanted to redesign screens. I
              refused scope until we could measure where users actually dropped.
              Instrumentation first, hypotheses second, UX changes third.
              Completion moved 39% → 65% across ~400K applications/year.
            </p>
            <div className="card-actions">
              <Link
                href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/006-instrumentation-before-ux-ats-funnel.md"
                target="_blank"
                className="button button-secondary"
              >
                Read ADR
              </Link>
            </div>
          </article>

          <article className="card">
            <header className="card-header">
              <h3 className="card-title">
                SonarQube + semantic release as CI gates
              </h3>
              <span className="pill">ADR-007</span>
            </header>
            <p className="card-body-text">
              Code review culture had plateaued. I wired SonarQube and semantic
              release into CI so quality and versioning became structural, not
              cultural. UI bugs dropped ~60%. Every deploy is versioned and
              linked back to its Sentry release.
            </p>
            <div className="card-actions">
              <Link
                href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/007-sonarqube-semantic-release-quality-gates.md"
                target="_blank"
                className="button button-secondary"
              >
                Read ADR
              </Link>
            </div>
          </article>

          <article className="card">
            <header className="card-header">
              <h3 className="card-title">Decisions I reversed</h3>
              <span className="pill">ADR-010</span>
            </header>
            <p className="card-body-text">
              The honest one. What I got wrong across projects, what changed my
              mind, and what the second version looked like. Senior engineering
              is learning in public — this is the one recruiters should read
              first if they want to see how I actually work.
            </p>
            <div className="card-actions">
              <Link
                href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/010-reversed-decisions.md"
                target="_blank"
                className="button button-secondary"
              >
                Read ADR
              </Link>
            </div>
          </article>
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
              <h3 className="card-title">PropertyOS — debugging investigation</h3>
              <span className="pill">Multi-tenant · Python</span>
            </header>
            <p className="card-body-text">
              Multi-tenant rental ops platform with the right infrastructure
              and none of it wired together. Traced 14 production-class
              failures — cross-tenant cache poisoning, float() on money
              totals, fail-open auth exposing real client data, PII in
              telemetry. Each bug ships with a postmortem and regression
              test; a Playwright tenant-switch test and three convention
              lints now block the whole class at CI.
            </p>
            <div className="card-tag-row">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">React</span>
              <span className="tag">Redis</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="card-actions">
              <Link
                href="https://github.com/akin-oz/propertyos-debug-investigation"
                target="_blank"
                className="button button-secondary"
              >
                View repository
              </Link>
            </div>
          </article>

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
            <h3 className="card-title">How to Write Agent-Ready Tickets Before AI Breaks Your Product</h3>
            <span className="pill">Newsletter · Apr 2026</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              Agents don&apos;t clarify vague requirements. They hallucinate. Here&apos;s the 5-part template that makes tickets agent-ready before a single line is written.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://ownershipinpractice.substack.com/p/how-to-write-agent-ready-tickets"
              target="_blank"
              className="button button-secondary"
            >
              Read article
            </Link>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Incidents Are Product Work</h3>
            <span className="pill">Newsletter · Dec 2025</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              Most teams treat incidents as interruptions. Failures are not
              distractions from product work. They are product work, just
              revealed under stress.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://ownershipinpractice.substack.com/p/incidents-are-product-work"
              target="_blank"
              className="button button-secondary"
            >
              Read article
            </Link>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Ownership of a Vertical Slice</h3>
            <span className="pill">Newsletter · Dec 2025</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              Most features break for boring reasons. Not complex code — thin
              responsibility. Here is what it looks like when one person owns
              the outcome end to end.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://ownershipinpractice.substack.com/p/ownership-of-a-vertical-slice"
              target="_blank"
              className="button button-secondary"
            >
              Read article
            </Link>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Contracts First. Screens Second.</h3>
            <span className="pill">Newsletter · Nov 2025</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              Agree the shape once. Generate types. Mock with MSW. Guard in CI.
              Then build the screen. Not the other way around.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://ownershipinpractice.substack.com/p/contracts-first-screens-second"
              target="_blank"
              className="button button-secondary"
            >
              Read article
            </Link>
          </div>
        </article>

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">Ownership in Practice</h3>
            <span className="pill">Newsletter · Ongoing</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              A growing series on contracts, slices, and small habits that make
              teams calmer and faster. Seven issues published. New ones every
              Tuesday.
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

        <article className="card card-wide">
          <header className="card-header">
            <h3 className="card-title">What 14 bugs taught me about trust</h3>
            <span className="pill">Investigation notes</span>
          </header>
          <div className="card-body">
            <p className="card-body-text">
              What the PropertyOS investigation revealed about how production
              systems fail silently: the right infrastructure, none of it wired
              together.
            </p>
          </div>
          <div className="card-actions">
            <Link
              href="https://github.com/akin-oz/propertyos-debug-investigation/blob/main/NOTES.md"
              target="_blank"
              className="button button-secondary"
            >
              View notes
            </Link>
          </div>
        </article>
      </section>

      {/* Contact */}
      <section className="section section-last">
        <header className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to senior and staff product engineer roles in product companies.
          </p>
        </header>

        <article className="card card-wide">
          <p className="card-body-text">
            Based in EU time zones. Available for remote or hybrid positions. Let&#39;s talk.
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
            <Link
              href="https://github.com/akin-oz/engineering-decisions"
              target="_blank"
            >
              Decisions
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
