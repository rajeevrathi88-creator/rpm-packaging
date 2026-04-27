import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuoteStore } from "@/stores/useQuoteStore";
import {
  Box,
  Building2,
  CheckCircle2,
  Layers,
  Package,
  Printer,
  Ruler,
  Scissors,
  ShoppingBag,
  Star,
  Truck,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

type FilterKey = "all" | "corrugated" | "printed" | "specialty";

interface Product {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  categories: FilterKey[];
  features: string[];
  applications: string[];
  sizes: string;
}

// ─── Product Data ───────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: "corrugated-boxes",
    name: "Corrugated Boxes",
    shortDesc:
      "Strong, stackable, multi-ply corrugated boxes for all industries.",
    fullDesc:
      "Our corrugated boxes are manufactured from premium kraft liner and fluting medium, engineered for maximum compression strength and transit durability. Available in 3-ply, 5-ply, and 7-ply configurations to meet diverse load and stacking requirements.",
    icon: Box,
    categories: ["all", "corrugated"],
    features: [
      "High BCT (Box Compression Test) rated",
      "Available in 3-ply, 5-ply, and 7-ply options",
      "Custom printing up to 4 colours",
      "Moisture-resistant coatings available",
    ],
    applications: [
      "E-commerce & Retail",
      "FMCG & Consumer Goods",
      "Automotive Components",
      "Industrial Exports",
    ],
    sizes:
      "Available in all standard and custom sizes (L×W×H). RSC, HSC, and tray styles supported. Contact us for specifications.",
  },
  {
    id: "printed-packaging-boxes",
    name: "Printed Packaging Boxes",
    shortDesc: "Custom brand-printed boxes with high-quality flexo printing.",
    fullDesc:
      "Transform your packaging into a powerful brand statement. Our flexographic printing facility delivers crisp, vibrant imagery on corrugated and cardboard substrates, ideal for retail shelf presence and premium unboxing experiences.",
    icon: Printer,
    categories: ["all", "printed"],
    features: [
      "Up to 6-colour flexographic printing",
      "Pantone & CMYK colour matching",
      "Gloss, matte, and aqueous coating finishes",
      "Barcode, QR code, and serial number printing",
    ],
    applications: [
      "Retail & Brand Packaging",
      "Fashion & Apparel",
      "Food & Beverage",
      "Cosmetics & Personal Care",
    ],
    sizes:
      "Fully customisable dimensions. Minimum order quantities apply. Contact us for a sample and quote.",
  },
  {
    id: "die-cut-boxes",
    name: "Die Cut Boxes",
    shortDesc: "Precision die-cut packaging for retail and e-commerce.",
    fullDesc:
      "Precision-engineered die-cut boxes crafted using computer-controlled die-cutting tools. Perfect for product displays, retail inserts, and structured presentation packaging where every millimetre counts.",
    icon: Scissors,
    categories: ["all", "specialty"],
    features: [
      "CNC die-cutting for tight tolerance",
      "Tuck-end, crash-lock, and auto-bottom styles",
      "Window patching for product visibility",
      "Integrated handles and perforation options",
    ],
    applications: [
      "E-commerce Fulfilment",
      "Retail Display Units",
      "Gift & Premium Packaging",
      "Electronics & Gadgets",
    ],
    sizes:
      "All dimensions available. Complex die shapes supported. Prototyping service available on request.",
  },
  {
    id: "mono-cartons",
    name: "Mono Cartons",
    shortDesc: "Clean, smooth mono cartons for pharmaceuticals and FMCG.",
    fullDesc:
      "Manufactured from high-quality SBS and FBB board, our mono cartons offer a smooth, printable surface ideal for pharmaceutical compliance labelling and premium FMCG packaging. Strict quality control ensures dimensional consistency.",
    icon: Package,
    categories: ["all", "specialty"],
    features: [
      "SBS & FBB board grades available",
      "Pharmaceutical-compliant batch coding",
      "Child-resistant and tamper-evident styles",
      "High-resolution 4-colour litho printing",
    ],
    applications: [
      "Pharmaceuticals & Healthcare",
      "FMCG & Consumer Products",
      "Nutraceuticals",
      "Personal Care & Beauty",
    ],
    sizes:
      "Custom dimensions to fit your product. Board callipers from 250 gsm to 450 gsm. Consult our team.",
  },
  {
    id: "custom-packaging",
    name: "Custom Packaging Solutions",
    shortDesc: "Fully bespoke packaging tailored to your dimensions and brand.",
    fullDesc:
      "From concept to carton, our in-house design and engineering team works alongside your team to develop packaging that is structurally sound, brand-consistent, and cost-effective. We handle prototyping, sampling, and production under one roof.",
    icon: Star,
    categories: ["all", "specialty"],
    features: [
      "End-to-end design & engineering support",
      "Rapid prototyping within 5–7 business days",
      "Structural and graphic design services",
      "Sustainability consulting available",
    ],
    applications: [
      "All Industries",
      "New Product Launches",
      "Seasonal & Limited Edition Lines",
      "Export Markets",
    ],
    sizes:
      "No restrictions — every dimension, shape, and finish is achievable. Contact us for a free feasibility assessment.",
  },
  {
    id: "heavy-duty-packaging",
    name: "Heavy Duty Packaging Boxes",
    shortDesc: "Industrial-grade boxes for heavy goods and export shipments.",
    fullDesc:
      "Designed to withstand the rigours of long-haul transport and heavy stacking, our heavy-duty export boxes feature high-GSM liners, reinforced fluting, and edge protection. Compliant with ISTA transit testing standards.",
    icon: Truck,
    categories: ["all", "corrugated"],
    features: [
      "7-ply double-wall construction available",
      "High GSM kraft liner (200–400 GSM)",
      "Edge-crush and burst-strength rated",
      "Suitable for sea, air, and road freight",
    ],
    applications: [
      "Automotive & Engineering Parts",
      "Machinery & Equipment",
      "Steel & Metal Components",
      "Industrial Exports",
    ],
    sizes:
      "Heavy-duty sizes from small components to pallet-sized units. Custom weight ratings on request.",
  },
  {
    id: "corrugated-boards-rolls",
    name: "Corrugated Boards & Rolls",
    shortDesc: "Raw corrugated sheets and rolls for secondary packaging.",
    fullDesc:
      "We supply raw corrugated boards and rolls to businesses that handle their own box conversion or secondary packaging. Available in standard flute profiles (A, B, C, E, F) and customisable widths for continuous production lines.",
    icon: Layers,
    categories: ["all", "corrugated"],
    features: [
      "All flute profiles: A, B, C, E, and F",
      "Single face, single wall, and double wall",
      "Consistent caliper and moisture content",
      "Cut-to-size and roll format options",
    ],
    applications: [
      "Box Converters & Packaging Plants",
      "Furniture & Wood Industry",
      "Glass & Ceramics",
      "Bulk Commodity Packing",
    ],
    sizes:
      "Standard sheet sizes and custom roll widths. Minimum order: 1 tonne. Bulk pricing available.",
  },
  {
    id: "plastic-poly-bags",
    name: "Plastic Poly Bags",
    shortDesc: "Polybag solutions for garment and textile packing.",
    fullDesc:
      "High-clarity LDPE and HDPE poly bags manufactured in-house to support garment and textile export operations. Customisable with logos, warning prints, and size markings. Compliant with international packaging regulations.",
    icon: ShoppingBag,
    categories: ["all", "specialty"],
    features: [
      "LDPE and HDPE material options",
      "Custom print: logo, size, barcode, suffocation warning",
      "Self-seal and open-top styles available",
      "Anti-static variants for electronics",
    ],
    applications: [
      "Garment & Apparel Industry",
      "Textile & Home Furnishing",
      "E-commerce Fulfillment",
      "Retail Merchandising",
    ],
    sizes:
      "All standard garment bag sizes and fully custom dimensions. Gauge (micron) from 25 to 100+ per requirement.",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "corrugated", label: "Corrugated" },
  { key: "printed", label: "Printed" },
  { key: "specialty", label: "Specialty" },
];

