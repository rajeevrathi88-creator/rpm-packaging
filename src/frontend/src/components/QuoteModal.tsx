import type { LeadRequest } from "@/backend.d";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useQuoteStore } from "@/stores/useQuoteStore";
import { CheckCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PRODUCTS = [
  "Corrugated Boxes",
  "Printed Packaging Boxes",
  "Die Cut Boxes",
  "Mono Cartons",
  "Custom Packaging Solutions",
  "Heavy Duty Packaging Boxes",
  "Flexible Packaging",
  "Industrial Packaging",
];

export function QuoteModal() {
  const { isOpen, defaultProduct, closeQuote } = useQuoteStore();
  const { mutateAsync, isPending, reset } = useSubmitLead();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm<LeadRequest>({
    defaultValues: { productInterest: "" },
  });

  const productInterest = watch("productInterest");

  useEffect(() => {
    if (defaultProduct) setValue("productInterest", defaultProduct);
  }, [defaultProduct, setValue]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      reset();
      resetForm();
    }
  }, [isOpen, reset, resetForm]);

  const onSubmit = async (data: LeadRequest) => {
    await mutateAsync(data);
    setSubmitted(true);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && closeQuote()}
      data-ocid="quote.dialog"
    >
      <DialogContent className="sm:max-w-lg bg-card border-border shadow-elevated">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-1 bg-accent rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Free Consultation
            </span>
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            Request a Quote
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll get back within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div
            className="py-8 flex flex-col items-center gap-4 text-center"
            data-ocid="quote.success_state"
          >
            <CheckCircle className="w-14 h-14 text-accent" />
            <h3 className="font-display text-xl font-bold text-foreground">
              Thank You!
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Your quote request has been received. Our team will contact you
              within 24 hours.
            </p>
            <Button
              onClick={closeQuote}
              className="btn-gold mt-2"
              data-ocid="quote.close_button"
            >
              Close
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-1"
            data-ocid="quote.form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Rajesh Kumar"
                  className="bg-background border-input"
                  data-ocid="quote.name_input"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="quote.name_field_error"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  placeholder="Acme Industries Ltd."
                  className="bg-background border-input"
                  data-ocid="quote.company_input"
                  {...register("company", { required: "Company is required" })}
                />
                {errors.company && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="quote.company_field_error"
                  >
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="bg-background border-input"
                  data-ocid="quote.email_input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="quote.email_field_error"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 99907 79707"
                  className="bg-background border-input"
                  data-ocid="quote.phone_input"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="quote.phone_field_error"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-sm font-medium">
                Product Interest <span className="text-destructive">*</span>
              </Label>
              <Select
                value={productInterest}
                onValueChange={(val) =>
                  setValue("productInterest", val, { shouldValidate: true })
                }
              >
                <SelectTrigger
                  className="bg-background border-input"
                  data-ocid="quote.product_select"
                >
                  <SelectValue placeholder="Select a product..." />
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
                  data-ocid="quote.product_field_error"
                >
                  {errors.productInterest.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your packaging requirements, quantities, dimensions..."
                rows={3}
                className="bg-background border-input resize-none"
                data-ocid="quote.message_textarea"
                {...register("message")}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={closeQuote}
                className="flex-1"
                data-ocid="quote.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isPending}
                className="flex-1 btn-gold"
                data-ocid="quote.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Quote"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
