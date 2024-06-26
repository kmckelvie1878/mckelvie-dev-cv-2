import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <FutPlayerCardComponent
              rating={89}
              position="DEV"
              name="MCKELVIE"
              statsLeft={statsLeft}
              statsRight={statsRight}
            />
          </div>
          <div className="w-full px-6">
            <SimpleGrid columns={[2, 3, 6]} gap={6}>
              {attributeData.map((category) => (
                <div key={category.label}>
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
                </div>
              ))}
            </SimpleGrid>
          </div>
        </div>
        <Alert status="info" borderRadius="lg" mt={6} variant="left-accent">
          <AlertIcon />
          <div>
            <AlertTitle>Disclaimer:</AlertTitle>
            <AlertDescription fontSize="sm">
              I have no affiliation with EA Sports, the FIFA / EA FC franchise,
              or Everton Football Club. This is a personal project which
              demonstrates my creative and technical skills, and is not intended
              for commercial use.
            </AlertDescription>
          </div>
        </Alert>
      </BasicModal>
    </>
  );
};

export default AttributeModal;
