"use client";

import DisplayName from "@/components/UI/DisplayName/DisplayName";
import AboutMe from "@/components/Profile/AboutMe/AboutMe";
import Skills from "@/components/Profile/Skills/Skills";
import EmploymentHistory from "@/components/Profile/EmploymentHistory/EmploymentHistory";

export default function Home() {
  return (
    <>
      <DisplayName
        firstName="Kieran"
        lastName="McKelvie"
        jobTitle="Front End Developer"
      />
      <AboutMe />
      <EmploymentHistory />
      <Skills />
    </>
  );
}
