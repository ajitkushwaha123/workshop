import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Refund Policy | MagicScale Pathshala",
  description:
    "Read the refund policy for MagicScale Pathshala webinars, workshops, mentorship programs, and educational services.",
  keywords: [
    "MagicScale Refund Policy",
    "No Refund Policy",
    "Webinar Refund Policy",
    "Restaurant Business Training",
    "Mentorship Refund",
  ],
  openGraph: {
    title: "Refund Policy | MagicScale Pathshala",
    description:
      "MagicScale Pathshala follows a strict no-refund policy for webinars, workshops, and mentorship programs except in cases where the error is on our side.",
    url: "https://magicscale.in/refund-policy",
    siteName: "MagicScale Pathshala",
    type: "website",
  },
};

const cardData = [
  {
    title: "Strict No Refund Policy",
    description: "All webinar, workshop, and mentorship purchases are final.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala provides educational content, training programs,
        webinars, mentorship sessions, digital resources, and business guidance.{" "}
        <br /> <br />
        Due to the nature of digital educational services and immediate access
        to proprietary training materials, all purchases are final and
        non-refundable. <br /> <br />
        By completing your purchase, you acknowledge and agree to this no-refund
        policy.
      </>
    ),
  },
  {
    title: "Results Are Not Guaranteed",
    description:
      "Business outcomes depend on execution and many external factors.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refunds will not be provided because:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You did not achieve the desired business results.</li>{" "}
          <li>You were unable to implement the strategies taught.</li>{" "}
          <li>Your restaurant did not reach expected sales targets.</li>{" "}
          <li>You changed your mind after purchasing.</li>{" "}
          <li>You were unable to attend a live webinar or session.</li>{" "}
          <li>You no longer wish to continue the program.</li>{" "}
        </ul>{" "}
        <br />
        Every business is different, and outcomes depend on numerous factors
        outside our control.
      </>
    ),
  },
  {
    title: "Refunds Only for Our Errors",
    description: "Exceptions apply only when the issue is caused by us.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refund requests may only be considered if:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You were charged multiple times for the same purchase.</li>{" "}
          <li>A verified billing or payment processing error occurred.</li>{" "}
          <li>
            We failed to provide the purchased service due to our mistake.
          </li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of MagicScale
        Pathshala after reviewing the circumstances.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Billing?",
  description:
    "Contact us if you believe a payment issue occurred due to our mistake.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe you were charged incorrectly or experienced a billing
        issue caused by our systems, please contact us with your payment details
        and transaction reference.{" "}
      </p>
      <p>
        Support Email:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
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
          Refund Policy <br className="hidden sm:block" />& Payment Terms{" "}
        </div>
      }
      description="Please review our refund policy before purchasing any webinar, workshop, mentorship, or training program."
      ctaDescription="All purchases made through MagicScale Pathshala are final. Refunds are only considered in rare cases where the issue was caused by our billing systems or service delivery error."
      ctaLink="mailto:support@magicscale.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Headset className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
