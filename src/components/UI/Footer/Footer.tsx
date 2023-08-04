"use client";

import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="text-center" opacity={0.8} fontSize="sm" mb={12}>
      &copy; {new Date().getFullYear()} Kieran McKelvie. All Rights Reserved.
    </Box>
  );
};

export default Footer;
