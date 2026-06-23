import React from "react";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Acquire Image Rights - FoodSnap.in",
  description:
    "Guidance on how to acquire legal usage rights for food images viewed on FoodSnap.in. Learn attribution rules, contacting rights holders, and licensing steps.",
  keywords: [
    "FoodSnap",
    "Image rights",
    "Acquire license",
    "Food photography",
    "Zomato images",
    "Swiggy images",
    "Usage policy",
  ],
  authors: [{ name: "FoodSnap Team", url: "https://foodsnap.in" }],
  openGraph: {
    title: "Acquire Image Rights - FoodSnap.in",
    description:
      "FoodSnap.in helps you identify and connect with image rights holders. We do not sell licenses but guide you on proper attribution and usage.",
    url: "https://foodsnap.in/acquire-image-rights",
    siteName: "FoodSnap.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acquire Image Rights - FoodSnap.in",
    description:
      "FoodSnap.in helps you identify and connect with image rights holders. We do not sell licenses but guide you on proper attribution and usage.",
  },
};

const cardData = [
  {
    title: "FoodSnap Does Not Sell Licenses",
    description:
      "We provide access to curated, verified collections but do not transfer or sell ownership rights.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All images remain the property of their original rights holders —
        restaurants, photographers, or platforms. FoodSnap.in only verifies
        whether an image is accepted on platforms like Zomato/Swiggy. If you
        wish to reuse an image elsewhere, you must obtain a license directly
        from the rights holder.
      </>
    ),
  },
  {
    title: "Steps to Acquire Image Rights",
    description: "Follow a simple process to use images legally.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Identify the source or rights holder (credit is shown near the image).
        </li>
        <li>
          Contact the rights holder directly to request permission or a license.
        </li>
        <li>
          Keep written proof of the granted license (email, invoice, or
          agreement) in case of future verification.
        </li>
      </ol>
    ),
  },
  {
    title: "Attribution & Credits",
    description:
      "Always attribute when using images, even if license terms are flexible.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If you are granted permission, always include a clear credit line such
        as: <br />
        <em>“Image © Original Photographer / Source: Zomato”</em>
        <br />
        <br />
        Proper attribution helps protect creators and clarifies your usage
        rights.
      </>
    ),
  },
  {
    title: "What If I Cannot Identify the Owner?",
    description:
      "FoodSnap.in can assist in clarifying sources or removing disputed content.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        If the rights holder is unclear, contact our support team. We will
        update the credit line or remove the image upon verified request from
        the owner.
        <br />
        <br />
        Never assume an image is free-to-use if the copyright owner is unknown.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help Acquiring Rights?",
  description:
    "Our team can help you identify sources, provide attribution details, or guide you through takedown and licensing requests.",
  content: (
    <div>
      <p className="mb-4">
        Contact us at{" "}
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
        </a>{" "}
        if you need clarification or assistance in acquiring image rights.
      </p>
      <p>
        We are based in New Delhi, India and aim to respond promptly to all
        licensing or attribution-related requests.
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Acquire Image Rights"
      heading={
        <div>
          Acquire <br className="hidden sm:block" />
          Image Rights
        </div>
      }
      description="FoodSnap.in does not sell licenses but guides you in acquiring rights directly from image owners."
      ctaDescription="Learn how to properly identify, contact, and license food images for your restaurant listings."
      ctaLink="/license"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Read Usage Policy
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
