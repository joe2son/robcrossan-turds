"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, BoxProps, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { H4 } from "../atoms/typography";

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
    <Box w={["200px"]} bg="white" {...props}>
      <AspectRatio ratio={1 / 1}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={500}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AspectRatio>
      <Flex justify="space-between" p={4} w="100%">
        <H4 mb={0} whiteSpace="nowrap">
          {children}
        </H4>
        <Flex
          rounded="full"
          boxSize={5}
          bg="black"
          color="white"
          justify="center"
          align="center"
        >
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </Box>
  </Link>
);