// ─── Product Card ───────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
  onOpen,
}: {
  product: Product;
  index: number;
  onOpen: (p: Product) => void;
}) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      data-ocid={`products.item.${index + 1}`}
      className="group relative bg-card border border-border rounded-xl p-6 flex flex-col gap-4
        cursor-pointer transition-smooth hover:-translate-y-1.5 hover:shadow-elevated
        hover:border-accent"
      onClick={() => onOpen(product)}
    >
      {/* Gold left accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-accent opacity-0 transition-smooth group-hover:opacity-100"
      />

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-smooth group-hover:bg-primary/20 shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-display font-semibold text-foreground text-base leading-snug">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>
      </div>

      {/* Learn more */}
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-semibold text-gold transition-smooth group-hover:gap-3 self-start"
        onClick={(e) => {
          e.stopPropagation();
          onOpen(product);
        }}
        data-ocid={`products.learn_more_button.${index + 1}`}
        aria-label={`Learn more about ${product.name}`}
      >
        Learn More <span className="transition-smooth">→</span>
      </button>
    </motion.div>
  );
}

// ─── Product Detail Modal ───────────────────────────────────────────────────────

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const openQuote = useQuoteStore((s) => s.openQuote);

  if (!product) return null;
  const Icon = product.icon;

  const handleGetQuote = () => {
    onClose();
    setTimeout(() => openQuote(product.name), 150);
  };

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-xl max-h-[90vh] overflow-y-auto"
        data-ocid="products.dialog"
      >
        <DialogHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="font-display text-xl text-foreground leading-snug">
              {product.name}
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Full description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.fullDesc}
        </p>

        {/* Features */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div>
          <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gold shrink-0" />
            Applications
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <Badge
                key={app}
                variant="secondary"
                className="text-xs font-medium"
              >
                {app}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sizes & Customisation */}
        <div className="bg-muted/40 rounded-lg p-4">
          <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
            <Ruler className="w-4 h-4 text-gold shrink-0" />
            Sizes &amp; Customisation
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.sizes}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <Button
            className="btn-gold flex-1 h-11 text-sm"
            onClick={handleGetQuote}
            data-ocid="products.get_quote_button"
          >
            Get a Quote
          </Button>
          <Button
            variant="outline"
            className="h-11 px-4 shrink-0"
            onClick={onClose}
            data-ocid="products.close_button"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export function ProductsPage() {
  const openQuote = useQuoteStore((s) => s.openQuote);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = PRODUCTS.filter((p) => p.categories.includes(activeFilter));

  if (typeof document !== "undefined") {
    document.title = "Products | RPM Packaging Industries";
  }

  return (
    <div data-ocid="products.page">
      {/* ── Hero ── */}
      <section
        className="gradient-hero py-20 md:py-28 relative overflow-hidden"
        data-ocid="products.hero_section"
      >
        {/* Decorative orbs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-accent/5 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-accent/5 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              Product Range
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
              Our Products
            </h1>
            <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Premium Packaging Solutions for Every Industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section
        className="bg-card border-b border-border sticky top-16 z-20"
        data-ocid="products.filters_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                data-ocid={`products.filter.${f.key}`}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-smooth whitespace-nowrap ${
                  activeFilter === f.key
                    ? "bg-primary text-primary-foreground shadow-navy"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section
        className="bg-background py-14 md:py-20"
        data-ocid="products.listing_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Count */}
          <p className="text-muted-foreground text-sm mb-8">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            product{filtered.length !== 1 ? "s" : ""}
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            data-ocid="products.list"
          >
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onOpen={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        className="gradient-hero py-16 md:py-24 text-center relative overflow-hidden"
        data-ocid="products.cta_section"
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/5 -translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/2 right-0 w-56 h-56 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/3" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Need Custom Packaging?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8 leading-relaxed">
              Tell us your requirements and our packaging experts will craft a
              solution tailored to your industry, dimensions, and brand
              identity.
            </p>
            <Button
              size="lg"
              className="btn-gold h-12 px-8 text-base rounded-full"
              onClick={() => openQuote()}
              data-ocid="products.request_quote_button"
            >
              Request a Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Product Detail Modal ── */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
