import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Carousel from "@/components/UI/Carousel";

const SiteInfo = () => {
  const slides: string[] = [
    "I developed my website using a modern and powerful tech stack to ensure a seamless user experience. The website is built on React, a popular JavaScript library for building interactive user interfaces. The use of TypeScript enhances code reliability and maintainability, allowing for a smooth development process with static type checking. To leverage the benefits of server-side rendering and routing, I employed Next.js, which provides improved performance and SEO optimization.",
    "I utilized Tailwind CSS, a utility-first CSS framework that facilitated rapid and consistent styling throughout the project. For some components that required a more modular approach, I incorporated Styled Components. The Chakra-UI library contributed to a more accessible and visually pleasing UI, simplifying the implementation of responsive and accessible components.",
    "Adding animations to the website was made possible with the use of Framer Motion. This animation library facilitated the creation of smooth and engaging interactions, enhancing the overall user experience. Additionally, for displaying data in a visually appealing manner, I integrated React-ChartJS2, which provided an array of customizable chart options and data visualization capabilities.",
    "One of the standout features of my website is the 3D render of my head, achieved through the utilization of Three.js. This powerful JavaScript library allowed me to add an immersive and captivating touch to the user experience.",
    "To ensure optimal performance and seamless deployment, the website is hosted on Vercel, a leading platform for serverless deployment. Continuous integration and continuous deployment (CI/CD) have been set up via GitHub, enabling automated updates and hassle-free deployment, ensuring that my website is always up to date with the latest changes and improvements.",
  ];
  return (
    <Box
      className="w-full flex flex-col backdrop-blur-lg"
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.50")}
      p={12}
      boxShadow="lg"
      mb={6}
      minHeight={560}
    >
      <Heading
        as="h2"
        variant="page-title"
        fontSize={[30, 50]}
        color={useColorModeValue("text-neutral-900", "text-neutral-50")}
        fontWeight="bold"
        letterSpacing={-3}
        mb={12}
      >
        About This Site
      </Heading>
      <Carousel slides={slides} />
    </Box>
  );
};

export default SiteInfo;
