import {
  Heading as ChakraHeading,
  Text as ChakraText,
  HeadingProps,
  Link,
  LinkProps,
  TextProps,
} from "@chakra-ui/react";
import { fonts } from "../lib/theme";

export const Heading = (props: HeadingProps) => (
  <ChakraHeading
    fontFamily={fonts.heading}
    lineHeight={1.1}
    textTransform="uppercase"
    {...props}
  />
);

export const Text = (props: TextProps) => (
  <ChakraText fontFamily={fonts.body} {...props} />
);

export const P = (props: TextProps) => (
  <Text fontSize="md" fontFamily={fonts.body} mb={5} {...props} />
);

export const PLarge = (props: TextProps) => (
  <Text
    fontSize={["lg", null, "xl"]}
    fontFamily={fonts.body}
    mb={6}
    {...props}
  />
);

export const PSmall = (props: TextProps) => (
  <Text fontSize="sm" fontFamily={fonts.body} mb={5} {...props} />
);

export const A = (props: LinkProps) => (
  <Link
    transition="0.15s ease color"
    textDecoration="underline"
    fontWeight="semibold"
    _hover={{
      color: "blue.500",
    }}
    {...props}
  />
);

export const H1 = (props: HeadingProps) => (
  <Heading size={["2xl", null, "3xl"]} {...props} />
);

export const H2 = (props: HeadingProps) => (
  <Heading size={["xl", null, "2xl"]} mb={6} {...props} />
);

export const H3 = (props: HeadingProps) => (
  <Heading size={["lg", null, "xl"]} mb={6} {...props} />
);

export const H4 = (props: HeadingProps) => (
  <Heading size="md" mb={4} {...props} />
);
