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
        <Box
          as="main"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <BackgroundText text="McKelvie" />
          <Container maxW={"container.xl"}>
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
        </Box>
        <Footer />
      </ChakraProvider>
    </StyledComponentsRegistry>
  );
}
