"use client";

import { Box, Icon } from "@chakra-ui/react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
  IoLogoVercel,
} from "react-icons/io5";

const Logos = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      flexWrap="wrap"
      mb={12}
      mt={12}
      opacity={0.5}
    >
      <Icon fontSize={50} as={IoLogoHtml5} />
      <Icon fontSize={50} as={IoLogoCss3} />
      <Icon fontSize={50} as={IoLogoJavascript} />
      <Icon fontSize={50} as={IoLogoReact} />
      <Icon fontSize={50} as={IoLogoGithub} />
      <Icon fontSize={50} as={IoLogoVercel} />
    </Box>
  );
};

export default Logos;
