import React from "react";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Shipping & Digital Delivery Policy | FoodSnap",
  description:
    "Learn about FoodSnap.in's shipping and digital delivery policies. Access our curated food image library instantly after subscription. No physical shipping involved.",
  keywords: [
    "FoodSnap",
    "Digital Delivery",
    "Food Images",
    "Subscription Policy",
    "Shipping Policy",
    "Instant Access",
  ],
};

const cardData = [
  {
    title: "Shipping & Digital Delivery Policy",
    description:
      "Access to our food image library is provided digitally within 24 hours of subscription.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At <strong>FoodSnap.in</strong>, all of our offerings are 100% digital.
        We do not ship or deliver any physical products.
        <br />
        <br />
        <strong>Instant Digital Delivery:</strong> Upon successful subscription
        and payment, you’ll receive access to our premium food image library
        within <strong>24 hours</strong> — usually much sooner.
        <br />
        <br />
        This includes:
        <ul className="list-disc pl-5 mt-2">
          <li>Full access to our curated, platform-ready food image library</li>
          <li>Unlimited downloads during your active subscription period</li>
          <li>
            Content optimized for platforms like <strong>Zomato</strong> and{" "}
            <strong>Swiggy</strong>
          </li>
        </ul>
        <br />
        <strong>Delivery Confirmation:</strong> You will receive an email
        confirming your subscription, followed by activation details. If you
        don’t receive this within 24 hours, please check your spam folder or
        contact us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>
        .
        <br />
        <br />
        <strong>No Physical Shipping:</strong> As a digital-only service, there
        are no shipping charges, logistics, or physical goods involved.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy on Subscriptions",
    description:
      "All purchases are final. We do not offer returns, refunds, or exchanges.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Due to the digital nature of our service, FoodSnap.in strictly does not
        provide refunds once a subscription is activated. Subscribers gain
        instant access to our full image collection — making refunds impractical
        and inapplicable.
        <br />
        <br />
        We encourage users to review available sample images and service
        information before subscribing. All purchases are final and
        non-refundable.
      </>
    ),
  },
  {
    title: "Subscription Cancellation & Access Expiry",
    description:
      "Cancel anytime. Access ends automatically when your subscription ends.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You can cancel your FoodSnap.in subscription at any time from your
        dashboard. Your access to the food image library will remain active
        until the end of your billing cycle.
        <br />
        <br />
        After cancellation or expiry, you will no longer have access to
        downloads, but you are free to use images already downloaded during your
        subscription period. You can re-subscribe at any time to regain access.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help Understanding Our Policy?",
  description:
    "Have questions about refunds, subscriptions, or content access?",
  content: (
    <div>
      <p className="mb-4">
        For any questions or clarifications regarding our refund and
        cancellation policies, you can reach out to us at{" "}
        <a
          href="mailto:support@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@foodsnap.in
        </a>{" "}
        or{" "}
        <a
          href="mailto:contact@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          contact@foodsnap.in
        </a>
        .
      </p>
      <p>
        You can also report image-related issues or removal requests at{" "}
        <a
          href="mailto:report@foodsnap.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          report@foodsnap.in
        </a>
        . We're based in New Delhi, India and ready to help!
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Shipping & Digital Delivery Policy"
      heading={
        <div>
          Shipping & Digital Delivery <br className="hidden sm:block" /> Policy
        </div>
      }
      description="Understand FoodSnap.in's shipping and digital delivery policies for your subscription."
      ctaDescription="FoodSnap is a digital-only platform. Once subscribed, you get full access to our pre-approved image collection. No physical shipping is involved."
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
