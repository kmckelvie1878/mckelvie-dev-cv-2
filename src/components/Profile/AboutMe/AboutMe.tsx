"use client";

import { Box, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const ProfileImage = styled(Image)`
  height: 96px;
  width: 96px;
  max-width: 96px;
  border-color: var(--chakra-colors-whiteAlpha-800);
  border-width: 2px;
  border-style: solid;
  display: inline-block;
  border-radius: var(--chakra-radii-full);
`

const AboutMe = () => {
  // function that takes DOB and returns age
  function getAge(dateString: string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

  return (
    <Box
      className="w-full flex flex-col md:flex-row backdrop-blur-lg"
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
      p={[6, 12]}
      mb={6}
      mt={6}
      boxShadow="lg"
    >
      <Box className="w-full" mb={6}>
        <Box className="flex w-full flex-col md:flex-row justify-between">
          <Box>
            <Heading
              as="h1"
              variant="page-title"
              fontSize={[30, 50]}
              color={useColorModeValue("text-neutral-900", "text-neutral-50")}
              fontWeight="bold"
              letterSpacing={-3}
              mb={3}
            >
              About Me
            </Heading>
            <Text
              className={`${useColorModeValue(
                "text-violet-500",
                "text-teal-400"
              )}`}
              mb={6}
            >
              {getAge("1989/02/03")}{" "}
              <span
                className={`${useColorModeValue(
                  "text-neutral-900",
                  "text-neutral-50"
                )}`}
              >
                ·
              </span>{" "}
              Newton-Le-Willows, UK{" "}
              <span
                className={`${useColorModeValue(
                  "text-neutral-900",
                  "text-neutral-50"
                )}`}
              >
                ·
              </span>{" "}
              <Link
                  href="http://linkedin.com/in/kieran-mckelvie"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <Icon as={IoLogoLinkedin} />
                </Link>
                {" "}
              <Link
                href="https://github.com/kmckelvie1878"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <Icon as={IoLogoGithub} />
              </Link>
            </Text>
          </Box>
          <ProfileImage
            width={96}
            height={96}
            src="/img/profile.png"
            alt="Profile Image"
          />
        </Box>
        <Text mt={[6, 6, 0]} mb={6}>
          Aspiring Full Stack Developer with a keen eye for captivating User
          Experiences and a passion for clean, efficient code. With a solid
          foundation as a Front End Developer, I am continuously evolving my
          skills. Currently, I work as an App Developer at Interactive Investor,
          where I contribute to crafting seamless user interfaces and engaging
          interactions.
        </Text>
        <Text mb={6}>
          Beyond the realm of coding, I find inspiration in music. An avid
          musician, I am well-versed in playing multiple instruments and have
          set up my own recording studio at home. Additionally, I proudly hold a
          season ticket at my beloved Everton Football Club.
        </Text>
        <Text>
          My unwavering dedication to excellence and my diverse interests make
          me a driven and well-rounded individual. I am eager to contribute my
          passion for technology, creativity, and user-centric design to
          meaningful projects that make a lasting impact. Let&apos;s collaborate
          and create something extraordinary together.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutMe;
