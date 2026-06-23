import Template from "@/components/global/template";
import { Users, Rocket, Target, HeartHandshake } from "lucide-react";

const cardData = [
  {
    title: "Who We Are",
    description: "FoodSnap.in is a curated library of high-quality food images built for restaurants, cloud kitchens, and creators.",
    icon: <Users className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At FoodSnap, we make it effortless to find beautiful, ready-to-use food photos — all optimized and approved for platforms like <strong>Zomato</strong> and <strong>Swiggy</strong>.
        <br />
        <br />
        Whether you're launching a new dish or updating your menu, FoodSnap gives you instant access to visuals that convert. No expensive photo shoots. No design hassle. Just <strong>search</strong>, <strong>download</strong>, and <strong>upload</strong>.
      </>
    ),
  },
  {
    title: "Our Mission",
    description: "Helping food brands look great and grow faster — one image at a time.",
    icon: <Target className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Our mission is simple: make it incredibly easy for food businesses to find stunning visuals that drive appetite and attention.
        <br />
        <br />
        We believe the right photo can make or break a first impression — so we focus on quality, variety, and speed.
      </>
    ),
  },
  {
    title: "Meet Our Founder",
    description: "Built by a founder passionate about food, tech, and scalability.",
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <strong>Ajit Kushwaha</strong> is a product builder and software engineer with a mission to simplify how food businesses grow online.
        <br />
        <br />
        With deep experience in system design and an eye for clean UX, he created FoodSnap to eliminate the friction of content creation for restaurants and F&B brands.
      </>
    ),
  },
  {
    title: "Our Values",
    description: "Image-first. Time-saving. Built for growth.",
    icon: <HeartHandshake className="w-6 h-6 text-green-500" />,
    content: (
      <>
        At FoodSnap, we believe in:
        <ul className="list-disc ml-5 mt-2">
          <li>Speed over complexity — launch faster with visuals that work</li>
          <li>Visual storytelling — every dish deserves to shine</li>
          <li>Builder-driven innovation — we ship fast, listen faster</li>
        </ul>
      </>
    ),
  },
];

const contactData = {
  title: "Get in Touch",
  description: "Want to collaborate, have a suggestion, or need custom images? Let’s connect.",
  content: (
    <div>
      <p className="mb-4">We’re here to help you look better online. Whether you're a restaurant chain or an individual creator, drop us a line.</p>
      <p>
        Email:{" "}
        <a href="mailto:support@foodsnap.in" className="text-blue-600 dark:text-blue-400 hover:underline">
          support@foodsnap.in
        </a>
        <br />
        Phone:{" "}
        <a href="tel:+918178739633" className="text-blue-600 dark:text-blue-400 hover:underline">
          +91 8178739633
        </a>
        <br />
        Address: FIRST FLOOR, NEAR AIR FORCE CAMP, RAJOKARI, NEW DELHI – 110038
      </p>
    </div>
  ),
};

export const metadata = {
  title: "About FoodSnap.in – The Photo Library for Food Businesses",
  description: "Learn how FoodSnap is helping restaurants and creators find stunning, platform-ready food images — without the hassle.",
  alternates: {
    canonical: "https://foodsnap.in/about",
    languages: {
      en: "https://foodsnap.in/about",
    },
  },
  openGraph: {
    title: "About FoodSnap.in – The Photo Library for Food Businesses",
    description: "Learn how FoodSnap is helping restaurants and creators find stunning, platform-ready food images — without the hassle.",
    url: "https://foodsnap.in/about",
    type: "website",
    images: [
      {
        url: "https://foodsnap.in/logo.webp",
        width: 1200,
        height: 630,
        alt: "FoodSnap Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About FoodSnap.in – The Photo Library for Food Businesses",
    description: "Learn how FoodSnap is helping restaurants and creators find stunning, platform-ready food images — without the hassle.",
  },
};

export default function AboutPage() {
  return (
    <Template
      title="About FoodSnap.in"
      heading={<div>The Photo Library for Food Businesses</div>}
      description="Learn how FoodSnap is helping restaurants and creators find stunning, platform-ready food images — without the hassle."
      ctaDescription="We're growing fast. Stay in the loop with our latest drops, features, and collaborations."
      ctaLink="/updates"
      ctaButton={
        <span className="flex items-center gap-2">
          <Rocket className="w-4 h-4" />
          View Updates
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
}
