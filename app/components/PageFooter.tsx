import { Flex } from "@chakra-ui/react";
import { A, PSmall } from "../atoms/typography";

export const PageFooter = () => (
  <Flex
    as="footer"
    p={5}
    textAlign="center"
    direction={["column", null, "row"]}
    justify={["center", null, "space-between"]}
    align="center"
  >
    <PSmall mb={[1, null, 0]}>
      Copyright © {new Date().getFullYear()} Robert Crossan.
    </PSmall>

    <PSmall mb={0}>
      <A href="mailto:robcrossan@gmail.com">robcrossan@gmail.com</A>
    </PSmall>
  </Flex>
);
