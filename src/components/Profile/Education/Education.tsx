"use client";

import StyledBox from "@/components/UI/StyledBox/StyledBox";
import {
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

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    return `${year}`;
  };

  return (
    <StyledBox marginBottom>
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
      <div className="w-full">
        {sortedEducationHistoryData.map((education: any, index: number) => (
          <div key={`school-${index}`}>
            <div className="flex flex-col md:flex-row w-full mb-2">
              <div>
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
              </div>
            </div>
            {index !== educationHistoryData.length - 1 && (
              <Divider mt={3} mb={3} />
            )}
          </div>
        ))}
      </div>
    </StyledBox>
  );
};

export default Education;
