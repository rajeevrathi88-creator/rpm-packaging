import { Button } from "@/components/ui/button";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle,
  Eye,
  Factory,
  Globe,
  Heart,
  Phone,
  Shield,
  Target,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const MVV = [
  {
    icon: Target,
    title: "Mission",
    desc: "To deliver superior quality packaging solutions that empower our clients' businesses with precision, reliability, and consistent excellence in every order.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be India's most trusted packaging manufacturer with a global footprint, setting new benchmarks for quality and innovation in industrial packaging.",
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Quality · Integrity · Innovation · Timely Delivery — these four pillars guide every decision we make, from sourcing raw materials to dispatching final products.",
  },
];

const STATS = [
  { value: 19, suffix: "+", label: "Years Experience", sublabel: "Since 2004" },
  {
    value: 35,
    prefix: "₹",
    suffix: " Cr",
    label: "Annual Turnover",
    sublabel: "30–35 Cr Range",
  },
  {
    value: 650,
    suffix: " MT",
    label: "Monthly Capacity",
    sublabel: "Production Volume",
  },
  {
    value: 40,
    suffix: "+",
    label: "Reputed Clients",
    sublabel: "National & International",
  },
];

const MACHINERY = [
  "5 Ply Automatic Corrugation Plant",
  'Two Color Flexo Printing Machine 52"',
  "Single Color Flexo Printing Machine with Rotary Die",
  '2× Corrugation Roll Making Machine 52" & 42" (3 Units)',
  '2× Die Machine 45×65" (2 Units)',
  'Die Machine 40×52"',
  "Stitching Machine Box (5 Units)",
  '2× Sheet Pasting Machine 85" & 52" (2 Units)',
  'Rotary Machine 100"',
  'Two Color Printing Machine RS-4 96" (2 Units)',
];

const QUALITY_TESTS = [
  { icon: Shield, label: "Moisture Testing" },
  { icon: CheckCircle, label: "GSM Checking" },
  { icon: Zap, label: "Gum & Powder Quality" },
  { icon: Factory, label: "COB Tester" },
  { icon: Wrench, label: "OVEN Machine" },
  { icon: Award, label: "ECT / RCT Testing" },
  { icon: Globe, label: "Free Sampling Policy" },
];

