import type { ReactNode } from "react";
import Image from "next/image";

const challengeCards = [
  {
    title: "Freshwater Scarcity",
    text: "Coastal and island regions face chronic freshwater scarcity, while existing desalination solutions remain energy-intensive and expensive.",
    icon: <DropIcon className="h-7 w-7" />,
  },
  {
    title: "Untapped Energy",
    text: "Ocean waves offer a constant and abundant source of energy, yet reliability has limited their use in water production.",
    icon: <BoltIcon className="h-7 w-7" />,
  },
  {
    title: "Our Purpose",
    text: "Havstraum exists to unlock the potential of wave energy for sustainable freshwater production worldwide.",
    icon: <GlobeIcon className="h-7 w-7" />,
  },
] as const;

const metricCards = [
  { value: "24/7", label: "Wave energy availability" },
  { value: "Low", label: "Maintenance design" },
  { value: "Modular", label: "Scalable systems" },
  { value: "Zero", label: "Grid dependency" },
] as const;

const differentiators = [
  {
    title: "Designed for durability",
    text: "Built to withstand harsh marine environments with corrosion-resistant architecture.",
    icon: <ShieldIcon className="h-7 w-7" />,
  },
  {
    title: "Fewer failure points",
    text: "Focused on reducing failure-prone components for higher system reliability.",
    icon: <WrenchIcon className="h-7 w-7" />,
  },
  {
    title: "Low maintenance",
    text: "Engineered around low-maintenance principles for reduced service interventions.",
    icon: <GearIcon className="h-7 w-7" />,
  },
  {
    title: "Scalable deployment",
    text: "Modular systems designed for gradual, real-world deployment at any scale.",
    icon: <ExpandIcon className="h-7 w-7" />,
  },
] as const;

const collaborationCards = [
  {
    title: "Research Institutions",
    text: "Academic and research partners exploring wave energy and desalination.",
    icon: <FlaskIcon className="h-7 w-7" />,
  },
  {
    title: "Industry Experts",
    text: "Desalination and water system professionals seeking innovative partnerships.",
    icon: <UsersIcon className="h-7 w-7" />,
  },
] as const;

