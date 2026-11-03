import type { Metadata } from "next";
import { Lexend, Nunito_Sans } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-lexend" });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "5X Landscaping | Lawn Care, Leaf Clean-Up & Snow Removal in Toronto | (437) 258-4601",
  description:
    "Toronto and GTA lawn care company: grass cutting, leaf removal, lawn repair, driveway clean-ups, snow removal and salting, and curb appeal work for homes going up for sale. 5.0 stars from 19 Google reviews. Open 9 a.m. to 9 p.m. every day. Call or text (437) 258-4601.",
  openGraph: {
    title: "5X Landscaping | Toronto Lawn Care & Snow Removal",
    description: "Punctual, fast, well-priced lawn and snow care across Toronto and the GTA. 5.0 stars from 19 Google reviews. Call or text (437) 258-4601.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${lexend.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
