import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { fonts } from "../lib/theme";

export const Heading = (props: HeadingProps) => (
  <ChakraHeading fontFamily={fonts.heading} {...props} />
);
