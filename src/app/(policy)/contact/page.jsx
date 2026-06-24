import Template from "@/components/global/template";
import { Headset, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | MagicScale Pathshala",
  description:
    "Get in touch with MagicScale Pathshala. We help restaurant owners launch, grow, and scale successful food brands on Swiggy and Zomato through workshops, webinars, and mentorship.",
  keywords: [
    "MagicScale Pathshala",
    "Swiggy training",
    "Zomato training",
    "restaurant business webinar",
    "food business mentorship",
    "cloud kitchen training",
    "restaurant growth support",
  ],
  openGraph: {
    title: "Contact Us | MagicScale Pathshala",
    description:
      "Get in touch with MagicScale Pathshala. Learn how to launch and scale successful food brands on Swiggy and Zomato.",
    url: "https://magicscale.in/contact",
    siteName: "MagicScale Pathshala",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MagicScale Pathshala",
    description:
      "Learn how to launch and scale successful food brands on Swiggy and Zomato with MagicScale Pathshala.",
  },
};

const cardData = [
  {
    title: "Student Support",
    description:
      "Need help with webinar access, training materials, or mentorship?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you've enrolled in one of our webinars, need help accessing
        resources, or have questions about launching your food business, our
        team is here to help. <br /> <br />
        Reach us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          [support@magicscale.in](mailto:support@magicscale.in){" "}
        </a>{" "}
        and we'll get back to you as soon as possible.
      </>
    ),
  },
  {
    title: "Business Guidance",
    description: "Questions about launching or scaling on Swiggy & Zomato?",
    icon: <Phone className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Get guidance on menu strategy, pricing, marketing, cloud kitchens,
        restaurant operations, and growing your online food business.
      </>
    ),
  },
  {
    title: "Location",
    description: "Serving aspiring restaurant entrepreneurs across India.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        {" "}
        <strong>MagicScale Pathshala</strong> <br />
        New Delhi, India <br /> <br />
        We primarily provide online training, workshops, webinars, and business
        support programs.
      </>
    ),
  },
];

const contactData = {
  title: "Let's Build Your Food Business",
  description:
    "Questions about our webinars, mentorship programs, or restaurant growth strategies?",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        Whether you're planning to launch your first food brand, start a cloud
        kitchen, or grow your existing restaurant on Swiggy and Zomato, we're
        here to support your journey.{" "}
      </p>
      <p>
        Primary Support:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@magicscale.in
        </a>
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get Expert Help For Your <br className="hidden sm:block" />
          Food Business Journey{" "}
        </div>
      }
      description="Questions about webinars, mentorship, launching on Swiggy & Zomato, or scaling your restaurant business? We're here to help."
      ctaDescription="Reach out to our team for support, guidance, and answers to your questions. Whether you're just starting or looking to scale, we're happy to assist."
      ctaLink="mailto:support@magicscale.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Mail className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
