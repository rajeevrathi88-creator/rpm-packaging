import { c as createLucideIcon, r as reactExports, u as useQuoteStore, j as jsxRuntimeExports, L as Link, C as CircleCheckBig, a as Phone, B as Button } from "./index-B8aFg3_n.js";
import { r as resolveElements, m as motion } from "./proxy-KSK5DaNy.js";
import { A as Award } from "./award-C6ULeqZr.js";
import { F as Factory } from "./factory-8TOF1Oas.js";
import { U as Users, Z as Zap } from "./zap-BwJqXzjF.js";
import { G as Globe } from "./globe-WZqolGrg.js";
import { T as Truck } from "./truck-Cin6m1M9.js";
import { B as Building2 } from "./building-2-CCnuI_wZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const MVV = [
  {
    icon: Target,
    title: "Mission",
    desc: "To deliver superior quality packaging solutions that empower our clients' businesses with precision, reliability, and consistent excellence in every order."
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be India's most trusted packaging manufacturer with a global footprint, setting new benchmarks for quality and innovation in industrial packaging."
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Quality · Integrity · Innovation · Timely Delivery — these four pillars guide every decision we make, from sourcing raw materials to dispatching final products."
  }
];
const STATS = [
  { value: 19, suffix: "+", label: "Years Experience", sublabel: "Since 2004" },
  {
    value: 35,
    prefix: "₹",
    suffix: " Cr",
    label: "Annual Turnover",
    sublabel: "30–35 Cr Range"
  },
  {
    value: 650,
    suffix: " MT",
    label: "Monthly Capacity",
    sublabel: "Production Volume"
  },
  {
    value: 40,
    suffix: "+",
    label: "Reputed Clients",
    sublabel: "National & International"
  }
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
  'Two Color Printing Machine RS-4 96" (2 Units)'
];
const QUALITY_TESTS = [
  { icon: Shield, label: "Moisture Testing" },
  { icon: CircleCheckBig, label: "GSM Checking" },
  { icon: Zap, label: "Gum & Powder Quality" },
  { icon: Factory, label: "COB Tester" },
  { icon: Wrench, label: "OVEN Machine" },
  { icon: Award, label: "ECT / RCT Testing" },
  { icon: Globe, label: "Free Sampling Policy" }
];
const LOGISTICS = [
  {
    icon: Truck,
    title: "Transport Fleet",
    detail: "3 Eicher Canter + 2 Mahindra Pickup for timely, reliable delivery across NCR and Pan-India."
  },
  {
    icon: Zap,
    title: "Power Backup",
    detail: "62 KVA Generator × 2 + 175 KVA Generator × 1 — zero production downtime guaranteed."
  },
  {
    icon: Building2,
    title: "Warehouse Capacity",
    detail: "40 MT dedicated storage facility ensuring seamless order fulfilment and stock readiness."
  }
];
function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  duration = 1800
}) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true });
  reactExports.useEffect(() => {
    if (!inView2) return;
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
  }, [inView2, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    prefix,
    count,
    suffix
  ] });
}
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up"
}) {
  const y = direction === "up" ? 30 : 0;
  const x = direction === "left" ? -30 : direction === "right" ? 30 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y, x },
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, delay, ease: "easeOut" },
      className,
      children
    }
  );
}
function SectionLabel({ text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-0.5 bg-accent rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-accent", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-0.5 bg-accent rounded-full" })
  ] });
}
function AboutPage() {
  const { openQuote } = useQuoteStore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "gradient-hero py-20 md:py-28",
        "data-ocid": "about.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.65 },
            className: "max-w-3xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-xs text-primary-foreground/50 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-accent transition-smooth", children: "Home" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "About Us" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-0.5 bg-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-accent", children: "About RPM Packaging Industries" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-5", children: [
                "About RPM Packaging",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Industries" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl", children: "ISO 9001:2015 certified. 19+ years of manufacturing excellence. Trusted by 40+ national & international brands." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-8", children: [
                "ISO 9001:2015 Certified",
                "19+ Years Experience",
                "40+ Reputed Clients",
                "Made in India"
              ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-foreground/10 border border-accent/30 rounded-sm text-xs font-semibold text-accent",
                  children: [
                    "✓ ",
                    badge
                  ]
                },
                badge
              )) })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", "data-ocid": "about.story_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold pb-5", children: "Built on Vision, Driven by Quality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "Founded in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "2004" }),
          " ",
          "by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Rajeev Rathee" }),
          " ",
          "in Jhajjar, Haryana, RPM Packaging Industries began with a clear vision — to provide India's garment and textile industry with packaging that truly matched their product standards. Starting from a modest facility, Mr. Rathee built the company on principles of uncompromising quality and client-first service."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "Over 19 years, RPM has grown into a full-scale corrugated and custom packaging manufacturer, now serving",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "40+ reputed clients" }),
          " ",
          "across national and international markets — from fashion giants like Calvin Klein and Uniqlo to FMCG leaders like MDH Spices and Lifelong Meditech. Our annual turnover of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "₹30–35 Crore" }),
          " with monthly production capacity of",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "650 MT" }),
          " stands testament to three decades of disciplined growth."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "Certified to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "ISO 9001:2015" }),
          " ",
          "standards, our Jhajjar facility operates with 62+ skilled employees and a fleet of advanced machinery — enabling us to deliver precision-engineered packaging at scale, with unrivalled turnaround times."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 pt-2", children: [
          { icon: Award, label: "ISO 9001:2015 Certified" },
          { icon: Factory, label: "Jhajjar, Haryana" },
          { icon: Users, label: "62+ Skilled Employees" },
          { icon: Globe, label: "National & International" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 text-sm font-medium text-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4 text-accent flex-shrink-0" }),
              item.label
            ]
          },
          item.label
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden shadow-elevated border border-border bg-muted/30 aspect-[4/3] flex items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/hero-packaging-factory.dim_1400x700.jpg",
            alt: "RPM Packaging Industries manufacturing facility",
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 bg-primary/90 rounded-lg p-4 backdrop-blur-sm border border-accent/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-accent uppercase tracking-wider mb-1", children: "📍 Manufacturing Facility" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary-foreground", children: "Plot No. 6, Sector-7B, Model Economic Township" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary-foreground/70 mt-0.5", children: "Jhajjar, Haryana – 124103" })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20 border-y border-border",
        "data-ocid": "about.mvv_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Our Purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5", children: "Mission, Vision & Values" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: MVV.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-7 shadow-subtle card-hover text-center h-full flex flex-col items-center",
              "data-ocid": `about.mvv.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-7 h-7 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-3", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
              ]
            }
          ) }, item.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "gradient-hero py-16 md:py-20",
        "data-ocid": "about.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center",
            "data-ocid": `about.stat.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl font-extrabold text-accent mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                AnimatedCounter,
                {
                  to: stat.value,
                  prefix: stat.prefix,
                  suffix: stat.suffix
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-primary-foreground text-sm md:text-base", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/55 mt-0.5", children: stat.sublabel })
            ]
          }
        ) }, stat.label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "about.machinery_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Infrastructure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5", children: "Manufacturing Capability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto mt-4", children: "Our state-of-the-art facility in Jhajjar houses a complete corrugated box manufacturing line, from raw board to finished product, enabling end-to-end quality control." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-7 shadow-subtle", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-lg text-foreground mb-5 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-accent" }),
                "Machinery & Equipment"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: MACHINERY.map((machine, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-3 text-sm text-muted-foreground group",
                  "data-ocid": `about.machinery.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/25 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-2.5 h-2.5 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: machine })
                  ]
                },
                machine
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { direction: "right", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary rounded-xl p-7 shadow-navy border border-primary/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { className: "w-5 h-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-primary-foreground text-sm uppercase tracking-wide", children: "Monthly Production Capacity" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-5xl text-accent mb-1", children: "650 MT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm leading-relaxed", children: "Metric tonnes of corrugated packaging produced monthly across our automated lines, ensuring consistent supply for bulk orders." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-7 shadow-subtle", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground text-sm uppercase tracking-wide", children: "Our Workforce" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-5xl text-accent mb-1", children: "62+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Skilled employees — machine operators, quality inspectors, and logistics staff — committed to delivering on time, every time." })
              ] })
            ] }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20 border-y border-border",
        "data-ocid": "about.quality_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Certification & QA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5", children: "Quality We Stand By" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-navy border border-accent/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-accent/20 border-4 border-accent/40 flex items-center justify-center flex-shrink-0 shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-12 h-12 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center sm:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-3xl text-accent mb-1", children: "ISO 9001:2015" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-primary-foreground text-lg mb-1", children: "Quality Management System" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm leading-relaxed", children: "RPM Packaging Industries is certified to the ISO 9001:2015 international quality management standard — ensuring consistent quality across every product and process." })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: QUALITY_TESTS.map((qt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-5 shadow-subtle card-hover flex flex-col items-center text-center gap-3",
              "data-ocid": `about.quality_test.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(qt.icon, { className: "w-5 h-5 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground leading-tight", children: qt.label })
              ]
            }
          ) }, qt.label)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "about.leadership_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Leadership" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5", children: "Meet Our Founder" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-elevated",
              "data-ocid": "about.leadership.item.1",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mx-auto sm:mx-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full gradient-hero border-4 border-accent/40 flex items-center justify-center shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold text-2xl text-accent tracking-tight", children: "RR" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground", children: "Rajeev Rathee" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent font-semibold text-sm mt-0.5", children: "Proprietor & Founder — RPM Packaging Industries" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "With over 19 years of industry leadership, Mr. Rajeev Rathee founded RPM Packaging Industries in 2004 with a mission to serve India's garment and textile sector with packaging that meets international quality standards. His hands-on approach to manufacturing, combined with a deep understanding of client requirements, has made RPM Packaging a name synonymous with reliability and quality in the corrugated packaging industry." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: "Under his leadership, the company has achieved ISO 9001:2015 certification, expanded its client base to 40+ reputed national and international brands, and grown annual revenues to ₹30–35 Crore — all while maintaining uncompromising quality standards and a client-first philosophy." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: [
                    "19+ Years Industry Experience",
                    "ISO Quality Champion",
                    "Corrugated Packaging Expert"
                  ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-sm font-semibold",
                      children: tag
                    },
                    tag
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "tel:+919990779707",
                      className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-smooth mt-1",
                      "data-ocid": "about.leader.phone_link",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                        "+91-9990779707"
                      ]
                    }
                  )
                ] })
              ] })
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20 border-y border-border",
        "data-ocid": "about.logistics_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { text: "Operations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground heading-gold-lg pb-5", children: "Logistics & Infrastructure" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: LOGISTICS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-7 shadow-subtle card-hover h-full",
              "data-ocid": `about.logistics.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.detail })
              ]
            }
          ) }, item.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", "data-ocid": "about.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-7 h-7 text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-primary-foreground", children: "Looking for a Reliable Packaging Partner?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg leading-relaxed", children: "Join 40+ leading brands that trust RPM Packaging Industries for consistent quality, timely delivery, and world-class packaging solutions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => openQuote(),
            className: "btn-gold px-8 h-12 font-semibold text-sm",
            "data-ocid": "about.cta_quote_button",
            children: "Request a Free Quote"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+919990779707",
            className: "inline-flex items-center justify-center gap-2 px-8 h-12 border-2 border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent font-semibold text-sm rounded-md transition-smooth",
            "data-ocid": "about.cta_call_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              "Call Now"
            ]
          }
        )
      ] })
    ] }) }) }) })
  ] });
}
export {
  AboutPage
};
