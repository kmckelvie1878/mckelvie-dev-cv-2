"use client";

import StyledBox from "@/components/UI/StyledBox/StyledBox";
import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue,
  Icon,
  Badge,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { IoLocationOutline, IoBriefcaseOutline } from "react-icons/io5";

interface EmploymentHistoryProps {
  employmentHistoryData: any;
}

interface EmploymentLogoItemProps {
  logoSrc: string;
  company: string;
}

interface EmploymentTitleItemProps {
  company: string;
  startDate: string;
  endDate?: string;
  index: number;
}

interface EmploymentRoleItemProps {
  role: string;
  iconColor: string;
}

interface EmploymentLocationItemProps {
  location: string;
  description?: string;
  iconColor: string;
}

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  return `${month} ${year}`;
};

const EmploymentLogoItem = ({ logoSrc, company }: EmploymentLogoItemProps) => {
  return (
    <Box minW={180} className="mb-2 md:mb-0">
      <Image src={logoSrc} alt={`${company} Logo`} width={150} height={71} />
    </Box>
  );
};

const EmploymentTitleItem = ({
  company,
  startDate,
  endDate,
  index,
}: EmploymentTitleItemProps) => {
  return (
    <Heading size="md">
      {company}{" "}
      <Badge colorScheme={index === 0 ? "twTeal" : "twViolet"}>
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
      </Badge>
    </Heading>
  );
};

const EmploymentRoleItem = ({ role, iconColor }: EmploymentRoleItemProps) => {
  return (
    <div className="flex items-center">
      <Icon as={IoBriefcaseOutline} mr={1} color={iconColor} />
      <span>{role}</span>
    </div>
  );
};

const EmploymentLocationItem = ({
  location,
  description,
  iconColor,
}: EmploymentLocationItemProps) => {
  return (
    <div className="flex items-center">
      <Icon as={IoLocationOutline} mr={1} color={iconColor} />
      <span>
        {location} {description && `(${description})`}
      </span>
    </div>
  );
};

const EmploymentHistory = ({
  employmentHistoryData,
}: EmploymentHistoryProps) => {
  const { colorMode } = useColorMode();

  const sortedEmploymentHistoryData = employmentHistoryData.sort(
    (
      a: { startDate: string | number | Date },
      b: { startDate: string | number | Date }
    ) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
  );

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
        Work Experience
      </Heading>
      <div className="w-full">
        {sortedEmploymentHistoryData.map((employment: any, index: number) => (
          <div key={`employment-${index}`}>
            <div className="flex flex-col md:flex-row w-full mb-2">
              <EmploymentLogoItem
                logoSrc={
                  colorMode === "dark"
                    ? employment.logoLight
                    : employment.logoDark
                }
                company={employment.company}
              />
              <div>
                <EmploymentTitleItem
                  company={employment.company}
                  startDate={employment.startDate}
                  endDate={employment.endDate}
                  index={index}
                />
                <EmploymentRoleItem
                  role={employment.role}
                  iconColor={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                />
                <EmploymentLocationItem
                  location={employment.location}
                  description={employment.description}
                  iconColor={colorMode === "light" ? "#8b5cf6" : "#2dd4bf"}
                />
                {employment.skills &&
                  employment.skills.map((skill: any, skillIDX: number) => (
                    <Badge key={`skill-${skillIDX}`} mr={1}>
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </div>
            {index !== employmentHistoryData.length - 1 && (
              <Divider mt={3} mb={3} />
            )}
          </div>
        ))}
      </div>
    </StyledBox>
  );
};

export default EmploymentHistory;
