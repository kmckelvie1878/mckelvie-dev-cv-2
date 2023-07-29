import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
  Icon,
  Text,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";
import { employmentData } from "@/api/works";

const EmploymentHistory = () => {
  const [work] = useState(employmentData);
  const [workLength] = useState(work.Works.length);
  const { colorMode } = useColorMode();

  return (
    <Box
      className="w-full flex flex-col backdrop-blur-lg"
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
      p={[6, 12]}
      boxShadow="lg"
      mb={6}
    >
      <Heading
        as="h2"
        variant="page-title"
        fontSize={[30, 50]}
        color={useColorModeValue("text-neutral-900", "text-neutral-50")}
        fontWeight="bold"
        letterSpacing={-3}
        mb={12}
      >
        Work Experience
      </Heading>
      <Box className="w-full">
        {work.Works.map((work, id) => (
          <Box key={`work-${id}`}>
            <Box className="flex flex-col md:flex-row w-full" mb={2}>
              <Box minW={180} className="mb-2 md:mb-0">
                <Image
                  src={colorMode === "dark" ? work.logoLight : work.logoDark}
                  alt={`${work.company} Logo`}
                  width={150}
                  height={71}
                />
              </Box>

              <Box className="">
                <Heading size="md">
                  {work.company}{" "}
                  <Badge colorScheme={work.id === 0 ? "twTeal" : "twViolet"}>
                    {work.date}
                  </Badge>
                </Heading>
                <Text>
                  <Icon
                    as={IoBriefcaseOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {work.role}
                </Text>
                <Text>
                  <Icon
                    as={IoLocationOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {work.location}
                </Text>
                {work.skills &&
                  work.skills.map((skill) => (
                    <Badge key={`skill-${skill.id}`} mr={1}>
                      {skill.name}
                    </Badge>
                  ))}
              </Box>
            </Box>
            {work.id !== workLength - 1 && <Divider mt={3} mb={3} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmploymentHistory;
