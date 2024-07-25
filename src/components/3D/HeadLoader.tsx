"use client";

import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

interface MyHeadContainerProps {
  children: React.ReactNode;
}

export const MyHeadSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const MyHeadContainer = forwardRef(
  ({ children }: MyHeadContainerProps, ref: React.Ref<HTMLDivElement>) => (
    <Box
      ref={ref}
      className="my-head z-0"
      m="auto"
      mt={["0px", "0px", "-100px", "-125px"]}
      mb={["20px", "30px", "-30px"]}
      ml={["auto", "auto", "auto", "-290px"]}
      w={[300, 380, 500, 960]}
      h={[300, 380, 500, 960]}
      position="relative"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <MyHeadContainer>
      <MyHeadSpinner />
    </MyHeadContainer>
  );
};

MyHeadContainer.displayName = "MyHeadContainer";

export default Loader;
