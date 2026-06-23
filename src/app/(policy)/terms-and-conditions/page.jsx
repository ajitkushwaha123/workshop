import React from "react";
import { Headset, Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Terms & Conditions | FoodSnap.in",
  description:
    "Understand the rules that govern your use of FoodSnap.in — a food image library built for food creators, marketers, and restaurants.",
  keywords: [
    "FoodSnap.in",
    "Terms and Conditions",
    "Food Images",
    "Food Library",
    "Image Licensing",
    "Swiggy",
    "Zomato",
  ],
  authors: [{ name: "FoodSnap", url: "https://foodsnap.in" }],
  openGraph: {
    title: "Terms & Conditions | FoodSnap.in",
    description:
      "Understand the rules that govern your use of FoodSnap.in — a food image library built for food creators, marketers, and restaurants.",
    url: "https://foodsnap.in/terms-and-conditions",
    siteName: "FoodSnap.in",
    type: "website",
  },
};

const cardData = [
  {
    title: "User Responsibilities",
    description:
      "Users must use FoodSnap.in services ethically and in compliance with all applicable laws.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        As a FoodSnap.in user, you agree to use the platform responsibly for
        lawful content usage. All images are pre-approved for use on platforms
        like Swiggy and Zomato, and must not be misused or resold.
        <br />
        <br />
        You are responsible for maintaining the security of your account and
        subscription access credentials.
      </>
    ),
  },
  {
    title: "Platform Usage & Limitations",
    description:
      "FoodSnap.in offers access to licensed food imagery — not ownership or resale rights.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in provides a growing collection of high-quality food images
        verified for use on food delivery platforms. While you have unlimited
        downloads under your subscription, redistribution or use outside
        approved platforms may violate terms.
        <br />
        <br />
        Abuse, automated scraping, or unauthorized use of content may lead to
        account suspension or legal action.
      </>
    ),
  },
  {
    title: "Security & Data Integrity",
    description:
      "We take security seriously, but you must also protect your credentials.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We secure your access using encryption and role-based permissions. We do
        not store payment information directly.
        <br />
        <br />
        You are advised to avoid sharing your login details and to promptly
        report any suspicious activity to our support team.
      </>
    ),
  },
  {
    title: "Termination & Deletion",
    description:
      "Cancel anytime — and we may enforce policy violations at our discretion.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your subscription at any time. Upon termination, your
        access to downloadable images will end immediately.
        <br />
        <br />
        We reserve the right to terminate accounts that misuse the platform,
        violate our content policy, or engage in fraudulent activity.
      </>
    ),
  },
];

const contactData = {
  title: "Need Clarification or Have Questions?",
  description:
    "We're here to help you understand the terms and make the most of FoodSnap.in.",
  content: (
    <div>
      <p className="mb-4">
        These Terms & Conditions govern your use of FoodSnap.in. By accessing
        our library (
        <a
          href="https://foodsnap.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          foodsnap.in
        </a>
        ), you agree to abide by them.
      </p>
      <p className="mb-2">
        General inquiries:{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@foodsnap.in
        </a>
      </p>
      <p className="mb-2">
        Support issues:{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>
      </p>
      <p>
        Image removals or copyright reports:{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Terms & Conditions"
      heading={
        <div>
          Your Access. <br className="hidden sm:block" />
          Our Terms. Clear & Fair.
        </div>
      }
      description="Understand the rules that govern your use of FoodSnap.in — a food image library built for food creators, marketers, and restaurants."
      ctaDescription="By using FoodSnap.in, you agree to these Terms & Conditions designed to ensure ethical, secure, and approved use of our image library."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Report an Issue
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
