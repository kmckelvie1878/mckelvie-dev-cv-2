"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

interface DisplayNameProps {
  firstName: string;
  lastName: string;
  jobTitle: string;
}

const DisplayName = ({ firstName, lastName, jobTitle }: DisplayNameProps) => {
  return (
    <Box className="w-full flex justify-center">
      <Box className="w-fit flex flex-col">
        <span
          className={`display-first-name text-4xl md:text-6xl font-cursive ${useColorModeValue(
            "text-neutral-900",
            "text-neutral-50 text-shadow"
          )}`}
        >
          {firstName}
        </span>
        <span
          className={`display-last-name text-6xl md:text-8xl font-bold ${useColorModeValue(
            "text-violet-500",
            "text-teal-400"
          )}`}
        >
          {lastName}
        </span>
        <span className={`text-right display-role`}>{jobTitle}</span>
      </Box>
    </Box>
  );
};

export default DisplayName;
