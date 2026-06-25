"use client";

import { useState } from "react";
import { usePlan } from "@/hooks/usePlan";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import Loader from "@/components/general/states/loader";
import ErrorState from "@/components/general/states/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function AppContent({ children }) {
  const { data: plan, isLoading, isError } = usePlan("zomato-swiggy-workshop");

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !plan) {
    return <ErrorState />;
  }

  return (
    <>
      <Header />
      <main className="pt-12 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default function AppShell({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent>{children}</AppContent>
    </QueryClientProvider>
  );
}
