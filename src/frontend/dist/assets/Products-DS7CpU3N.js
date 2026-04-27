import { c as createLucideIcon, j as jsxRuntimeExports, S as Slot, b as cn, d as cva, u as useQuoteStore, r as reactExports, P as Package, B as Button, D as Dialog, e as DialogContent, f as DialogHeader, g as DialogTitle, X } from "./index-B8aFg3_n.js";
import { B as Box, P as Printer, S as Scissors, a as Star, L as Layers } from "./star-CwKXK_VP.js";
import { T as Truck } from "./truck-Cin6m1M9.js";
import { S as ShoppingBag } from "./shopping-bag-BuhBSUlE.js";
import { m as motion } from "./proxy-KSK5DaNy.js";
import { B as Building2 } from "./building-2-CCnuI_wZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
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
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
];
const Ruler = createLucideIcon("ruler", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const PRODUCTS = [
  {
    id: "corrugated-boxes",
    name: "Corrugated Boxes",
    shortDesc: "Strong, stackable, multi-ply corrugated boxes for all industries.",
    fullDesc: "Our corrugated boxes are manufactured from premium kraft liner and fluting medium, engineered for maximum compression strength and transit durability. Available in 3-ply, 5-ply, and 7-ply configurations to meet diverse load and stacking requirements.",
    icon: Box,
    categories: ["all", "corrugated"],
    features: [
      "High BCT (Box Compression Test) rated",
      "Available in 3-ply, 5-ply, and 7-ply options",
      "Custom printing up to 4 colours",
      "Moisture-resistant coatings available"
    ],
    applications: [
      "E-commerce & Retail",
      "FMCG & Consumer Goods",
      "Automotive Components",
      "Industrial Exports"
    ],
    sizes: "Available in all standard and custom sizes (L×W×H). RSC, HSC, and tray styles supported. Contact us for specifications."
  },
  {
    id: "printed-packaging-boxes",
    name: "Printed Packaging Boxes",
    shortDesc: "Custom brand-printed boxes with high-quality flexo printing.",
    fullDesc: "Transform your packaging into a powerful brand statement. Our flexographic printing facility delivers crisp, vibrant imagery on corrugated and cardboard substrates, ideal for retail shelf presence and premium unboxing experiences.",
    icon: Printer,
    categories: ["all", "printed"],
    features: [
      "Up to 6-colour flexographic printing",
      "Pantone & CMYK colour matching",
      "Gloss, matte, and aqueous coating finishes",
      "Barcode, QR code, and serial number printing"
    ],
    applications: [
      "Retail & Brand Packaging",
      "Fashion & Apparel",
      "Food & Beverage",
      "Cosmetics & Personal Care"
    ],
    sizes: "Fully customisable dimensions. Minimum order quantities apply. Contact us for a sample and quote."
  },
  {
    id: "die-cut-boxes",
    name: "Die Cut Boxes",
    shortDesc: "Precision die-cut packaging for retail and e-commerce.",
    fullDesc: "Precision-engineered die-cut boxes crafted using computer-controlled die-cutting tools. Perfect for product displays, retail inserts, and structured presentation packaging where every millimetre counts.",
    icon: Scissors,
    categories: ["all", "specialty"],
    features: [
      "CNC die-cutting for tight tolerance",
      "Tuck-end, crash-lock, and auto-bottom styles",
      "Window patching for product visibility",
      "Integrated handles and perforation options"
    ],
    applications: [
      "E-commerce Fulfilment",
      "Retail Display Units",
      "Gift & Premium Packaging",
      "Electronics & Gadgets"
    ],
    sizes: "All dimensions available. Complex die shapes supported. Prototyping service available on request."
  },
  {
    id: "mono-cartons",
    name: "Mono Cartons",
    shortDesc: "Clean, smooth mono cartons for pharmaceuticals and FMCG.",
    fullDesc: "Manufactured from high-quality SBS and FBB board, our mono cartons offer a smooth, printable surface ideal for pharmaceutical compliance labelling and premium FMCG packaging. Strict quality control ensures dimensional consistency.",
    icon: Package,
    categories: ["all", "specialty"],
    features: [
      "SBS & FBB board grades available",
      "Pharmaceutical-compliant batch coding",
      "Child-resistant and tamper-evident styles",
      "High-resolution 4-colour litho printing"
    ],
    applications: [
      "Pharmaceuticals & Healthcare",
      "FMCG & Consumer Products",
      "Nutraceuticals",
      "Personal Care & Beauty"
    ],
    sizes: "Custom dimensions to fit your product. Board callipers from 250 gsm to 450 gsm. Consult our team."
  },
  {
    id: "custom-packaging",
    name: "Custom Packaging Solutions",
    shortDesc: "Fully bespoke packaging tailored to your dimensions and brand.",
    fullDesc: "From concept to carton, our in-house design and engineering team works alongside your team to develop packaging that is structurally sound, brand-consistent, and cost-effective. We handle prototyping, sampling, and production under one roof.",
    icon: Star,
    categories: ["all", "specialty"],
    features: [
      "End-to-end design & engineering support",
      "Rapid prototyping within 5–7 business days",
      "Structural and graphic design services",
      "Sustainability consulting available"
    ],
    applications: [
      "All Industries",
      "New Product Launches",
      "Seasonal & Limited Edition Lines",
      "Export Markets"
    ],
    sizes: "No restrictions — every dimension, shape, and finish is achievable. Contact us for a free feasibility assessment."
  },
  {
    id: "heavy-duty-packaging",
    name: "Heavy Duty Packaging Boxes",
    shortDesc: "Industrial-grade boxes for heavy goods and export shipments.",
    fullDesc: "Designed to withstand the rigours of long-haul transport and heavy stacking, our heavy-duty export boxes feature high-GSM liners, reinforced fluting, and edge protection. Compliant with ISTA transit testing standards.",
    icon: Truck,
    categories: ["all", "corrugated"],
    features: [
      "7-ply double-wall construction available",
      "High GSM kraft liner (200–400 GSM)",
      "Edge-crush and burst-strength rated",
      "Suitable for sea, air, and road freight"
    ],
    applications: [
      "Automotive & Engineering Parts",
      "Machinery & Equipment",
      "Steel & Metal Components",
      "Industrial Exports"
    ],
    sizes: "Heavy-duty sizes from small components to pallet-sized units. Custom weight ratings on request."
  },
  {
    id: "corrugated-boards-rolls",
    name: "Corrugated Boards & Rolls",
    shortDesc: "Raw corrugated sheets and rolls for secondary packaging.",
    fullDesc: "We supply raw corrugated boards and rolls to businesses that handle their own box conversion or secondary packaging. Available in standard flute profiles (A, B, C, E, F) and customisable widths for continuous production lines.",
    icon: Layers,
    categories: ["all", "corrugated"],
    features: [
      "All flute profiles: A, B, C, E, and F",
      "Single face, single wall, and double wall",
      "Consistent caliper and moisture content",
      "Cut-to-size and roll format options"
    ],
    applications: [
      "Box Converters & Packaging Plants",
      "Furniture & Wood Industry",
      "Glass & Ceramics",
      "Bulk Commodity Packing"
    ],
    sizes: "Standard sheet sizes and custom roll widths. Minimum order: 1 tonne. Bulk pricing available."
  },
  {
    id: "plastic-poly-bags",
    name: "Plastic Poly Bags",
    shortDesc: "Polybag solutions for garment and textile packing.",
    fullDesc: "High-clarity LDPE and HDPE poly bags manufactured in-house to support garment and textile export operations. Customisable with logos, warning prints, and size markings. Compliant with international packaging regulations.",
    icon: ShoppingBag,
    categories: ["all", "specialty"],
    features: [
      "LDPE and HDPE material options",
      "Custom print: logo, size, barcode, suffocation warning",
      "Self-seal and open-top styles available",
      "Anti-static variants for electronics"
    ],
    applications: [
      "Garment & Apparel Industry",
      "Textile & Home Furnishing",
      "E-commerce Fulfillment",
      "Retail Merchandising"
    ],
    sizes: "All standard garment bag sizes and fully custom dimensions. Gauge (micron) from 25 to 100+ per requirement."
  }
];
const FILTERS = [
  { key: "all", label: "All Products" },
  { key: "corrugated", label: "Corrugated" },
  { key: "printed", label: "Printed" },
  { key: "specialty", label: "Specialty" }
];
function ProductCard({
  product,
  index,
  onOpen
}) {
  const Icon = product.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.07, ease: "easeOut" },
      "data-ocid": `products.item.${index + 1}`,
      className: "group relative bg-card border border-border rounded-xl p-6 flex flex-col gap-4\n        cursor-pointer transition-smooth hover:-translate-y-1.5 hover:shadow-elevated\n        hover:border-accent",
      onClick: () => onOpen(product),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute left-0 top-0 h-full w-1 rounded-l-xl bg-accent opacity-0 transition-smooth group-hover:opacity-100"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-smooth group-hover:bg-primary/20 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-snug", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-2", children: product.shortDesc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "flex items-center gap-1.5 text-sm font-semibold text-gold transition-smooth group-hover:gap-3 self-start",
            onClick: (e) => {
              e.stopPropagation();
              onOpen(product);
            },
            "data-ocid": `products.learn_more_button.${index + 1}`,
            "aria-label": `Learn more about ${product.name}`,
            children: [
              "Learn More ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-smooth", children: "→" })
            ]
          }
        )
      ]
    }
  );
}
function ProductModal({
  product,
  onClose
}) {
  const openQuote = useQuoteStore((s) => s.openQuote);
  if (!product) return null;
  const Icon = product.icon;
  const handleGetQuote = () => {
    onClose();
    setTimeout(() => openQuote(product.name), 150);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!product, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-xl max-h-[90vh] overflow-y-auto",
      "data-ocid": "products.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-xl text-foreground leading-snug", children: product.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: product.fullDesc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-gold shrink-0" }),
            "Key Features"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: product.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" }),
                f
              ]
            },
            f
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-gold shrink-0" }),
            "Applications"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.applications.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-xs font-medium",
              children: app
            },
            app
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Ruler, { className: "w-4 h-4 text-gold shrink-0" }),
            "Sizes & Customisation"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: product.sizes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "btn-gold flex-1 h-11 text-sm",
              onClick: handleGetQuote,
              "data-ocid": "products.get_quote_button",
              children: "Get a Quote"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              className: "h-11 px-4 shrink-0",
              onClick: onClose,
              "data-ocid": "products.close_button",
              "aria-label": "Close",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  ) });
}
function ProductsPage() {
  const openQuote = useQuoteStore((s) => s.openQuote);
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const filtered = PRODUCTS.filter((p) => p.categories.includes(activeFilter));
  if (typeof document !== "undefined") {
    document.title = "Products | RPM Packaging Industries";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "products.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "gradient-hero py-20 md:py-28 relative overflow-hidden",
        "data-ocid": "products.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/3 w-80 h-80 rounded-full bg-accent/5 -translate-y-1/2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-accent/5 translate-y-1/3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5", children: "Product Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight", children: "Our Products" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto", children: "Premium Packaging Solutions for Every Industry" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-b border-border sticky top-16 z-20",
        "data-ocid": "products.filters_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 overflow-x-auto py-3", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveFilter(f.key),
            "data-ocid": `products.filter.${f.key}`,
            className: `shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-smooth whitespace-nowrap ${activeFilter === f.key ? "bg-primary text-primary-foreground shadow-navy" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
            children: f.label
          },
          f.key
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-14 md:py-20",
        "data-ocid": "products.listing_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-8", children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: filtered.length }),
            " ",
            "product",
            filtered.length !== 1 ? "s" : ""
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              "data-ocid": "products.list",
              children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProductCard,
                {
                  product,
                  index: i,
                  onOpen: setSelectedProduct
                },
                product.id
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "gradient-hero py-16 md:py-24 text-center relative overflow-hidden",
        "data-ocid": "products.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/5 -translate-y-1/2 -translate-x-1/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-0 w-56 h-56 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-2xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-accent rounded-full mx-auto mb-6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4", children: "Need Custom Packaging?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-base md:text-lg mb-8 leading-relaxed", children: "Tell us your requirements and our packaging experts will craft a solution tailored to your industry, dimensions, and brand identity." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "btn-gold h-12 px-8 text-base rounded-full",
                    onClick: () => openQuote(),
                    "data-ocid": "products.request_quote_button",
                    children: "Request a Free Quote"
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductModal,
      {
        product: selectedProduct,
        onClose: () => setSelectedProduct(null)
      }
    )
  ] });
}
export {
  ProductsPage
};
