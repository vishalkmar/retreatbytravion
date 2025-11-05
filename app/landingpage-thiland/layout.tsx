import type { Metadata } from "next";
import { lato } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Retreats by Traveon",
  description: "Discover amazing retreat experiences with Traveon",
  icons: [{ rel: "icon", url: "/fl.avif" }],
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
