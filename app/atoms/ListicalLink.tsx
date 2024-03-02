"use client";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, TextProps } from "@chakra-ui/react";
import { FC } from "react";
import { A, PLarge, PSmall } from "./typography";

type ListicalLinkType = FC<
  FlexProps & {
    href: string;
    colorScheme?: string;
    hasIcon?: boolean;
  }
> & {
  Subheader: FC<TextProps>;
};

export const ListicalLink: ListicalLinkType = ({
  href,
  colorScheme = "orange",
  hasIcon = true,
  children,
  ...props
}) => (
  <A href={href} isExternal>
    <Flex py={5} {...props}>
      {hasIcon && (
        <Flex
          boxSize={7}
          bg={`${colorScheme}.100`}
          rounded="full"
          justify="center"
          align="center"
          mr={3}
          flexShrink={0}
        >
          <ExternalLinkIcon color="gray.500" />
        </Flex>
      )}
      <PLarge mb={0} fontWeight="bold">
        {children}
      </PLarge>
    </Flex>
  </A>
);

const _ListicalLinkSubheader: FC<TextProps> = ({ children, ...props }) => (
  <PSmall fontWeight="normal" mb={0} {...props}>
    {children}
  </PSmall>
);

ListicalLink.Subheader = _ListicalLinkSubheader;
