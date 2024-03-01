import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ colorScheme = "green", ...props }: ButtonProps) => (
  <ChakraButton
    colorScheme={colorScheme}
    fontWeight="semibold"
    size="lg"
    rounded="full"
    {...props}
  />
);
