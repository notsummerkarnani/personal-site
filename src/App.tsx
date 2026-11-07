import { useEffect, useState } from 'react';
import { caseStudies, experience, metrics, profile, projects, skills } from './data';

const YEAR = new Date().getFullYear();

type Theme = 'light' | 'dark';

function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.dataset.theme = theme;
    else delete root.dataset.theme;
    try {
      if (theme) localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable */
    }
  }, [theme]);

  const toggle = () => {
    const current =
      theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };
  return toggle;
}

// Deterministic decorative barcode built from a string, a nod to the Zebra-label work.
function Barcode({ code }: { code: string }) {
  const bars: number[] = [];
  for (const ch of code.repeat(3)) {
    const n = ch.charCodeAt(0);
    bars.push((n % 3) + 1, ((n >> 2) % 2) + 1);
  }
  let x = 0;
  const rects = bars.map((w, i) => {
    const r = i % 2 === 0 ? <rect key={i} x={x} y={0} width={w} height={28} /> : null;
    x += w;
    return r;
  });
  return (
    <svg className="barcode" viewBox={`0 0 ${x} 28`} preserveAspectRatio="none" aria-hidden="true">
      {rects}
    </svg>
  );
}

function Header() {
  const toggleTheme = useTheme();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="mark" aria-label="Samar Karnani, home">
          SK
        </a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
          <span aria-hidden="true">◐</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="eyebrow">
        <span className="dot" aria-hidden="true" />
        <span>
          {profile.role} · {profile.location}
        </span>
      </p>
      <h1>
        I build the software <br />
        that keeps the factory <br />
        <em>moving.</em>
      </h1>
      <p className="lede">
        I’m Samar, a full-stack engineer at Axcelis Technologies. I turn slow, manual
        manufacturing workflows into fast, reliable systems with TypeScript, React, Node.js, SQL
        and, lately, vision-language models and agentic automation.
      </p>
      <div className="cta-row">
        <a className="btn btn-primary" href="#work">
          See the work
        </a>
        <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
          Resume (PDF)
        </a>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="wrap" aria-label="Impact">
      <dl className="metrics">
        {metrics.map((m) => (
          <div key={m.label} className="metric">
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div className="section-head">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function Work() {
  return (
    <section className="section wrap" id="work">
      <SectionHead
        index="01"
        title="Selected work"
        note="Internal tools at Axcelis. No screenshots, since they run behind the firewall, but here’s what they changed."
      />
      <div className="cases">
        {caseStudies.map((c) => (
          <article key={c.id} className="case">
            <header className="case-top">
              <span className="case-id">{c.id}</span>
              <Barcode code={c.id} />
            </header>
            <h3>{c.title}</h3>
            <dl className="case-body">
              <div>
                <dt>Problem</dt>
                <dd>{c.problem}</dd>
              </div>
              <div>
                <dt>Built</dt>
                <dd>{c.built}</dd>
              </div>
            </dl>
            <p className="case-result">{c.result}</p>
            <ul className="tags" aria-label="Stack">
              {c.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section wrap" id="experience">
      <SectionHead index="02" title="Experience" />
      <div className="jobs">
        {experience.map((job) => (
          <div key={job.company} className="job">
            <div className="job-co">
              <h3>{job.company}</h3>
              <p>{job.place}</p>
            </div>
            <ol className="roles">
              {job.roles.map((r) => (
                <li key={r.title} className="role">
                  <div className="role-head">
                    <h4>{r.title}</h4>
                    <span className="role-dates">{r.dates}</span>
                  </div>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skill-group">
            <h4>{g.group}</h4>
            <ul className="tags">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="edu">
        <strong>Rochester Institute of Technology</strong> · B.S. Game Design &amp; Development
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section className="section wrap" id="projects">
      <SectionHead
        index="03"
        title="Earlier projects"
        note="Games and web apps from my time at RIT, where I studied game design and development."
      />
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <div className="project-img">
              <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" decoding="async" />
            </div>
            <div className="project-meta">
              <span>{p.kind}</span>
              <span>{p.year}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {(p.play || p.source) && (
              <div className="project-links">
                {p.play && (
                  <a href={p.play} target="_blank" rel="noreferrer">
                    Play ↗
                  </a>
                )}
                {p.source && (
                  <a href={p.source} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <SectionHead index="04" title="Get in touch" />
      <p className="contact-line">
        Open to conversations about full-stack roles, manufacturing software and AI automation.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="contact-links">
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </li>
        <li>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Work />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="wrap site-footer">
        <span>© {YEAR} Samar Karnani</span>
        <span>samarkarnani.com</span>
      </footer>
    </>
  );
}
