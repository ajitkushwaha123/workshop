import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Shipping & Digital Delivery Policy | MagicScale Pathshala",
  description:
    "Learn how MagicScale Pathshala delivers webinar access, mentorship programs, training materials, and digital educational resources.",
  keywords: [
    "MagicScale Pathshala",
    "Digital Delivery",
    "Webinar Access",
    "Training Programs",
    "Mentorship",
    "Course Delivery",
    "Restaurant Business Training",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "100% Digital Delivery",
    description:
      "All programs, webinars, and training materials are delivered online.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala provides educational services entirely through
        digital channels. We do not sell or ship any physical products. <br />{" "}
        <br />
        Our offerings may include:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Live webinars and workshops</li>{" "}
          <li>Restaurant growth training programs</li>{" "}
          <li>Mentorship sessions</li> <li>Digital templates and resources</li>{" "}
          <li>Program recordings (where applicable)</li>{" "}
          <li>Implementation guides and learning materials</li>{" "}
        </ul>{" "}
        <br />
        No physical shipping, courier services, or logistics are involved.
      </>
    ),
  },
  {
    title: "Program Access & Delivery Timeline",
    description: "Access details are delivered electronically after payment.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        After successful payment, participants will receive onboarding details,
        webinar links, training access instructions, or other program-related
        information via email. <br /> <br />
        Delivery timelines may vary depending on the specific program, but most
        registrations receive confirmation and access information immediately or
        within 24 hours. <br /> <br />
        If you do not receive access information, please check your spam folder
        before contacting support.
      </>
    ),
  },
  {
    title: "Missed Sessions & Access Responsibility",
    description:
      "Participants are responsible for accessing programs using provided details.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Participants are responsible for providing accurate contact information
        and ensuring they can access the email address used during registration.{" "}
        <br /> <br />
        Missing a live webinar, workshop, coaching session, or mentorship call
        does not constitute a delivery failure. <br /> <br />
        Where recordings are included as part of the purchased program, access
        will be provided according to the program terms.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help Accessing Your Program?",
  description:
    "Our support team is available to assist with access and delivery-related questions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have completed a purchase but have not received your webinar
        link, onboarding instructions, mentorship details, or training
        materials, please contact our support team.{" "}
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
      <p className="mt-3">
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
      title="Shipping & Digital Delivery Policy"
      heading={
        <div>
          Digital Delivery <br className="hidden sm:block" />
          Policy{" "}
        </div>
      }
      description="Learn how webinar access, mentorship programs, training materials, and educational resources are delivered by MagicScale Pathshala."
      ctaDescription="All MagicScale Pathshala services are delivered digitally. After successful registration, access details and program information will be sent to your registered email address."
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
