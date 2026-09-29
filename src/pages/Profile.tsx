const projects = [
  {
    image: "/Applypartnercompressifyio1.png",
    title: "📌 Project : EHR System using Hyperledger Fabric...",
  },
  {
    image: "/Applypartnercompressifyio1(1).png",
    title: "Using shadcn ui to creating th....",
  },
  {
    image: "/Applypartnercompressifyio1(2).png",
    title: "Which colors do you think are the bes...",
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

const profileHighlights = [
  {
    image: "/ChatgptImageSep13202511_46_35Am1(3).png",
    title: "Content creator",
    subtitle: "OpennMind",
    detail: "1 month 7 days",
  },
  {
    image: "/ChatgptImageSep13202511_46_35Am1(4).png",
    title: "Harvard University",
    subtitle: "PhD in Mathematics",
    detail: "2004 - 2008",
  },
];

const socials = [
  { image: "/Image26.png", name: "Github", handle: "@pqrlink" },
  { image: "/Image26(1).png", name: "Dribbble", handle: "@ashishpqr" },
  { image: "/Image26(2).png", name: "LinkedIn", handle: "@itsashish" },
  { image: "/Image26(3).png", name: "Instagram", handle: "@ashishm" },
  { image: "/Image26(4).png", name: "X (Twitter)", handle: "@pqrlink" },
];

const profileLinks = [
  { background: "/Imageremovebgpreview101.png", logo: "/WhatsappImage20250805At113111Pm1.png" },
  { background: "/Imageremovebgpreview101(1).png", logo: "/WhatsappImage20250805At113111Pm1(1).png" },
  { background: "/Imageremovebgpreview101(2).png", logo: "/WhatsappImage20250805At113111Pm1(2).png" },
  { background: "/Imageremovebgpreview101(3).png", logo: "/WhatsappImage20250805At113111Pm1(3).png" },
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

const skills = ["Content creation", "Content creation", "Content creation", "Content creation", "Content creation"];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-figtree text-[13px] font-semibold text-neutral-950 md:text-xl">{children}</h2>;
}

function EditButton({ label }: { label: string }) {
  return (
    <button type="button" aria-label={`Edit ${label}`} className="ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full text-neutral-700 hover:bg-neutral-100">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
    </button>
  );
}

export default function Profile() {
  return (
    <main className="min-h-screen bg-white font-figtree text-neutral-950">
      <div className="mx-auto max-w-[1440px]">
        <header className="bg-white">
          <div className="relative h-[210px] bg-neutral-200 sm:h-[250px] md:h-[310px]">
            <img
              src="/06d04b024f3effd32bde169d65549b202.png"
              alt="Profile cover"
              className="h-full w-full object-cover"
            />
            <button type="button" aria-label="Edit cover photo" className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow-sm sm:right-7 sm:top-6">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
            </button>
          </div>
          <div className="px-4 sm:px-9">
            <div className="grid gap-4 pb-5 pt-[38px] min-[560px]:grid-cols-[minmax(0,1fr)_156px] sm:gap-5 md:grid-cols-[minmax(0,1fr)_250px] md:pb-8 md:pt-10">
              <div className="relative min-w-0">
                <div className="absolute -top-[105px] left-0 h-[104px] w-[104px] md:-top-[132px] md:h-[140px] md:w-[140px]">
                  <img src="/Rectangle111.png" alt="Sidhartha Juluri" className="h-full w-full rounded-full border-2 border-white object-cover md:border-[3px]" />
                  <button type="button" aria-label="Edit profile photo" className="absolute right-1 top-1 grid h-7 w-7 place-items-center rounded-full border border-neutral-200 bg-white text-black shadow-sm">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
                  </button>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <h1 className="text-base font-medium leading-5 sm:text-lg md:text-2xl">Sidhartha Juluri</h1>
                    <span className="font-inter text-[9px] text-neutral-500 md:text-xs">He/Him</span>
                  </div>
                  <p className="mt-0.5 max-w-[720px] text-[10px] leading-[1.35] text-neutral-900 md:mt-1 md:text-sm">
                    B.Tech Student &amp; Founder | Building a Stealth SaaS for Small Businesses | Focused on Digital Marketing &amp; Growth
                  </p>
                  <p className="mt-2 text-[10px] text-neutral-500 md:mt-3 md:text-sm">140 Followers <span className="px-1">·</span> 131 Catalysts</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 md:mt-3 md:gap-2">
                    <a href="#contact" className="rounded-full bg-black px-5 py-1.5 text-[9px] leading-3 text-white hover:bg-neutral-700 md:px-6 md:py-2 md:text-xs">Open to</a>
                    <span className="text-[9px] text-neutral-500 md:text-xs">or</span>
                    <a href="#contact" className="text-[9px] text-blue-700 hover:underline md:text-xs">Edit Profile</a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 min-[560px]:grid-cols-1 min-[560px]:content-start md:gap-4">
                {profileHighlights.map((item) => (
                  <article key={item.title} className="flex min-w-0 items-center gap-2">
                    <img src={item.image} alt="" className="h-8 w-8 shrink-0 rounded-lg object-cover md:h-11 md:w-11" />
                    <div className="min-w-0">
                      <h2 className="truncate text-[9px] font-medium leading-3 md:text-sm md:leading-5">{item.title}</h2>
                      <p className="truncate text-[8px] leading-3 text-neutral-500 md:text-xs">{item.subtitle}</p>
                      <p className="truncate text-[8px] leading-3 text-neutral-400 md:text-xs">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-2 px-4 pb-8 sm:px-9 md:space-y-4">
        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="flex items-center gap-2">
            <SectionHeading>About</SectionHeading>
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-1.5 py-0.5 text-[6px] font-medium text-neutral-700 md:px-2 md:text-[9px]">
              <span className="text-amber-500" aria-hidden="true">★</span> AI Overview
            </span>
            <button type="button" aria-label="Edit about section" className="ml-auto rounded-full p-1 text-neutral-700 hover:bg-neutral-100">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
            </button>
          </div>
          <p className="mt-2 text-[10px] leading-[1.35] text-neutral-900 md:mt-3 md:max-w-5xl md:text-sm md:leading-5">
            I am a Senior UI/UX Designer at Toptal, a network of the world's top 3% of software engineering, design, and finance talent. With over 10 years of experience in the design industry, I have a proven track record of creating visually engaging and user-friendly interfaces for in-car navigation systems, SaaS apps, and marketing websites.
            <br /><br />
            My background in business and economics gives me a unique perspective on how to design UX and UI that are not only aesthetically pleasing, but also functional, efficient, and user-friendly. I am passionate about solving complex problems, collaborating with diverse teams, and learning new skills. I am also Adwords Search Certified, which demonstrates my ability to optimize the online presence and performance of my clients. My goal is to help tech companies increase their revenue by improving the user experience of their products.
          </p>
          <p className="mt-3 text-[9px] font-medium text-neutral-900 md:mt-4 md:text-xs">
            Open to Join and collaborating <span className="px-1 text-neutral-400">·</span>
            <a href="#contact" className="text-blue-700 hover:underline">Send an invite</a>
          </p>
        </section>

        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="mb-3 flex items-center gap-2 md:mb-5">
            <SectionHeading>Experience</SectionHeading>
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-1.5 py-0.5 text-[6px] font-medium text-neutral-700 md:px-2 md:text-[9px]"><span className="text-amber-500" aria-hidden="true">★</span> AI Overview</span>
            <button type="button" aria-label="Edit experience" className="ml-auto rounded-full p-1 text-neutral-700 hover:bg-neutral-100">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
            </button>
          </div>
          <div className="grid gap-3 min-[560px]:grid-cols-3 md:gap-6">
            {experiences.map((item) => (
              <article key={item.company} className="flex min-w-0 items-center gap-1.5 md:gap-3">
                <img src={item.image} alt="" className="h-9 w-9 shrink-0 rounded-lg object-cover md:h-14 md:w-14" />
                <div className="min-w-0">
                  <h3 className="truncate text-[9px] font-medium leading-3 md:text-sm md:leading-5">{item.title}</h3>
                  <p className="truncate text-[8px] leading-3 text-neutral-500 md:text-xs">{item.company}</p>
                  <p className="truncate text-[8px] leading-3 text-neutral-400 md:text-xs">{item.duration}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="mb-4 flex items-center gap-2 md:mb-6">
            <SectionHeading>Projects 4</SectionHeading>
            <button type="button" aria-label="About projects" className="grid h-5 w-5 place-items-center rounded-full text-neutral-700 hover:bg-neutral-100">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-8h.01" /></svg>
            </button>
            <button type="button" aria-label="Edit projects" className="ml-auto grid h-7 w-7 place-items-center rounded-full text-neutral-700 hover:bg-neutral-100">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m15.5 5.5 3 3M4 20l4.2-.8L19 7.4a2.12 2.12 0 0 0-3-3L5.2 15.8 4 20Z" /></svg>
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.image} className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-[1px_1px_2px_rgba(0,0,0,0.12)] md:rounded-2xl">
                <img src={project.image} alt={project.title} className="aspect-[568/353] w-full object-cover" />
                <div className="border-t border-neutral-300 px-3 pb-2 pt-2.5 md:px-4 md:pb-3 md:pt-3">
                  <p className="text-[10px] leading-4 text-neutral-500 md:text-xs">Post</p>
                  <h3 className="mt-0.5 truncate text-[10px] font-medium leading-4 text-neutral-950 md:text-xs">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-3 text-neutral-800">
                    <button type="button" aria-label={`Save ${project.title}`} className="rounded p-0.5 hover:bg-neutral-100">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z" /></svg>
                    </button>
                    <button type="button" aria-label={`Report ${project.title}`} className="rounded p-0.5 hover:bg-neutral-100">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 21V4m0 1h13l-2 4 2 4H5" /></svg>
                    </button>
                    <button type="button" aria-label={`Like ${project.title}`} className="rounded p-0.5 hover:bg-neutral-100">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 10v11H4V10h3Zm0 11h9.2a2 2 0 0 0 1.9-1.4l2-6A2 2 0 0 0 18.2 11H14l.6-3.1A2.4 2.4 0 0 0 12.3 5L7 10v11Z" /></svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="flex items-center">
            <SectionHeading>Skills</SectionHeading>
            <EditButton label="skills" />
          </div>
          <div className="mt-1 divide-y divide-neutral-200 md:mt-2">
            {skills.map((skill, index) => <div key={`${skill}-${index}`} className="py-1.5 text-[9px] leading-3 font-medium md:py-2.5 md:text-sm">{skill}</div>)}
          </div>
        </section>

        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="flex items-center">
            <SectionHeading>Links added</SectionHeading>
            <EditButton label="links" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 min-[560px]:grid-cols-4 md:mt-3 md:gap-3">
            {profileLinks.map((link, index) => (
              <article key={link.logo} className="relative flex h-[66px] min-w-0 items-center overflow-hidden rounded-lg border border-neutral-200 px-2 py-1.5 md:h-24 md:rounded-xl md:px-3">
                <img src={link.background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.12]" />
                <div className="relative z-10 min-w-0 self-start">
                  <img src={link.logo} alt="" className="h-4 w-4 rounded object-cover md:h-6 md:w-6" />
                  <h3 className="mt-1 truncate text-[7px] font-medium leading-2.5 md:text-[10px]">{index === 0 ? "Zeros arena" : `Zeros arena`}</h3>
                  <p className="truncate text-[5px] leading-2 text-neutral-500 md:text-[8px]">A SIH preparation platform...</p>
                </div>
                <a href="#projects" className="absolute bottom-1.5 right-1.5 z-10 rounded-full bg-black px-2 py-0.5 text-[6px] leading-2.5 text-white md:px-2.5 md:text-[8px]">Learn More</a>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="flex items-center">
            <SectionHeading>Socials</SectionHeading>
            <EditButton label="socials" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-3 min-[560px]:grid-cols-5 md:mt-3 md:gap-4">
            {socials.map((social) => (
              <a key={social.name} href="#contact" className="flex min-w-0 items-center gap-1.5 rounded-lg transition hover:bg-neutral-50 md:gap-2">
                <img src={social.image} alt="" className="h-8 w-8 shrink-0 rounded-lg object-cover md:h-10 md:w-10" />
                <span className="min-w-0">
                  <span className="block truncate text-[8px] leading-3 text-neutral-500 md:text-[10px]">{social.name}</span>
                  <span className="block truncate text-[8px] font-semibold leading-3 md:text-[10px]">{social.handle}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-neutral-300 bg-white p-3 sm:p-3.5 md:rounded-2xl md:p-7">
          <div className="flex items-center">
            <SectionHeading>Education</SectionHeading>
            <EditButton label="education" />
          </div>
          <div className="mt-2 grid gap-3 min-[560px]:grid-cols-3 md:mt-3 md:gap-5">
            {education.map((item) => (
              <article key={item.school} className="flex min-w-0 items-center gap-1.5 md:gap-2.5">
                <img src={item.image} alt="" className="h-8 w-8 shrink-0 rounded-md object-contain md:h-10 md:w-10" />
                <div className="min-w-0">
                  <h3 className="truncate text-[8px] font-medium leading-3 md:text-[10px]">{item.school}</h3>
                  <p className="truncate text-[7px] leading-3 text-neutral-500 md:text-[9px]">{item.degree}</p>
                  <p className="text-[7px] leading-3 text-neutral-400 md:text-[9px]">{item.years}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative flex flex-col gap-3 overflow-hidden rounded-xl border border-neutral-300 bg-white p-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between min-[560px]:pr-20 md:rounded-2xl md:p-5 md:pr-24">
          <h2 className="relative z-10 max-w-xl text-[10px] font-semibold md:text-sm">Want to connect and collaborate on a project?</h2>
          <div className="relative z-10 flex flex-wrap items-center gap-2">
            <a href="mailto:hello@example.com" className="rounded-full bg-black px-3 py-1.5 text-[8px] font-medium text-white hover:bg-neutral-700 md:px-4 md:py-2 md:text-[10px]">➤ Message</a>
            <a href="mailto:hello@example.com?subject=Project%20inquiry" className="text-[8px] font-medium text-blue-700 hover:underline md:text-[10px]">or Send a project info</a>
          </div>
          <img src="/Ab09b083abf145e69cdc8f3654373b84convertedremovebgpreview1.png" alt="" className="pointer-events-none absolute -right-1 -top-1 h-full w-16 object-contain object-right md:w-24" />
        </section>
        </div>
      </div>
    </main>
  );
}