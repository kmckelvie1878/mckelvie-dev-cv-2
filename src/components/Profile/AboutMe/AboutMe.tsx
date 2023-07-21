import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

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
      p={12}
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
                /
              </span>{" "}
              Newton-Le-Willows, UK
            </Text>
          </Box>
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            w="96px"
            h="96px"
            display="inline-block"
            borderRadius="full"
            src="/img/profile.png"
            alt="Profile Image"
          />
        </Box>
        <Text mb={6}>
          Predominantly a <strong>Front End Developer</strong>, I&apos;m
          constantly evolving my skills as I aspire to be a full stack
          developer.
          <br />
          I&apos;m passionate about clean code, immersive UX &amp; intuitive UI.
        </Text>
        <Text mb={6}>
          I&apos;m currently working at <strong>Interactive Investor</strong> as
          an App Developer.
        </Text>
        <Text>
          I have a keen interest in music, I play many instruments and have my
          own recording studio set-up at home.
          <br />
          I&apos;m also a season ticket holder at Everton Football Club.
        </Text>
      </Box>
      {/* <Image
        src="img/McKelvie-DualLight.jpg"
        maxWidth={"30%"}
        borderRadius={"lg"}
      /> */}
    </Box>
  );
};

export default AboutMe;
