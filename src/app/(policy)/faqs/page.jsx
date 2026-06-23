
import React from "react";
import { Headset, Rows, Zap, ShieldCheck, MessageCircle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "FAQ - FoodSnap.in",
  description:
    "Find answers to common questions about using FoodSnap.in — from subscriptions, image approvals, usage rights, to support.",
  keywords: [
    "FoodSnap",
    "FAQ",
    "Food images",
    "Swiggy",
    "Zomato",
    "Subscription",
    "Commercial use",
    "Support",
  ],
  authors: [{ name: "FoodSnap Team", url: "https://foodsnap.in" }],
  openGraph: {
    title: "FAQ - FoodSnap.in",
    description:
      "Find answers to common questions about using FoodSnap.in — from subscriptions, image approvals, usage rights, to support.",
    url: "https://foodsnap.in/faq",
    siteName: "FoodSnap.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - FoodSnap.in",
    description:
      "Find answers to common questions about using FoodSnap.in — from subscriptions, image approvals, usage rights, to support.",
  },
};

const cardData = [
  {
    title: "What is FoodSnap.in?",
    description: "FoodSnap.in is a curated image library for food businesses.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in is an online subscription platform where you can download
        high-quality food images that are pre-approved by Swiggy and Zomato.
        Perfect for restaurant menus, delivery platforms, and promotional use.
      </>
    ),
  },
  {
    title: "How do I get started with FoodSnap?",
    description:
      "Just subscribe and start downloading instantly — no approval needed.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Visit <strong>www.foodsnap.in</strong>, subscribe to our monthly plan
        for ₹999, and start exploring and downloading unlimited food images
        instantly. No waiting, no approvals — all images are ready to use.
      </>
    ),
  },
  {
    title: "Are images approved by Swiggy and Zomato?",
    description:
      "Yes — all images meet marketplace standards for food listings.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Absolutely. All images on FoodSnap.in are curated and pre-approved for
        use on Swiggy and Zomato. You can use them for menu listings, banners,
        and promotions without worrying about platform rejection.
      </>
    ),
  },
  {
    title: "Can I request a specific dish image?",
    description: "Yes, you can submit a request and we'll add it to the queue.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Missing a dish? No problem. Just send a request to{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>
        . We aim to upload requested dishes within 48–72 hours.
      </>
    ),
  },
  {
    title: "What is the pricing for FoodSnap?",
    description: "Flat ₹999/month for unlimited downloads.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We offer a simple subscription plan: ₹999/month for unlimited food image
        downloads. No hidden fees, no download caps. Cancel anytime.
      </>
    ),
  },
  {
    title: "Can I cancel anytime?",
    description: "Yes, you can cancel your subscription whenever you like.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You’re free to cancel your subscription at any time from your account
        dashboard. Your access will continue until the end of your billing
        cycle.
      </>
    ),
  },
  {
    title: "What file formats do you provide?",
    description: "All images are high-res JPEGs suitable for web & app use.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All images are provided in high-resolution JPEG format, optimized for
        both web and mobile platforms. Perfect for listings, menus, and
        marketing.
      </>
    ),
  },
  {
    title: "Can I use these images for ads or banners?",
    description: "Yes, commercial use is allowed for all subscribers.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Yes! As a subscriber, you can use the images in ads, marketing
        creatives, banners, menus, social media posts, and more — as long as
        you're an active member.
      </>
    ),
  },
  {
    title: "Do you offer refunds?",
    description: "We currently do not offer refunds after image access.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Since this is a digital product with instant access, we do not offer
        refunds once your subscription is active. You can cancel to stop future
        billing.{" "}
        <a
          href="/refund-policy"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          View refund policy
        </a>
        .
      </>
    ),
  },
  {
    title: "What if I need support or have issues?",
    description: "Our team is available via email for any assistance.",
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If you face any issues with downloads, billing, or usage, feel free to
        contact us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>
        . We usually reply within 24 hours.
      </>
    ),
  },
];

const contactData = {
  title: "Still Have Questions?",
  description:
    "We’re happy to help you make the most of FoodSnap. Reach out anytime.",
  content: (
    <div>
      <p className="mb-4">
        Whether you need a custom dish image, account help, or advice on using
        FoodSnap images effectively — we’re here for you.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@foodsnap.in
        </a>
        <br />
        Requests:{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          report@foodsnap.in
        </a>
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Frequently Asked Questions"
      heading={
        <div>
          FAQs About <br className="hidden sm:block" />
          FoodSnap.in
        </div>
      }
      description="Find answers to common questions about using our food image library — from subscriptions to usage rights."
      ctaDescription="Can’t find what you're looking for? Reach out and we’ll help you right away."
      ctaLink="/report-issue"
      ctaButton={
        <span className="flex items-center gap-2">
          <Headset className="w-4 h-4" />
          Ask a Question
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
