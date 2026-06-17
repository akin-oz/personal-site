import Link from "next/link";
import { fetchSubstackPosts } from "./lib/substack-feed";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await fetchSubstackPosts();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="site-layout">
        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div className="sidebar-identity">
            <span className="sidebar-name">Akın Öztorun</span>
            <span className="sidebar-role">Senior Product Engineer</span>
            <span className="sidebar-status">
              <span className="status-dot" aria-hidden="true" />
              available · EU time zones
            </span>
          </div>

          <hr className="sidebar-divider" />

          <div className="sidebar-stats">
            <div className="sidebar-stat">
              <span className="sidebar-stat-number">9+</span>
              <span className="sidebar-stat-label">years on product teams</span>
            </div>
            <div className="sidebar-stat">
              <span className="sidebar-stat-number">400K</span>
              <span className="sidebar-stat-label">applications / year</span>
            </div>
            <div className="sidebar-stat">
              <span className="sidebar-stat-number">39→65%</span>
              <span className="sidebar-stat-label">funnel completion</span>
            </div>
          </div>

          <hr className="sidebar-divider" />

          <nav className="sidebar-nav" aria-label="Page sections">
            <Link href="#experience" className="sidebar-nav-link">Experience</Link>
            <Link href="#how" className="sidebar-nav-link">How I work</Link>
            <Link href="#decisions" className="sidebar-nav-link">Decisions</Link>
            <Link href="#projects" className="sidebar-nav-link">Projects</Link>
            <Link href="#writing" className="sidebar-nav-link">Writing</Link>
            <Link href="#contact" className="sidebar-nav-link">Contact</Link>
          </nav>

          <hr className="sidebar-divider" />

          <div className="sidebar-actions">
            <Link href="mailto:akin@akinoztorun.dev" className="button button-primary">
              Email me
            </Link>
            <Link
              href="https://www.linkedin.com/in/oztorun"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ghost"
            >
              LinkedIn
            </Link>
          </div>
        </aside>

        {/* ── Main ── */}
        <main id="main" className="main">
          <header className="main-header">
            <p className="site-lead">Nine years finding the missing wires.</p>
            <p className="site-sublead">
              The right architecture doesn&apos;t fail silently. Missing
              connections do. I instrument before I build, fix root causes
              before I patch, and wire prevention into CI so the same bug
              can&apos;t ship twice.
            </p>
          </header>

          {/* Experience */}
          <section id="experience" className="doc-section">
            <h2 className="doc-section-title">Experience</h2>

            <article className="record">
              <div className="record-head">
                <div className="record-ident">
                  <h3 className="record-title">Senior Frontend Engineer</h3>
                  <span className="record-org">Proxify</span>
                </div>
                <span className="record-period">2025–present</span>
              </div>
              <div className="record-body">
                <div className="record-body-main">
                  <p className="record-text">
                    Architecture owner for a Vue 3 / Nuxt platform. Drove a
                    Nuxt 4 migration to Feature-Sliced Design to enforce clear
                    ownership boundaries. Established a token-driven design
                    system over PrimeVue. Introduced structured observability
                    with Mixpanel and Sentry.
                  </p>
                  <div className="record-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Nuxt.js</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">FSD</span>
                    <span className="tag">Storybook</span>
                  </div>
                </div>
                <div className="record-metric-col">
                  <span className="record-number">400K</span>
                  <span className="record-metric-label">
                    applications / year
                    <br />
                    architecture owner
                  </span>
                </div>
              </div>
            </article>

            <article className="record">
              <div className="record-head">
                <div className="record-ident">
                  <h3 className="record-title">Senior Software Engineer</h3>
                  <span className="record-org">Proxify</span>
                </div>
                <span className="record-period">2022–2025</span>
              </div>
              <div className="record-body">
                <div className="record-body-main">
                  <p className="record-text">
                    Owned an ATS funnel processing 400K applications a year.
                    Took completion from 39% to 65% — instrumenting first,
                    measuring drop-off, forming hypotheses, shipping fixes,
                    confirming with data. Built the shared UI component library.
                    Proxify Quality Award 2024.
                  </p>
                  <div className="record-tags">
                    <span className="tag">Vue.js</span>
                    <span className="tag">Nuxt.js</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">CI/CD</span>
                  </div>
                </div>
                <div className="record-metric-col">
                  <span className="record-number">39→65%</span>
                  <span className="record-metric-label">
                    funnel completion
                    <br />
                    400K apps / year
                  </span>
                </div>
              </div>
            </article>

            <article className="record">
              <div className="record-head">
                <div className="record-ident">
                  <h3 className="record-title">Frontend Engineer</h3>
                  <span className="record-org">Skeyl</span>
                </div>
                <span className="record-period">2016–2022</span>
              </div>
              <div className="record-body">
                <div className="record-body-main">
                  <p className="record-text">
                    Primary React/TypeScript owner for client SPAs and
                    dashboards. Made performance regressions visible before they
                    reached users. Built backend utilities with Node.js and AWS
                    Lambda.
                  </p>
                  <div className="record-tags">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">AWS Lambda</span>
                  </div>
                </div>
                <div className="record-metric-col">
                  <span className="record-number">40s→90s</span>
                  <span className="record-metric-label">
                    Lighthouse scores
                    <br />
                    all properties
                  </span>
                </div>
              </div>
            </article>
          </section>

          {/* How I work */}
          <section id="how" className="doc-section">
            <h2 className="doc-section-title">How I work</h2>
            <div className="how-grid">
              <div className="how-item">
                <span className="how-number">1.</span>
                <div className="how-content">
                  <h3 className="how-title">Contracts first</h3>
                  <p className="how-text">
                    Agree on API and data shapes before building screens.
                    Generate types, mock early, keep a contract check in CI.
                  </p>
                </div>
              </div>
              <div className="how-item">
                <span className="how-number">2.</span>
                <div className="how-content">
                  <h3 className="how-title">Vertical slices</h3>
                  <p className="how-text">
                    Own one slice end to end — from user goal to contract, UI
                    states, monitoring, and a calm rollout plan.
                  </p>
                </div>
              </div>
              <div className="how-item">
                <span className="how-number">3.</span>
                <div className="how-content">
                  <h3 className="how-title">Quality in the pipeline</h3>
                  <p className="how-text">
                    Linting, tests, and performance checks live in CI — every
                    change, not only before releases.
                  </p>
                </div>
              </div>
              <div className="how-item">
                <span className="how-number">4.</span>
                <div className="how-content">
                  <h3 className="how-title">Clear collaboration</h3>
                  <p className="how-text">
                    Ask precise questions, write short docs, make trade-offs
                    visible so others can decide with you.
                  </p>
                </div>
              </div>
              <div className="how-item">
                <span className="how-number">5.</span>
                <div className="how-content">
                  <h3 className="how-title">Agentic engineering</h3>
                  <p className="how-text">
                    Claude Code as a configured system. CLAUDE.md encodes stop
                    rules and constraints. Hooks enforce what CLAUDE.md
                    requests. The loop improves itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Engineering decisions */}
          <section id="decisions" className="doc-section">
            <h2 className="doc-section-title">Engineering decisions</h2>
            <p
              style={{
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: "0 0 1.75rem",
                maxWidth: "44rem",
              }}
            >
              14 ADRs from production — a 400K-application ATS, a German
              legal-tech platform, agentic tooling. Start with the reversals.
            </p>

            <ol className="decision-list">
              <li className="decision">
                <div className="decision-head">
                  <span className="decision-ref">ADR-006</span>
                  <h3 className="decision-title">
                    Fix instrumentation before fixing UX
                  </h3>
                </div>
                <p className="decision-text">
                  The team wanted to redesign screens. I refused scope until we
                  could measure where users dropped. Instrumentation first,
                  hypotheses second, UX changes third.
                </p>
                <div className="decision-outcome">
                  <span className="decision-number">39% → 65%</span>
                  <span className="decision-label">
                    funnel completion after instrumenting
                  </span>
                </div>
                <Link
                  href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/006-instrumentation-before-ux-ats-funnel.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decision-link"
                >
                  Read ADR →
                </Link>
              </li>

              <li className="decision">
                <div className="decision-head">
                  <span className="decision-ref">ADR-007</span>
                  <h3 className="decision-title">
                    SonarQube + semantic release as CI gates
                  </h3>
                </div>
                <p className="decision-text">
                  Code review culture had plateaued. Wired SonarQube and
                  semantic release into CI so quality became structural, not
                  cultural.
                </p>
                <div className="decision-outcome">
                  <span className="decision-number">~60%</span>
                  <span className="decision-label">fewer UI bugs post-CI gates</span>
                </div>
                <Link
                  href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/007-sonarqube-semantic-release-quality-gates.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decision-link"
                >
                  Read ADR →
                </Link>
              </li>

              <li className="decision">
                <div className="decision-head">
                  <span className="decision-ref">ADR-010</span>
                  <h3 className="decision-title">Decisions I reversed</h3>
                </div>
                <p className="decision-text">
                  What I got wrong, what changed my mind, what the second
                  version looked like. Read this one first.
                </p>
                <Link
                  href="https://github.com/akin-oz/engineering-decisions/blob/main/decisions/010-reversed-decisions.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decision-link"
                >
                  Read ADR →
                </Link>
              </li>
            </ol>

            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="https://github.com/akin-oz/engineering-decisions"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
                style={{ fontSize: "0.8125rem" }}
              >
                Browse all 14 ADRs
              </Link>
            </div>
          </section>

          {/* Selected projects */}
          <section id="projects" className="doc-section">
            <h2 className="doc-section-title">Selected projects</h2>
            <div className="project-grid">
              <article className="project">
                <div className="project-head">
                  <h3 className="project-title">
                    Sorrel — conversion engineering funnel
                  </h3>
                  <span className="project-status">Live · Next.js 16</span>
                </div>
                <p className="project-text">
                  8-step subscription wizard. Typed funnel events — a wrong
                  event name is a compile error. Flag-gated A/B test from
                  PostHog through Stripe, with a <code>/insights</code> page
                  reading live telemetry back in-app.
                </p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">PostHog</span>
                  <span className="tag">GraphQL</span>
                  <span className="tag">Stripe</span>
                </div>
                <div className="project-links">
                  <Link
                    href="https://sorrel.akinoztorun.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live demo →
                  </Link>
                  <Link
                    href="https://github.com/akin-oz/sorrel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Repository →
                  </Link>
                </div>
              </article>

              <article className="project">
                <div className="project-head">
                  <h3 className="project-title">
                    Nord Signup — design system integration
                  </h3>
                  <span className="project-status">Live · Nuxt 4</span>
                </div>
                <p className="project-text">
                  12 ADRs documenting every decision. Three AI suggestions
                  documented and rejected. Selective imports cut the JS bundle
                  by half.
                </p>
                <div className="project-outcome">
                  <span className="project-outcome-number">49%</span>
                  <span className="project-outcome-label">
                    bundle reduction · 497→251 KB
                  </span>
                </div>
                <div className="project-tags">
                  <span className="tag">Nuxt 4</span>
                  <span className="tag">Vue</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Playwright</span>
                  <span className="tag">Vitest</span>
                </div>
                <div className="project-links">
                  <Link
                    href="https://nord-signup.akinoztorun.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live demo →
                  </Link>
                  <Link
                    href="https://github.com/akin-oz/nord-signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Repository →
                  </Link>
                </div>
              </article>

              <article className="project">
                <div className="project-head">
                  <h3 className="project-title">
                    PropertyOS — debugging investigation
                  </h3>
                  <span className="project-status">Multi-tenant · Python</span>
                </div>
                <p className="project-text">
                  Traced 14 production-class failures. Cross-tenant cache
                  poisoning, float() on money, fail-open auth exposing real
                  client data. CI now blocks the whole class.
                </p>
                <div className="project-outcome">
                  <span className="project-outcome-number">14</span>
                  <span className="project-outcome-label">
                    production failures blocked at CI
                  </span>
                </div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">React</span>
                  <span className="tag">Redis</span>
                  <span className="tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <Link
                    href="https://github.com/akin-oz/propertyos-debug-investigation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Repository →
                  </Link>
                </div>
              </article>

              <article className="project">
                <div className="project-head">
                  <h3 className="project-title">Next SWR quality demo</h3>
                  <span className="project-status">Frontend</span>
                </div>
                <p className="project-text">
                  Next.js app showing data fetching, caching, loading states,
                  and error paths with SWR and a complete quality setup.
                </p>
                <div className="project-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">SWR</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Testing</span>
                </div>
                <div className="project-links">
                  <Link
                    href="https://next-swr-quality-demo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live demo →
                  </Link>
                  <Link
                    href="https://github.com/akin-oz/next-swr-quality-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Repository →
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* Writing */}
          <section id="writing" className="doc-section">
            <h2 className="doc-section-title">Writing</h2>
            <div className="post-list">
              {posts.length === 0 ? (
                <article className="post">
                  <p
                    className="post-text"
                    style={{ marginBottom: 0 }}
                  >
                    Latest from{" "}
                    <Link
                      href="https://ownershipinpractice.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="post-link"
                      style={{ display: "inline" }}
                    >
                      Ownership in Practice →
                    </Link>
                  </p>
                </article>
              ) : (
                posts.map((post) => (
                  <article key={post.href} className="post">
                    <div className="post-head">
                      <h3 className="post-title">{post.title}</h3>
                      {post.date && (
                        <span className="post-meta">
                          Ownership in Practice · {post.date}
                        </span>
                      )}
                    </div>
                    {post.blurb && (
                      <p className="post-text">{post.blurb}</p>
                    )}
                    <Link
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="post-link"
                    >
                      Read →
                    </Link>
                  </article>
                ))
              )}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="doc-section">
            <h2 className="doc-section-title">Contact</h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.72,
                margin: "0 0 1.5rem",
                maxWidth: "32rem",
              }}
            >
              Based in EU time zones. Open to senior and staff product engineer
              roles at product companies. Let&apos;s talk.
            </p>
            <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
              <Link
                href="mailto:akin@akinoztorun.dev"
                className="button button-primary"
              >
                Email me
              </Link>
              <Link
                href="https://www.linkedin.com/in/oztorun"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-ghost"
              >
                LinkedIn
              </Link>
              <Link
                href="https://ownershipinpractice.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-ghost"
              >
                Newsletter
              </Link>
            </div>
          </section>
        </main>

      </div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Akın Oztorun
          </span>
          <div className="footer-links">
            <Link href="https://github.com/akin-oz" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link
              href="https://github.com/akin-oz/engineering-decisions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decisions
            </Link>
            <Link href="https://www.linkedin.com/in/oztorun" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link
              href="https://ownershipinpractice.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
