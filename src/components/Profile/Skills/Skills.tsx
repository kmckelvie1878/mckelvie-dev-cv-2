import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import RadarChart from "@/components/Charts/RadarChart";
import BarChart from "@/components/Charts/BarChart";

const Skills = () => {
  
  const RadarData = {
    labels: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Next",
      "CSS",
      "GraphQL",
      "WordPress",
    ],
    datasets: [
      {
        label: "Skill Level",
        backgroundColor: useColorModeValue("rgba(139, 92, 246, 0.4)", "rgba(45, 212, 191, 0.4)"),
        // backgroundColor: ({chart: {ctx}}) => {
        //   const bg = ctx.createLinearGradient(0, 0, 300, 0); bg.addColorStop(0, 'rgba(139, 92, 246, 0.5)'); bg.addColorStop(1, 'rgba(45, 212, 191, 0.5)')
        //   return bg;
        // },
        borderColor: useColorModeValue("rgba(139, 92, 246, 1)", "rgba(45, 212, 191, 1)"),
        // pointBackgroundColor: "#88ccca",
        // pointBorderColor: "#fff",
        // pointHoverBackgroundColor: "#fff",
        // pointHoverBorderColor: "#88ccca",
        color: "#888",
        // color: useColorModeValue("#000", "#fff"),
        data: [9, 8, 7, 10, 6, 10, 5, 10],
      },
    ],
  };
  const RadarOptions = {
    scales: {
      r: {
        grid: {
          circular: true,
          color: "#e1e1e1",
        },
        angleLines: {
          color: "#e1e1e1",
        },
        pointLabels: {
          color: "#888",
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
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
    "React Native",
    "MERN Stack",
    "AWS / DynamoDB"
  ],
  datasets: [
    {
      label: "Skill Level",
      backgroundColor: useColorModeValue("rgba(139, 92, 246, 0.4)", "rgba(45, 212, 191, 0.4)"),
      borderColor: useColorModeValue("rgba(139, 92, 246, 1)", "rgba(45, 212, 191, 1)"),
      color: "#888",
      categoryPercentage: 0.5,
      barPercentage: 1.0,
      data: [10, 10, 9, 8, 7, 7, 5, 4, 3, 3, 2],
    },
  ],
};

const BarOptions = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 3,
      borderRadius: 10,
    },
  },
  responsive: true,
  layout: {
    padding: 6,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        font: {
          size: 14,
        },
        color: "#999",
      },
    },
  },
};



  return (
    <SimpleGrid columns={[1, 1, 2]} gap={6} mb={6}>
      <Image
        src="/img/McKelvie-Guitar.jpg"
        alt="Guitar"
        borderRadius={"lg"}
        boxShadow="xl"
      />
      <Box
        className="w-full flex flex-col backdrop-blur-lg"
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
        p={12}
        boxShadow="lg"
      >
        <Heading
          as="h2"
          variant="page-title"
          fontSize={[ 30, 50]}
          color={useColorModeValue("text-neutral-900", "text-neutral-50")}
          fontWeight="bold"
          letterSpacing={-3}
          mb={3}
        >
          Core Skills
        </Heading>
        <Box>
          <RadarChart options={RadarOptions} data={RadarData} />
        </Box>
        <Box>
          <BarChart options={BarOptions} data={BarData} />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Skills;
