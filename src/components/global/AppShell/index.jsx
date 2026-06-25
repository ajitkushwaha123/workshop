"use client";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function AppShell({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="pt-12 min-h-screen">{children}</div>
        <Footer />
      </QueryClientProvider>
    </>
  );
}
