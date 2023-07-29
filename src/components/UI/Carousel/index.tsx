import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Text, Box, Flex, Button, Icon } from "@chakra-ui/react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface CarouselProps {
  slides: string[];
}

const slideVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Custom hook for handling the interval logic
  const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useCallback(callback, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback();
      }

      let intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }, [delay, savedCallback]);
  };

  // Move to the next slide at a specified interval
  useInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 12000); // Change the interval (in milliseconds) as desired

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleBackClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleForwardClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };


  return (
    <div className="w-full h-full relative overflow-hidden">
      <Flex
        className="w-full h-full items-start justify-center relative z-10"
        direction="column"
      >
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute w-full h-full flex items-start justify-center"
              variants={slideVariants}
              initial="hidden"
              animate={currentSlide === index ? "visible" : "hidden"}
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <Text>{slide}</Text>
            </motion.div>
          ))}
        </AnimatePresence>
        <Flex className="w-full absolute bottom-0" alignItems={"center"} justifyContent={"space-between"}>
          <Box className="flex flex-row">
            {slides.map((_, index) => (
                <Box
                key={index}
                w={6}
                h={1}
                mx={1}
                borderRadius="full"
                bg={currentSlide === index ? "#2dd4bf" : "gray.400"}
                cursor="pointer"
                onClick={() => handleIndicatorClick(index)}
                />
            ))}
          </Box>
          <Box>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleBackClick}
            mr={2}
            disabled={currentSlide === 0}
            aria-label="Previous Slide"
          >
            <Icon as={IoChevronBackOutline} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleForwardClick}
            ml={2}
            disabled={currentSlide === slides.length - 1}
            aria-label="Next Slide"
          >
            <Icon as={IoChevronForwardOutline} />
          </Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Carousel;
