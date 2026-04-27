import type { LeadRequest } from "@/backend.d";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitLead } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Clock,
  Flag,
  Globe,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PRODUCTS = [
  "Corrugated Boxes",
  "Printed Packaging Boxes",
  "Die Cut Boxes",
  "Mono Cartons",
  "Custom Packaging Solutions",
  "Heavy Duty Packaging Boxes",
  "Export Packaging",
  "Industrial Packaging",
  "Other",
];

const TRUST_BADGES = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Internationally accredited quality management system",
  },
  {
    icon: Flag,
    title: "Made in India",
    desc: "Proudly manufactured in Haryana with Indian craftsmanship",
  },
  {
    icon: ShieldCheck,
    title: "19+ Years Experience",
    desc: "Trusted by leading brands since 2004",
  },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContactPage() {
  const { mutateAsync, isPending } = useSubmitLead();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadRequest>({
    defaultValues: { productInterest: "", message: "" },
  });

  const productInterest = watch("productInterest");

  const onSubmit = async (data: LeadRequest) => {
    await mutateAsync(data);
    setSubmitted(true);
    reset();
  };

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section
        className="gradient-hero py-20 relative overflow-hidden"
        data-ocid="contact.hero_section"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 text-xs text-primary-foreground/60 font-medium uppercase tracking-widest">
              <Link to="/" className="hover:text-accent transition-smooth">
                Home
              </Link>
              <span>/</span>
              <span className="text-accent">Contact Us</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <span className="text-xs font-bold tracking-widest uppercase text-accent">
                Reach Out
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-5 leading-tight">
              Get in Touch
            </h1>
            <p className="text-primary-foreground/75 text-lg leading-relaxed max-w-xl">
              We'd love to hear from you. Reach out for quotes, inquiries, or
              partnerships — our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-background py-20" data-ocid="contact.main_section">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT: Contact Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div
                className="bg-card border border-border rounded-xl p-8 shadow-elevated"
                data-ocid="contact.form_section"
              >
                {submitted ? (
                  <div
                    className="py-16 flex flex-col items-center gap-5 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                      Thank you! We will get back to you within 24 hours with a
                      tailored packaging quote.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="btn-gold px-8 mt-2"
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-0.5 bg-accent rounded-full" />
                        <span className="text-xs font-bold tracking-widest uppercase text-accent">
                          Quote Request
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-foreground heading-gold pb-4 mb-2">
                        Request a Free Quote
                      </h2>
                      <p className="text-muted-foreground text-sm mt-5">
                        Fill in your details and we'll prepare a customized
                        quote for your packaging needs.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      data-ocid="contact.form"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="name">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="Rajesh Kumar"
                            className="bg-background"
                            data-ocid="contact.name_input"
                            {...register("name", {
                              required: "Name is required",
                            })}
                          />
                          {errors.name && (
                            <p
                              className="text-xs text-destructive"
                              data-ocid="contact.name_field_error"
                            >
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your Company Ltd."
                            className="bg-background"
                            data-ocid="contact.company_input"
                            {...register("company")}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <Label htmlFor="email">
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            className="bg-background"
                            data-ocid="contact.email_input"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Enter a valid email address",
                              },
                            })}
                          />
                          {errors.email && (
                            <p
                              className="text-xs text-destructive"
                              data-ocid="contact.email_field_error"
                            >
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="phone">
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 99907 79707"
                            className="bg-background"
                            data-ocid="contact.phone_input"
                            {...register("phone", {
                              required: "Phone number is required",
                            })}
                          />
                          {errors.phone && (
                            <p
                              className="text-xs text-destructive"
                              data-ocid="contact.phone_field_error"
                            >
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label>
                          Product Interest{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={productInterest}
                          onValueChange={(val) =>
                            setValue("productInterest", val, {
                              shouldValidate: true,
                            })
                          }
                        >
                          <SelectTrigger
                            className="bg-background"
                            data-ocid="contact.product_select"
                          >
                            <SelectValue placeholder="Select a product or service..." />
                          </SelectTrigger>
                          <SelectContent>
                            {PRODUCTS.map((p) => (
                              <SelectItem key={p} value={p}>
                                {p}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <input
                          type="hidden"
                          {...register("productInterest", {
                            required: "Please select a product",
                          })}
                        />
                        {errors.productInterest && (
                          <p
                            className="text-xs text-destructive"
                            data-ocid="contact.product_field_error"
                          >
                            {errors.productInterest.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your packaging requirements — quantities, dimensions, materials, delivery timeline, or any special requirements..."
                          rows={4}
                          className="bg-background resize-none"
                          data-ocid="contact.message_textarea"
                          {...register("message")}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full btn-gold h-12 font-bold text-base"
                        data-ocid="contact.submit_button"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending Inquiry...
                          </>
                        ) : (
                          "Send Inquiry"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            {/* RIGHT: Contact Info + Map */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-accent rounded-full" />
                    <span className="text-xs font-bold tracking-widest uppercase text-accent">
                      Contact Details
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground heading-gold pb-4 mb-2">
                    RPM Packaging Industries
                  </h2>
                </div>
              </AnimatedSection>

              {/* Address */}
              <AnimatedSection delay={0.08}>
                <div
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-4 shadow-subtle card-hover"
                  data-ocid="contact.info.item.1"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      Address
                    </div>
                    <a
                      href="https://maps.google.com/?q=Jhajjar+Haryana+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-accent transition-smooth leading-relaxed"
                    >
                      Plot No. 6, Sector-7B, Model Economic Township,
                      <br />
                      Jhajjar, Haryana – 124103
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Phone */}
              <AnimatedSection delay={0.12}>
                <div
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-4 shadow-subtle card-hover"
                  data-ocid="contact.info.item.2"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+919990779707"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-smooth"
                    >
                      +91-9990779707
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Email */}
              <AnimatedSection delay={0.16}>
                <div
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-4 shadow-subtle card-hover"
                  data-ocid="contact.info.item.3"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@rpmpackagingindustries.com"
                      className="text-sm text-foreground hover:text-accent transition-smooth break-all"
                    >
                      info@rpmpackagingindustries.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Website */}
              <AnimatedSection delay={0.2}>
                <div
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-4 shadow-subtle card-hover"
                  data-ocid="contact.info.item.4"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                      Website
                    </div>
                    <a
                      href="https://www.rpmpackagingindustries.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-accent transition-smooth"
                    >
                      www.rpmpackagingindustries.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Business Hours */}
              <AnimatedSection delay={0.24}>
                <div
                  className="bg-card border border-border rounded-lg p-4 flex items-start gap-4 shadow-subtle"
                  data-ocid="contact.info.item.5"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                      Business Hours
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-foreground font-medium">
                          Mon – Sat
                        </span>
                        <span className="text-accent font-semibold">
                          9:00 AM – 6:00 PM
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-foreground font-medium">
                          Sunday
                        </span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* CTA Buttons */}
              <AnimatedSection delay={0.28}>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919990779707?text=Hello%2C%20I%20am%20interested%20in%20your%20packaging%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-lg py-3 px-4 transition-smooth shadow-subtle hover:shadow-elevated active:scale-95"
                    data-ocid="contact.whatsapp_button"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href="tel:+919990779707"
                    className="flex items-center justify-center gap-3 w-full btn-navy rounded-lg py-3 px-4 font-bold text-sm shadow-subtle hover:shadow-elevated"
                    data-ocid="contact.call_button"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: +91-9990779707
                  </a>
                </div>
              </AnimatedSection>

              {/* Google Map */}
              <AnimatedSection delay={0.32}>
                <div
                  className="rounded-xl overflow-hidden border border-border shadow-subtle"
                  data-ocid="contact.map_section"
                >
                  <iframe
                    title="RPM Packaging Industries Location — Jhajjar, Haryana"
                    src="https://maps.google.com/maps?q=Jhajjar+Haryana+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section
        className="section-alt py-14 border-t border-border"
        data-ocid="contact.trust_section"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TRUST_BADGES.map((badge, i) => (
              <AnimatedSection key={badge.title} delay={i * 0.1}>
                <div
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 shadow-subtle"
                  data-ocid={`contact.trust_badge.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 shadow-navy">
                    <badge.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-foreground text-sm leading-tight">
                      {badge.title}
                    </div>
                    <div className="text-muted-foreground text-xs mt-1 leading-relaxed">
                      {badge.desc}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
