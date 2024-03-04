import { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Robert Crossan Journalism ${currentYear}`,
  description:
    "Robert Crossan is an established travel and lifestyle journalist and broadcaster. He is one of Britain’s most well travelled writers having written features for national magazines and newspapers on over 75 countries.",
  keywords:
    "journalism, travel journalism, lifestyle journalist, journalist, broadcaster, celebrity interviews, music journalism, voice over artist, united states, america, london, united kingdom, europe",
  openGraph: {
    images: "https://robcrossan.vercel.app/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
