"use client";

import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/hooks/useRegistration";
import { useAppConfigStore } from "@/stores/app-config.store";
import { User, Mail, Phone, ShieldCheck, Loader2 } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Enter a valid 10-digit number")
    .required("Phone is required"),
  email: Yup.string().trim().email("Invalid email").nullable(),
});

const FieldError = ({ touched, error }) => {
  if (!touched || !error) return null;
  return <p className="text-xs font-medium text-destructive">{error}</p>;
};

export default function ReserveSeatDialog({ open, onOpenChange }) {
  const plan = useAppConfigStore((state) => state.plan);
  const { registration } = useRegistration();
  const isLoading = registration.isPending;

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!plan?._id) return;

      try {
        await registration.mutateAsync({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email?.trim() || undefined,
          planId: plan._id,
        });

        onOpenChange(false);
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  useEffect(() => {
    if (!open) {
      formik.resetForm();
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isLoading) {
          onOpenChange(value);
        }
      }}
    >
      <DialogContent className="z-[100] overflow-auto border-0 p-0 sm:max-w-md">
        <div className="bg-emerald-600 px-6 py-5 text-white">
          <div className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            Secure Registration
          </div>

          <DialogHeader className="mt-2">
            <DialogTitle className="text-left text-2xl font-bold text-white">
              Reserve Your Seat
            </DialogTitle>
            <DialogDescription className="text-left text-emerald-50/90">
              Complete your details and continue to payment.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5 bg-white p-6">
          <div className="rounded-xl border bg-muted/40 p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="truncate text-sm font-medium text-muted-foreground">
                {plan?.title || "Workshop Access"}
              </span>
              <span className="text-2xl font-bold text-emerald-600 shrink-0">
                ₹{plan?.price ?? 0}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              One-time payment • Instant confirmation
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11 pl-10"
              />
            </div>
            <FieldError
              touched={formik.touched.name}
              error={formik.errors.name}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              WhatsApp Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="9876543210"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  const cleanValue = e.target.value.replace(/\D/g, "");
                  formik.setFieldValue("phone", cleanValue);
                }}
                className="h-11 pl-10"
              />
            </div>
            <FieldError
              touched={formik.touched.phone}
              error={formik.errors.phone}
            />
            <p className="text-xs text-muted-foreground">
              We'll send workshop reminders on WhatsApp.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address{" "}
              <span className="text-xs text-muted-foreground font-normal">
                (Optional)
              </span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-11 pl-10"
              />
            </div>
            <FieldError
              touched={formik.touched.email}
              error={formik.errors.email}
            />
          </div>

          {registration.error && (
            <div
              className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive"
              role="alert"
            >
              {registration.error.message ||
                "Something went wrong. Please try again."}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isLoading || !plan?._id}
            className="h-12 w-full text-base font-semibold bg-green-600 hover:bg-emerald-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Redirecting to Payment...
              </>
            ) : (
              `Reserve Seat for ₹${plan?.price ?? 0}`
            )}
          </Button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground px-2">
            Your information is secure and used only for workshop access,
            reminders, and updates.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
