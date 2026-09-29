const projects = [
  {
    image: "/Applypartnercompressifyio1.png",
    title: "EHR System using Hyperledger Fabric",
  },
  {
    image: "/Applypartnercompressifyio1(1).png",
    title: "Building interfaces with shadcn/ui",
  },
  {
    image: "/Applypartnercompressifyio1(2).png",
    title: "Choosing a visual direction for a new product",
  },
];

const experiences = [
  {
    image: "/ChatgptImageSep13202511_46_35Am1(5).png",
    title: "Content creator",
    company: "OpennMind Studio",
    duration: "2 months 17 days",
  },
  {
    image: "/ChatgptImageSep13202511_46_35Am1(6).png",
    title: "Content creator",
    company: "OpennMind",
    duration: "1 month 7 days",
  },
  {
    image: "/ChatgptImageSep13202511_46_35Am1(7).png",
    title: "Content creator",
    company: "Zaim Drug Corporation",
    duration: "3 months 19 days",
  },
];

const socials = [
  { image: "/Image26.png", name: "Github", handle: "@pqrlink" },
  { image: "/Image26(1).png", name: "Dribbble", handle: "@ashishpqr" },
  { image: "/Image26(2).png", name: "LinkedIn", handle: "@itsashish" },
  { image: "/Image26(3).png", name: "Instagram", handle: "@ashishm" },
  { image: "/Image26(4).png", name: "X (Twitter)", handle: "@pqrlink" },
];

const education = [
  {
    image: "/ChatgptImageSep13202511_46_35Am1.png",
    degree: "PhD in Mathematics",
    school: "Harvard University",
    years: "2004 - 2008",
  },
  {
    image: "/ChatgptImageSep13202511_46_35Am1(1).png",
    degree: "Computer Science",
    school: "MIT University",
    years: "2000 - 2004",
  },
  {
    image: "/ChatgptImageSep13202511_46_35Am1(2).png",
    degree: "High school",
    school: "Public School",
    years: "1993 - 2000",
  },
];

const skills = ["Content creation", "Digital marketing", "UI/UX design", "SaaS growth", "Product strategy"];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-figtree text-2xl font-semibold text-neutral-950 md:text-3xl">{children}</h2>;
}

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-4 py-5 font-figtree text-neutral-950 sm:px-8 md:py-10">
      <div className="mx-auto max-w-6xl space-y-5 md:space-y-7">
        <header className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
          <div className="relative h-40 bg-neutral-200 sm:h-56 md:h-72">
            <img
              src="/06d04b024f3effd32bde169d65549b202.png"
              alt="Profile cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-5 pb-6 sm:px-8 md:px-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="-mt-14 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end">
                <img
                  src="/Rectangle111.png"
                  alt="Sidhartha Juluri"
                  className="h-28 w-28 rounded-full border-4 border-white object-cover sm:h-36 sm:w-36"
                />
                <div className="pb-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sidhartha Juluri</h1>
                    <span className="font-inter text-sm text-neutral-500">He/Him</span>
                  </div>
                  <p className="mt-2 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg">
                    B.Tech Student &amp; Founder | Building a Stealth SaaS for Small Businesses | Focused on Digital Marketing &amp; Growth
                  </p>
                  <p className="mt-3 text-sm text-neutral-500">140 Followers <span className="px-2">·</span> 131 Catalysts</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:pb-1">
                <a href="mailto:hello@example.com" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">
                  Open to
                </a>
                <a href="mailto:hello@example.com" className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100">
                  Edit profile
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <SectionHeading>About</SectionHeading>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
              <span className="text-amber-500" aria-hidden="true">★</span> AI Overview
            </span>
          </div>
          <p className="mt-5 max-w-4xl text-base leading-7 text-neutral-600">
            I am a B.Tech student and founder building a stealth SaaS for small businesses. I focus on digital marketing and growth, and enjoy creating useful digital products, collaborating with ambitious teams, and turning complex problems into clear experiences. My background in business and technology helps me connect thoughtful design with practical outcomes.
          </p>
          <p className="mt-6 text-sm font-semibold text-neutral-800">
            Open to join and collaborating <span className="px-2 text-neutral-400">·</span>
            <a href="mailto:hello@example.com" className="text-blue-700 hover:underline">Send an invite</a>
          </p>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <SectionHeading>Experience</SectionHeading>
            <span className="text-sm text-neutral-500">3 roles</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((item) => (
              <article key={item.company} className="flex gap-4">
                <img src={item.image} alt="" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.company}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <SectionHeading>Projects</SectionHeading>
            <span className="text-sm text-neutral-500">4 projects</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.image} className="overflow-hidden rounded-2xl border border-neutral-200">
                <img src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover" />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-xs text-neutral-500">Post</p>
                    <h3 className="mt-1 text-sm font-medium">{project.title}</h3>
                  </div>
                  <button type="button" aria-label={`Save ${project.title}`} className="shrink-0 rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-black">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <SectionHeading>Skills</SectionHeading>
          <div className="mt-5 divide-y divide-neutral-200">
            {skills.map((skill) => <div key={skill} className="py-4 text-base font-medium">{skill}</div>)}
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <SectionHeading>Links added</SectionHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {["/WhatsappImage20250805At113111Pm1.png", "/WhatsappImage20250805At113111Pm1(1).png", "/WhatsappImage20250805At113111Pm1(2).png", "/WhatsappImage20250805At113111Pm1(3).png"].map((image, index) => (
              <article key={image} className="flex min-h-36 items-center gap-4 rounded-2xl border border-neutral-200 p-4">
                <img src={image} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium">{index === 0 ? "Zeros arena" : `Project ${index + 1}`}</h3>
                  <p className="mt-1 truncate text-xs text-neutral-500">A SIH preparation platform for students...</p>
                  <a href="#projects" className="mt-3 inline-block rounded-full bg-black px-3 py-1.5 text-xs text-white">Learn more</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <SectionHeading>Socials</SectionHeading>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {socials.map((social) => (
              <a key={social.name} href="#contact" className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-neutral-50">
                <img src={social.image} alt="" className="h-14 w-14 rounded-xl object-cover" />
                <span className="min-w-0">
                  <span className="block text-sm text-neutral-500">{social.name}</span>
                  <span className="mt-1 block truncate font-semibold">{social.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.school} className="flex gap-4">
                <img src={item.image} alt="" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                <div>
                  <h3 className="font-medium">{item.school}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{item.degree}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.years}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <h2 className="max-w-xl text-xl font-semibold sm:text-2xl">Want to connect and collaborate on a project?</h2>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:hello@example.com" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700">Message</a>
            <a href="mailto:hello@example.com?subject=Project%20inquiry" className="text-sm font-medium text-blue-700 hover:underline">Send a project info</a>
          </div>
        </section>
      </div>
    </main>
  );
}