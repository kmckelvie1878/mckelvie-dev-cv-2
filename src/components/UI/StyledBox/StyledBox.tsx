import { useColorModeValue } from "@chakra-ui/react";

interface StyledBoxProps {
  children: React.ReactNode;
  marginBottom?: boolean;
  minHeight?: number;
}

const StyledBox = ({ children, marginBottom, minHeight }: StyledBoxProps) => {
  return (
    <div
      className={`w-full flex flex-col p-6 md:p-12 ${
        marginBottom && "mb-6"
      } backdrop-blur-lg rounded-lg shadow-lg bg-op bg-white ${useColorModeValue(
        "bg-opacity-10",
        "bg-opacity-4"
      )}`}
      style={{ minHeight: minHeight }}
    >
      {children}
    </div>
  );
};

export default StyledBox;
