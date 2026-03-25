"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

/**
 * This page matches the Lovable version more closely:
 * - Same icon set (Lucide-style inline SVGs) and icon sizing
 * - Button hover grows slightly (hover:scale-105) + brightness
 * - Card hover effects match (border/teal shadow, group hover)
 * - Uses the same section structure, spacing, and typography approach
 *
 * No extra deps required.
 */

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${fontDisplay.variable} ${fontBody.variable} min-h-screen`}>
      {/* Global tokens to mimic Lovable's Tailwind theme */}
      <style jsx global>{`
        :root {
          --navy-deep: 222 85% 10%;
          --navy: 215 100% 16%;
          --ocean: 207 96% 24%;
          --teal: 192 85% 45%;
          --ice: 210 20% 98%;
          --bg: 210 25% 98%;
          --fg: 222 47% 11%;
          --muted: 215 16% 47%;
          --card: 0 0% 100%;
          --border: 214 18% 90%;
        }
        body {
          font-family: var(--font-body), ui-sans-serif, system-ui, -apple-system,
            Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
            "Segoe UI Emoji";
          background: hsl(var(--bg));
          color: hsl(var(--fg));
        }
        .font-display {
          font-family: var(--font-display), ui-serif, Georgia, Cambria,
            "Times New Roman", Times, serif;
        }
        .font-body {
          font-family: var(--font-body), ui-sans-serif, system-ui;
        }
        /* Lovable gradient helpers */
        .bg-ocean-gradient {
          background-image: linear-gradient(
            180deg,
            hsl(var(--navy-deep)) 0%,
            hsl(var(--navy)) 45%,
            hsl(var(--ocean)) 100%
          );
        }
        .bg-wave-gradient {
          background-image: radial-gradient(
              1200px 600px at 30% 40%,
              rgba(30, 180, 236, 0.12),
              transparent 60%
            ),
            linear-gradient(180deg, hsl(var(--navy-deep)) 0%, hsl(var(--ocean)) 100%);
        }
        /* Soft float for arrow */
        @keyframes floaty {
          0% {
            transform: translate(-50%, 0);
            opacity: 0.55;
          }
          50% {
            transform: translate(-50%, -8px);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, 0);
            opacity: 0.55;
          }
        }
        .animate-float {
          animation: floaty 2.2s ease-in-out infinite;
        }
      `}</style>

      {/* NAVBAR (Lovable style) */}
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-[hsl(var(--ice))]/10 py-4"
            : "bg-transparent py-6",
        ].join(" ")}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-[hsl(var(--ice))] tracking-wide">
            Havstraum
          </span>
          <a
            href="mailto:info@havstraum.com"
            className="font-body text-sm text-[hsl(var(--ice))]/70 hover:text-[hsl(var(--teal))] transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO (Lovable style) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-ocean.jpg"
            alt="Ocean waves"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ocean-gradient opacity-70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-28">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-[hsl(var(--teal))] mb-6 opacity-90">
            Wave-powered desalination
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[hsl(var(--ice))] leading-[1.05] mb-8">
            Turning ocean waves into reliable freshwater
          </h1>
          <p className="font-body text-lg md:text-xl text-[hsl(var(--ice))]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            A new approach to desalination designed for long-term operation at sea.
          </p>
          <a
            href="mailto:info@havstraum.com"
            className="inline-flex items-center gap-2 bg-[hsl(var(--teal))] text-[hsl(var(--navy-deep))] px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 animate-float">
          <ArrowDownIcon className="w-5 h-5 text-[hsl(var(--ice))]/50" />
        </div>
      </section>

      {/* WHY (Lovable style) */}
      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              The Challenge
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[hsl(var(--fg))] mb-6">
              Why Havstraum
            </h2>
            <p className="font-body text-lg text-[hsl(var(--muted))] leading-relaxed">
              Freshwater scarcity is increasing across coastal and island regions, while existing
              desalination solutions remain energy-intensive and difficult to maintain offshore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <WhyCard
              icon={<DropletsIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Freshwater Scarcity"
              description="Coastal and island regions face chronic freshwater scarcity, while existing desalination solutions remain energy-intensive and expensive."
            />
            <WhyCard
              icon={<ZapIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Untapped Energy"
              description="Ocean waves offer a constant and abundant source of energy, yet reliability has limited their use in water production."
            />
            <WhyCard
              icon={<GlobeIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Our Purpose"
              description="Havstraum exists to unlock the potential of wave energy for sustainable freshwater production worldwide."
            />
          </div>
        </div>
      </section>

      {/* APPROACH (Lovable style) */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/wave-pattern.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ocean-gradient opacity-90" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
                Our Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[hsl(var(--ice))] mb-8 leading-tight">
                Rethinking mechanical systems for ocean conditions
              </h2>
              <p className="font-body text-lg text-[hsl(var(--ice))]/70 leading-relaxed">
                Havstraum is developing a wave-powered desalination concept focused on how energy is
                transferred, controlled, and sustained in marine environments. By rethinking
                mechanical systems for ocean conditions, we aim to enable more robust and
                long-lasting freshwater production offshore.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "24/7", label: "Wave energy availability" },
                { value: "Low", label: "Maintenance design" },
                { value: "Modular", label: "Scalable systems" },
                { value: "Zero", label: "Grid dependency" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-[hsl(var(--ice))]/5 border border-[hsl(var(--ice))]/10 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl font-bold text-[hsl(var(--teal))] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-sm text-[hsl(var(--ice))]/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE (Lovable style) */}
      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              Our Edge
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[hsl(var(--fg))]">
              What makes us different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureRow
              icon={<ShieldIcon className="w-6 h-6 text-[hsl(var(--ice))]" />}
              title="Designed for durability"
              description="Built to withstand harsh marine environments with corrosion-resistant architecture."
            />
            <FeatureRow
              icon={<WrenchIcon className="w-6 h-6 text-[hsl(var(--ice))]" />}
              title="Fewer failure points"
              description="Focused on reducing failure-prone components for higher system reliability."
            />
            <FeatureRow
              icon={<SettingsIcon className="w-6 h-6 text-[hsl(var(--ice))]" />}
              title="Low maintenance"
              description="Engineered around low-maintenance principles for reduced service interventions."
            />
            <FeatureRow
              icon={<ScalingIcon className="w-6 h-6 text-[hsl(var(--ice))]" />}
              title="Scalable deployment"
              description="Modular systems designed for gradual, real-world deployment at any scale."
            />
          </div>
        </div>
      </section>

      {/* VISION (Lovable style) */}
      <section className="py-28 md:py-36 bg-wave-gradient relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-6">
              Our Vision
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--ice))] leading-tight mb-10">
              A future where coastal regions produce freshwater directly from the ocean
            </h2>
            <p className="font-body text-lg text-[hsl(var(--ice))]/60 max-w-2xl mx-auto leading-relaxed mb-6">
              Reliably, sustainably, and without dependence on external energy infrastructure.
            </p>

            <div className="w-16 h-px bg-[hsl(var(--teal))]/40 mx-auto my-12" />

            <div>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
                Our Mission
              </p>
              <p className="font-display text-xl md:text-2xl text-[hsl(var(--ice))]/80 italic max-w-3xl mx-auto leading-relaxed">
                To develop and enable desalination systems that make wave-powered water production
                practical, durable, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT (Lovable style) */}
      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              Collaborate
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[hsl(var(--fg))] mb-6">
              Let's build together
            </h2>
            <p className="font-body text-lg text-[hsl(var(--muted))] leading-relaxed">
              We are interested in connecting with experts and partners who share our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            <ContactCard
              icon={<FlaskConicalIcon className="w-6 h-6 text-[hsl(var(--teal))] shrink-0 mt-0.5" />}
              title="Research Institutions"
              description="Academic and research partners exploring wave energy and desalination."
            />
            <ContactCard
              icon={<UsersIcon className="w-6 h-6 text-[hsl(var(--teal))] shrink-0 mt-0.5" />}
              title="Industry Experts"
              description="Desalination and water system professionals seeking innovative partnerships."
            />
          </div>

          <div className="text-center">
            <a
              href="mailto:info@havstraum.com"
              className="inline-flex items-center gap-3 bg-ocean-gradient text-[hsl(var(--ice))] px-10 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-[1.02]"
            >
              <MailIcon className="w-5 h-5" />
              info@havstraum.com
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (Lovable style) */}
      <footer className="py-10 bg-[hsl(var(--navy-deep))] border-t border-[hsl(var(--ice))]/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold text-[hsl(var(--ice))]">
            Havstraum
          </span>
          <p className="font-body text-sm text-[hsl(var(--ice))]/40">
             {new Date().getFullYear()} Havstraum. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Shared UI ---------- */

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--teal))]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[hsl(var(--teal))]/5"
    >
      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--teal))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--teal))]/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-[hsl(var(--fg))] mb-3">{title}</h3>
      <p className="font-body text-[hsl(var(--muted))] leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex gap-5 p-8 rounded-2xl hover:bg-[hsl(var(--card))] hover:shadow-lg hover:shadow-[hsl(var(--teal))]/5 border border-transparent hover:border-[hsl(var(--border))] transition-all duration-500"
    >
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-ocean-gradient flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-[hsl(var(--fg))] mb-2">{title}</h3>
        <p className="font-body text-[hsl(var(--muted))] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start p-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      {icon}
      <div>
        <h3 className="font-display text-lg font-semibold text-[hsl(var(--fg))] mb-1">{title}</h3>
        <p className="font-body text-sm text-[hsl(var(--muted))]">{description}</p>
      </div>
    </div>
  );
}

/* ---------- Lucide-style inline icons (no dependency) ---------- */

function IconBase({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </IconBase>
  );
}

function DropletsIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M7 16.5A4.5 4.5 0 0 1 3 12c0-2.3 2-4.7 4-7 2 2.3 4 4.7 4 7a4.5 4.5 0 0 1-4 4.5Z" />
      <path d="M17 16.5A4.5 4.5 0 0 1 13 12c0-2.3 2-4.7 4-7 2 2.3 4 4.7 4 7a4.5 4.5 0 0 1-4 4.5Z" />
      <path d="M12 19a2.5 2.5 0 0 0 5 0" />
    </IconBase>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </IconBase>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20" />
      <path d="M12 2a15 15 0 0 0 0 20" />
    </IconBase>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z" />
    </IconBase>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      {/* lucide "wrench" */}
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L2 19l3 3 6.3-6.3a5 5 0 0 0 6.4-6.4l-3 3-3-3 3-3Z" />
    </IconBase>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z" />
    </IconBase>
  );
}

function ScalingIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      {/* lucide "expand" */}
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </IconBase>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </IconBase>
  );
}

function FlaskConicalIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M10 2v6l-6 10a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 18l-6-10V2" />
      <path d="M8.5 2h7" />
      <path d="M7 14h10" />
    </IconBase>
  );
}