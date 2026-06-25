"use client";

import { useMutation } from "@tanstack/react-query";
import { load } from "@cashfreepayments/cashfree-js";
import { createRegistration } from "@/services/payment";

export const useRegistration = () => {
  const registration = useMutation({
    mutationFn: createRegistration,

    onSuccess: async (data) => {
      console.log("ResponseData", data);
      if (!data?.success) {
        throw new Error(data?.message || "Failed to create registration");
      }

      const cashfree = await load({
        mode:
          process.env.NEXT_PUBLIC_CASHFREE_ENV === "production"
            ? "production"
            : "sandbox",
      });

      if (!cashfree) {
        throw new Error("Failed to initialize Cashfree");
      }

      await cashfree.checkout({
        paymentSessionId: data?.data?.paymentSessionId,
        redirectTarget: "_self",
      });
    },
  });

  return {
    registration,
  };
};
