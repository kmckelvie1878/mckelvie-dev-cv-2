"use client";

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

import {
  IoBookOutline,
  IoLocationOutline,
  IoSchoolOutline,
} from "react-icons/io5";

interface EducationHistoryProps {
  educationHistoryData: any;
}

const Education = ({ educationHistoryData }: EducationHistoryProps) => {
  const { colorMode } = useColorMode();

  const sortedEducationHistoryData =
    educationHistoryData.educationHistoryData.sort(
      (
        a: { startDate: string | number | Date },
        b: { startDate: string | number | Date }
      ) => {
        return (
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
      }
    );

  // format date
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    return `${year}`;
  };

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
        {sortedEducationHistoryData.map((education: any, index: number) => (
          <Box key={`school-${index}`}>
            <Box className="flex flex-col md:flex-row w-full" mb={2}>
              <Box className="">
                <Text fontSize={18} fontWeight={"bold"} mb={2}>
                  {education.school}{" "}
                  <Badge colorScheme={"twViolet"}>
                    {formatDate(education.startDate)} -{" "}
                    {formatDate(education.endDate)}
                  </Badge>
                </Text>
                {education.field && (
                  <Text>
                    <Icon
                      as={IoBookOutline}
                      mr={1}
                      color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                    />
                    {education.field}
                  </Text>
                )}
                <Text>
                  <Icon
                    as={IoSchoolOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {education.degree}{" "}
                  {education.grade && `with ${education.grade}`}
                </Text>
                <Text>
                  <Icon
                    as={IoLocationOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {education.location}
                </Text>
              </Box>
            </Box>
            {index !== educationHistoryData.length - 1 && (
              <Divider mt={3} mb={3} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
