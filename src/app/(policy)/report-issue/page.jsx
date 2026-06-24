import Template from "@/components/global/template";
import { Bug, Headset, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Support & Issue Reporting | MagicScale Pathshala",
  description:
    "Need help with webinar access, mentorship programs, payments, or training resources? Contact the MagicScale Pathshala support team.",
  keywords: [
    "MagicScale Support",
    "Webinar Support",
    "Restaurant Training Support",
    "Mentorship Support",
    "Payment Issue",
    "Course Access Help",
  ],
  openGraph: {
    title: "Support & Issue Reporting | MagicScale Pathshala",
    description:
      "Need help with webinar access, mentorship programs, payments, or training resources? Contact our support team.",
    url: "https://magicscale.in/report-issue",
    siteName: "MagicScale Pathshala",
    locale: "en_IN",
    type: "website",
  },
};

const cardData = [
  {
    title: "Webinar Access Issues",
    description: "Unable to join a webinar or access purchased training?",
    icon: <Bug className="w-6 h-6 text-red-500" />,
    content: (
      <>
        If you're unable to access a webinar, receive joining details, view
        course materials, or access any purchased program, our team is ready to
        help. <br /> <br />
        Please email your registered email address and purchase details to{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          [support@magicscale.in](mailto:support@magicscale.in){" "}
        </a>
        .
      </>
    ),
  },
  {
    title: "Payment & Billing Support",
    description: "Facing payment confirmation or billing-related issues?",
    icon: <Mail className="w-6 h-6 text-green-500" />,
    content: (
      <>
        If your payment was successful but access was not granted, or if you
        believe a billing error occurred, please contact our support team with
        your transaction details. <br /> <br />
        We will investigate and resolve legitimate billing issues as quickly as
        possible.
      </>
    ),
  },
  {
    title: "Mentorship & Program Support",
    description: "Need assistance regarding mentorship or training programs?",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        For questions regarding mentorship calls, program schedules,
        assignments, implementation guidance, or workshop resources, contact our
        team. <br /> <br />
        MagicScale Pathshala operates online and serves restaurant entrepreneurs
        across India.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help? We're Here For You",
  description:
    "Whether it's webinar access, payment concerns, or program-related questions, our team is ready to assist.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you're facing any issue related to our webinars, workshops,
        mentorship programs, training resources, or payments, please reach out
        with complete details so we can assist you efficiently.{" "}
      </p>
      <p>
        📧 Support Email:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@magicscale.in
        </a>
        <br />
        📍 Location: New Delhi, India
        <br />
        🎓 MagicScale Pathshala – Restaurant Growth Training & Mentorship
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Support & Issue Reporting"
      heading={
        <div>
          Need Help? <br className="hidden sm:block" />
          Contact Our Support Team{" "}
        </div>
      }
      description="Facing an issue with webinar access, mentorship programs, payments, or training resources? Let us know and we'll help resolve it."
      ctaDescription="Our team is committed to providing a smooth learning experience. If you encounter any issues, we're just an email away."
      ctaLink="/contact"
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
