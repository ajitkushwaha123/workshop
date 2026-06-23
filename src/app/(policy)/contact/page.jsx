
import React from "react";
import { Mail, Phone, MapPin, Headset } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Contact Us | FoodSnap.in",
  description:
    "Need help with your subscription or downloading images? Contact the FoodSnap.in team for support and assistance.",
  keywords: [
    "FoodSnap contact",
    "food images support",
    "customer support",
    "report issue",
    "download images help",
  ],
  openGraph: {
    title: "Contact Us | FoodSnap.in",
    description:
      "Need help with your subscription or downloading images? Contact the FoodSnap.in team for support and assistance.",
    url: "https://foodsnap.in/contact",
    siteName: "FoodSnap.in",
    images: [
      {
        url: "https://foodsnap.in/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | FoodSnap.in",
    description:
      "Need help with your subscription or downloading images? Contact the FoodSnap.in team for support and assistance.",
    images: ["https://foodsnap.in/og-image.webp"],
  },
};

const cardData = [
  {
    title: "Customer Support",
    description:
      "Need help accessing images or have an issue with your account?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you're facing trouble downloading images, need help with your
        subscription, or have a platform-related query, our support team is here
        for you.
        <br />
        <br />
        Reach out via email at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>{" "}
        — we typically respond within 24 hours.
      </>
    ),
  },
  {
    title: "Phone Support",
    description: "Prefer to talk to someone directly?",
    icon: <Phone className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We currently do not offer phone support. Please reach out via email for
        all inquiries.
      </>
    ),
  },
  {
    title: "Location",
    description: "We operate from India’s capital city.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>FoodSnap.in – Headquarters</strong>
        <br />
        New Delhi, India
        <br />
        <br />
        Please contact us via email before requesting any form of
        correspondence.
      </>
    ),
  },
];

const contactData = {
  title: "We’re Here to Help",
  description:
    "Questions about your subscription, billing, or downloading images? Get in touch.",
  content: (
    <div>
      <p className="mb-4">
        Whether you're a restaurant owner, marketer, or just exploring
        high-quality food images, we value your questions and feedback. Let us
        know how we can support you.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>{" "}
        <br />
        General Queries:{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          contact@foodsnap.in
        </a>{" "}
        <br />
        Report or Request Images:{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>{" "}
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get in Touch <br className="hidden sm:block" />
          with FoodSnap.in Support
        </div>
      }
      description="Need help with your subscription or downloading images? Contact the FoodSnap.in team for support and assistance."
      ctaDescription="We’re just an email away. Reach out with your questions, and our support team will get back to you promptly."
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
