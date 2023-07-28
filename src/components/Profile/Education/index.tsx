import {
  Box,
  Heading,
  useColorModeValue,
  Text,
  Icon,
  Badge,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { educationData } from "@/api/education";
import {
  IoBookOutline,
  IoLocationOutline,
  IoSchoolOutline,
} from "react-icons/io5";

const Education = () => {
  const [school] = useState(educationData);
  const [schoolLength] = useState(school.Schools.length);
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
        Education
      </Heading>
      <Box className="w-full">
        {school.Schools.map((school, index) => (
          <Box key={`school-${index}`}>
            <Box className="flex flex-col md:flex-row w-full" mb={2}>
              <Box className="">
                <Text fontSize={18} fontWeight={"bold"} mb={2}>
                  {school.name}{" "}
                  <Badge colorScheme={"twViolet"}>{school.date}</Badge>
                </Text>
                {school.subject && (
                  <Text>
                    <Icon
                      as={IoBookOutline}
                      mr={1}
                      color={colorMode === 'light' ? "#8b5cf6" : "#2dd4bf"}
                    />
                    {school.subject}
                  </Text>
                )}
                <Text>
                  <Icon as={IoSchoolOutline} mr={1} color={colorMode === 'light' ? "#8b5cf6" : "#2dd4bf"} />
                  {school.qualification}{" "}
                  {school.grade && `with ${school.grade}`}
                </Text>
                <Text>
                  <Icon as={IoLocationOutline} mr={1} color={colorMode === 'light' ? "#8b5cf6" : "#2dd4bf"} />
                  {school.location}
                </Text>
              </Box>
            </Box>
            {index !== schoolLength - 1 && <Divider mt={3} mb={3} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
