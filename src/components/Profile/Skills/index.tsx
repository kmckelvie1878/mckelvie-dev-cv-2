import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import RadarChart from "@/components/Charts/RadarChart";
import BarChart from "@/components/Charts/BarChart";
import { RadarOptions, BarOptions } from "./data/chartOptions";
import AttributeModal from "./AttributeModal";
import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  border-radius: var(--chakra-radii-lg);
  box-shadow: var(--chakra-shadows-xl);
`;

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
      "HTML5",
      "CSS3 / SASS / SCSS",
      "React",
      "TypeScript",
      "Next",
      "JavaScript (ES6)",
      "Jest / React Testing Library",
      "GraphQL / Apollo",
      "AWS / DynamoDB",
      "React Native",
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
        data: [10, 10, 9, 8, 7, 7, 5, 5, 4, 3],
      },
    ],
  };

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} gap={6} mb={6}>
        <StyledImage
          src="/img/McKelvie-Guitar.jpg"
          alt="Guitar"
          width={694}
          height={1233}
        />
        <Box
          className="w-full flex flex-col backdrop-blur-lg"
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
          p={[6, 12]}
          boxShadow="lg"
        >
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
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            className="h-full"
          >
            <Box>
              <RadarChart options={RadarOptions} data={RadarData} />
            </Box>
            <Box>
              <BarChart options={BarOptions} data={BarData} height={210} />
            </Box>
            <AttributeModal />
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Skills;
