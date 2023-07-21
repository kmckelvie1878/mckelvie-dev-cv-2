"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import theme from "../lib/theme";
import Head from "next/head";
import dynamic from 'next/dynamic'
import MyHeadLoader from '@/components/3D/HeadLoader'
import Navbar from "@/components/Navigation/NavBar";
import StyledComponentsRegistry from "./registry";

const LazyMyHead = dynamic(() => import('../components/3D/MyHead'), {
  ssr: false,
  loading: () => <MyHeadLoader />
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kieran McKelvie | mckelvie.dev",
  description: "Software Engineer from Newton-Le-Willows, UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ChakraProvider theme={theme}>
            <AnimatePresence initial={true}>
              <Navbar key="1" />
              <main key="2" className="flex min-h-screen flex-col items-center justify-start">
                <div>
                  <LazyMyHead />
                </div>
                <Container maxW={'container.lg'}>
                  {children}
                </Container>
              </main>
            </AnimatePresence>
          </ChakraProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
