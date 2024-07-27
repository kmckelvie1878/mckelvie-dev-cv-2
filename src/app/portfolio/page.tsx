"use client";

import {
  Grid,
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const BoldMinersContent = {
  text: [
    "I recently completed a website for my local amateur football team, Bold Miners FC. The site was built using a modern tech stack to ensure it is both performant and easy to maintain.",
    "The front end of the website is developed with Next.js, a powerful React framework that allows for server-side rendering and static site generation. This ensures that the site loads quickly and provides a smooth user experience, even on slower connections.",
    "To manage the content, I opted to use WordPress as a Headless CMS. This setup allows the team to easily update posts, match results, and other content without needing to dive into the code. The data from WordPress is exposed via GraphQL, which provides a flexible and efficient way to query the necessary information.",
    "The combination of Next.js and GraphQL with a Headless WordPress CMS provides a robust and scalable solution for the website, ensuring that Bold Miners FC can keep their fans updated with the latest news and information.",
  ],
  link: "https://www.boldminersfc.com",
};

export default function Portfolio() {
  return (
    <>
      <Grid justifyContent={"space-between"} alignItems={"center"}>
        <Box className="">
          <Heading
            as="h1"
            variant="page-title"
            fontSize={[30, 60]}
            color={useColorModeValue("text-neutral-900", "text-neutral-50")}
            fontWeight="bold"
            letterSpacing={-3}
            mb={3}
          >
            Portfolio
          </Heading>
        </Box>
      </Grid>
      <Box
        className="w-full flex flex-col md:flex-row backdrop-blur-lg"
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
        p={[6, 12]}
        mb={6}
        mt={6}
        boxShadow="lg"
      >
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box
            order={[2, 2, 2, 1]}
            pr={[0, 0, 0, "2rem"]}
            pt={["2rem", "2rem", "2rem", 0]}
          >
            <Heading
              as="h2"
              fontSize={[30, 40]}
              color={useColorModeValue("text-neutral-900", "text-neutral-50")}
              fontWeight="bold"
              letterSpacing={-3}
              mb={3}
            >
              Bold Miners FC
            </Heading>
            <Flex justifyContent={"space-between"} flexDirection={"column"}>
              <Box>
                {BoldMinersContent.text.map((content, index) => (
                  <Text key={index} mb={3}>
                    {content}
                  </Text>
                ))}
              </Box>

              {BoldMinersContent.link && (
                <Box>
                  <Link
                    href={BoldMinersContent.link}
                    target="_blank"
                    className="hover:underline flex gap-1"
                  >
                    <span>Visit</span>{" "}
                    <span className="font-bold">BoldMinersFc.com</span>{" "}
                    <LiaExternalLinkAltSolid />
                  </Link>
                </Box>
              )}
            </Flex>
          </Box>
          <Flex
            justifyContent={["center", "center", "flex-end"]}
            order={[1, 1, 1, 2]}
            aspectRatio={1}
          >
            <Image
              src="/img/portfolio/boldminersfc.jpg"
              width={1080 / 2}
              height={1080 / 2}
              layout="responsive"
              alt="BoldMinersFC.com"
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
}
