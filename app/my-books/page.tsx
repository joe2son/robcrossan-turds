"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, FlexProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../atoms/Button";
import { A, H1, H2, H4, P, PLarge, PSmall } from "../atoms/typography";
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
  const router = useRouter();
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
        textAlign="center"
        bg="blackAlpha.50"
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
            src="/fe-book.jpg"
            alt="Football Extreme"
            width={609}
            height={931}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <H4>Football Extreme</H4>

        <Divider my={5} />

        <P>
          42 stories of the most bizarre and strange footballing moments ever to
          occur in the UK. ’Four Four Two’ magazine wrote that ’football fact
          books are ten a penny but credit must go to Rob for providing a book
          that entertains with lesser known stories of Middlesbrough fans
          supporting North Korea and Cardiff losing the league title by 0.024 of
          a goal’. You can buy it by clicking the link{" "}
          <A
            href="https://www.amazon.co.uk/Football-Extreme-Rob-Crossan/dp/1843583186"
            isExternal
          >
            here on Amazon
          </A>
          . Because you’re worth it.
        </P>

        <a
          href="https://www.amazon.co.uk/Football-Extreme-Rob-Crossan/dp/1843583186"
          target="_blank"
        >
          <Button rightIcon={<ArrowForwardIcon />}>Buy it</Button>
        </a>
      </EditorialContainer>

      <EditorialContainer py={[8, null, 10]} textAlign="center">
        <Box
          w="220px"
          shadow="0px 6px 8px 3px rgba(0,0,0,0.3)"
          rounded="sm"
          overflow="hidden"
          mb={7}
          mx="auto"
        >
          <Image
            src="/mtm-book.jpg"
            alt="Make The Most of Your Time on Earth"
            width={609}
            height={791}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <H4>Make The Most of Your Time on Earth</H4>

        <Divider my={5} />

        <P>
          I contributed over twenty entries to the first two editions of this
          fabulous coffee table book published by Rough Guides. You can buy it
          by clicking the link{" "}
          <A
            href="https://www.amazon.co.uk/Make-Most-Your-Time-Earth/dp/184353925X"
            isExternal
          >
            here on Amazon
          </A>
          .
        </P>

        <a
          href="https://www.amazon.co.uk/Make-Most-Your-Time-Earth/dp/184353925X"
          target="_blank"
        >
          <Button rightIcon={<ArrowForwardIcon />}>Buy it</Button>
        </a>
      </EditorialContainer>

      <EditorialContainer
        py={[8, null, 10]}
        textAlign="center"
        bg="blackAlpha.50"
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
            src="/mtm-gb-book.jpg"
            alt="Make The Most of Your Time in Britain"
            width={609}
            height={791}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <H4>Make The Most of Your Time in Britain</H4>

        <Divider my={5} />

        <P>
          I wrote over twenty entries to this 2013 book about the greatest,
          strangest and least known things to do across the UK. Buy it{" "}
          <A
            href="https://www.amazon.co.uk/Make-Most-Britain-Rough-Guide/dp/184836685X"
            isExternal
          >
            here on Amazon
          </A>
          .
        </P>

        <a
          href="https://www.amazon.co.uk/Make-Most-Britain-Rough-Guide/dp/184836685X"
          target="_blank"
        >
          <Button rightIcon={<ArrowForwardIcon />}>Buy it</Button>
        </a>
      </EditorialContainer>

      <EditorialContainer py={[8, null, 10]} textAlign="center">
        <Flex alignItems="end" mb={10} width="100%">
          <H2 lineHeight={1} mb={0}>
            Audio books
          </H2>
          <Box h={1} flex="1 0" bg="black" />
        </Flex>
        <PLarge>
          I am a voice over artist represented by{" "}
          <A href="https://idaudio.co.uk/" target="_blank">
            ID Audio
          </A>
          . Here are two of my latest audio book narrations:
        </PLarge>
        <Box
          w="220px"
          shadow="0px 6px 8px 3px rgba(0,0,0,0.3)"
          rounded="sm"
          overflow="hidden"
          mt={10}
          mb={7}
          mx="auto"
        >
          <Image
            src="/gc-book.jpg"
            alt="Ghost Children"
            width={609}
            height={791}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <H4 mb={2}>Ghost Children</H4>
        <PSmall>— by Sue Townsend —</PSmall>

        <Divider my={5} />

        <P>
          You can buy it by clicking the link{" "}
          <A
            href="https://www.amazon.co.uk/Ghost-Children-Unabridged/dp/B00DIRM8W0"
            isExternal
          >
            here on Amazon
          </A>
          .
        </P>

        <a
          href="https://www.amazon.co.uk/Ghost-Children-Unabridged/dp/B00DIRM8W0"
          target="_blank"
        >
          <Button rightIcon={<ArrowForwardIcon />}>Buy it</Button>
        </a>
      </EditorialContainer>

      <EditorialContainer py={[8, null, 10]} textAlign="center">
        <Box
          w="220px"
          shadow="0px 6px 8px 3px rgba(0,0,0,0.3)"
          rounded="sm"
          overflow="hidden"
          mb={7}
          mx="auto"
        >
          <Image
            src="/ob-book.jpg"
            alt="Old Bag"
            width={609}
            height={791}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <H4 mb={2}>Old Bag</H4>
        <PSmall>— by Melvin Burgess —</PSmall>

        <Divider my={5} />

        <P>
          You can buy it by clicking the link{" "}
          <A
            href="https://www.amazon.co.uk/Old-Complete-Unabridged-Melvin-Burgess/dp/1407412302"
            isExternal
          >
            here on Amazon
          </A>
          .
        </P>

        <a
          href="https://www.amazon.co.uk/Old-Complete-Unabridged-Melvin-Burgess/dp/1407412302"
          target="_blank"
        >
          <Button rightIcon={<ArrowForwardIcon />}>Buy it</Button>
        </a>
      </EditorialContainer>

      <PageFooter />
    </>
  );
}
