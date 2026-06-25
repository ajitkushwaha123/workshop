import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import AppShell from "@/components/global/AppShell";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
// import { PostHogProvider } from "@/components/PostHogProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "MagicScale Pathshala | Learn How to Launch a Profitable Food Business on Swiggy & Zomato for ₹9",
  description:
    "Join the live webinar and learn how to start, launch, and scale a profitable food business on Swiggy & Zomato. Discover menu selection, branding, pricing, operations, and growth strategies. Limited seats. Register now for just ₹9.",
  keywords: [
    "food business webinar",
    "cloud kitchen webinar",
    "swiggy business",
    "zomato business",
    "restaurant business",
    "food startup",
    "online food business",
    "cloud kitchen training",
    "MagicScale Pathshala",
    "food entrepreneur",
  ],
  openGraph: {
    title:
      "MagicScale Pathshala | Learn How to Launch a Profitable Food Business on Swiggy & Zomato for ₹9",
    description:
      "Learn the exact framework to start and scale a food business online. Live webinar. Register for ₹9.",
    type: "website",
    siteName: "MagicScale Pathshala",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch a Profitable Food Business on Swiggy & Zomato",
    description: "Live webinar by MagicScale Pathshala. Register for just ₹9.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {/* <PostHogProvider> */}
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        {/* </PostHogProvider> */}

        {/* <Analytics />
        <SpeedInsights /> */}
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
