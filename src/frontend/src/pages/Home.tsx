import { Button } from "@/components/ui/button";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Box,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Factory,
  Layers,
  Package,
  Printer,
  Scissors,
  ShoppingBag,
  ShoppingCart,
  Star,
  Tablet,
  Truck,
  Users,
  Wheat,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(target > 0 ? 0 : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const duration = 2000;
          const step = 16;
          const increment = (target / duration) * step;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, step);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-0.5 bg-accent" />
        <span
          className={`text-xs font-semibold tracking-widest uppercase ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          {eyebrow}
        </span>
        <div className="w-8 h-0.5 bg-accent" />
      </div>
      <h2
        className={`font-display text-3xl sm:text-4xl font-bold heading-gold-lg pb-3 ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 19, suffix: "+", label: "Years Experience", sub: "Est. 2004" },
  {
    prefix: "₹",
    value: 35,
    suffix: " Cr+",
    label: "Annual Turnover",
    sub: "FY 2023–24",
  },
  {
    value: 650,
    suffix: " MT",
    label: "Monthly Capacity",
    sub: "Corrugated Production",
  },
  {
    value: 40,
    suffix: "+",
    label: "Reputed Clients",
    sub: "National & International",
  },
];

const PRODUCTS = [
  {
    icon: Box,
    name: "Corrugated Boxes",
    desc: "3-ply, 5-ply & 7-ply corrugated shipping and storage boxes.",
    slug: "corrugated-boxes",
  },
  {
    icon: Printer,
    name: "Printed Packaging Boxes",
    desc: "High-quality flexo-printed boxes for retail and e-commerce brands.",
    slug: "printed-packaging",
  },
  {
    icon: Scissors,
    name: "Die Cut Boxes",
    desc: "Custom die-cut packaging for precision product presentation.",
    slug: "die-cut-boxes",
  },
  {
    icon: Package,
    name: "Mono Cartons",
    desc: "Single-wall cartons ideal for FMCG, pharma and apparel packaging.",
    slug: "mono-cartons",
  },
  {
    icon: Layers,
    name: "Custom Packaging Solutions",
    desc: "End-to-end custom packaging designed to your exact specifications.",
    slug: "custom-packaging",
  },
  {
    icon: Zap,
    name: "Heavy Duty Packaging Boxes",
    desc: "Industrial-grade heavy-duty boxes for machinery and export cargo.",
    slug: "heavy-duty",
  },
  {
    icon: Tablet,
    name: "Corrugated Boards & Rolls",
    desc: "Raw corrugated boards and rolls for converters and manufacturers.",
    slug: "boards-rolls",
  },
  {
    icon: ShoppingBag,
    name: "Plastic Poly Bags",
    desc: "Durable polythene bags for garment, retail and protective packaging.",
    slug: "poly-bags",
  },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Every product meets rigorous international quality management standards.",
  },
  {
    icon: CheckCircle,
    title: "Premium Raw Material",
    desc: "Sourced from top-grade kraft paper mills for superior box strength.",
  },
  {
    icon: Printer,
    title: "Custom Printing Available",
    desc: "Full-colour flexo printing with logo, branding and product info.",
  },
  {
    icon: Factory,
    title: "Bulk Production Capacity",
    desc: "650 MT/month output powered by 5-ply fully automatic production line.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    desc: "3-vehicle own fleet ensuring on-time delivery across NCR and beyond.",
  },
  {
    icon: Users,
    title: "Trusted by 40+ Businesses",
    desc: "Serving leading national and international brands since 2004.",
  },
];

const INDUSTRIES = [
  { icon: ShoppingCart, label: "FMCG" },
  { icon: Cpu, label: "Electronics" },
  { icon: Wheat, label: "Food & Beverage" },
  { icon: Package, label: "Pharmaceuticals" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Scissors, label: "Garment & Textile" },
  { icon: Zap, label: "Automotive" },
];

const CLIENTS = [
  "Aditya Birla Fashion & Retail",
  "Arvind Fashion Ltd.",
  "Calvin Klein – Arvind",
  "Benetton India",
  "Uniqlo India",
  "Blackberry (Mohan Clothing)",
  "CANTABIL RETAIL",
  "Flipkart India",
  "Myntra Designs",
  "MDH Spices",
  "Jindal Stainless",
  "Asahi India Glass",
  "Lifelong Meditech",
  "Machino Plastics",
  "Subros Limited",
  "RADNIK EXPORTS",
  "Sarita Handa Export",
  "C & R Textiles",
  "Kiranakart Technologies",
  "Nutaste Food & Drink Labs",
];

