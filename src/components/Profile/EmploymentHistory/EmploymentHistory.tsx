import {
  Box,
  Heading,
  useColorModeValue,
  Image,
  Text,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import Works from "../../../api/works.json";

const EmploymentHistory = () => {
  // fetch work history from JSON file "Works" and store in state
  const [work, setWork] = useState(Works);

  return (
    <Box
      className="w-full flex flex-col backdrop-blur-lg"
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
      p={12}
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
        mb={6}
      >
        Work Experience
      </Heading>
      <Box className="w-full">
        {work.Works.map((work, id) => (
          <Box key={`work-${id}`}>
            <Box
              className="flex flex-col md:flex-row justify-between w-full"
              mb={2}
            >
              <Box className="flex flex-col">
                <Heading size="md">
                  {work.company}{" "}
                  <Badge colorScheme={work.id === 0 ? "twTeal" : "twViolet"}>
                    {work.date}
                  </Badge>
                </Heading>
                <Text>{work.role}</Text>
                <Text>{work.location}</Text>
              </Box>
            </Box>
            {work.skills &&
              work.skills.map((skill) => (
                <Badge key={`skill-${skill.id}`} mr={1}>
                  {skill.name}
                </Badge>
              ))}
            <Divider mt={3} mb={3} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EmploymentHistory;
