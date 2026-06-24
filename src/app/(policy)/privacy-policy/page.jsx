import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | MagicScale Pathshala",
  description:
    "Learn how MagicScale Pathshala collects, uses, and protects your personal information when you attend our webinars, training programs, mentorship sessions, and educational services.",
  keywords: [
    "MagicScale Pathshala Privacy Policy",
    "Restaurant Business Training",
    "Data Protection",
    "Personal Information",
    "Webinar Registration",
    "Mentorship Program Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | MagicScale Pathshala",
    description:
      "Learn how MagicScale Pathshala collects, uses, and protects your personal information.",
    url: "https://magicscale.in/privacy-policy",
    siteName: "MagicScale Pathshala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MagicScale Pathshala",
    description:
      "Learn how MagicScale Pathshala collects, uses, and protects your personal information.",
  },
};

const cardData = [
  {
    title: "Information We Collect",
    description:
      "We collect information required to deliver our training and support services.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        When you register for our webinars, workshops, mentorship programs, or
        educational services, we may collect your name, email address, phone
        number, business details, and payment-related information. <br /> <br />
        We may also collect website analytics, device information, and usage
        data to improve our learning experience and platform performance.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us deliver programs and improve student outcomes.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use your information to manage webinar registrations, provide course
        access, deliver mentorship services, send training resources, process
        payments, and respond to support requests. <br /> <br />
        We may also send important updates, event reminders, educational
        content, and information about future programs that may benefit your
        business.
      </>
    ),
  },
  {
    title: "Data Security & Protection",
    description:
      "We take reasonable measures to protect your personal information.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We implement industry-standard security practices and access controls to
        protect your personal information from unauthorized access, misuse, or
        disclosure. <br /> <br />
        We do not sell your personal information to third parties. Information
        may only be shared with trusted service providers such as payment
        processors or technology partners when necessary to deliver our
        services.
      </>
    ),
  },
  {
    title: "Your Rights & Data Requests",
    description:
      "You may request access, correction, or deletion of your information.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You may contact us at any time to request access to your information,
        update inaccurate details, unsubscribe from marketing communications, or
        request deletion of your personal data where legally permitted. <br />{" "}
        <br />
        To submit a privacy-related request, email us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          [support@magicscale.in](mailto:support@magicscale.in){" "}
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Your Privacy?",
  description:
    "We're committed to transparency and protecting your personal information.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions about this Privacy Policy, your personal data, or
        how we handle information collected through our webinars, training
        programs, and mentorship services, please contact us.{" "}
      </p>
      <p className="mb-2">
        Email:{" "}
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
        Restaurant Growth Training & Mentorship
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
          Your Privacy. <br className="hidden sm:block" />
          Our Commitment.{" "}
        </div>
      }
      description="Learn how MagicScale Pathshala collects, uses, stores, and protects your personal information."
      ctaDescription="We respect your privacy and are committed to protecting your information. This policy explains what data we collect, why we collect it, and how we keep it secure."
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
