import { Box, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

export const Hero: FC<FlexProps> = ({ children, ...props }) => (
  <Box
    borderStyle="solid"
    borderWidth={["16px", null, "32px", "40px"]}
    borderColor="white"
    height={["300px", null, "500px"]}
    bg="black"
    {...props}
  >
    {children}
  </Box>
);
