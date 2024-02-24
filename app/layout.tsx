import { ChakraProvider } from "@chakra-ui/react";
import { Metadata } from "next";
import "./globals.css";
import { theme } from "./lib/theme";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Robert Crossan Journalism ${currentYear}`,
  description:
    "Robert Crossan is an established travel and lifestyle journalist and broadcaster. He is one of Britain’s most well travelled writers having written features for national magazines and newspapers on over 75 countries.",
  keywords:
    "journalism, travel journalism, lifestyle journalist, journalist, broadcaster, celebrity interviews, music journalism, voice over artist, united states, america, london, united kingdom, europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider theme={theme}>
      <html lang="en-GB">
        <body>{children}</body>
      </html>
    </ChakraProvider>
  );
}
