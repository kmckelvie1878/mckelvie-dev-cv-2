"use client";

import {
  Box,
  ColorModeScript,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "../lib/theme";
import Navbar from "@/components/Navigation/NavBar";
import BackgroundText from "@/components/UI/BackgroundText/BackgroundText";
import Footer from "@/components/UI/Footer/Footer";
import StyledComponentsRegistry from "../app/registry";
import PageWrapper from "./PageWrapper";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ChakraProvider theme={theme}>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Navbar />
        <BackgroundText text="McKelvie" />
        <Box
          display="grid"
          gridTemplateRows={"1fr 69px"}
          w="100%"
          h="100%"
          minHeight="100vh"
        >
          <Container maxW={"container.xl"} paddingTop={"60px"}>
            <AnimatePresence mode="wait">
              <PageWrapper>{children}</PageWrapper>
            </AnimatePresence>
          </Container>
          <Footer />
        </Box>
      </ChakraProvider>
    </StyledComponentsRegistry>
  );
}
