"use client";
import React from "react";
import Faqs from "../../general/Faqs";
import { Hero } from "@/components/general/Hero";
import Testimonials from "../../general/Reviews";
import MasonryGallery from "../../general/galllery";
import { Banner } from "@/components/general/Banner";
import PainSection from "@/components/general/PainSection";
import TransformationSection from "@/components/general/Transformation";
import BonusSection from "@/components/general/Bonus";
import AgendaTimelineSection from "@/components/general/Timeline";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";

export default function Home() {
  return (
    <div className="pb-16 w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <PainSection />
      <MasonryGallery />
      {/* <TransformationSection /> */}
      <AgendaTimelineSection />
      <StickyMobileCTA />
      <Testimonials />
      <BonusSection
        title="Free Zomato & Swiggy Onboarding"
        value="₹5,000+ Value"
        limit={10}
        description="We'll personally help you complete restaurant onboarding on Zomato & Swiggy so you can start receiving orders faster."
      />
      <Banner />
      <Faqs />
    </div>
  );
}
