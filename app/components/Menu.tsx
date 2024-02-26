"use client";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { H3, Text } from "../atoms/typography";

interface MenuLinkProps extends FlexProps {
  href: string;
}

const MenuLink: FC<MenuLinkProps> = ({ href, children, ...props }) => (
  <Link href={href} passHref>
    <Flex
      color="white"
      bg="black"
      width="auto"
      align="center"
      pr={4}
      pl={1}
      mb="1px"
      ml={-1}
      transition="0.15s ease background, 0.15s ease transform"
      _active={{
        bg: "blue.700",
      }}
      _hover={{
        bg: "blue.500",
        transform: "translateX(4px)",
      }}
    >
      <Text
        fontSize={["2xl", null, "3xl"]}
        fontWeight="light"
        px={5}
        py={3}
        lineHeight={1}
      >
        {children}
      </Text>
      <ArrowForwardIcon boxSize={4} color="white" />
    </Flex>
  </Link>
);

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={onOpen}
        color="black"
        fontSize={["2xl", null, "3xl"]}
        icon={<HamburgerIcon />}
        position="fixed"
        top={[8, null, 14]}
        right={[8, null, 14]}
        rounded="full"
        bg="whiteAlpha.700"
        height={[10, null, 12]}
        width={[10, null, 12]}
        zIndex={9}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size={["full", null, "md"]}>
        <DrawerOverlay />
        <DrawerContent p={0}>
          <DrawerCloseButton
            aria-label="Close menu"
            color="white"
            fontSize="xl"
            rounded="full"
            bg="blackAlpha.700"
            size="lg"
            top={[3, null, 14]}
            right={[4, null, 14]}
            h={12}
            w={12}
          />
          <DrawerHeader p={[6, null, 9]}>
            <H3>Rob Crossan</H3>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            w="100%"
            p={0}
          >
            <MenuLink href="/journalism">Journalism</MenuLink>
            <MenuLink href="/broadcasting">Broadcasting</MenuLink>
            <MenuLink href="/my-books">My books</MenuLink>
            <MenuLink href="/plays-and-theatre">Plays & theatre</MenuLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
