import React from "react";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Image Usage & Licensing Policy - FoodSnap.in",
  description:
    "Learn about FoodSnap.in’s role as a food image collection and verification service. Understand ownership, licensing, and user responsibilities when using our platform.",
  keywords: [
    "FoodSnap",
    "Image License",
    "Usage Policy",
    "Zomato image verification",
    "Swiggy image verification",
    "Food photography",
    "Restaurant listings",
  ],
  authors: [{ name: "FoodSnap Team", url: "https://foodsnap.in" }],
  openGraph: {
    title: "Image Usage & Licensing Policy - FoodSnap.in",
    description:
      "Understand FoodSnap.in’s scope, licensing limitations, and responsibilities regarding digital food images.",
    url: "https://foodsnap.in/license",
    siteName: "FoodSnap.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Usage & Licensing Policy - FoodSnap.in",
    description:
      "Understand FoodSnap.in’s scope, licensing limitations, and responsibilities regarding digital food images.",
  },
};

const cardData = [
  {
    title: "We Do Not Sell Image Copyrights",
    description:
      "FoodSnap.in charges only for collection, organization, and Zomato/Swiggy verification services.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in does <strong>not</strong> sell or transfer copyrights to
        food images. All rights remain with the original creators, restaurants,
        or platforms. Our service is focused on helping you search, collect, and
        verify whether an image is acceptable on platforms like Zomato.
        <br />
        <br />
        If you want to use an image outside FoodSnap.in, you must secure
        permission or licensing from the original rights holder.
      </>
    ),
  },
  {
    title: "Verification vs. Ownership",
    description:
      "Being 'accepted on Zomato' does not mean you own rights to the image.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Our platform only verifies if an image has been accepted on Zomato or
        Swiggy in the past. This information is provided for reference only.
        <br />
        <br />
        It does not grant you ownership, license, or permission to reuse the
        image commercially unless the rights holder allows it.
      </>
    ),
  },
  {
    title: "Third-Party Sources",
    description: "Images may originate from Zomato, Google, or restaurants.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Some images on FoodSnap.in may come from public sources like Zomato,
        Google, or restaurants themselves. We do not claim affiliation or
        partnership with these platforms.
        <br />
        <br />
        All trademarks and copyrights remain the property of their respective
        owners.
      </>
    ),
  },
  {
    title: "User Responsibility",
    description:
      "You are responsible for proper usage and compliance with platform rules.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        As a user, you are fully responsible for ensuring that images used from
        FoodSnap.in comply with your restaurant’s branding, Zomato/Swiggy
        policies, and legal copyright requirements.
        <br />
        <br />
        FoodSnap.in is not liable for misuse, copyright disputes, or listing
        rejections caused by improper use of images.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help with Image Rights?",
  description:
    "We can guide you on attribution, rights clarification, or takedown requests.",
  content: (
    <div>
      <p className="mb-4">
        For licensing clarification, copyright concerns, or takedown requests,
        please contact us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>{" "}
        or{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
        .
      </p>
      <p>
        We are based in New Delhi, India and will respond promptly to rights
        holder requests or clarifications.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Image Usage & Licensing Policy"
      heading={
        <div>
          Image Usage <br className="hidden sm:block" />& Licensing Policy
        </div>
      }
      description="Learn about FoodSnap.in’s image usage rules, licensing limitations, and user responsibilities."
      ctaDescription="FoodSnap.in verifies and organizes food images but does not sell or transfer copyrights. Read this policy carefully before use."
      ctaLink="/acquire-image-rights"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Acquire Rights Guide
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
