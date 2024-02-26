import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const HomepageHero: FC<FlexProps> = ({ children, ...props }) => (
  <Flex
    borderStyle="solid"
    borderWidth={["16px", null, "32px", "40px"]}
    borderColor="white"
    height="100vh"
    bg="black"
    {...props}
  >
    {children}
  </Flex>
);
