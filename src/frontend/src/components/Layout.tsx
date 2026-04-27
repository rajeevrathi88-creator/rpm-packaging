import { QuoteModal } from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { useQuoteStore } from "@/stores/useQuoteStore";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Package, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const currentYear = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuote } = useQuoteStore();
  const routerState = useRouterState();
  const prevPath = useRef(routerState.location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  const currentPath = routerState.location.pathname;
  if (prevPath.current !== currentPath) {
    prevPath.current = currentPath;
    if (mobileOpen) setMobileOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled
            ? "bg-card shadow-navy border-b border-border"
            : "bg-card border-b border-border/50"
        }`}
        data-ocid="header"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              data-ocid="header.logo_link"
            >
              <div className="w-9 h-9 rounded-sm gradient-hero flex items-center justify-center flex-shrink-0 shadow-navy">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-primary text-sm sm:text-base tracking-tight">
                  RPM Packaging
                </div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium hidden sm:block">
                  Industries
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-smooth ${
                    currentPath === link.to
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/60"
                  }`}
                  data-ocid={`header.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919990779707"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-smooth"
                data-ocid="header.phone_link"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+91-9990779707</span>
              </a>
              <Button
                onClick={() => openQuote()}
                className="btn-gold text-sm px-5 h-9"
                data-ocid="header.get_quote_button"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="header.hamburger_button"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden bg-card border-t border-border shadow-elevated"
            data-ocid="header.mobile_menu"
          >
            <div className="container max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-smooth ${
                    currentPath === link.to
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                  data-ocid={`header.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 border-t border-border mt-3">
                <Button
                  onClick={() => openQuote()}
                  className="btn-gold w-full"
                  data-ocid="header.mobile_get_quote_button"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content — offset for sticky header */}
      <main className="flex-1 pt-16 lg:pt-[4.5rem]">{children}</main>

      {/* Footer */}
      <footer
        className="bg-primary text-primary-foreground border-t border-primary/20"
        data-ocid="footer"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-sm bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <Package className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-primary-foreground">
                    RPM Packaging Industries
                  </div>
                  <div className="text-xs text-primary-foreground/60 tracking-widest uppercase">
                    ISO Certified Manufacturer
                  </div>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-sm">
                Premium packaging solutions for modern businesses. Trusted by
                India's leading brands for quality, reliability, and innovation.
              </p>
              <div className="space-y-1.5 text-sm text-primary-foreground/75">
                <p>📍 Plot No. 6, Sector-7B, Model Economic Township,</p>
                <p className="pl-5">Jhajjar, Haryana – 124103</p>
                <a
                  href="tel:+919990779707"
                  className="flex items-center gap-2 hover:text-accent transition-smooth"
                  data-ocid="footer.phone_link"
                >
                  📞 +91-9990779707
                </a>
                <a
                  href="mailto:info@rpmpackagingindustries.com"
                  className="flex items-center gap-2 hover:text-accent transition-smooth"
                  data-ocid="footer.email_link"
                >
                  ✉️ info@rpmpackagingindustries.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-accent text-sm tracking-wide uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about" },
                  { label: "Products", to: "/products" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Contact Us", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                      data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-accent text-sm tracking-wide uppercase">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  "Corrugated Boxes",
                  "Printed Packaging",
                  "Die Cut Boxes",
                  "Mono Cartons",
                  "Custom Packaging",
                  "Heavy Duty Boxes",
                ].map((p) => (
                  <li key={p}>
                    <Link
                      to="/products"
                      className="text-sm text-primary-foreground/75 hover:text-accent transition-smooth"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-8 py-6 border-t border-primary-foreground/10">
            {[
              "ISO 9001:2015 Certified",
              "Quality Assured",
              "Made in India",
              "19+ Years Experience",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/25 rounded-sm text-xs font-semibold text-accent"
              >
                ✓ {badge}
              </span>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-primary-foreground/10 text-xs text-primary-foreground/50">
            <p>
              © {currentYear} RPM Packaging Industries. All rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919990779707"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat with us on WhatsApp"
        data-ocid="whatsapp.floating_button"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated transition-smooth group-hover:scale-110 group-hover:shadow-gold">
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-elevated">
            Chat with us on WhatsApp
          </span>
        </div>
      </a>

      <QuoteModal />
    </div>
  );
}
