import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retreats by Traveon",
  description: "Retreats that Renew, Teams that Thrive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}