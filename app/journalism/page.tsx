"use client";
import { Box, Divider, Flex, FlexProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ListicalLink } from "../atoms/ListicalLink";
import { H1, H3, PLarge, PLargeDropCap } from "../atoms/typography";
import { Hero } from "../components/Hero";
import { Menu } from "../components/Menu";
import { PageFooter } from "../components/PageFooter";
import { fonts } from "../lib/theme";
import articlesJson from "./articles.json";

const EditorialContainer = ({ children, ...props }: FlexProps) => (
  <Flex {...props}>
    <Box margin="auto" maxWidth={["100%", null, "800px"]} px={[4, null, 10]}>
      {children}
    </Box>
  </Flex>
);

export default function Journalism() {
  return (
    <>
      <Menu />
      <Hero color="white" position="relative">
        <Image
          src="/map.jpg"
          alt="Map"
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
            <H1 lineHeight={1}>Journalism</H1>
            <Box h={1} flex="1 0" bg="white" />
          </Flex>
        </Flex>
      </Hero>

      <EditorialContainer py={[8, null, 10]} bg="orange.100">
        <Box
          position="relative"
          p={[6, null, 10]}
          border="1px solid"
          bg="white"
        >
          <PLargeDropCap>
            I am one of the UK’s most well travelled writers having visited over
            140 different countries in the last ten years on assignment for
            newspapers and magazines.
          </PLargeDropCap>

          <Box
            width={["240px", "320px"]}
            transform="rotate(3deg)"
            my={5}
            mx="auto"
            position={["initial", null, "absolute"]}
            right="-250px"
            bottom="-230px"
          >
            <Image
              src="/polaroid.png"
              alt="Polaroid of Rob"
              width={705}
              height={854}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>

          <PLarge mb={0}>
            I’ve drunk pints in the most remote pub on earth in Tristan da
            Cunha, sailed to the middle of the Pacific ocean to visit Nauru, the
            world’s most obese nation, eaten dog in Vietnam, been dangled down
            volcano’s in Iceland, been on night time foot patrol with British
            soldiers in Kabul and swum with whale sharks in Djibouti.
          </PLarge>
        </Box>
      </EditorialContainer>
      <EditorialContainer py={[8, null, 10]} bg="orange.50">
        <H3>Read some of my previous travel stories:</H3>

        {articlesJson.map((article, i) => (
          <Box key={i}>
            <ListicalLink href={article.link}>
              {article.title}
              {/* {article.subtitle && (
                <TravelLink.Subheader>{article.subtitle}</TravelLink.Subheader>
              )} */}
            </ListicalLink>

            <Divider my={0} />
          </Box>
        ))}
      </EditorialContainer>

      <PageFooter />
    </>
  );
}
