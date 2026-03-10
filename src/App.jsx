export default function CreativeRecruiterPortfolio() {
  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'React / Vite',
    'Spring Boot',
    'PyTorch',
    'MongoDB',
    'Docker',
    'REST APIs',
    'Git / GitHub',
  ]

  const highlights = [
    'Technical lead of a 7-person ML software team at LMU Munich',
    'Built and deployed a full-stack product with authentication, payments, and PDF export',
    'Combines machine learning depth, software engineering, and strong ownership',
  ]

  const timeline = [
    {
      year: 'Today',
      title: 'B.Sc. Informatics at LMU Munich',
      description:
        'I am building a profile at the intersection of machine learning and software engineering, with a strong focus on practical execution and long-term growth.',
    },
    {
      year: 'Research Project',
      title: 'Technical Lead on probly',
      description:
        'I led a 7-person student developer team in a research-oriented ML software project focused on uncertainty in machine learning.',
    },
    {
      year: 'Product Build',
      title: 'Built Resume Craft',
      description:
        'I designed and implemented a full-stack application with authentication, email verification, payments, PDF export, and deployment.',
    },
    {
      year: 'Foundation',
      title: 'Scholarship, work experience, and volunteer engagement',
      description:
        'My background reflects discipline, communication skills, and a mindset shaped by responsibility beyond coursework alone.',
    },
  ]

  const heatmapWeeks = Array.from({ length: 20 }, (_, col) =>
    Array.from({ length: 7 }, (_, row) => (col * 3 + row * 2) % 5)
  )

  const globeSkills = [
    'React',
    'Java',
    'Python',
    'Spring Boot',
    'PyTorch',
    'MongoDB',
    'Docker',
    'REST APIs',
    'Vite',
    'GitHub',
  ]

  const projects = [
    {
      title: 'Resume Craft',
      subtitle:
        'Full-stack resume platform with authentication, payments, and PDF export',
      description:
        'I built Resume Craft as a production-style full-stack application with React 18 and Vite on the frontend and Spring Boot 3 with Java 21 on the backend. The platform includes JWT authentication, email verification via SendGrid, a premium upgrade flow through PayPal Sandbox, and browser-based PDF export for polished résumé generation.',
      stack: [
        'React 18',
        'Vite',
        'Spring Boot 3',
        'Java 21',
        'MongoDB Atlas',
        'Docker Compose',
      ],
      outcome:
        'This project shows that I can design and ship a real product end to end, combining user experience, backend architecture, third-party integrations, and deployment in one coherent system.',
      github: 'https://github.com/osmanalnaser/resume-builder-fullstack',
      live: 'https://resume-builder-fullstack.vercel.app/',
    },
    {
      title: 'probly',
      subtitle:
        'Research-oriented machine learning software project at LMU Munich',
      description:
        'In probly, I worked as the technical lead of a seven-person student developer team in a research project centered on uncertainty in machine learning. I contributed to planning, implementation, testing, documentation, code reviews, sprint coordination, and technical communication with the project lead.',
      stack: ['Python', 'PyTorch', 'NumPy', 'OOD Detection', 'Agile Development'],
      outcome:
        'This project reflects both machine learning depth and leadership. I was responsible not only for technical execution, but also for helping the team move effectively in a research-driven environment.',
      github: 'https://github.com/osmanalnaser/probly',
      live: null,
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_30%)]" />

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <section className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-white/60">Othman Alnaser</div>
            <nav className="flex flex-wrap gap-2 text-sm text-white/70">
              {[
                ['About', '#about'],
                ['Projects', '#projects'],
                ['Timeline', '#timeline'],
                ['GitHub', '#github'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 transition hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Open to working student roles in Machine Learning and Software
              Engineering
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
              LMU Munich · Informatics Student · ML & Software Engineering
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
              I build software at the intersection of
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
                {' '}
                machine learning, product thinking, and reliable engineering
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              I am Othman Alnaser, an Informatics student at LMU Munich focused on
              machine learning and software engineering. I enjoy building systems
              that are technically solid, easy to use, and grounded in real impact
              — whether that means shipping a full-stack product or leading
              engineering work in a research-driven ML project.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/othman-alnaser"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/osmanalnaser"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['LMU Munich', 'B.Sc. Informatics'],
                ['7-Person Team', 'Technical leadership in ML'],
                ['Werkstudent Ready', 'ML or Software Engineering'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="mt-1 text-sm text-white/60">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                <img
                  src="/MeinFoto.jpg"
                  alt="Portrait of Othman Alnaser"
                  className="h-[430px] w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-medium">What I bring to a team</h2>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  team work
                </div>
              </div>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-6 shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Core Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              About me
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              A technical profile with product sense
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              I built this portfolio to communicate the parts of my profile that
              matter most in a recruiting context: technical range, leadership
              potential, and the ability to ship meaningful work. My background
              combines full-stack product development with machine learning
              experience in a research setting.
            </p>
            <p className="mt-4 text-base leading-8 text-white/70">
              I am currently looking for a working student position in machine
              learning or software engineering where I can contribute quickly,
              learn from strong teams, and keep building systems that are both
              technically robust and genuinely useful.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  What can be expected
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                  Skills
                </h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                [
                  'Technical depth',
                  'I aim to show projects with architecture, decisions, and the ability to work through non-trivial engineering problems.',
                ],
                [
                  'Execution',
                  'I value end-to-end delivery: from idea and planning to implementation, refinement, and deployment.',
                ],
                [
                  'Communication',
                  'I try to explain my work clearly and concisely, especially when a project involves research, trade-offs, or cross-functional thinking.',
                ],
                [
                  'Ownership',
                  'I enjoy taking responsibility, learning fast, and helping projects move forward in a reliable way.',
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Tech Stack
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A visual snapshot of my stack
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              My work sits across application engineering, backend systems, and
              ML-oriented development. This visual gives a quick overview of the
              technologies I use most often without turning the page into a long
              list.
            </p>

            <div className="relative mx-auto mt-8 flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_40%),radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.12),transparent_35%)] shadow-2xl">
              <div className="absolute inset-5 rounded-full border border-white/10" />
              <div className="absolute inset-10 rounded-full border border-white/10" />
              <div className="absolute inset-0 animate-pulse rounded-full border border-cyan-300/20" />
              {globeSkills.map((skill, index) => {
                const positions = [
                  'top-4 left-1/2 -translate-x-1/2',
                  'top-12 right-2',
                  'top-1/2 right-0 -translate-y-1/2',
                  'bottom-12 right-2',
                  'bottom-4 left-1/2 -translate-x-1/2',
                  'bottom-12 left-2',
                  'top-1/2 left-0 -translate-y-1/2',
                  'top-12 left-2',
                  'top-24 left-1/2 -translate-x-[140%]',
                  'bottom-24 left-1/2 translate-x-[40%]',
                ]

                return (
                  <span
                    key={skill}
                    className={`absolute ${positions[index]} rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur`}
                  >
                    {skill}
                  </span>
                )
              })}
              <div className="text-center">
                <div className="text-5xl font-semibold text-white">OA</div>
                <div className="mt-2 text-sm uppercase tracking-[0.3em] text-white/45">
                  Engineer Core
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              What teams can expect
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A profile built around execution
            </h2>
            <div className="mt-6 grid gap-4">
              {[
                [
                  'Full-stack ownership',
                  'I enjoy taking products from idea to deployment and paying attention to both user experience and engineering quality.',
                ],
                [
                  'ML perspective',
                  'I bring hands-on experience from a research-oriented machine learning project and enjoy working on technically demanding problems.',
                ],
                [
                  'Reliable collaboration',
                  'I value clear communication, structured work, and contributing in a way that helps teams move forward consistently.',
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mt-10">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Projects that represent me best
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/60">
              These two projects represent the strongest parts of my profile
              today: end-to-end product development and technical leadership in a
              machine learning research environment.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07] md:p-8"
              >
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/55">
                      Project 0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-cyan-200/90">
                      {project.subtitle}
                    </p>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                      Why it matters
                    </p>
                    <p className="mt-4 text-sm leading-8 text-white/75">
                      {project.outcome}
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-white/80">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:bg-white/10"
                      >
                        GitHub Repository
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:bg-white/10"
                        >
                          Live Demo
                        </a>
                      ) : (
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-white/45">
                          Research-focused project without public live demo
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="timeline"
          className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Career timeline
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A progression shaped by ownership
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              I wanted this page to show not just isolated achievements, but also
              trajectory: how I moved from building a strong foundation to taking
              ownership in both product and machine learning contexts.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
            <div className="relative ml-3 border-l border-white/10 pl-8">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  className={`${index === timeline.length - 1 ? '' : 'pb-8'} relative`}
                >
                  <div className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full border border-cyan-300/40 bg-cyan-300/30" />
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                    {item.year}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="github" className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              How I work
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              My engineering mindset
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-white/70">
              <p>
                I care about clarity, maintainability, and software that solves
                real problems instead of adding unnecessary complexity.
              </p>
              <p>
                I enjoy working across both product-oriented software engineering
                and technically demanding machine learning topics.
              </p>
              <p>
                My style is ambitious but grounded: I like taking ownership,
                communicating clearly, and executing with consistency even in
                demanding environments.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              GitHub activity
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Consistency as a visual proof point
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/70">
              This visual mockup reinforces something I value strongly:
              consistent output over time. For me, good engineering is not just
              about moments of intensity, but about discipline, iteration, and
              steady progress.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="grid grid-cols-20 gap-1">
                {heatmapWeeks.flatMap((week, colIndex) =>
                  week.map((level, rowIndex) => (
                    <div
                      key={`${colIndex}-${rowIndex}`}
                      className={[
                        'h-4 w-4 rounded-[4px] border border-white/5',
                        level === 0 ? 'bg-white/5' : '',
                        level === 1 ? 'bg-cyan-900/60' : '',
                        level === 2 ? 'bg-cyan-700/60' : '',
                        level === 3 ? 'bg-cyan-500/60' : '',
                        level === 4 ? 'bg-emerald-400/70' : '',
                      ].join(' ')}
                    />
                  ))
                )}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/45">
                <span>Less</span>
                <span className="h-3 w-3 rounded-[3px] bg-white/5" />
                <span className="h-3 w-3 rounded-[3px] bg-cyan-900/60" />
                <span className="h-3 w-3 rounded-[3px] bg-cyan-700/60" />
                <span className="h-3 w-3 rounded-[3px] bg-cyan-500/60" />
                <span className="h-3 w-3 rounded-[3px] bg-emerald-400/70" />
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Let’s build something meaningful
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">
              I am currently looking for a working student role in machine
              learning or software engineering. If you are hiring for a team that
              values ownership, technical curiosity, and strong execution, I would
              be glad to connect.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                'osman.n2@icloud.com',
                'linkedin.com/in/othman-alnaser',
                'github.com/osmanalnaser',
                'Landsberg am Lech, Germany',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}