const LOGISTICS = [
  {
    icon: Truck,
    title: "Transport Fleet",
    detail:
      "3 Eicher Canter + 2 Mahindra Pickup for timely, reliable delivery across NCR and Pan-India.",
  },
  {
    icon: Zap,
    title: "Power Backup",
    detail:
      "62 KVA Generator × 2 + 175 KVA Generator × 1 — zero production downtime guaranteed.",
  },
  {
    icon: Building2,
    title: "Warehouse Capacity",
    detail:
      "40 MT dedicated storage facility ensuring seamless order fulfilment and stock readiness.",
  },
];

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  duration = 1800,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Shared Animation Wrapper ─────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const y = direction === "up" ? 30 : 0;
  const x = direction === "left" ? -30 : direction === "right" ? 30 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <div className="w-6 h-0.5 bg-accent rounded-full" />
      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
        {text}
      </span>
      <div className="w-6 h-0.5 bg-accent rounded-full" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function AboutPage() {
  const { openQuote } = useQuoteStore();

  return (
    <div data-ocid="about.page">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="gradient-hero py-20 md:py-28"
        data-ocid="about.hero_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-primary-foreground/50 mb-6">
              <Link to="/" className="hover:text-accent transition-smooth">
                Home
              </Link>
              <span>/</span>
              <span className="text-accent font-semibold">About Us</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent">
                About RPM Packaging Industries
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-5">
              About RPM Packaging{" "}
              <span className="text-accent">Industries</span>
            </h1>
            <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              ISO 9001:2015 certified. 19+ years of manufacturing excellence.
              Trusted by 40+ national & international brands.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "ISO 9001:2015 Certified",
                "19+ Years Experience",
                "40+ Reputed Clients",
                "Made in India",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/10 border border-accent/30 rounded-sm text-xs font-semibold text-accent"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ──────────────────────────────────────── */}
      <section className="bg-background py-20" data-ocid="about.story_section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="space-y-5">
                <SectionLabel text="Our Story" />
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold pb-5">
                  Built on Vision, Driven by Quality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded in <strong className="text-foreground">2004</strong>{" "}
                  by <strong className="text-foreground">Rajeev Rathee</strong>{" "}
                  in Jhajjar, Haryana, RPM Packaging Industries began with a
                  clear vision — to provide India's garment and textile industry
                  with packaging that truly matched their product standards.
                  Starting from a modest facility, Mr. Rathee built the company
                  on principles of uncompromising quality and client-first
                  service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over 19 years, RPM has grown into a full-scale corrugated and
                  custom packaging manufacturer, now serving{" "}
                  <strong className="text-foreground">
                    40+ reputed clients
                  </strong>{" "}
                  across national and international markets — from fashion
                  giants like Calvin Klein and Uniqlo to FMCG leaders like MDH
                  Spices and Lifelong Meditech. Our annual turnover of{" "}
                  <strong className="text-foreground">₹30–35 Crore</strong> with
                  monthly production capacity of{" "}
                  <strong className="text-foreground">650 MT</strong> stands
                  testament to three decades of disciplined growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Certified to{" "}
                  <strong className="text-foreground">ISO 9001:2015</strong>{" "}
                  standards, our Jhajjar facility operates with 62+ skilled
                  employees and a fleet of advanced machinery — enabling us to
                  deliver precision-engineered packaging at scale, with
                  unrivalled turnaround times.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { icon: Award, label: "ISO 9001:2015 Certified" },
                    { icon: Factory, label: "Jhajjar, Haryana" },
                    { icon: Users, label: "62+ Skilled Employees" },
                    { icon: Globe, label: "National & International" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 text-sm font-medium text-foreground"
                    >
                      <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-border bg-muted/30 aspect-[4/3] flex items-center justify-center">
                <img
                  src="/assets/generated/hero-packaging-factory.dim_1400x700.jpg"
                  alt="RPM Packaging Industries manufacturing facility"
                  className="w-full h-full object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-primary/90 rounded-lg p-4 backdrop-blur-sm border border-accent/20">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                    📍 Manufacturing Facility
                  </p>
                  <p className="text-sm font-semibold text-primary-foreground">
                    Plot No. 6, Sector-7B, Model Economic Township
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-0.5">
                    Jhajjar, Haryana – 124103
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission · Vision · Values ─────────────────────────── */}
      <section
        className="bg-muted/40 py-20 border-y border-border"
        data-ocid="about.mvv_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel text="Our Purpose" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5">
                Mission, Vision & Values
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MVV.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div
                  className="bg-card border border-border rounded-xl p-7 shadow-subtle card-hover text-center h-full flex flex-col items-center"
                  data-ocid={`about.mvv.item.${i + 1}`}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ──────────────────────────────────────── */}
      <section
        className="gradient-hero py-16 md:py-20"
        data-ocid="about.stats_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div
                  className="text-center"
                  data-ocid={`about.stat.item.${i + 1}`}
                >
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-accent mb-1">
                    <AnimatedCounter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="font-semibold text-primary-foreground text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="text-xs text-primary-foreground/55 mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Capability ───────────────────────────── */}
      <section
        className="bg-background py-20"
        data-ocid="about.machinery_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel text="Infrastructure" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5">
                Manufacturing Capability
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Our state-of-the-art facility in Jhajjar houses a complete
                corrugated box manufacturing line, from raw board to finished
                product, enabling end-to-end quality control.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Machinery List */}
            <Reveal direction="left">
              <div className="bg-card border border-border rounded-xl p-7 shadow-subtle">
                <h3 className="font-display font-bold text-lg text-foreground mb-5 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-accent" />
                  Machinery & Equipment
                </h3>
                <ul className="space-y-3">
                  {MACHINERY.map((machine, i) => (
                    <li
                      key={machine}
                      className="flex items-start gap-3 text-sm text-muted-foreground group"
                      data-ocid={`about.machinery.item.${i + 1}`}
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/25 transition-smooth">
                        <Wrench className="w-2.5 h-2.5 text-accent" />
                      </div>
                      <span>{machine}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Capacity + Employees */}
            <Reveal direction="right" delay={0.1}>
              <div className="space-y-5">
                {/* Capacity Card */}
                <div className="bg-primary rounded-xl p-7 shadow-navy border border-primary/80">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-display font-semibold text-primary-foreground text-sm uppercase tracking-wide">
                      Monthly Production Capacity
                    </span>
                  </div>
                  <div className="font-display font-extrabold text-5xl text-accent mb-1">
                    650 MT
                  </div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    Metric tonnes of corrugated packaging produced monthly
                    across our automated lines, ensuring consistent supply for
                    bulk orders.
                  </p>
                </div>

                {/* Employee Card */}
                <div className="bg-card border border-border rounded-xl p-7 shadow-subtle">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-display font-semibold text-foreground text-sm uppercase tracking-wide">
                      Our Workforce
                    </span>
                  </div>
                  <div className="font-display font-extrabold text-5xl text-accent mb-1">
                    62+
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Skilled employees — machine operators, quality inspectors,
                    and logistics staff — committed to delivering on time, every
                    time.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ISO & Quality Assurance ───────────────────────────── */}
      <section
        className="bg-muted/40 py-20 border-y border-border"
        data-ocid="about.quality_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel text="Certification & QA" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5">
                Quality We Stand By
              </h2>
            </div>
          </Reveal>

          {/* ISO Badge — prominent */}
          <Reveal delay={0.05}>
            <div className="max-w-2xl mx-auto mb-10">
              <div className="bg-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-navy border border-accent/20">
                <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-accent/40 flex items-center justify-center flex-shrink-0 shadow-gold">
                  <Award className="w-12 h-12 text-accent" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-display font-extrabold text-3xl text-accent mb-1">
                    ISO 9001:2015
                  </div>
                  <div className="font-semibold text-primary-foreground text-lg mb-1">
                    Quality Management System
                  </div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    RPM Packaging Industries is certified to the ISO 9001:2015
                    international quality management standard — ensuring
                    consistent quality across every product and process.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Quality Test Methods */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {QUALITY_TESTS.map((qt, i) => (
              <Reveal key={qt.label} delay={i * 0.07}>
                <div
                  className="bg-card border border-border rounded-xl p-5 shadow-subtle card-hover flex flex-col items-center text-center gap-3"
                  data-ocid={`about.quality_test.item.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center">
                    <qt.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-tight">
                    {qt.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ────────────────────────────────────────── */}
      <section
        className="bg-background py-20"
        data-ocid="about.leadership_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel text="Leadership" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5">
                Meet Our Founder
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-elevated"
              data-ocid="about.leadership.item.1"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-24 h-24 rounded-full gradient-hero border-4 border-accent/40 flex items-center justify-center shadow-gold">
                    <span className="font-display font-extrabold text-2xl text-accent tracking-tight">
                      RR
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      Rajeev Rathee
                    </h3>
                    <p className="text-accent font-semibold text-sm mt-0.5">
                      Proprietor & Founder — RPM Packaging Industries
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    With over 19 years of industry leadership, Mr. Rajeev Rathee
                    founded RPM Packaging Industries in 2004 with a mission to
                    serve India's garment and textile sector with packaging that
                    meets international quality standards. His hands-on approach
                    to manufacturing, combined with a deep understanding of
                    client requirements, has made RPM Packaging a name
                    synonymous with reliability and quality in the corrugated
                    packaging industry.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Under his leadership, the company has achieved ISO 9001:2015
                    certification, expanded its client base to 40+ reputed
                    national and international brands, and grown annual revenues
                    to ₹30–35 Crore — all while maintaining uncompromising
                    quality standards and a client-first philosophy.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "19+ Years Industry Experience",
                      "ISO Quality Champion",
                      "Corrugated Packaging Expert",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="tel:+919990779707"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-smooth mt-1"
                    data-ocid="about.leader.phone_link"
                  >
                    <Phone className="w-4 h-4" />
                    +91-9990779707
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Logistics & Infrastructure ────────────────────────── */}
      <section
        className="bg-muted/40 py-20 border-y border-border"
        data-ocid="about.logistics_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <SectionLabel text="Operations" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5">
                Logistics & Infrastructure
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOGISTICS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div
                  className="bg-card border border-border rounded-xl p-7 shadow-subtle card-hover h-full"
                  data-ocid={`about.logistics.item.${i + 1}`}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-primary py-20" data-ocid="about.cta_section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="space-y-5 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mx-auto">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Looking for a Reliable Packaging Partner?
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed">
                Join 40+ leading brands that trust RPM Packaging Industries for
                consistent quality, timely delivery, and world-class packaging
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button
                  onClick={() => openQuote()}
                  className="btn-gold px-8 h-12 font-semibold text-sm"
                  data-ocid="about.cta_quote_button"
                >
                  Request a Free Quote
                </Button>
                <a
                  href="tel:+919990779707"
                  className="inline-flex items-center justify-center gap-2 px-8 h-12 border-2 border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent font-semibold text-sm rounded-md transition-smooth"
                  data-ocid="about.cta_call_button"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
