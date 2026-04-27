import { c as createLucideIcon, u as useQuoteStore, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, P as Package } from "./index-B8aFg3_n.js";
import { m as motion } from "./proxy-KSK5DaNy.js";
import { A as Award } from "./award-C6ULeqZr.js";
import { G as Globe } from "./globe-WZqolGrg.js";
import { B as Building2 } from "./building-2-CCnuI_wZ.js";
import { U as Users, Z as Zap } from "./zap-BwJqXzjF.js";
import { S as ShoppingCart, C as ChevronRight } from "./shopping-cart-9z9wjqOv.js";
import { S as ShoppingBag } from "./shopping-bag-BuhBSUlE.js";
import { T as Truck } from "./truck-Cin6m1M9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
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
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      key: "1wgbhj"
    }
  ]
];
const Shirt = createLucideIcon("shirt", __iconNode);
const SECTOR_COLORS = {
  Fashion: "bg-purple-100 text-purple-700 border-purple-200",
  FMCG: "bg-orange-100 text-orange-700 border-orange-200",
  Electronics: "bg-blue-100 text-blue-700 border-blue-200",
  Pharma: "bg-green-100 text-green-700 border-green-200",
  "E-Commerce": "bg-cyan-100 text-cyan-700 border-cyan-200",
  Retail: "bg-pink-100 text-pink-700 border-pink-200",
  Automotive: "bg-slate-100 text-slate-700 border-slate-200",
  Textile: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Technology: "bg-teal-100 text-teal-700 border-teal-200",
  "Home Decor": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Food & Beverage": "bg-amber-100 text-amber-700 border-amber-200",
  Packaging: "bg-violet-100 text-violet-700 border-violet-200"
};
const SECTOR_ICONS = {
  Fashion: Shirt,
  FMCG: ShoppingCart,
  "E-Commerce": ShoppingBag,
  Automotive: Truck,
  Electronics: Zap,
  Textile: ShoppingBag,
  Technology: Globe,
  Packaging: Package,
  Retail: ShoppingCart
};
const CLIENTS = [
  // ── International Buyers (8) ────────────────────────────────────────────────
  {
    name: "TARGET-GMT",
    sector: "Retail",
    type: "International",
    description: "Global retail giant — export-grade corrugated packaging for large-scale product distribution."
  },
  {
    name: "C&A",
    sector: "Fashion",
    type: "International",
    description: "European fashion retail chain — high-quality branded packaging for international garment supply."
  },
  {
    name: "JC PENNEY",
    sector: "Retail",
    type: "International",
    description: "American department store chain — premium packaging for private-label and branded merchandise."
  },
  {
    name: "KMART",
    sector: "Retail",
    type: "International",
    description: "Global discount retail chain — bulk corrugated packaging for multi-category product lines."
  },
  {
    name: "ASMARA",
    sector: "Fashion",
    type: "International",
    description: "International fashion brand — custom die-cut packaging for high-end apparel exports."
  },
  {
    name: "AUTO SOCK",
    sector: "Automotive",
    type: "International",
    description: "Norwegian automotive accessory brand — precision-fit protective packaging for global distribution."
  },
  {
    name: "TJ MAX",
    sector: "Retail",
    type: "International",
    description: "US off-price retail chain — cost-efficient corrugated packaging at scale for sourced merchandise."
  },
  {
    name: "CARHARTT",
    sector: "Fashion",
    type: "International",
    description: "American workwear brand — durable industrial-grade packaging for rugged apparel exports."
  },
  // ── National Clients (33) ───────────────────────────────────────────────────
  {
    name: "Aditya Birla Fashion & Retail Limited",
    sector: "Fashion",
    type: "National",
    description: "India's largest apparel retailer — premium corrugated packaging for flagship brands."
  },
  {
    name: "Arvind Fashion Ltd.",
    sector: "Fashion",
    type: "National",
    description: "Leading fashion conglomerate operating iconic global brands across India."
  },
  {
    name: "AAN CLOTHING LLP",
    sector: "Fashion",
    type: "National",
    description: "Fashion apparel brand with premium packaging requirements for retail outlets."
  },
  {
    name: "Arvind Beauty Brands Pvt. Ltd.",
    sector: "FMCG",
    type: "National",
    description: "Arvind Group's beauty and personal care vertical — specialty packaging solutions."
  },
  {
    name: "Sarita Handa Export Pvt. Ltd.",
    sector: "Home Decor",
    type: "National",
    description: "Premium luxury home furnishing exporter with global clientele — custom printed packaging."
  },
  {
    name: "Calvin Klein – Arvind Fashion Limited",
    sector: "Fashion",
    type: "National",
    description: "International luxury fashion label — high-quality branded packaging for Indian retail."
  },
  {
    name: "C & R Textiles Pvt. Ltd.",
    sector: "Textile",
    type: "National",
    description: "Textile manufacturer and exporter with diverse fabric categories — export packaging."
  },
  {
    name: "Benetton India Private Limited",
    sector: "Fashion",
    type: "National",
    description: "Italian fashion brand with pan-India retail operations — branded corrugated packaging."
  },
  {
    name: "Taurus Furnishing Pvt. Ltd.",
    sector: "Home Decor",
    type: "National",
    description: "Home furnishing brand with national and international distribution network."
  },
  {
    name: "Uniqlo India Private Limited",
    sector: "Fashion",
    type: "National",
    description: "Japanese global apparel giant — precision garment packaging for Indian retail stores."
  },
  {
    name: "Kiranakart Technologies PVT. LTD.",
    sector: "E-Commerce",
    type: "National",
    description: "Digital grocery platform — rapid-dispatch corrugated packaging for logistics."
  },
  {
    name: "Black Berry (Mohan Clothing Pvt. Ltd.)",
    sector: "Fashion",
    type: "National",
    description: "Premium menswear brand — high-quality branded packaging for retail and e-commerce."
  },
  {
    name: "Nutaste Food and Drink Labs Pvt. Ltd.",
    sector: "Food & Beverage",
    type: "National",
    description: "Food and beverage brand — printed food-safe packaging for retail shelves."
  },
  {
    name: "CANTABIL RETAIL INDIA LTD.",
    sector: "Fashion",
    type: "National",
    description: "National retail fashion chain — standardized and branded packaging at scale."
  },
  {
    name: "KARRY HOME PRODUCTS",
    sector: "FMCG",
    type: "National",
    description: "Home products brand — retail mono cartons and corrugated secondary packaging."
  },
  {
    name: "RADNIK EXPORTS, Noida",
    sector: "Textile",
    type: "National",
    description: "Established textile exporter supplying global markets — export-grade corrugated packaging."
  },
  {
    name: "Nifco India Pvt. Limited",
    sector: "Automotive",
    type: "National",
    description: "Japanese automotive fastener manufacturer — precision industrial packaging."
  },
  {
    name: "Flipkart India Pvt. Ltd.",
    sector: "E-Commerce",
    type: "National",
    description: "India's largest e-commerce platform — high-volume corrugated shipping boxes."
  },
  {
    name: "Mohan Clothing CO PVT. LTD",
    sector: "Fashion",
    type: "National",
    description: "Established apparel company — high-volume garment packaging solutions."
  },
  {
    name: "Myntra Designs Pvt. Ltd.",
    sector: "E-Commerce",
    type: "National",
    description: "India's leading fashion e-commerce platform — retail-ready and transit packaging."
  },
  {
    name: "ATIRA DESIGNS PVT. LTD",
    sector: "Textile",
    type: "National",
    description: "Textile design firm — custom packaging for premium product presentation."
  },
  {
    name: "Mahashian Di Hatti Pvt. Ltd. (MDH Spices)",
    sector: "Food & Beverage",
    type: "National",
    description: "Iconic Indian spice brand — printed FMCG packaging with food-safe standards."
  },
  {
    name: "RELIANT PACKAGING AND FILMS INDUSTRIES",
    sector: "Packaging",
    type: "National",
    description: "Packaging industry supplier — raw corrugated boards and specialty films."
  },
  {
    name: "Machino Plastics Ltd.",
    sector: "Automotive",
    type: "National",
    description: "Automotive plastic components manufacturer — heavy-duty industrial packaging."
  },
  {
    name: "Aggressive Digital Systems Pvt. Ltd.",
    sector: "Electronics",
    type: "National",
    description: "Technology products company — anti-static and protective electronics packaging."
  },
  {
    name: "Subros Limited",
    sector: "Automotive",
    type: "National",
    description: "India's leading manufacturer of AC systems for vehicles — industrial export boxes."
  },
  {
    name: "Brano Pac India (P) Limited",
    sector: "Packaging",
    type: "National",
    description: "Auto components and packaging supplier — industrial corrugated solutions."
  },
  {
    name: "Jindal Stainless (Hisar)",
    sector: "Automotive",
    type: "National",
    description: "Stainless steel industry leader — precision-engineered heavy-duty packaging."
  },
  {
    name: "Krishna Labels Private Limited",
    sector: "Technology",
    type: "National",
    description: "Label and print technology company — specialty die-cut packaging."
  },
  {
    name: "Asahi India Glass Ltd.",
    sector: "Automotive",
    type: "National",
    description: "India's largest glass and glazing company — protective packaging solutions."
  },
  {
    name: "Communication Test Design India Pvt. Ltd.",
    sector: "Electronics",
    type: "National",
    description: "Electronic testing equipment company — precision ESD protective packaging."
  },
  {
    name: "Lifelong Meditech Pvt. Ltd.",
    sector: "Pharma",
    type: "National",
    description: "Consumer healthcare brand — regulatory-compliant pharma packaging solutions."
  },
  {
    name: "PPIN PVT. LTD.",
    sector: "Technology",
    type: "National",
    description: "Industrial products company — bulk corrugated packaging for distribution."
  },
  {
    name: "VAMANI OVERSEAS PVT. LTD.",
    sector: "Textile",
    type: "National",
    description: "Textile and garment export house — custom corrugated packaging for overseas shipments."
  }
];
const ALL_SECTORS = [
  "Fashion",
  "FMCG",
  "Electronics",
  "Pharma",
  "E-Commerce",
  "Retail",
  "Automotive",
  "Textile",
  "Technology",
  "Home Decor",
  "Food & Beverage",
  "Packaging"
];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" }
  })
};
function ClientCard({ client, index }) {
  const colorClass = SECTOR_COLORS[client.sector] ?? "";
  const SectorIcon = SECTOR_ICONS[client.sector] ?? Package;
  const initials = client.name.replace(/[^a-zA-Z ]/g, " ").trim().split(/\s+/).slice(0, 2).map((w) => {
    var _a;
    return ((_a = w[0]) == null ? void 0 : _a.toUpperCase()) ?? "";
  }).join("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: fadeUp,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      custom: index % 4,
      "data-ocid": `portfolio.client.${index + 1}`,
      className: "group relative bg-card border border-border rounded-xl p-5 flex flex-col gap-3.5 card-hover-gold hover:border-accent/40 transition-smooth overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute left-0 top-0 h-full w-1 rounded-l-xl bg-accent opacity-0 transition-smooth group-hover:opacity-100"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0 shadow-navy group-hover:shadow-gold-glow transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xs text-accent tracking-tight", children: initials }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-smooth", children: client.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `inline-flex items-center gap-1 mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full border ${colorClass}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SectorIcon, { className: "w-2.5 h-2.5" }),
                  client.sector
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1", children: client.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 border-t border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${client.type === "International" ? "bg-accent/10 text-accent border border-accent/25" : "bg-primary/8 text-primary border border-primary/15"}`,
              children: client.type === "International" ? "🌐 International" : "🇮🇳 National"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-smooth" })
        ] })
      ]
    }
  );
}
function PortfolioPage() {
  const { openQuote } = useQuoteStore();
  const [search, setSearch] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("All");
  const [sectorFilter, setSectorFilter] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    return CLIENTS.filter((c) => {
      const matchType = typeFilter === "All" || c.type === typeFilter;
      const matchSector = sectorFilter === "All" || c.sector === sectorFilter;
      const matchSearch = !search.trim() || c.name.toLowerCase().includes(search.toLowerCase()) || c.sector.toLowerCase().includes(search.toLowerCase());
      return matchType && matchSector && matchSearch;
    });
  }, [search, typeFilter, sectorFilter]);
  const intlCount = CLIENTS.filter((c) => c.type === "International").length;
  const natCount = CLIENTS.filter((c) => c.type === "National").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "portfolio.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "gradient-hero py-20 md:py-28 relative overflow-hidden",
        "data-ocid": "portfolio.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none opacity-[0.06]",
              "aria-hidden": "true",
              style: {
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "32px 32px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "Client Portfolio" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-accent/15 border border-accent/30 rounded-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-accent", children: "Client Portfolio" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-5", children: [
                  "Trusted by ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Industry Leaders" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl mb-8", children: [
                  "From global retail giants to India's most recognized brands — RPM Packaging Industries serves ",
                  CLIENTS.length,
                  "+ national and international clients across 12 industries with consistent quality."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary-foreground", children: [
                      intlCount,
                      " International Clients"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/25 rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary-foreground", children: [
                      natCount,
                      " National Clients"
                    ] })
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary border-y border-primary-foreground/10 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-primary-foreground/10", children: [
      { val: `${CLIENTS.length}+`, label: "Trusted Clients" },
      { val: `${intlCount}`, label: "International Brands" },
      { val: "12+", label: "Industry Sectors" },
      { val: "19+", label: "Years of Trust" }
    ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        custom: i,
        className: "text-center px-6 py-2",
        "data-ocid": `portfolio.stat.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-accent mb-0.5", children: s.val }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/60 font-medium uppercase tracking-wide", children: s.label })
        ]
      },
      s.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-card border-b border-border py-4 sticky top-16 z-20",
        "data-ocid": "portfolio.sector_filters",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 overflow-x-auto pb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSectorFilter("All"),
              "data-ocid": "portfolio.filter.all_sectors",
              className: `shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-smooth whitespace-nowrap border ${sectorFilter === "All" ? "bg-primary text-primary-foreground border-primary shadow-navy" : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"}`,
              children: "All Sectors"
            }
          ),
          ALL_SECTORS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setSectorFilter(s),
              "data-ocid": `portfolio.filter.${s.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
              className: `shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-smooth whitespace-nowrap border ${sectorFilter === s ? "bg-accent text-accent-foreground border-accent shadow-gold" : "border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"}`,
              children: s
            },
            s
          ))
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-12 lg:py-16",
        "data-ocid": "portfolio.listing_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search clients or sectors...",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  className: "w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-smooth",
                  "data-ocid": "portfolio.search_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 bg-muted/50 border border-border rounded-lg p-1", children: ["All", "National", "International"].map(
              (t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setTypeFilter(t),
                  "data-ocid": `portfolio.type_filter.${t.toLowerCase()}`,
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-smooth ${typeFilter === t ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                  children: [
                    t === "International" && /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
                    t === "National" && /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                    t
                  ]
                },
                t
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Showing",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: filtered.length }),
              " ",
              "of ",
              CLIENTS.length,
              " clients"
            ] }),
            (search || typeFilter !== "All" || sectorFilter !== "All") && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSearch("");
                  setTypeFilter("All");
                  setSectorFilter("All");
                },
                className: "text-xs font-semibold text-accent hover:underline transition-smooth",
                "data-ocid": "portfolio.clear_filters_button",
                children: "Clear all filters"
              }
            )
          ] }),
          filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-5 py-24 text-center",
              "data-ocid": "portfolio.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-7 h-7 text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: "No clients found" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "Try adjusting your search or filters." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
              "data-ocid": "portfolio.clients_list",
              children: filtered.map((client, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ClientCard, { client, index: i }, client.name))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-10 border-y border-border",
        "data-ocid": "portfolio.sector_legend",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4", children: "Filter by sector" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ALL_SECTORS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSectorFilter(sectorFilter === s ? "All" : s),
              className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border transition-smooth cursor-pointer ${sectorFilter === s ? `${SECTOR_COLORS[s]} scale-105 shadow-sm` : `${SECTOR_COLORS[s]} opacity-60 hover:opacity-100`}`,
              "data-ocid": `portfolio.sector_badge.${s.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
              children: [
                s,
                " (",
                CLIENTS.filter((c) => c.sector === s).length,
                ")"
              ]
            },
            s
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-20 relative overflow-hidden",
        "data-ocid": "portfolio.cta_section",
        style: {
          background: "linear-gradient(135deg, oklch(0.22 0.09 258) 0%, oklch(0.28 0.08 258) 50%, oklch(0.18 0.06 258) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: fadeUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className: "max-w-2xl mx-auto space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-accent/15 border border-accent/25 rounded-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-accent", children: "Join Our Client Family" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-white leading-tight", children: [
                  "Ready to Join Our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Success Story?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-base sm:text-lg leading-relaxed", children: [
                  "Join ",
                  CLIENTS.length,
                  "+ industry-leading brands that trust RPM Packaging Industries for premium quality, on-time delivery, and ISO-certified manufacturing excellence."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      onClick: () => openQuote(),
                      className: "btn-gold text-base px-8 h-12 rounded-sm shadow-gold",
                      "data-ocid": "portfolio.cta_quote_button",
                      children: "Request a Free Quote"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "portfolio.cta_contact_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      className: "btn-outline-gold text-base px-8 h-12 rounded-sm",
                      children: "Contact Us"
                    }
                  ) })
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  PortfolioPage
};
