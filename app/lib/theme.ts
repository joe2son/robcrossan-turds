import { extendTheme } from "@chakra-ui/react";
import { Fjalla_One, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });
const fjallaOne = Fjalla_One({ subsets: ["latin"], weight: "400" });

export const fonts = {
  body: inter.style.fontFamily,
  heading: fjallaOne.style.fontFamily,
  mono: "Menlo, monospace",
};

export const theme = extendTheme({
  fonts,
});
