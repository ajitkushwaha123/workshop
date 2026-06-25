"use client";
import React from "react";
import Faqs from "../../general/Faqs";
import { Hero } from "@/components/general/Hero";
import Testimonials from "../../general/Reviews";
import MasonryGallery from "../../general/galllery";
import { Banner } from "@/components/general/Banner";
import BonusSection from "@/components/general/Bonus";
import PainSection from "@/components/general/PainSection";
import AgendaTimelineSection from "@/components/general/Timeline";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";

export default function Home() {
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
      <StickyMobileCTA />
      <MasonryGallery />
      <Testimonials />
      <Banner />
      <Faqs />
    </div>
  );
}
