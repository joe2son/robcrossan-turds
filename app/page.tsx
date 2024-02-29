import { Box, Flex, Highlight, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { A, H1, H2, PLarge } from "./atoms/typography";
import { Card } from "./components/Card";
import { HomepageHero } from "./components/HomepageHero";
import { Menu } from "./components/Menu";
import { PageFooter } from "./components/PageFooter";

export default function Home() {
  return (
    <>
      <Menu />
      <HomepageHero color="white" position="relative">
        <Image
          src="/rc.jpg"
          alt="Rob Crossan"
          width={1500}
          height={1000}
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Flex
          w="100%"
          alignItems="end"
          p={[6, null, 10]}
          background="linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)"
          position="relative"
        >
          <H1 lineHeight={1}>Rob Crossan</H1>
          <Box h={1} flex="1 0" bg="white" />
        </Flex>
      </HomepageHero>

      <Flex bg="black" justify="center" py={[6, null, 10]}>
        <Box
          width="100%"
          px={[6, null, null, 0]}
          maxWidth="800px"
          color="white"
          position="relative"
        >
          <H2 color="orange.400">Welcome</H2>
          <PLarge>
            <Highlight
              query={[
                "freelance journalist and radio presenter based in Stockwell, South London",
                "travel, lifestyle, food, music, books and disability affairs",
              ]}
              styles={{
                bg: "cyan.100",
                whiteSpace: "normal",
              }}
            >
              Hello, and thanks for dropping by. Very nice to see you. I’m a
              freelance journalist and radio presenter based in Stockwell, South
              London with over ten years experience writing and talking about
              travel, lifestyle, food, music, books and disability affairs.
            </Highlight>
          </PLarge>

          <PLarge>
            <Highlight
              query={[
                "The Daily Telegraph, Daily Mail, Sunday Times, BA High Life, Country LIfe, Esquire, GQ, American Express Departures, Luxury London",
                "BBC radio shows",
                "BBC 6 Music",
                "BBC Radio Four",
              ]}
              styles={{
                bg: "cyan.100",
                whiteSpace: "normal",
              }}
            >
              My work appears regularly in publications including The Daily
              Telegraph, Daily Mail, Sunday Times, BA High Life, Country LIfe,
              Esquire, GQ, American Express Departures, Luxury London and more.
              I’m regularly heard on BBC radio shows including “From Our Own
              Correspondent”, “Cerys Matthews” on BBC 6 Music and PM on BBC
              Radio Four.
            </Highlight>
          </PLarge>
          <PLarge mb={0}>
            Please click on the various links to find out more about me, or
            email me on{" "}
            <A href="mailto:robcrossan@gmail.com">robcrossan@gmail.com</A>.
          </PLarge>
        </Box>
      </Flex>

      <Stack
        direction="row"
        wrap="wrap"
        justify="center"
        p={[6, null, 10]}
        gap={5}
      >
        <Card
          href="/journalism"
          imageAlt="Map"
          imageSrc="/map-thumb.jpg"
          index={1}
        >
          Journalism
        </Card>
        <Card
          href="/broadcasting"
          imageAlt="Microphone"
          imageSrc="/mic-thumb.jpg"
          index={2}
        >
          Broadcasting
        </Card>
        <Card
          href="/my-books"
          imageAlt="Books"
          imageSrc="/books-thumb.jpg"
          index={3}
        >
          My books
        </Card>
        <Card
          href="/plays-and-theatre"
          imageAlt="Plays & theatre"
          imageSrc="/theatre.jpg"
          index={4}
        >
          Plays & theatre
        </Card>
      </Stack>

      <PageFooter />
    </>
  );
}
