import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import FutPlayerCardComponent from "../PlayerCard/PlayerCard";
import BasicModal from "@/components/UI/Modal/BasicModal/BasicModal";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import ProgressBar from "@/components/Charts/ProgressChart";
import {
  attributeData,
  calculateScore,
  statsLeft,
  statsRight,
} from "../data/attributeData";

const AttributeModal = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>View Attributes</Button>
      <BasicModal
        title="Attribute Details"
        isOpen={isOpen}
        onClose={onClose}
        size={"6xl"}
      >
        <Box className="flex flex-col md:flex-row items-center">
          <Box>
            <FutPlayerCardComponent
              rating={89}
              position="DEV"
              name="MCKELVIE"
              statsLeft={statsLeft}
              statsRight={statsRight}
            />
          </Box>
          <Box paddingX={6} className="w-full">
            <SimpleGrid columns={[2, 3, 6]} gap={6}>
              {attributeData.map((category) => (
                <Box key={category.label}>
                  <DoughnutChart
                    label={category.label}
                    score={calculateScore(category.progressBars)}
                  />
                  {category.progressBars.map((progressBar) => (
                    <ProgressBar
                      key={progressBar.label}
                      value={progressBar.value}
                      label={progressBar.label}
                    />
                  ))}
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Alert status="info" borderRadius="lg" mt={6} variant="left-accent">
          <AlertIcon />
          <Box>
            <AlertTitle>Disclaimer:</AlertTitle>
            <AlertDescription fontSize="sm">
              I have no affiliation with EA Sports, the FIFA / EA FC franchise,
              or Everton Football Club. This is a personal project which
              demonstrates my creative and technical skills, and is not intended
              for commercial use.
            </AlertDescription>
          </Box>
        </Alert>
      </BasicModal>
    </>
  );
};

export default AttributeModal;
