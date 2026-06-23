"use client";
import Faqs from "../../general/Faqs";
import React, { useState } from "react";
import { Hero } from "@/components/general/Hero";
import Testimonials from "../../general/Reviews";
import MasonryGallery from "../../general/galllery";
import { Banner } from "@/components/general/Banner";
import PainSection from "@/components/general/PainSection";
import TransformationSection from "@/components/general/Transformation";

export default function Home() {
  return (
    <div className="pb-16 w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <PainSection />
      <MasonryGallery />
      <TransformationSection />
      <Testimonials />
      <Banner />
      <Faqs />
    </div>
  );
}
