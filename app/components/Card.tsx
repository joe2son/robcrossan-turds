"use client";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PLarge } from "../atoms/typography";
import { randomIntFromInterval } from "../lib/utils";

interface CardProps extends BoxProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export const Card: FC<CardProps> = ({
  href,
  imageSrc,
  imageAlt,
  children,
  ...props
}) => (
  <Link href={href} passHref>
    <Box
      position="relative"
      overflow="hidden"
      boxSize={`${randomIntFromInterval(180, 250)}px`}
      bg="white"
      rounded="lg"
      {...props}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={500}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Flex
        justify="center"
        align="center"
        textAlign="center"
        p={4}
        boxSize="100%"
        position="relative"
        bg="blackAlpha.500"
        color="white"
      >
        <Flex align="end" bg="black" p={2} w="100%">
          <PLarge mb={0} lineHeight={1} w="auto" whiteSpace="nowrap">
            {children}
          </PLarge>
          <Box h="2px" bg="white" flexGrow={1} />
        </Flex>
      </Flex>
    </Box>
  </Link>
);
