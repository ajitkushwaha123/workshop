import PricingSection from "@/components/global/Home/Pricing";
import React from "react";

export const metadata = {
  title: "Pricing - FoodSnap.in",
  description:
    "Explore FoodSnap.in pricing plans for hassle-free food photography and menu image uploads compatible with Swiggy and Zomato.",
  keywords: [
    "FoodSnap pricing",
    "Swiggy menu images",
    "Zomato menu images",
    "restaurant image upload",
    "food photography services",
  ],
  authors: [{ name: "FoodSnap Team", email: "support@foodsnap.in" }],
  robots: "index, follow",
};

const index = () => {
  return (
    <div className="w-full bg-grid h-full flex items-center justify-center py-16">
      <PricingSection />
    </div>
  );
};

export default index;
