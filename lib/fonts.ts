import { Poppins, Nunito, Lato ,Playfair_Display } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // default safe weight (required by type defs)
  variable: "--font-lato",
});


export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});
