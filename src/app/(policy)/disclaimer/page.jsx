import React from "react";
import Template from "@/components/global/template";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | MagicScale Pathshala",
  description:
    "Understand the scope, limitations, and responsibilities associated with the training, webinars, mentorship, and educational content provided by MagicScale Pathshala.",
  keywords: [
    "MagicScale Pathshala Disclaimer",
    "Restaurant Business Training",
    "Swiggy Growth Training",
    "Zomato Growth Training",
    "Food Business Webinar",
    "Business Mentorship Disclaimer",
  ],
  authors: [{ name: "MagicScale Pathshala", url: "https://magicscale.in" }],
  openGraph: {
    title: "Disclaimer | MagicScale Pathshala",
    description:
      "Important information regarding the educational content, mentorship programs, webinars, and business guidance provided by MagicScale Pathshala.",
    url: "https://magicscale.in/disclaimer",
    siteName: "MagicScale Pathshala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | MagicScale Pathshala",
    description:
      "Important information regarding the educational content, mentorship programs, webinars, and business guidance provided by MagicScale Pathshala.",
  },
};

const cardData = [
  {
    title: "Educational Purposes Only",
    description:
      "Our webinars, workshops, and training materials are educational in nature.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        All content provided through MagicScale Pathshala, including webinars,
        workshops, mentorship sessions, case studies, templates, and resources,
        is intended solely for educational and informational purposes. <br />{" "}
        <br />
        While we strive to provide accurate and practical guidance, we do not
        guarantee that all information will remain current, complete, or
        applicable to every business situation.
      </>
    ),
  },
  {
    title: "No Guarantee of Results",
    description:
      "Business outcomes vary based on execution, market conditions, and individual circumstances.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala does not guarantee any specific level of revenue,
        profits, sales growth, restaurant rankings, customer acquisition, or
        business success. <br /> <br />
        Results shared in case studies, testimonials, or training sessions are
        examples only and should not be interpreted as promises or guarantees of
        future performance.
      </>
    ),
  },
  {
    title: "Independent Educational Platform",
    description:
      "We are not affiliated with Swiggy, Zomato, or any delivery platform.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala operates independently and is not affiliated with,
        endorsed by, sponsored by, or officially connected with Swiggy, Zomato,
        or any other food delivery platform. <br /> <br />
        All trademarks, logos, and brand names belong to their respective owners
        and are referenced solely for educational purposes.
      </>
    ),
  },
  {
    title: "Your Business Decisions",
    description:
      "You remain fully responsible for your business actions and decisions.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Any decisions you make regarding restaurant operations, marketing,
        pricing, staffing, investments, partnerships, or business expansion are
        your sole responsibility. <br /> <br />
        MagicScale Pathshala shall not be liable for any losses, damages, or
        business outcomes resulting from the implementation of strategies,
        recommendations, or information shared through our programs.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About This Disclaimer?",
  description:
    "We're happy to clarify any concerns regarding our training programs, webinars, or educational content.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions regarding this disclaimer or the information
        provided through MagicScale Pathshala, please contact us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          [support@magicscale.in](mailto:support@magicscale.in){" "}
        </a>
        .{" "}
      </p>
      <p>
        MagicScale Pathshala
        <br />
        New Delhi, India
        <br />
        Training, Mentorship & Restaurant Growth Education
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />& Important
          Information{" "}
        </div>
      }
      description="Please review the limitations, responsibilities, and terms associated with using the educational content and services provided by MagicScale Pathshala."
      ctaDescription="Our mission is to help entrepreneurs launch and scale successful food businesses. However, business success depends on many factors beyond our control, and no specific results are guaranteed."
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
