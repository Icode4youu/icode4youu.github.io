import { useEffect, useState } from 'react'

const email = 'markdulaydanila@gmail.com'
// Get a free access key at https://web3forms.com (enter your email, paste the key here)
// and contact-form messages will be delivered straight to your inbox.
const WEB3FORMS_KEY = 'dcbd0eba-d77f-4c4b-ac64-240c39e9a935'
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`
const certUrl = `${import.meta.env.BASE_URL}CERT-2026-00004.pdf`

const projects = [
  {
    id: '01',
    name: 'CareerGuide',
    label: 'Career guidance platform',
    site: 'https://careerguide1.onrender.com/',
    image: 'careerguide.webp',
    imageAlt: 'CareerGuide mobile landing page screenshot',
    description:
      'A career guidance platform that converts student skills assessments into course recommendations, progress tracking, counselor workflows, and portfolio evidence.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Android'],
    highlights: ['6 skill paths', '4 user roles', 'Assessment engine'],
  },
  {
    id: '02',
    name: 'CampusSpill',
    label: 'Realtime student network',
    site: 'https://campusspill.onrender.com/',
    image: 'campusspill.webp',
    imageAlt: 'CampusSpill mobile feed screenshot',
    description:
      'An anonymous student network with realtime posting, Supabase-backed interactions, installable PWA behavior, and mobile-ready APK packaging.',
    stack: ['PHP', 'Supabase', 'PWA', 'JavaScript', 'APK'],
    highlights: ['Realtime feed', 'Anonymous posts', 'Installable'],
  },
]

const techLogos = {
  HTML: 'html5',
  PHP: 'php',
  JavaScript: 'javascript',
  Firebase: 'firebase',
  MySQL: 'mysql',
  Supabase: 'supabase',
  Flutter: 'flutter',
  React: 'react',
  'Tailwind CSS': 'tailwindcss',
  Bootstrap: 'bootstrap',
  Vite: 'vite',
  PWA: 'pwa',
  'PWA builds': 'pwa',
  Android: 'android',
  'Android packaging': 'android',
  APK: 'android',
  Render: 'render',
  'GitHub Pages': 'github',
}

const credentials = [
  {
    id: 'CERT-2026-00004',
    title: 'Internship Completion',
    role: 'Intern Programmer — Information Technology',
    issuer: 'Asset Nexus LLC',
    location: 'Tupi, South Cotabato',
    issued: 'October 14, 2026',
    rating: '84.5%',
    file: certUrl,
  },
]

const education = [
  {
    title: 'BS Information Technology',
    school: 'Southeast Asian Institute of Technology',
    period: 'Expected 2027',
    detail:
      'Undergraduate studies covering programming, systems, databases, and applied software development.',
  },
]

const stackGroups = [
  { id: 'S1', title: 'Languages', items: ['HTML', 'PHP', 'JavaScript', 'SQL'] },
  { id: 'S2', title: 'Backend & data', items: ['MySQL', 'Supabase', 'Firebase', 'REST APIs', 'Auth & roles'] },
  { id: 'S3', title: 'Frontend', items: ['React', 'Tailwind CSS', 'Bootstrap', 'Vite'] },
  { id: 'S4', title: 'Delivery', items: ['Flutter', 'PWA builds', 'Android packaging', 'Render', 'GitHub Pages'] },
]

const processSteps = [
  { id: '01', title: 'Map the workflow', text: 'I study the users, roles, and real processes a system needs to support before writing code.' },
  { id: '02', title: 'Model the data', text: 'I design the tables, relationships, and permissions so the system has a solid backbone.' },
  { id: '03', title: 'Build the interface', text: 'I turn the workflows into screens with real states — loading, empty, error — not placeholders.' },
  { id: '04', title: 'Ship and package', text: 'I deploy for the web, package for mobile, and keep the system maintainable.' },
]

const capabilities = [
  {
    id: 'A',
    title: 'Product architecture',
    text: 'I structure users, roles, data, and workflows before turning the system into screens.',
  },
  {
    id: 'B',
    title: 'Full-stack execution',
    text: 'I connect frontend interfaces to PHP backends, MySQL schemas, and Supabase features.',
  },
  {
    id: 'C',
    title: 'Mobile-ready delivery',
    text: 'I build PWAs and Android wrappers so web systems can feel closer to native apps.',
  },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/Icode4youu' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mark-dulay-danila-841870441/' },
  { name: 'Facebook', url: 'https://www.facebook.com/mrkdlydnl' },
  { name: 'Instagram', url: 'https://www.instagram.com/mrkdlydnl4/' },
]

const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = ['top', ...navLinks.map((link) => link.id)]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function useSectionSpy() {
  const [active, setActive] = useState(SECTION_IDS[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

function ArrowIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GithubIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function MailIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Zm1.4 1.2L12 12.3l6.6-5.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CopyIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CheckIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BadgeIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9" r="5.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m9 13.4-2.2 7.1 5.2-3 5.2 3-2.2-7.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TechLogo({ name }) {
  const file = techLogos[name]
  if (!file) return null
  return <img className="tech-logo" src={`${import.meta.env.BASE_URL}logos/${file}.svg`} alt="" aria-hidden="true" loading="lazy" />
}

function SectionHead({ kicker, title, text }) {
  return (
    <header className="section-head" data-reveal>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </header>
  )
}

function SunIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.4 14.4A8.4 8.4 0 0 1 9.6 3.6a8.4 8.4 0 1 0 10.8 10.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const activeSection = useSectionSpy()
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const [now, setNow] = useState(() => new Date())
  useReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('md-theme', theme)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101216' : '#f7f6f2')
  }, [theme])

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000)
    return () => clearInterval(id)
  }, [])

  const localTime = new Intl.DateTimeFormat('en-PH', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Asia/Manila',
  }).format(now)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const [sentModal, setSentModal] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const updateField = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  useEffect(() => {
    if (!sentModal) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setSentModal(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sentModal])

  const sendMessage = async (event) => {
    event.preventDefault()
    const subject = `Portfolio message from ${form.name || 'a visitor'}`

    if (!WEB3FORMS_KEY) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setFormStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, ...form }),
      })
      const data = await response.json()
      if (!data.success) throw new Error(data.message)
      setFormStatus('idle')
      setForm({ name: '', email: '', message: '' })
      setSentModal(true)
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div id="top">
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">MD</span>
          <span className="brand-name">
            Mark Dulay Danila
            <small>Full-stack developer</small>
          </span>
        </a>
        <nav aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
          <a href={resumeUrl} download className="nav-cta">
            Resume
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            title="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <figure className="hero-photo" data-reveal>
            <img src={`${import.meta.env.BASE_URL}portrait.webp`} alt="Portrait of Mark Dulay Danila" />
            <figcaption>Mark Dulay Danila · South Cotabato, PH</figcaption>
          </figure>

          <div className="hero-body">
            <p className="kicker" data-reveal>
              Portfolio · 2026
            </p>
            <h1 data-reveal style={{ '--delay': '80ms' }}>
              Mark Dulay Danila
            </h1>
            <p className="hero-role" data-reveal style={{ '--delay': '140ms' }}>
              Full-stack developer building student-facing systems.
            </p>
            <p className="hero-copy" data-reveal style={{ '--delay': '200ms' }}>
              I design student-centered platforms with real workflows: assessments, dashboards,
              realtime feeds, PWAs, and Android-ready builds — from the data model to deployment.
            </p>

            <dl className="hero-facts" data-reveal style={{ '--delay': '260ms' }}>
              <div>
                <dt>Location</dt>
                <dd>South Cotabato, Philippines</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Web systems · PWA · mobile packaging</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd className="status-live">
                  <i />
                  Open to internships &amp; junior roles
                </dd>
              </div>
            </dl>

            <div className="hero-actions" data-reveal style={{ '--delay': '320ms' }}>
              <a href="#work" className="btn btn-primary">
                View projects
                <ArrowIcon />
              </a>
              <a href={resumeUrl} download className="btn">
                <DownloadIcon />
                Download CV
              </a>
              <a href={certUrl} target="_blank" rel="noreferrer" className="btn">
                <BadgeIcon />
                Certificate
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <SectionHead
            kicker="01 · Selected work"
            title="Deployed systems"
            text="Two live platforms built end to end — schema design, backend, interface, and mobile packaging."
          />
          <div className="project-list">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`project ${index % 2 === 1 ? 'is-flipped' : ''}`}
                data-reveal
              >
                <a
                  className="project-media"
                  href={project.site}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live site`}
                >
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} loading="lazy" />
                  <span className="project-media-tag">Live capture</span>
                </a>
                <div className="project-body">
                  <p className="project-code">{project.label}</p>
                  <h3>{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <ul className="chip-row" aria-label="Stack">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <TechLogo name={item} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-meta" aria-label="Highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href={project.site} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      Visit site
                      <ArrowIcon />
                    </a>
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(`Question about ${project.name}`)}`}
                      className="text-link"
                    >
                      Ask about it
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHead
            kicker="02 · Experience & education"
            title="Internships, credentials & education"
            text="Formal training, verified documents, and current studies."
          />
          <div className="timeline">
            {credentials.map((credential) => (
              <article key={credential.id} className="timeline-item" data-reveal>
                <div className="timeline-body">
                  <div className="timeline-info">
                    <p className="timeline-date">{credential.issued}</p>
                    <div className="timeline-head">
                      <h3>{credential.role}</h3>
                      <span className="timeline-badge">Completed</span>
                    </div>
                    <p className="timeline-org">
                      {credential.issuer} · {credential.location}
                    </p>
                    <p className="timeline-text">
                      Successfully completed the internship program in the Information Technology
                      department, with a final performance rating of {credential.rating}.
                    </p>
                    <a href={credential.file} target="_blank" rel="noreferrer" className="doc-link">
                      <BadgeIcon />
                      {credential.id} — View certificate (PDF)
                    </a>
                  </div>
                  <a
                    href={credential.file}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-preview"
                    aria-label={`Open ${credential.title} certificate PDF`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}certificate.webp`}
                      alt={`${credential.title} certificate from ${credential.issuer}`}
                      loading="lazy"
                    />
                    <span>Open full certificate</span>
                  </a>
                </div>
              </article>
            ))}
            {education.map((entry) => (
              <article key={entry.title} className="timeline-item" data-reveal>
                <div className="timeline-body">
                  <div className="timeline-info">
                    <p className="timeline-date">{entry.period}</p>
                    <div className="timeline-head">
                      <h3>{entry.title}</h3>
                      <span className="timeline-badge is-progress">In progress</span>
                    </div>
                    <p className="timeline-org">{entry.school}</p>
                    <p className="timeline-text">{entry.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHead
            kicker="03 · Capabilities"
            title="The tools behind the systems"
          />
          <div className="skill-grid">
            {stackGroups.map((group, index) => (
              <div key={group.id} data-reveal style={{ '--delay': `${index * 90}ms` }} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechLogo name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <SectionHead
            kicker="04 · About"
            title="I build software for the places students actually live."
          />
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>
                I’m Mark Dulay Danila. My work sits between system planning and product polish:
                mapping the data model, wiring the backend, building the interface, then packaging
                it for web and mobile use.
              </p>
              <p>
                The projects here are early proof, but they already show the kind of work I want to
                keep doing: useful systems with memorable interfaces and real deployment paths.
              </p>
            </div>
            <ul className="about-points">
              {capabilities.map((capability, index) => (
                <li key={capability.id} data-reveal style={{ '--delay': `${index * 100}ms` }}>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="process" data-reveal>
            <h3 className="process-title">How I work</h3>
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.id}>
                  <span>{step.id}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-panel" data-reveal>
            <p className="kicker">05 · Contact</p>
            <h2>Open a channel. Build something unusual.</h2>
            <p className="contact-lead">
              Available for internships, junior developer roles, freelance builds, and
              student-facing product work.
            </p>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={sendMessage}>
                <p className="contact-form-label">Leave a message</p>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={updateField}
                    placeholder="What would you like to build or discuss?"
                    required
                  />
                </label>
                <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending…' : 'Send message'}
                  <ArrowIcon />
                </button>
                {formStatus === 'error' && (
                  <p className="form-status is-error">
                    Something went wrong. You can still email me directly at{' '}
                    <a href={`mailto:${email}`}>{email}</a>.
                  </p>
                )}
                {formStatus !== 'error' && (
                  <p className="form-note">
                    {WEB3FORMS_KEY
                      ? 'Delivered straight to my inbox.'
                      : 'Opens your email app with the message ready to send.'}
                  </p>
                )}
              </form>

              <div className="contact-side">
                <p className="contact-form-label">Or reach me directly</p>
                <div className="email-group">
                  <a href={`mailto:${email}`} className="btn btn-primary">
                    <MailIcon />
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`copy-chip ${copied ? 'is-copied' : ''}`}
                    title="Copy email"
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
                <a href="https://github.com/Icode4youu" target="_blank" rel="noreferrer" className="btn">
                  <GithubIcon />
                  GitHub / Icode4youu
                </a>
                <ul className="social-row" aria-label="Social links">
                  {socials.map(({ name, url }) => (
                    <li key={name}>
                      <a href={url} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Mark Dulay Danila</span>
        <span className="footer-locale">South Cotabato, PH — {localTime}</span>
        <nav aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#top" className="footer-top">
          Back to top
        </a>
      </footer>

      {sentModal && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sent-modal-title"
          onClick={() => setSentModal(false)}
        >
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <span className="modal-icon">
              <CheckIcon />
            </span>
            <h3 id="sent-modal-title">Message sent</h3>
            <p>
              Thank you for reaching out. Your message has been delivered to my inbox, and I’ll get
              back to you as soon as I can.
            </p>
            <button type="button" className="btn btn-primary" onClick={() => setSentModal(false)} autoFocus>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
