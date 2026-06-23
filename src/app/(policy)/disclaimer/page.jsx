
import React from "react";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";
import Template from "@/components/global/template";

export const metadata = {
  title: "Disclaimer - FoodSnap.in",
  description:
    "Understand the scope, limitations, and responsibilities of using digital content provided by FoodSnap.in. Learn about usage rights, platform compatibility, and user responsibilities.",
  keywords: [
    "FoodSnap",
    "Disclaimer",
    "Image usage",
    "Swiggy images",
    "Zomato images",
    "Food listing",
    "User responsibility",
  ],
  authors: [{ name: "FoodSnap Team", url: "https://foodsnap.in" }],
  openGraph: {
    title: "Disclaimer - FoodSnap.in",
    description:
      "Understand the scope, limitations, and responsibilities of using digital content provided by FoodSnap.in.",
    url: "https://foodsnap.in/disclaimer",
    siteName: "FoodSnap.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - FoodSnap.in",
    description:
      "Understand the scope, limitations, and responsibilities of using digital content provided by FoodSnap.in.",
  },
};

const cardData = [
  {
    title: "Content for Informational Use Only",
    description:
      "All descriptions, examples, and image previews are for general reference.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        The images and information on FoodSnap.in are intended for general
        informational and illustrative purposes only. We strive to maintain
        accuracy in captions, categories, and usage compatibility.
        <br />
        <br />
        However, we do not guarantee the completeness, correctness, or
        availability of every image at all times. Users are advised to validate
        image relevance before commercial use.
      </>
    ),
  },
  {
    title: "No Guarantee of Business Results",
    description:
      "We do not guarantee any increase in sales, approvals, or platform acceptance.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While all images on FoodSnap.in are pre-approved for Swiggy and Zomato
        listings based on prior use, FoodSnap.in does not guarantee that your
        individual restaurant listing will be approved, ranked, or favored due
        to these images.
        <br />
        <br />
        Business results depend on various external factors including platform
        policies and your specific brand or menu.
      </>
    ),
  },
  {
    title: "Third-Party Platform References",
    description:
      "We are not affiliated with Swiggy, Zomato, or any food delivery partner.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        FoodSnap.in is an independent platform offering food photography. While
        we curate images compatible with Swiggy and Zomato listings, we are not
        affiliated with, endorsed by, or partnered with Swiggy, Zomato, or any
        delivery aggregator.
        <br />
        <br />
        All trademarks belong to their respective owners.
      </>
    ),
  },
  {
    title: "User Responsibility",
    description:
      "You are responsible for how you use FoodSnap images and services.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        Users are solely responsible for ensuring that images are used in
        accordance with restaurant branding guidelines, platform policies, and
        legal requirements.
        <br />
        <br />
        FoodSnap.in is not liable for any listing rejections, copyright
        violations, or misrepresentation arising from user-side misuse or
        misinterpretation.
      </>
    ),
  },
];

const contactData = {
  title: "Have Questions About This Disclaimer?",
  description:
    "Our team is happy to clarify any concerns related to usage rights or platform responsibility.",
  content: (
    <div>
      <p className="mb-4">
        If you have any questions or concerns about this disclaimer or how it
        applies to your use of FoodSnap.in, feel free to reach out to us at{" "}
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
        </a>
        .
      </p>
      <p>
        We're based in New Delhi, India and are here to help with image-related
        questions, commercial licensing, or platform-specific compatibility
        guidance.
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
          Disclaimer <br className="hidden sm:block" />
          and User Responsibility
        </div>
      }
      description="Understand the scope, limitations, and responsibilities of using digital content provided by FoodSnap.in."
      ctaDescription="FoodSnap.in provides digital images to support your food listing goals. However, platform acceptance and results are not guaranteed. Read this disclaimer carefully before use."
      ctaLink="/report-issue"
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
