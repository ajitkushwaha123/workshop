
import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Refund Policy - FoodSnap.in",
  description:
    "Understand our refund policy for digital food image subscriptions on FoodSnap.in. Instant access to images means refunds are limited to billing issues only.",
  keywords:
    "FoodSnap, Refund Policy, Digital Downloads, Food Images, Billing Issues",
  openGraph: {
    title: "Refund Policy - FoodSnap.in",
    description:
      "FoodSnap.in provides instant digital food images. Refunds are applicable only for billing errors.",
    url: "https://foodsnap.in/refund-policy",
    siteName: "FoodSnap.in",
    type: "website",
  },
};

const cardData = [
  {
    title: "No Refund Policy for Digital Image Downloads",
    description:
      "Due to the nature of downloadable digital food content, refunds are generally not provided.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in provides instant access to a curated library of
        Swiggy/Zomato-approved food images upon subscription.
        <br />
        <br />
        As our service is digital, subscription-based, and provides immediate
        download access, FoodSnap.in follows a strict{" "}
        <strong>no-refund policy</strong> unless required by applicable law or
        due to a verified billing error.
      </>
    ),
  },
  {
    title: "User Agreement at Time of Subscription",
    description:
      "Users agree to our refund terms before activating a subscription.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By subscribing to FoodSnap.in, users acknowledge that their plan
        includes unlimited downloads and becomes non-refundable once activated.
        <br />
        <br />
        We strongly encourage users to explore our platform preview or contact
        support before subscribing if unsure.
      </>
    ),
  },
  {
    title: "Refunds in Rare Billing Error Cases",
    description: "Refunds may be considered only in billing-related issues.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in may consider refunding only in specific billing-related
        scenarios such as:
        <ul className="list-disc ml-5 mt-2">
          <li>Duplicate payment made by mistake</li>
          <li>Technical transaction failure</li>
          <li>Accidental overcharge due to system issue</li>
        </ul>
        <br />
        To request a billing-related review, please contact our support team
        with full transaction details.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help with a Billing or Refund Concern?",
  description:
    "Our support team can review valid refund queries for FoodSnap.in.",
  content: (
    <div>
      <p className="mb-4">
        Although we operate under a no-refund policy for digital downloads, we
        understand that certain rare billing situations may arise. If you
        believe you're eligible for a refund due to a payment issue, reach out
        to us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>
        .
      </p>
      <p>
        All refund requests are reviewed carefully. For issues related to image
        drops or file access, you may also contact{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
        .
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />
          for FoodSnap Subscriptions
        </div>
      }
      description="Understand our refund policy for digital food image subscriptions on FoodSnap.in. Due to the instant delivery model, refunds are limited to billing issues only."
      ctaDescription="FoodSnap.in follows a no-refund policy for digital food image downloads. Exceptions apply only in the case of duplicate payments or technical billing errors."
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
