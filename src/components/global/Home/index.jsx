"use client";
import React from "react";
import Faqs from "../../general/Faqs";
import { usePlan } from "@/hooks/usePlan";
import { Hero } from "@/components/general/Hero";
import Testimonials from "../../general/Reviews";
import { AlertCircle, Loader2 } from "lucide-react";
import MasonryGallery from "../../general/galllery";
import { Banner } from "@/components/general/Banner";
import BonusSection from "@/components/general/Bonus";
import PainSection from "@/components/general/PainSection";
import AgendaTimelineSection from "@/components/general/Timeline";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";

function PageLoader() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <Loader2 className="h-10 w-10 animate-spin text-green-600" />

      <div className="text-center">
        <h3 className="font-semibold text-lg">Loading Workshop Details</h3>
        <p className="text-sm text-muted-foreground">Please wait a moment...</p>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <AlertCircle className="mb-4 h-12 w-12 text-red-500" />

      <h2 className="text-xl font-bold">Failed to load workshop</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Something went wrong while loading the workshop details. Please refresh
        the page and try again.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-5 rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white"
      >
        Retry
      </button>
    </div>
  );
}

export default function Home() {
  const { data: plan, isLoading, isError } = usePlan("zomato-swiggy-workshop");

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <ErrorState />;
  }

  if (!plan) {
    return <ErrorState />;
  }

  return (
    <div className="w-full pb-16 text-neutral-900 transition-colors duration-300 dark:text-white">
      <Hero />
      <PainSection />
      <AgendaTimelineSection />
      <BonusSection
        title="Free Zomato & Swiggy Onboarding"
        value="₹5,000+ Value"
        limit={10}
        description="We'll personally help you complete restaurant onboarding on Zomato & Swiggy so you can start receiving orders faster."
      />
      <StickyMobileCTA plan={plan} />
      <MasonryGallery />
      <Testimonials />
      <Banner />
      <Faqs />
    </div>
  );
}
