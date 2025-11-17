import Link from 'next/link';

const projects = [
    {
        title: 'Energy portfolio vertical slice',
        description:
            'Full stack example of an energy portfolio domain. GraphQL contracts, TypeScript domain layer, and a React UI on top, built to show how I think about vertical slices and contracts first.',
        tech: ['TypeScript', 'GraphQL', 'React', 'Node'],
        href: 'https://github.com/akin-oz/energy-portfolio-slice',
    },
    {
        title: 'Next.js SWR quality demo',
        description:
            'Next.js app that shows how I handle data fetching, error states, and quality checks with SWR and a small API layer. Focus on clear states, predictable errors, and testable flows.',
        tech: ['Next.js', 'React', 'SWR', 'TypeScript'],
        href: 'https://github.com/akin-oz/next-swr-quality-demo',
    },
];

export default function HomePage() {
    return (
        <main className="page">
            <header className="hero">
                <div>
                    <p className="hero-tag">Senior Frontend Engineer · Product minded</p>
                    <h1 className="hero-title">Akın Öztorun</h1>
                    <p className="hero-subtitle">
                        I build frontend systems that match real data, stay reliable in
                        production, and help teams ship faster without guesswork.
                    </p>
                    <div className="hero-links">
                        <Link href="https://github.com/akin-oz" target="_blank">
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/oztorun"
                            target="_blank"
                        >
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
            </header>

            <section className="section" id="about">
                <h2 className="section-title">About</h2>
                <p className="section-text">
                    I am a Senior Frontend Engineer with a focus on{' '}
                    <strong>frontend architecture</strong>,{' '}
                    <strong>shared UI systems</strong>, and{' '}
                    <strong>quality guardrails</strong> in CI, testing, and performance.
                    I like to own a <strong>vertical slice</strong> from the API contract
                    and data shapes to the UI and basic observability.
                </p>
                <p className="section-text">
                    I work best on products where reliability matters. For example
                    fintech, internal tools, and developer facing products. I care about
                    clear IC growth paths, honest scope, and teams that treat frontend as
                    part of the system instead of a separate layer.
                </p>
                <p className="section-text">
                    I am based in Türkiye and work in CET hours. I am interested in
                    Senior Frontend and Senior Product Engineer roles with a path toward
                    Staff level responsibility in strong engineering teams.
                </p>
            </section>

            <section className="section" id="projects">
                <h2 className="section-title">Selected projects</h2>
                <div className="cards">
                    {projects.map((project) => (
                        <article key={project.title} className="card">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-text">{project.description}</p>
                            <p className="card-meta">{project.tech.join(' · ')}</p>
                            <Link href={project.href} target="_blank" className="card-link">
                                View on GitHub
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section" id="writing">
                <h2 className="section-title">Writing</h2>
                <p className="section-text">
                    I write <strong>Ownership in Practice</strong>, a newsletter for
                    mid and senior engineers who want to grow through better contracts,
                    vertical slices, and production habits instead of only more tickets.
                </p>
                <ul className="list">
                    <li>
                        <span>Do Not Start Vague Tickets</span>
                    </li>
                    <li>
                        <span>Contracts First, Screens Second</span>
                    </li>
                </ul>
                <Link
                    href="https://ownershipinpractice.substack.com"
                    target="_blank"
                    className="primary-link"
                >
                    Read the newsletter
                </Link>
            </section>

            <section className="section" id="contact">
                <h2 className="section-title">Contact</h2>
                <p className="section-text">
                    I am open to Senior Frontend Engineer and Senior Product Engineer
                    roles in EU friendly time zones. I am especially interested in
                    teams that value contracts first thinking, clear ownership, and
                    quality as part of product work.
                </p>
                <div className="hero-links">
                    <Link
                        href="https://www.linkedin.com/in/oztorun"
                        target="_blank"
                    >
                        Contact on LinkedIn
                    </Link>
                    <Link href="mailto:hi@akinoztorun.dev">
                        Email: hi@akinoztorun.dev
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <span>© {new Date().getFullYear()} Akın Öztorun</span>
            </footer>
        </main>
    );
}