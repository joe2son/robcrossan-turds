"use client";
import { AspectRatio, Box, BoxProps, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PLarge } from "../atoms/typography";

interface CardProps extends BoxProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

export const Card: FC<CardProps> = ({
  href,
  imageSrc,
  imageAlt,
  index,
  children,
  ...props
}) => (
  <Link href={href} passHref>
    <Box mb={3} {...props}>
      <PLarge mb={2}>{String(index).padStart(2, "0")}.</PLarge>
      <Flex align="end" w="100%" mb={2}>
        <PLarge mb={0} lineHeight={1} w="auto" whiteSpace="nowrap">
          {children}
        </PLarge>
        <Box h="2px" bg="black" flexGrow={1} />
      </Flex>

      <AspectRatio w={["200px", null, "240px"]} ratio={5 / 6}>
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
    </Box>
  </Link>
);
