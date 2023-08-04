"use client";

import { SimpleGrid } from "@chakra-ui/react";
import Education from "@/components/Profile/Education/Education";
import SiteInfo from "@/components/Profile/SiteInfo/SiteInfo";

const FurtherInfo = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={6} mb={12}>
      <Education />
      <SiteInfo />
    </SimpleGrid>
  );
};

export default FurtherInfo;
