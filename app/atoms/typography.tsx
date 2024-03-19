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

export const PLargeDropCap = (props: TextProps) => (
  <PLarge
    _firstLetter={{
      float: "left",
      fontSize: ["85px", null, "96px"],
      lineHeight: 0.5,
      marginTop: ["1.4rem", null, "1.55rem"],
      marginRight: "0.8rem",
      color: "orange.500",
    }}
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
  <Heading as="h1" size={["2xl", null, "3xl"]} {...props} />
);

export const H2 = (props: HeadingProps) => (
  <Heading as="h2" size={["xl", null, "2xl"]} mb={6} {...props} />
);

export const H3 = (props: HeadingProps) => (
  <Heading as="h3" size={["lg", null, "xl"]} mb={6} {...props} />
);

export const H4 = (props: HeadingProps) => (
  <Heading as="h4" size="md" mb={4} {...props} />
);
