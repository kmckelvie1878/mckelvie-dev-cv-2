"use client";

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
import { useEffect, useState } from "react";
import Image from "next/image";
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";

import { employmentData } from "@/api/works";
import { Prisma } from "@prisma/client";

interface EmploymentHistoryProps {
  employmentHistoryData: any;
}

interface Props {
  employment: Prisma.EmploymentSelect[];
}

const EmploymentHistory = ({
  employmentHistoryData,
}: EmploymentHistoryProps) => {
  const [employmentLength] = useState(employmentHistoryData.length);
  const { colorMode } = useColorMode();
  // console.log(employmentHistoryData, "in component");

  const sortedEmploymentHistoryData = employmentHistoryData.sort(
    (
      a: { startDate: string | number | Date },
      b: { startDate: string | number | Date }
    ) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
  );

  // format date
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    return `${month} ${year}`;
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
        Work Experience
      </Heading>
      <Box className="w-full">
        {sortedEmploymentHistoryData.map((employment: any, index: number) => (
          <Box key={`employment-${index}`}>
            <Box className="flex flex-col md:flex-row w-full" mb={2}>
              <Box minW={180} className="mb-2 md:mb-0">
                <Image
                  src={
                    colorMode === "dark"
                      ? employment.logoLight
                      : employment.logoDark
                  }
                  alt={`${employment.company} Logo`}
                  width={150}
                  height={71}
                />
              </Box>

              <Box className="">
                <Heading size="md">
                  {employment.company}{" "}
                  <Badge colorScheme={index === 0 ? "twTeal" : "twViolet"}>
                    {formatDate(employment.startDate)} -{" "}
                    {employment.endDate
                      ? formatDate(employment.endDate)
                      : "Present"}
                  </Badge>
                </Heading>
                <Text>
                  <Icon
                    as={IoBriefcaseOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {employment.role}
                </Text>
                <Text>
                  <Icon
                    as={IoLocationOutline}
                    mr={1}
                    color={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                  />
                  {employment.location}{" "}
                  {employment.description && `(${employment.description})`}
                </Text>
                {employment.skills &&
                  employment.skills.map((skill: any, skillIDX: number) => (
                    <Badge key={`skill-${skillIDX}`} mr={1}>
                      {skill.name}
                    </Badge>
                  ))}
              </Box>
            </Box>
            {index !== employmentLength - 1 && <Divider mt={3} mb={3} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmploymentHistory;
