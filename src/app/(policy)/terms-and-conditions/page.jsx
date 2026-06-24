import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | MagicScale Pathshala",
  description:
    "Review the Terms & Conditions governing your use of MagicScale Pathshala's webinars, mentorship programs, training resources, and educational services.",
  keywords: [
    "MagicScale Pathshala",
    "Terms and Conditions",
    "Restaurant Business Training",
    "Webinar Terms",
    "Mentorship Program",
    "Food Business Education",
  ],
  authors: [
    { name: "MagicScale Pathshala", url: "https://pathshala.magicscale.in" },
  ],
  openGraph: {
    title: "Terms & Conditions | MagicScale Pathshala",
    description:
      "Review the Terms & Conditions governing your use of MagicScale Pathshala's educational programs and services.",
    url: "https://magicscale.in/terms-and-conditions",
    siteName: "MagicScale Pathshala",
    type: "website",
  },
};

const cardData = [
  {
    title: "Participant Responsibilities",
    description: "Participants must use our programs responsibly and lawfully.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By enrolling in any MagicScale Pathshala webinar, workshop, mentorship
        program, or training course, you agree to use our services only for
        lawful purposes. <br /> <br />
        You are responsible for providing accurate information during
        registration and maintaining the confidentiality of any account or
        access credentials provided to you.
      </>
    ),
  },
  {
    title: "Educational Content & Intellectual Property",
    description:
      "Program materials are licensed for personal learning use only.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All training materials, presentations, recordings, frameworks,
        templates, worksheets, videos, strategies, and educational resources
        provided by MagicScale Pathshala remain our intellectual property.{" "}
        <br /> <br />
        Participants may use these materials for their own business learning and
        implementation but may not reproduce, resell, redistribute, publish, or
        share them without written permission.
      </>
    ),
  },
  {
    title: "No Guarantee of Business Results",
    description: "Success depends on implementation and many external factors.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala provides educational guidance, mentorship, and
        business training only. <br /> <br />
        We do not guarantee any specific revenue, profit, sales volume,
        restaurant ranking, customer growth, or business outcome. <br /> <br />
        Results shared in testimonials, case studies, or examples are not
        promises of future performance and should not be interpreted as
        guarantees.
      </>
    ),
  },
  {
    title: "Termination & Policy Violations",
    description: "Access may be revoked for misuse or violations.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We reserve the right to suspend or terminate access to our programs,
        communities, events, resources, or services if a participant:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Shares paid content without authorization.</li>{" "}
          <li>Disrupts sessions or community discussions.</li>{" "}
          <li>Engages in abusive, fraudulent, or unlawful behavior.</li>{" "}
          <li>Violates these Terms & Conditions.</li>{" "}
        </ul>{" "}
        <br />
        Access termination does not create eligibility for a refund.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About These Terms?",
  description: "We're happy to clarify any aspect of our Terms & Conditions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        By accessing or purchasing any MagicScale Pathshala webinar, mentorship,
        workshop, training program, or educational resource, you agree to these
        Terms & Conditions.{" "}
      </p>
      <p className="mb-2">
        Support & General Inquiries:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
      </p>
      <p>
        MagicScale Pathshala
        <br />
        New Delhi, India
        <br />
        Restaurant Growth Training, Webinars & Mentorship Programs
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
          Terms & Conditions <br className="hidden sm:block" />
          For Participants{" "}
        </div>
      }
      description="Please review the terms governing your use of MagicScale Pathshala's webinars, mentorship programs, and educational services."
      ctaDescription="By accessing our programs and services, you agree to these Terms & Conditions, which help ensure a fair and productive learning environment for all participants."
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