const TESTIMONIALS = [
  {
    name: "Amit Sharma",
    role: "Head of Supply Chain",
    company: "Aditya Birla Fashion & Retail",
    quote:
      "RPM Packaging has been our trusted corrugated box supplier for over 6 years. Quality is consistently excellent, delivery always on time, and their team is highly responsive to our custom requirements.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Packaging Manager",
    company: "Flipkart India Pvt. Ltd.",
    quote:
      "We process thousands of shipments daily and RPM's heavy-duty boxes have significantly reduced damage rates. Their ISO certification and bulk production capacity makes them an ideal large-scale partner.",
    rating: 5,
  },
  {
    name: "Sandeep Gupta",
    role: "Operations Director",
    company: "MDH Spices (Mahashian Di Hatti)",
    quote:
      "The printed packaging RPM delivers for our spice range is crisp, vibrant, and food-safe. Their team understands FMCG requirements perfectly and delivers premium quality at competitive pricing.",
    rating: 5,
  },
];

// ─── Marquee component ────────────────────────────────────────────────────────
function ClientMarquee() {
  const row1 = [...CLIENTS.slice(0, 10), ...CLIENTS.slice(0, 10)];
  const row2 = [...CLIENTS.slice(10), ...CLIENTS.slice(10)];
  return (
    <div className="overflow-hidden space-y-3">
      <style>{`
        @keyframes marquee-fwd {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track-fwd {
          animation: marquee-fwd 32s linear infinite;
          will-change: transform;
        }
        .marquee-track-rev {
          animation: marquee-rev 38s linear infinite;
          will-change: transform;
        }
        .marquee-track-fwd:hover,
        .marquee-track-rev:hover { animation-play-state: paused; }
      `}</style>
      {/* Row 1 — forward */}
      <div className="flex gap-4 marquee-track-fwd">
        {row1.map((name, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: marquee duplicate items
            key={`r1-${name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 bg-card border border-border rounded-sm shadow-subtle"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
      {/* Row 2 — reverse */}
      <div className="flex gap-4 marquee-track-rev">
        {row2.map((name, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: marquee duplicate items
            key={`r2-${name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 bg-card border border-border rounded-sm shadow-subtle hover:border-accent/30 transition-smooth"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Testimonial Carousel ─────────────────────────────────────────────────────
function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards — show all 3 on md+, single on mobile */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            data-ocid={`home.testimonial.${i + 1}`}
            className={`bg-card border rounded-xl p-6 h-full flex flex-col shadow-subtle transition-smooth ${
              active === i
                ? "border-accent/40 shadow-gold-glow -translate-y-1"
                : "border-border hover:border-accent/25 hover:shadow-elevated"
            }`}
          >
            <TestimonialContent t={t} />
          </motion.div>
        ))}
      </div>

      {/* Mobile single card */}
      <div className="md:hidden relative overflow-hidden">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-card border border-border rounded-xl p-6 shadow-subtle"
          data-ocid={`home.testimonial.mobile.${active + 1}`}
        >
          <TestimonialContent t={TESTIMONIALS[active]} />
        </motion.div>

        {/* Mobile nav dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {TESTIMONIALS.map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: static
              key={i}
              type="button"
              onClick={() => setActive(i)}
              data-ocid={`home.testimonial_dot.${i + 1}`}
              className={`rounded-full transition-smooth ${
                active === i
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-border hover:bg-accent/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop arrow controls */}
      <div className="hidden md:flex items-center justify-center gap-3 mt-8">
        <button
          type="button"
          onClick={prev}
          className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-accent/40 hover:bg-accent/5 transition-smooth"
          aria-label="Previous testimonial"
          data-ocid="home.testimonial_prev_button"
        >
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              // biome-ignore lint/suspicious/noArrayIndexKey: static
              key={i}
              type="button"
              onClick={() => setActive(i)}
              data-ocid={`home.testimonial_dot.${i + 1}`}
              className={`rounded-full transition-smooth ${
                active === i
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-border hover:bg-accent/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:border-accent/40 hover:bg-accent/5 transition-smooth"
          aria-label="Next testimonial"
          data-ocid="home.testimonial_next_button"
        >
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}

function TestimonialContent({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }, (_, j) => (
          <Star
            key={`star-${t.name}-${j}`}
            className="w-4 h-4 fill-accent text-accent"
          />
        ))}
      </div>
      <div className="text-4xl text-accent/20 font-display leading-none mb-2 -mt-2 select-none">
        "
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
        {t.quote}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-navy">
          <span className="text-sm font-bold text-accent">
            {t.name.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">
            {t.role} · {t.company}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export function HomePage() {
  const { openQuote } = useQuoteStore();

  return (
    <div data-ocid="home.page">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-manufacturing.dim_1920x1080.jpg)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 gradient-hero opacity-90"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-accent opacity-80"
          aria-hidden="true"
        />

        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/30 rounded-sm mb-6"
            >
              <Award className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                ISO 9001:2015 Certified Manufacturer
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              Premium Packaging
              <br />
              <span className="text-gold">Solutions</span> for
              <br />
              Modern Businesses
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl"
            >
              ISO Certified Packaging Manufacturer in India | High Quality
              Corrugated Boxes &amp; Custom Packaging solutions trusted by 40+
              leading national and international brands.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                onClick={() => openQuote()}
                className="btn-gold text-base px-7 h-12 rounded-sm shadow-gold"
                data-ocid="home.hero_get_quote_button"
              >
                Get a Quote
              </Button>
              <a href="tel:+919990779707" data-ocid="home.hero_call_button">
                <Button
                  variant="outline"
                  className="btn-outline-gold text-base px-7 h-12 rounded-sm"
                >
                  Call Now
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-2"
            >
              {[
                "ISO Certified",
                "Quality Checked",
                "Made in India",
                "19+ Years",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-sm text-xs font-semibold text-white/90 backdrop-blur-sm"
                >
                  <span className="text-accent">✓</span>
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ───────────────────────────────────────────────── */}
      <section className="bg-primary py-14" data-ocid="home.stats_section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-primary-foreground/10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center px-6 py-4"
                data-ocid={`home.stat.${i + 1}`}
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix ?? ""}
                  />
                </div>
                <div className="font-semibold text-primary-foreground text-sm sm:text-base">
                  {stat.label}
                </div>
                <div className="text-xs text-primary-foreground/55 mt-0.5">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Snippet ───────────────────────────────────────────────── */}
      <section
        className="bg-background py-20 lg:py-24"
        data-ocid="home.about_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-accent" />
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  About RPM Packaging
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight heading-gold-lg pb-3">
                Trusted Packaging Partner Since 2004
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RPM Packaging Industries is an ISO 9001:2015 certified
                corrugated packaging manufacturer headquartered in Jhajjar,
                Haryana. With over 19 years of manufacturing excellence, we
                serve India's most trusted garment, FMCG, electronics, and
                retail brands with premium quality packaging.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Our state-of-the-art 5-ply automatic production facility spans a
                modern industrial complex with a dedicated team of 62+
                professionals, producing 650 MT of corrugated packaging every
                month.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { val: "ISO 9001:2015", label: "Quality Certified" },
                  { val: "650 MT/month", label: "Production Capacity" },
                  { val: "62+ Staff", label: "Skilled Professionals" },
                  { val: "40+ Brands", label: "Premium Clients" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 bg-muted/40 rounded-sm border border-border"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">
                        {item.val}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-smooth group"
                data-ocid="home.about_learn_more_link"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-elevated bg-muted">
                <img
                  src="/assets/generated/hero-manufacturing.dim_1920x1080.jpg"
                  alt="RPM Packaging Industries manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-sm px-5 py-4 shadow-navy">
                <div className="font-display text-2xl font-bold text-accent">
                  19+
                </div>
                <div className="text-xs text-primary-foreground/70 font-medium">
                  Years of Excellence
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-sm px-4 py-3 shadow-gold">
                <div className="font-display text-sm font-bold">
                  ISO 9001:2015
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wide">
                  Certified
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────────────── */}
      <section
        className="section-alt py-20 lg:py-24"
        data-ocid="home.products_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="What We Manufacture"
              title="Our Products"
              subtitle="From standard corrugated boxes to fully custom printed packaging — manufactured to the highest quality standards."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i % 4}
                  data-ocid={`home.product.${i + 1}`}
                >
                  <button
                    type="button"
                    className="group bg-card border border-border rounded-sm p-5 h-full flex flex-col card-hover-gold hover:border-accent/40 cursor-pointer w-full text-left"
                    onClick={() => openQuote(product.name)}
                  >
                    <div className="w-11 h-11 rounded-sm bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-smooth">
                      <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-smooth">
                      <span>Get Quote</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/products" data-ocid="home.view_all_products_button">
              <Button className="btn-navy px-8 h-11 rounded-sm">
                View All Products
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────── */}
      <section
        className="bg-background py-20 lg:py-24"
        data-ocid="home.why_choose_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Our Advantages"
              title="Why Choose RPM Packaging"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i % 3}
                  data-ocid={`home.why_choose.${i + 1}`}
                >
                  <div className="flex gap-4 p-5 bg-muted/30 border border-border rounded-sm card-hover hover:border-accent/30 h-full">
                    <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 shadow-navy">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ─────────────────────────────────────────── */}
      <section
        className="section-alt py-20 lg:py-24"
        data-ocid="home.industries_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Sectors We Supply"
              title="Industries We Serve"
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  data-ocid={`home.industry.${i + 1}`}
                >
                  <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-sm text-center card-hover hover:border-accent/40 hover:shadow-gold cursor-default">
                    <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {industry.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Facility ──────────────────────────────────────── */}
      <section
        className="bg-primary py-20 lg:py-24 relative overflow-hidden"
        data-ocid="home.facility_section"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-accent" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/60">
                  World-Class Facility
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-5 leading-tight">
                Our Manufacturing
                <br />
                <span className="text-accent">Facility</span>
              </h2>
              <p className="text-primary-foreground/75 leading-relaxed mb-6">
                Our Jhajjar, Haryana facility houses a fully automated 5-ply
                corrugated production line capable of producing 650 MT of
                premium packaging every month. With rigorous in-house quality
                checks, stringent process controls, and a highly skilled
                workforce, we deliver consistent excellence batch after batch.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: "650 MT", sub: "Monthly Capacity" },
                  { val: "62+", sub: "Employees" },
                  { val: "3 Eicher", sub: "Transport Fleet" },
                ].map((item) => (
                  <div
                    key={item.sub}
                    className="text-center p-4 bg-primary-foreground/8 border border-primary-foreground/10 rounded-sm"
                  >
                    <div className="font-display text-xl font-bold text-accent">
                      {item.val}
                    </div>
                    <div className="text-xs text-primary-foreground/60 mt-1">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:brightness-110 transition-smooth group"
                data-ocid="home.view_infrastructure_link"
              >
                View Infrastructure
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-elevated border border-primary-foreground/15">
                <img
                  src="/assets/generated/hero-manufacturing.dim_1920x1080.jpg"
                  alt="RPM Packaging manufacturing plant"
                  className="w-full h-full object-cover opacity-80"
                />
                <div
                  className="absolute inset-0 gradient-hero opacity-30"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {["5-Ply Auto Line", "Quality Lab", "Flexo Printing"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-primary/80 backdrop-blur-sm border border-accent/30 rounded-sm text-xs font-semibold text-accent"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Clients / Portfolio Teaser ──────────────────────────────────── */}
      <section
        className="bg-background py-20 lg:py-24 overflow-hidden"
        data-ocid="home.clients_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Our Portfolio"
              title="Trusted by Industry Leaders"
              subtitle="40+ reputed national and international clients across diverse sectors"
            />
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <ClientMarquee />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="container max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
            <Link to="/portfolio" data-ocid="home.view_portfolio_button">
              <Button className="btn-navy px-8 h-11 rounded-sm">
                View Full Portfolio
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Button
              onClick={() => openQuote()}
              className="btn-gold px-8 h-11 rounded-sm"
              data-ocid="home.view_clients_cta_button"
            >
              Become Our Next Client
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section
        className="section-alt py-20 lg:py-24"
        data-ocid="home.testimonials_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="Client Feedback"
              title="What Our Clients Say"
            />
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        data-ocid="home.cta_section"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.09 258) 0%, oklch(0.28 0.08 258) 50%, oklch(0.18 0.06 258) 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/25 rounded-sm mb-6">
              <Package className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Get Started Today
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Looking for Custom
              <br />
              Packaging Solutions?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-9 leading-relaxed">
              Get premium corrugated boxes and packaging solutions delivered on
              time. Talk to our packaging experts — free consultation and
              competitive quote within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => openQuote()}
                className="btn-gold text-base px-8 h-12 rounded-sm shadow-gold"
                data-ocid="home.cta_request_quote_button"
              >
                Request a Free Quote
              </Button>
              <Link to="/contact" data-ocid="home.cta_contact_us_button">
                <Button
                  variant="outline"
                  className="btn-outline-gold text-base px-8 h-12 rounded-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-8 text-sm text-white/55">
              {[
                "No commitment required",
                "Response within 24 hours",
                "Bulk pricing available",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
