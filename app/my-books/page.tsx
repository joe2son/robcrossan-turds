"use client";
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { H1, H2 } from "../atoms/typography";
import { Hero } from "../components/Hero";
import { Menu } from "../components/Menu";
import { PageFooter } from "../components/PageFooter";
import { fonts } from "../lib/theme";

const EditorialContainer = ({ children, ...props }: FlexProps) => (
  <Flex {...props}>
    <Box margin="auto" maxWidth={["100%", null, "800px"]} px={[4, null, 10]}>
      {children}
    </Box>
  </Flex>
);

export default function MyBooks() {
  return (
    <>
      <Menu />
      <Hero color="white" position="relative">
        <Image
          src="/books.jpg"
          alt="Books"
          width={1200}
          height={500}
          priority
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Flex
          position="relative"
          direction="column"
          justify="space-between"
          w="100%"
          h="100%"
          bg="blackAlpha.600"
          p={[6, null, 10]}
        >
          <Link href="/">
            <Text
              fontFamily={fonts.heading}
              textTransform="uppercase"
              fontSize={["xl", null, "3xl"]}
            >
              Rob Crossan
            </Text>
          </Link>
          <Flex alignItems="end">
            <H1 lineHeight={1}>My books</H1>
            <Box h={1} flex="1 0" bg="white" />
          </Flex>
        </Flex>
      </Hero>

      <EditorialContainer
        py={[8, null, 10]}
        bg="blackAlpha.50"
        textAlign="center"
        border="1px solid"
      >
        <Flex width="100%">
          <H2>[ WIP ]</H2>
        </Flex>
      </EditorialContainer>

      <PageFooter />
    </>
  );
}
