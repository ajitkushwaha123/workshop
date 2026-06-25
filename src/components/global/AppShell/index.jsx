"use client";
import { usePlan } from "@/hooks/usePlan";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import Loader from "@/components/general/states/loader";
import ErrorState from "@/components/general/states/Error";

export default function AppShell({ children }) {
  const { data: plan, isLoading, isError } = usePlan("zomato-swiggy-workshop");

  if (isLoading) return <Loader />;
  if (isError || !plan) return <ErrorState />;

  return (
    <>
      <Header />
      <main className="pt-12 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
