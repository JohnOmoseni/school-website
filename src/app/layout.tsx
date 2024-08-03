import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import "./index.css";
import "./utilities.css";
import Provider from "./(home)/provider";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Future Bridge",
  description:
    "Future Bridge elevates your school, streamlines operations, and creates an environment where education thrives.",
  icons: {
    icon: "/svgs/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-lato", DMSans.variable)}>
        <div className="wrapper">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
