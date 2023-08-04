"use client";

import {
  ColorModeScript,
  ChakraProvider,
  Container,
  Box,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import theme from "../lib/theme";
import Navbar from "@/components/Navigation/NavBar";
import BackgroundText from "@/components/UI/BackgroundText/BackgroundText";
import Footer from "@/components/UI/Footer/Footer";
import StyledComponentsRegistry from "../app/registry";

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
          as="main"
          display="grid"
          gridTemplateRows={"1fr 69px"}
          w="100%"
          h="100%"
          minHeight="100vh"
        >
          <Container maxW={"container.xl"} paddingTop={"60px"}>
            <AnimatePresence mode="wait" initial={true}>
              <motion.div
                key={"content"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Container>
          <Footer />
        </Box>
      </ChakraProvider>
    </StyledComponentsRegistry>
  );
}
