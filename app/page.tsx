"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormState>(initialFormState);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isContactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isContactOpen]);

  const openContactForm = () => setIsContactOpen(true);
  const closeContactForm = () => setIsContactOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Havstraum enquiry from ${contactForm.name}`;
    const body = [
      `Name: ${contactForm.name}`,
      `Organisation email: ${contactForm.email}`,
      "",
      "Message:",
      contactForm.message,
    ].join("\n");

    window.location.href = `mailto:info@havstraum.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setContactForm(initialFormState);
    closeContactForm();
  };

  return (
    <div className={`${fontBody.variable} min-h-screen`}>
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
          --font-brand:
            "Garet", "Garet Book", "Garet Medium", var(--font-body),
            ui-sans-serif, system-ui;
        }

        body {
          font-family:
            var(--font-body),
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial,
            "Apple Color Emoji",
            "Segoe UI Emoji";
          background: hsl(var(--bg));
          color: hsl(var(--fg));
        }

        .font-display,
        .font-brand {
          font-family: var(--font-brand);
        }

        .font-body {
          font-family: var(--font-body), ui-sans-serif, system-ui;
        }

        .bg-ocean-gradient {
          background-image: linear-gradient(
            180deg,
            hsl(var(--navy-deep)) 0%,
            hsl(var(--navy)) 45%,
            hsl(var(--ocean)) 100%
          );
        }

        .bg-wave-gradient {
          background-image:
            radial-gradient(
              1200px 600px at 30% 40%,
              rgba(30, 180, 236, 0.12),
              transparent 60%
            ),
            linear-gradient(
              180deg,
              hsl(var(--navy-deep)) 0%,
              hsl(var(--ocean)) 100%
            );
        }

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

        @media (prefers-reduced-motion: reduce) {
          .animate-float {
            animation: none !important;
          }
        }
      `}</style>

      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-[hsl(var(--ice))]/10 py-4"
            : "bg-transparent py-6",
        ].join(" ")}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-4">
          <AnimatedLogoBadge />
          <button
            type="button"
            onClick={openContactForm}
            className="font-body text-sm text-[hsl(var(--ice))]/70 hover:text-[hsl(var(--teal))] transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

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
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-[hsl(var(--ice))] leading-[1.05] mb-8">
            Turning ocean waves into reliable freshwater
          </h1>
          <p className="font-body text-lg md:text-xl text-[hsl(var(--ice))]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            A new approach to desalination designed for long-term operation at
            sea.
          </p>
          <button
            type="button"
            onClick={openContactForm}
            className="inline-flex items-center gap-2 bg-[hsl(var(--teal))] text-[hsl(var(--navy-deep))] px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-[1.02]"
          >
            Get in touch
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 animate-float">
          <ArrowDownIcon className="w-5 h-5 text-[hsl(var(--ice))]/50" />
        </div>
      </section>

      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              The Challenge
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--fg))] mb-6">
              Why Havstraum
            </h2>
            <p className="font-body text-lg text-[hsl(var(--muted))] leading-relaxed">
              Water stress is increasing globally, driven by population growth
              and rising demand from water-intensive industries such as
              agriculture, manufacturing, and energy. In coastal and island
              regions, this challenge is further compounded by limited access to
              reliable freshwater infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <WhyCard
              icon={<DropletsIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Freshwater Demand"
              description="Water stress is increasing across regions worldwide, with demand from both communities and industry outpacing supply. In coastal and island regions, this gap is especially critical, where access to reliable freshwater remains limited."
            />
            <WhyCard
              icon={<ZapIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Untapped Energy"
              description="Ocean waves offer a constant and abundant source of energy. Yet their use in desalination remains limited due to challenges in reliability and long-term operation at sea."
            />
            <WhyCard
              icon={<GlobeIcon className="w-6 h-6 text-[hsl(var(--teal))]" />}
              title="Our Purpose"
              description="Havstraum exists to unlock reliable wave-powered desalination — enabling scalable freshwater production for both industrial and off-grid applications."
            />
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/wave-pattern.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-ocean-gradient opacity-90" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
                Our Approach
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--ice))] mb-8 leading-tight">
                Rethinking mechanical systems for ocean conditions
              </h2>
              <p className="font-body text-lg text-[hsl(var(--ice))]/70 leading-relaxed">
                Havstraum is developing a wave-powered desalination concept
                focused on how energy is transferred, controlled, and sustained
                in marine environments. By rethinking mechanical systems for
                ocean conditions, we aim to enable more robust and long-lasting
                freshwater production offshore.
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
                  <p className="font-display text-3xl font-semibold text-[hsl(var(--teal))] mb-2">
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

      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              Our Edge
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--fg))]">
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
              title="Reliability at the core"
              description="Designed for dependable offshore operation, with a simpler system architecture that supports long-term performance and easier maintenance."
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

      <section className="py-28 md:py-36 bg-wave-gradient relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <VisionMissionCard
              eyebrow="Vision"
              statement="A future where freshwater is produced directly from the ocean — reliably, sustainably, and at scale."
              subtext="Enabling a new paradigm of decentralized, ocean-based water production without dependence on external energy infrastructure."
            />
            <VisionMissionCard
              eyebrow="Mission"
              statement="To develop and enable wave-powered desalination systems that are reliable, durable, and scalable for continuous operation at sea."
              subtext="Focused on durability-first design to ensure consistent performance in harsh marine environments."
            />
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-[hsl(var(--bg))]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-4">
              Collaborate
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[hsl(var(--fg))] mb-6">
              Let&apos;s build together
            </h2>
            <p className="font-body text-lg text-[hsl(var(--muted))] leading-relaxed">
              We are interested in connecting with experts and partners who
              share our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            <ContactCard
              icon={
                <FlaskConicalIcon className="w-6 h-6 text-[hsl(var(--teal))] shrink-0 mt-0.5" />
              }
              title="Research Institutions"
              description="Academic and research partners exploring wave energy and desalination."
            />
            <ContactCard
              icon={
                <UsersIcon className="w-6 h-6 text-[hsl(var(--teal))] shrink-0 mt-0.5" />
              }
              title="Industry Experts"
              description="Desalination and water system professionals seeking innovative partnerships."
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={openContactForm}
              className="inline-flex items-center gap-3 bg-ocean-gradient text-[hsl(var(--ice))] px-10 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:brightness-110 hover:scale-105 active:scale-[1.02]"
            >
              <MailIcon className="w-5 h-5" />
              Contact us
            </button>
          </div>
        </div>
      </section>

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

      <ContactModal
        isOpen={isContactOpen}
        form={contactForm}
        onClose={closeContactForm}
        onSubmit={handleContactSubmit}
        onChange={(field, value) =>
          setContactForm((current) => ({
            ...current,
            [field]: value,
          }))
        }
      />
    </div>
  );
}

function AnimatedLogoBadge() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // ignore autoplay issues
      });
    }
  }, []);

  return (
    <div
      className="inline-flex items-center rounded-[24px] bg-[#d9f3fb] px-4 py-3 shadow-sm ring-1 ring-[#7dd3ea]/40 backdrop-blur-sm"
      aria-label="Havstraum"
    >
      <div className="relative h-[92px] w-[320px] overflow-hidden rounded-[18px] bg-white">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute left-1/2 top-[45%] w-[350px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
        >
          <source src="/brand/havstraum-logo-dark.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function ContactModal({
  isOpen,
  form,
  onClose,
  onSubmit,
  onChange,
}: {
  isOpen: boolean;
  form: ContactFormState;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (field: keyof ContactFormState, value: string) => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        aria-label="Close contact form"
        className="absolute inset-0 bg-[hsl(var(--navy-deep))]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 md:p-8 shadow-2xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-3">
              Contact
            </p>
            <h3
              id="contact-modal-title"
              className="font-display text-3xl md:text-4xl font-semibold text-[hsl(var(--fg))]"
            >
              Get in touch
            </h3>
            <p className="mt-3 font-body text-sm md:text-base text-[hsl(var(--muted))] leading-relaxed max-w-xl">
              Share your name, organisation email, and message. On submit, the
              message opens in your email app ready to send to Havstraum.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted))] transition-colors hover:border-[hsl(var(--teal))]/40 hover:text-[hsl(var(--fg))]"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-body text-sm font-medium text-[hsl(var(--fg))]">
                Name
              </span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => onChange("name", event.target.value)}
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-[hsl(var(--border))] bg-white px-4 py-3 font-body text-[hsl(var(--fg))] outline-none transition focus:border-[hsl(var(--teal))] focus:ring-4 focus:ring-[hsl(var(--teal))]/10"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-body text-sm font-medium text-[hsl(var(--fg))]">
                Organisation email
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => onChange("email", event.target.value)}
                placeholder="name@organisation.com"
                required
                className="w-full rounded-2xl border border-[hsl(var(--border))] bg-white px-4 py-3 font-body text-[hsl(var(--fg))] outline-none transition focus:border-[hsl(var(--teal))] focus:ring-4 focus:ring-[hsl(var(--teal))]/10"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block font-body text-sm font-medium text-[hsl(var(--fg))]">
              Message
            </span>
            <textarea
              value={form.message}
              onChange={(event) => onChange("message", event.target.value)}
              placeholder="Tell us a bit about your enquiry"
              rows={6}
              required
              className="w-full rounded-[24px] border border-[hsl(var(--border))] bg-white px-4 py-3 font-body text-[hsl(var(--fg))] outline-none transition focus:border-[hsl(var(--teal))] focus:ring-4 focus:ring-[hsl(var(--teal))]/10"
            />
          </label>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-sm text-[hsl(var(--muted))]">
              This keeps the same no-backend setup and pre-fills the email for
              the user.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--border))] px-6 py-3 font-body font-medium text-[hsl(var(--fg))] transition hover:border-[hsl(var(--teal))]/40 hover:bg-[hsl(var(--teal))]/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ocean-gradient px-6 py-3 font-body font-medium text-[hsl(var(--ice))] transition hover:brightness-110"
              >
                Send enquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

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
    <div className="group p-8 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--teal))]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[hsl(var(--teal))]/5">
      <div className="w-12 h-12 rounded-xl bg-[hsl(var(--teal))]/10 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--teal))]/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-[hsl(var(--fg))] mb-3">
        {title}
      </h3>
      <p className="font-body text-[hsl(var(--muted))] leading-relaxed text-sm">
        {description}
      </p>
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
    <div className="group flex gap-5 p-8 rounded-2xl hover:bg-[hsl(var(--card))] hover:shadow-lg hover:shadow-[hsl(var(--teal))]/5 border border-transparent hover:border-[hsl(var(--border))] transition-all duration-500">
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-ocean-gradient flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-[hsl(var(--fg))] mb-2">
          {title}
        </h3>
        <p className="font-body text-[hsl(var(--muted))] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function VisionMissionCard({
  eyebrow,
  statement,
  subtext,
}: {
  eyebrow: string;
  statement: string;
  subtext: string;
}) {
  return (
    <div className="rounded-[28px] border border-[hsl(var(--ice))]/12 bg-[hsl(var(--ice))]/5 p-8 md:p-10 backdrop-blur-sm">
      <p className="font-body text-sm tracking-[0.25em] uppercase text-[hsl(var(--teal))] mb-6">
        {eyebrow}
      </p>
      <h3 className="font-display text-2xl md:text-3xl lg:text-[2.125rem] font-semibold text-[hsl(var(--ice))] leading-[1.25] mb-5">
        {statement}
      </h3>
      <p className="font-body text-base md:text-lg text-[hsl(var(--ice))]/68 leading-relaxed">
        {subtext}
      </p>
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
        <h3 className="font-display text-lg font-semibold text-[hsl(var(--fg))] mb-1">
          {title}
        </h3>
        <p className="font-body text-sm text-[hsl(var(--muted))]">
          {description}
        </p>
      </div>
    </div>
  );
}

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

function CloseIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
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
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L2 19l3 3 6.3-6.3a5 5 0 0 0 6.4-6.4l-3 3-3-3 3-3Z" />
    </IconBase>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.64 5.64 2.12 2.12" />
      <path d="m16.24 16.24 2.12 2.12" />
      <path d="m5.64 18.36 2.12-2.12" />
      <path d="m16.24 7.76 2.12-2.12" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

function ScalingIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 20h16" />
      <path d="M6 16V8" />
      <path d="M12 16V4" />
      <path d="M18 16v-6" />
    </IconBase>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 6h16v12H4z" />
      <path d="m22 7-10 7L2 7" />
    </IconBase>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

function FlaskConicalIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M10 2v6l-6 10a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 18L14 8V2" />
      <path d="M8.5 2h7" />
      <path d="M7 14h10" />
    </IconBase>
  );
}
