"use client";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/general/states/loader";
import { useSearchParams, useRouter } from "next/navigation";

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("order_id");

  const { data, isLoading, error } = useQuery({
    queryKey: ["paymentStatus", orderId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/payments/registration/${orderId}/status`,
      );
      return response.data;
    },
    enabled: !!orderId,
    retry: false,
  });

  useEffect(() => {
    if (!data?.data) return;

    const status = data.data.payment_status;

    if (status === "SUCCESS") {
      router.replace(`payment-status/success?order_id=${orderId}`);
    } else if (status === "FAILED" || status === "ABANDONED") {
      router.replace(`payment-status/failed?order_id=${orderId}`);
    }
  }, [data, orderId, router]);

  if (!orderId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h1 className="text-xl font-bold text-gray-800">Invalid Link</h1>
        <p className="text-gray-600 mt-2">
          Missing Order ID in the URL parameter.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <Loader title="Verifying your payment status..." />;
  }

  if (error) {
    const errorMessage = axios.isAxiosError(error)
      ? error.response?.data?.message || error.message
      : "Something went wrong.";

    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h1 className="text-xl font-bold text-gray-800">Verification Error</h1>
        <p className="text-gray-600 mt-2">{errorMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Retry Check
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Loader title="Processing payment" />
      <p className="text-gray-600 mt-2">
        Current Status:{" "}
        <span className="font-semibold text-amber-600">
          {data?.data?.payment_status}
        </span>
      </p>
      <p className="text-sm text-gray-400 mt-1">
        We are waiting for final confirmation from the gateway.
      </p>
    </div>
  );
}

export default function PaymentStatusPage() {
  return <PaymentStatusContent />;
}
