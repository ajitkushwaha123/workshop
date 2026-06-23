"use client";
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";

export default function AppShell({ children }) {
  return (
    <>
      <Header />
      <div className="pt-12 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
