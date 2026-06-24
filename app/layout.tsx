import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mushikashika Love — A Harare Story",
  description:
    "She came for love. She found Harare. A romantic crime comedy set in the electric streets of Zimbabwe's capital.",
  keywords: ["zimbabwe film", "harare", "romantic comedy", "african cinema", "mushikashika"],
  openGraph: {
    title: "Mushikashika Love",
    description: "Romance. Risk. Hustle. A film set in the heart of Harare.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#0A0A0F] text-[#A8B2C1] font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
