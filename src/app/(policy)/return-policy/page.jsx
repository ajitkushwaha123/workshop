import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Delivery, Cancellation & Refund Policy | MagicScale Pathshala",
  description:
    "Learn about webinar access, program delivery, cancellations, and refund policies for MagicScale Pathshala training programs and mentorship services.",
  keywords: [
    "MagicScale Pathshala",
    "Refund Policy",
    "Cancellation Policy",
    "Webinar Access",
    "Mentorship Program",
    "Restaurant Training",
    "No Refund Policy",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Digital Delivery of Programs",
    description: "All products and services are delivered digitally.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale Pathshala provides educational services including webinars,
        workshops, mentorship programs, training sessions, templates,
        recordings, and digital learning resources. <br /> <br />
        All products are delivered electronically through email, online
        platforms, webinar software, or member portals. <br /> <br />
        After successful payment, participants will receive access details,
        joining instructions, or program onboarding information using the email
        address provided during registration. <br /> <br />
        We do not ship any physical products.
      </>
    ),
  },
  {
    title: "Cancellation & Attendance Policy",
    description: "Please ensure you can attend before purchasing.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Participants are responsible for attending live sessions using the
        access details provided. <br /> <br />
        Failure to attend a webinar, workshop, coaching call, or mentorship
        session does not qualify for cancellation, refund, credit, or transfer.{" "}
        <br /> <br />
        We strongly encourage participants to review event schedules before
        completing a purchase.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy",
    description: "Refunds are only considered when the mistake is on our side.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All purchases made through MagicScale Pathshala are final and
        non-refundable. <br /> <br />
        Refunds will not be provided because:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>You changed your mind after purchase.</li>{" "}
          <li>You could not attend a live webinar or session.</li>{" "}
          <li>You did not achieve expected business results.</li>{" "}
          <li>You chose not to continue implementing the training.</li>{" "}
          <li>You misunderstood the program content before purchasing.</li>{" "}
        </ul>{" "}
        <br />
        Refunds may only be considered in exceptional situations where:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>A duplicate payment was processed.</li>{" "}
          <li>A verified billing error occurred.</li>{" "}
          <li>
            We failed to deliver the purchased service due to our error.
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
  title: "Questions About Payments or Access?",
  description:
    "Contact our team if you experience a billing issue or access problem.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe a payment issue occurred, did not receive your access
        details, or experienced a service delivery problem caused by us, please
        contact our support team with your transaction information.{" "}
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
      title="Delivery, Cancellation & Refund Policy"
      heading={
        <div>
          Delivery, Cancellation <br className="hidden sm:block" />& Refund
          Policy{" "}
        </div>
      }
      description="Please review our policies regarding webinar access, digital delivery, cancellations, and refunds before making a purchase."
      ctaDescription="All MagicScale Pathshala programs are delivered digitally. Purchases are final and refunds are only considered in rare situations where the issue is caused by our systems or service delivery."
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