export default function Home() {
  return (
    <div className="bg-[#f3f5f7] text-[#0b1730]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-white md:px-10">
          <a href="#top" className="font-serif text-3xl font-semibold tracking-tight">
            Havstraum
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-white/85 transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-center overflow-hidden">
          <Image
            src="/hero-ocean.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#04173d]/55" />

          <div className="relative mx-auto flex w-full max-w-7xl justify-center px-6 pb-20 pt-36 text-center text-white md:px-10">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.45em] text-[#1eb4ec] md:text-xl">
                Wave-powered desalination
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-[7.2rem]">
                Turning ocean waves into reliable freshwater
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/80 md:text-2xl">
                A new approach to desalination designed for long-term operation at sea.
              </p>
              <a
                href="#contact"
                className="mt-12 inline-flex items-center justify-center rounded-full bg-[#0ea5df] px-10 py-5 text-xl font-semibold text-white shadow-lg shadow-cyan-950/20 transition hover:bg-[#0894c9]"
              >
                Get in touch
              </a>
              <div className="mt-14 text-4xl text-white/55">↓</div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <SectionEyebrow>The challenge</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold tracking-tight text-[#0a1022] md:text-7xl">
              Why Havstraum
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-2xl leading-[1.7] text-[#5b7087] md:text-[2rem]">
              Freshwater scarcity is increasing across coastal and island regions, while existing desalination solutions remain energy-intensive and difficult to maintain offshore.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {challengeCards.map((card) => (
                <InfoCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#032b69] px-6 py-24 text-white md:px-10 md:py-32">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: "url('/wave-pattern.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-[#032b69]/75" />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.95fr] lg:items-start">
            <div>
              <SectionEyebrow dark>Our approach</SectionEyebrow>
              <h2 className="max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                Rethinking mechanical systems for ocean conditions
              </h2>
              <p className="mt-10 max-w-4xl text-2xl leading-[1.65] text-white/80">
                Havstraum is developing a wave-powered desalination concept focused on how energy is transferred, controlled, and sustained in marine environments. By rethinking mechanical systems for ocean conditions, we aim to enable more robust and long-lasting freshwater production offshore.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {metricCards.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                >
                  <div className="font-serif text-4xl font-semibold text-[#1eb4ec] md:text-6xl">
                    {metric.value}
                  </div>
                  <p className="mt-4 text-xl font-medium text-white/75 md:text-2xl">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f3f5f7] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <SectionEyebrow>Our edge</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold tracking-tight text-[#0a1022] md:text-7xl">
              What makes us different
            </h2>

            <div className="mt-20 grid gap-14 md:grid-cols-2 md:text-left">
              {differentiators.map((item) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] bg-[#032b69] text-white shadow-lg shadow-blue-950/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl font-semibold tracking-tight text-[#0a1022]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-xl leading-10 text-[#5b7087]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#032b69] px-6 py-24 text-center text-white md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow dark>Our vision</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[6.2rem]">
              A future where coastal regions produce freshwater directly from the ocean
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-2xl leading-[1.7] text-white/75 md:text-3xl">
              Reliably, sustainably, and without dependence on external energy infrastructure.
            </p>

            <div className="mx-auto my-14 h-px w-24 bg-[#1eb4ec]/40" />

            <SectionEyebrow dark>Our mission</SectionEyebrow>
            <p className="mx-auto mt-6 max-w-5xl font-serif text-3xl italic leading-[1.45] text-white/90 md:text-5xl">
              To develop and enable desalination systems that make wave-powered water production practical, durable, and scalable.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-[#f3f5f7] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <SectionEyebrow>Collaborate</SectionEyebrow>
            <h2 className="font-serif text-5xl font-semibold tracking-tight text-[#0a1022] md:text-7xl">
              Let&apos;s build together
            </h2>
            <p className="mx-auto mt-8 max-w-5xl text-2xl leading-[1.7] text-[#5b7087] md:text-[2rem]">
              We are interested in connecting with experts and partners who share our vision.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {collaborationCards.map((card) => (
                <InfoCard key={card.title} icon={card.icon} title={card.title} text={card.text} />
              ))}
            </div>

            <a
              href="mailto:info@havstraum.com"
              className="mt-16 inline-flex items-center justify-center gap-3 rounded-full bg-[#032b69] px-9 py-5 text-xl font-semibold text-white transition hover:bg-[#012451]"
            >
              <MailIcon className="h-6 w-6" />
              info@havstraum.com
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#021f57] px-6 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-serif text-3xl font-semibold tracking-tight">Havstraum</div>
          <div className="text-lg text-white/75">© 2026 Havstraum. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <div className="rounded-[2rem] border border-[#d9e0e7] bg-white p-10 text-left shadow-[0_10px_30px_rgba(3,23,61,0.04)]">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-[#eef4f8] text-[#0a91cc]">
        {icon}
      </div>
      <h3 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-[#0a1022]">
        {title}
      </h3>
      <p className="mt-5 text-xl leading-10 text-[#5b7087]">{text}</p>
    </div>
  );
}

function SectionEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-6 text-sm font-medium uppercase tracking-[0.42em] md:text-xl ${
        dark ? "text-[#1eb4ec]" : "text-[#0a91cc]"
      }`}
    >
      {children}
    </p>
  );
}

type IconProps = {
  className?: string;
};

function DropIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3c2.8 3.7 5.5 6.5 5.5 10.1A5.5 5.5 0 0 1 6.5 13.1C6.5 9.5 9.2 6.7 12 3Z" />
      <path d="M16.5 8.5c1.9 2.2 3 4 3 6A4.5 4.5 0 0 1 15 19" />
    </svg>
  );
}

function BoltIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="m13 2-8 11h5l-1 9 9-12h-5l0-8Z" />
    </svg>
  );
}

function GlobeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 10 4.2-2.2 7-5.5 7-10V6l-7-3Z" />
    </svg>
  );
}

function WrenchIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M14.5 6.5a4 4 0 0 0 5 5l-9.8 9.8a2 2 0 1 1-2.8-2.8L16.7 8.7a4 4 0 0 1-2.2-2.2Z" />
    </svg>
  );
}

function GearIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2H9a1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .7.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1V9c0 .4.2.8.6.9h.2H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.7Z" />
    </svg>
  );
}

function ExpandIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

function FlaskIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M10 3v5l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-9V3" />
      <path d="M8 3h8" />
      <path d="M9 14h6" />
    </svg>
  );
}

function UsersIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M16 19a5 5 0 0 1 5-5" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}