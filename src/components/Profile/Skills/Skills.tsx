"use client";

import { Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import RadarChart from "@/components/Charts/RadarChart";
import BarChart from "@/components/Charts/BarChart";
import { RadarOptions, BarOptions } from "./data/chartOptions";
import AttributeModal from "./AttributeModal/AttributeModal";
import Image from "next/image";
import StyledBox from "@/components/UI/StyledBox/StyledBox";

const Skills = () => {
  const RadarData = {
    labels: [
      "React",
      "TypeScript",
      "CSS",
      "AWS",
      "Next",
      "JavaScript",
      "GraphQL",
      "HTML",
    ],
    datasets: [
      {
        label: "Skill Level",
        backgroundColor: useColorModeValue(
          "rgba(139, 92, 246, 0.4)",
          "rgba(45, 212, 191, 0.4)"
        ),
        borderColor: useColorModeValue(
          "rgba(139, 92, 246, 1)",
          "rgba(45, 212, 191, 1)"
        ),
        color: "#888",
        data: [9, 8, 10, 4, 7, 7, 5, 10],
      },
    ],
  };

  const BarData = {
    labels: [
      "HTML",
      "CSS",
      "React",
      "TypeScript",
      "JavaScript",
      "Next",
      "React Native",
      "Prisma",
      "GraphQL / Apollo",
      "AWS / DynamoDB",
    ],
    datasets: [
      {
        label: "Skill Level",
        backgroundColor: useColorModeValue(
          "rgba(139, 92, 246, 0.4)",
          "rgba(45, 212, 191, 0.4)"
        ),
        borderColor: useColorModeValue(
          "rgba(139, 92, 246, 1)",
          "rgba(45, 212, 191, 1)"
        ),
        color: "#888",
        categoryPercentage: 0.5,
        barPercentage: 1.0,
        data: [10, 10, 9, 8, 7, 7, 6, 4, 3, 2],
      },
    ],
  };

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={6}>
        <Image
          src="/img/McKelvie-Guitar.jpg"
          alt="Guitar"
          width={694}
          height={1233}
          className="rounded-lg shadow-lg"
        />
        <StyledBox>
          <Heading
            as="h2"
            variant="page-title"
            fontSize={[30, 50]}
            color={useColorModeValue("text-neutral-900", "text-neutral-50")}
            fontWeight="bold"
            letterSpacing={-3}
            mb={3}
          >
            Core Skills
          </Heading>
          <div className="h-full flex flex-col justify-between">
            <div>
              <RadarChart options={RadarOptions} data={RadarData} />
            </div>
            <div>
              <BarChart options={BarOptions} data={BarData} height={210} />
            </div>
            <AttributeModal />
          </div>
        </StyledBox>
      </SimpleGrid>
    </>
  );
};

export default Skills;
