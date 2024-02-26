import { extendTheme } from "@chakra-ui/react";
import { Fjalla_One, Merriweather } from "next/font/google";

const fjallaOne = Fjalla_One({ subsets: ["latin"], weight: "400" });

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const fonts = {
  // body: quattrocento.style.fontFamily,

  body: merriweather.style.fontFamily,
  heading: fjallaOne.style.fontFamily,
  mono: "Menlo, monospace",
};

export const theme = extendTheme({
  fonts,
});
