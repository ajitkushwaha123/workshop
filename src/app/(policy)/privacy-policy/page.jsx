
import Template from "@/components/global/template";
import { Headset } from "lucide-react";
import React from "react";
import { Rows, Zap, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - FoodSnap.in",
  description:
    "Learn how FoodSnap.in collects, uses, and safeguards your personal information with full transparency and control.",
  keywords: [
    "Privacy Policy",
    "FoodSnap.in",
    "Data Protection",
    "Personal Information",
    "User Rights",
  ],
  openGraph: {
    title: "Privacy Policy - FoodSnap.in",
    description:
      "Learn how FoodSnap.in collects, uses, and safeguards your personal information with full transparency and control.",
    url: "https://foodsnap.in/privacy-policy",
    siteName: "FoodSnap.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - FoodSnap.in",
    description:
      "Learn how FoodSnap.in collects, uses, and safeguards your personal information with full transparency and control.",
  },
};

const cardData = [
  {
    title: "Types of Information We Gather",
    description:
      "We track essential data to understand how you interact with our platform.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We collect basic user information such as your name, email address, and
        contact preferences when you sign up for FoodSnap.in.
        <br />
        <br />
        We also track how you use our platform — including login activity,
        download frequency, and interaction patterns — to improve our service
        and detect misuse.
      </>
    ),
  },
  {
    title: "Ways We Utilize Your Data",
    description:
      "Your data helps us personalize your experience and keep the platform secure.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use your data to deliver relevant image collections, recommend
        categories, and improve download performance.
        <br />
        <br />
        It also helps us provide technical support, issue invoices, track
        abusive usage patterns, and notify you about platform changes or
        features.
      </>
    ),
  },
  {
    title: "How We Protect Your Data",
    description:
      "We implement robust safeguards to keep your information secure.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All user data is protected by secure access layers, encrypted endpoints,
        and strict internal access control.
        <br />
        <br />
        We do not share your personal information with third parties unless
        required by law or for critical service integrations (like payment
        providers).
      </>
    ),
  },
  {
    title: "Data Retention & Deletion",
    description:
      "You have control over your data — and can delete your account anytime.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We retain your information as long as your subscription is active or as
        needed to comply with legal obligations.
        <br />
        <br />
        You can request complete deletion of your account and associated data by
        contacting us at{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Contact Us with Your Questions or Concerns",
  description:
    "We value your privacy and are here to help with anything related to your data.",
  content: (
    <div>
      <p className="mb-4">
        At FoodSnap.in, your trust is important to us. If you have any questions
        about our Privacy Policy or how your data is handled, please don’t
        hesitate to contact us. We're committed to being transparent and
        respectful of your rights.
      </p>
      <p className="mb-2">
        General queries:{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@foodsnap.in
        </a>
      </p>
      <p className="mb-2">
        For support:{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>
      </p>
      <p>
        Data/report requests:{" "}
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
      title="Privacy Policy"
      heading={
        <div>
          Your Data. <br className="hidden sm:block" />
          Your Rights. Our Responsibility.
        </div>
      }
      description="Learn how we collect, use, and safeguard your personal information with full transparency and control."
      ctaDescription="We are committed to protecting your personal data. This policy explains what information we collect and how we use it. By using our services, you agree to this policy."
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
