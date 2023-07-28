"use client";

import { SimpleGrid } from "@chakra-ui/react";
import DisplayName from "@/components/UI/DisplayName";
import AboutMe from "@/components/Profile/AboutMe";
import Skills from "@/components/Profile/Skills";
import EmploymentHistory from "@/components/Profile/EmploymentHistory";
import Logos from "@/components/Technologies/Logos";
import Education from "@/components/Profile/Education";
import SiteInfo from "@/components/Profile/SiteInfo";
import dynamic from "next/dynamic";
import MyHeadLoader from "@/components/3D/HeadLoader";

const LazyMyHead = dynamic(() => import("../components/3D/MyHead"), {
  ssr: false,
  loading: () => <MyHeadLoader />,
});

export default function Home() {
  return (
    <>
      <LazyMyHead />
      <DisplayName
        firstName="Kieran"
        lastName="McKelvie"
        jobTitle="Front End Developer"
      />
      <AboutMe />
      <Skills />
      <EmploymentHistory />
      <SimpleGrid columns={[1, 1, 2]} spacing={6} mb={12}>
        <Education />
        <SiteInfo />
      </SimpleGrid>
      <Logos />
    </>
  );
}
