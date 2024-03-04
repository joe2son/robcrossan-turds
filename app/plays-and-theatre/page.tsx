"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, FlexProps, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { LaurelIcon } from "../atoms/LaurelIcon";
import { ListicalLink } from "../atoms/ListicalLink";
import { A, H1, H3, P, PLarge } from "../atoms/typography";
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
          src="/theatre.jpg"
          alt="Theatre seats"
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
            <H1 lineHeight={1}>Plays & theatre</H1>
            <Box h={1} flex="1 0" bg="white" />
          </Flex>
        </Flex>
      </Hero>

      <EditorialContainer
        py={[8, null, 10]}
        bg="blackAlpha.50"
        textAlign="center"
      >
        <Box
          w="220px"
          shadow="0px 6px 8px 3px rgba(0,0,0,0.3)"
          rounded="sm"
          overflow="hidden"
          mb={7}
          mx="auto"
        >
          <Image
            src="/gaffer.png"
            alt="Gaffer"
            width={200}
            height={283}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box position="relative">
          <LaurelIcon width="160px" height="auto" />
          <Stack
            direction="row"
            gap={1}
            position="absolute"
            top={3}
            left={0}
            w="100%"
            justifyContent="center"
          >
            <StarIcon width={4} />
            <StarIcon width={4} />
            <StarIcon width={4} />
            <StarIcon width={4} />
            <StarIcon width={4} />
          </Stack>
        </Box>

        <PLarge my={8} p={3} border="1px solid" color="gray.700">
          <i>“A tour de force”</i>{" "}
          <Box as="span" whiteSpace="nowrap">
            — The i Paper
          </Box>
        </PLarge>

        <P>
          I wrote my debut play,{" "}
          <strong>
            <i>The Gaffer</i>
          </strong>
          , in 2022, about an ageing football manager dealing with deep buried
          trauma. It debuted in April 2023 at the{" "}
          <A href="https://inkfestival.org/" target="_blank">
            INK Festival
          </A>{" "}
          starring Chris Larner (formerly of “London&apos;s Burning” fame).
        </P>

        <P>
          Funded and produced by INK Productions, It went on to play at the
          Underbelly venue as part of the Edinburgh Fringe during Aug 2023.
        </P>

        <P>
          Given five stars by the ipaper, it was described as a “tour de force”
          and a “powerful, disturbing work”. It was also listed by The Times as
          being one of the 40 Must See Shows At The Fringe 2023.
        </P>

        <Divider my={7} />

        <H3>Read some of the write ups:</H3>

        <ListicalLink
          href="https://inews.co.uk/culture/radio/radio-drama-powerful-vital-cuts-funding-crisis-2282287"
          colorScheme="blue"
          hasIcon={false}
        >
          Radio drama is powerful and vital – cuts to airtime and funding have
          put its future in crisis
        </ListicalLink>

        <Divider my={0} />

        <ListicalLink
          href="https://www.thetimes.co.uk/article/best-shows-edinburgh-festival-2023-international-fringe-comedy-theatre-music-art-dance-p6r7hp5mt"
          colorScheme="blue"
          hasIcon={false}
        >
          40 must-see shows at Edinburgh Festival 2023: the critics’ choice
        </ListicalLink>
      </EditorialContainer>

      <Box h={["300px", null, "450px"]} w="100%" overflow="hidden">
        <Image
          src="/street-poster.jpg"
          alt="The Gaffer poster in the street"
          width={1639}
          height={1093}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </Box>

      <PageFooter />
    </>
  );
}
