"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Faqs from "../../general/Faqs";
import Testimonials from "../../general/Reviews";
import WhyChooseUs from "./whyChooseUs";
import MasonryGallery from "../../general/galllery";
import { Banner } from "@/components/general/Banner";
import { Hero } from "@/components/general/Hero";
import { SocialProof } from "@/components/general/SocialProof";
import TransformationSection from "@/components/general/Transformation";
import PainSection from "@/components/general/PainSection";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pb-16 w-full text-neutral-900 dark:text-white transition-colors duration-300">
      <Hero />
      <SocialProof />
      <PainSection />
      <MasonryGallery />
      <WhyChooseUs />
      <TransformationSection />
      <Testimonials />
      <Banner />
      <Faqs />
    </div>
  );
}
