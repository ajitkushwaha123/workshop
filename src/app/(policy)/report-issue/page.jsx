import React from "react";
import { Bug, Mail, MapPin, Headset } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Report an Issue - FoodSnap",
  description:
    "Found an issue in a food image or can't access your downloads? Contact FoodSnap support for fast help and reporting image problems.",
  keywords: [
    "FoodSnap support",
    "report food image",
    "food image issues",
    "image problem",
    "food library support",
    "download issue",
  ],
  openGraph: {
    title: "Report an Issue - FoodSnap",
    description:
      "Found an issue in a food image or can't access your downloads? Contact FoodSnap support for fast help and reporting image problems.",
    url: "https://foodsnap.in/report-issue",
    siteName: "FoodSnap",
    images: [
      {
        url: "https://foodsnap.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Report an Issue at FoodSnap",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const cardData = [
  {
    title: "Report an Image Issue",
    description: "Wrong tag, missing item, or need image update?",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <>
        If you've found an image that doesn't match the food item, has quality
        issues, or you'd like us to add a missing dish, please reach out.
        <br />
        <br />
        You can email a screenshot, dish name, or collection reference to{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>{" "}
        and we’ll take care of it.
        <br />
        <br />
        Most reports are resolved within 24 hours.
      </>
    ),
  },
  {
    title: "General Support",
    description: "Need help accessing images or managing your plan?",
    icon: <Mail className="w-6 h-6 text-green-500" />,
    content: (
      <>
        For help with billing, download access, or subscription concerns, feel
        free to contact our support team.
        <br />
        <br />
        Drop an email to{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>{" "}
        — we're happy to assist.
      </>
    ),
  },
  {
    title: "Business or Media Contact",
    description: "Want to collaborate, license, or partner with us?",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        For media, business inquiries, or bulk licensing of our food imagery,
        contact us at{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          contact@foodsnap.in
        </a>
        .
        <br />
        <br />
        Location: New Delhi, India.
      </>
    ),
  },
];

const contactData = {
  title: "Facing an Issue with FoodSnap?",
  description:
    "We’re here to help with image problems, download errors, or content requests. Let us know what went wrong and we’ll fix it fast.",
  content: (
    <div>
      <p className="mb-4">
        Whether it’s a mislabelled food image, Swiggy/Zomato upload issue, or
        something missing from your collection — we’re just an email away.
      </p>
      <p>
        📧 Report an image:{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>
        <br />
        📧 General Support:{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>
        <br />
        📍 Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Report an Issue"
      heading={
        <div>
          Report a Food Image Problem <br className="hidden sm:block" />
          or Get Help Instantly
        </div>
      }
      description="Found an issue in a food image or can't access your downloads? Let us know. We’re here to resolve your concerns quickly."
      ctaDescription="Our team actively monitors and improves the image library. If something’s wrong, reporting helps us fix it for everyone."
      ctaLink="/contact"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Contact Support
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
