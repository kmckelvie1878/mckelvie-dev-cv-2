import { Progress, Box } from "@chakra-ui/react";
import { getColorScheme } from "@/helpers/getColor";

interface ProgressBarProps {
  value: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box className="font-dinCon" display={"flex"} justifyContent={"space-between"}>
        <Box opacity={0.5}>{label}</Box>
        <Box opacity={0.5}>{value}</Box>
      </Box>
      <Box>
        <Progress value={value} colorScheme={getColorScheme(value)} size="md" mb={2} />
      </Box>
    </Box>
  );
};

export default ProgressBar;
