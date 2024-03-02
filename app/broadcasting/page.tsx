"use client";
import { Box, Divider, Flex, FlexProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { LaurelIcon } from "../atoms/LaurelIcon";
import { A, H1, PLarge } from "../atoms/typography";
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

export default function Broadcasting() {
  return (
    <>
      <Menu />
      <Hero color="white" position="relative">
        <Image
          src="/mic.jpg"
          alt="Microphone"
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
            <H1 lineHeight={1}>Broadcasting</H1>
            <Box h={1} flex="1 0" bg="white" />
          </Flex>
        </Flex>
      </Hero>

      <EditorialContainer py={[8, null, 10]} bg="cyan.50" textAlign="center">
        <LaurelIcon width={20} height="auto" mb={5} />
        <PLarge>
          During 2021 and 2022 I wrote and presented two series’ of{" "}
          <A href="https://www.bbc.co.uk/programmes/m000sk49" isExternal>
            The Happiness Map show
          </A>{" "}
          that aired on BBC 6Music on Sunday lunchtimes where I interviewed
          artists including Disclosure, Blessed Madonna and Elvis Costello.
        </PLarge>
        <Divider my={8} />
        <LaurelIcon width={20} height="auto" mb={5} />
        <PLarge>
          I am the Special Correspondent for the BBC Radio Four Feedback
          programme where I write and present packages on all manner of topics
          pertaining to the Beeb and the current media environment.
        </PLarge>
        <Divider my={8} />
        <LaurelIcon width={20} height="auto" mb={5} />
        <PLarge>
          I’m one of the longest serving contributors to the From Our Own
          Correspondent programme on BBC Radio Four and the BBC World Service
          where I have written and presented dozens of reports over the last
          decade from destinations including Algeria, Cuba, Senegal, St. Kitts,
          Uzbekistan and Estonia.
        </PLarge>
        <Divider my={8} />
        <LaurelIcon width={20} height="auto" mb={5} />
        <PLarge>
          Between 2006 and 2015 I presented the BBC ‘Ouch’ disability podcast
          alongside Liz Carr which won the Royal Television Society Award for
          Innovation in 2006 and a European Diversity Award in 2012 for
          journalism.
        </PLarge>
        <Divider my={8} />
        <LaurelIcon width={20} height="auto" mb={5} />
        <PLarge>
          You can also hear me regularly on other BBC radio shows including
          ‘From Our Own Correspondent’, ‘Cerys Matthews’ on BBC 6 Music and PM
          on BBC Radio Four.
        </PLarge>
      </EditorialContainer>

      <PageFooter />
    </>
  );
}
