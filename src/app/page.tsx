import dynamic from "next/dynamic";
import MyHeadLoader from "@/components/3D/HeadLoader";

import DisplayName from "@/components/UI/DisplayName/DisplayName";
import AboutMe from "@/components/Profile/AboutMe/AboutMe";
import Skills from "@/components/Profile/Skills/Skills";
import EmploymentHistory from "@/components/Profile/EmploymentHistory/EmploymentHistory";
import FurtherInfo from "@/components/Profile/FurtherInfo/FurtherInfo";
import Logos from "@/components/Technologies/Logos/Logos";

import fetchEmployment from "@/api/employment";
import fetchEducation from "@/api/education";

const LazyMyHead = dynamic(() => import("../components/3D/MyHead"), {
  ssr: false,
  loading: () => <MyHeadLoader />,
});

// const LazyParticles = dynamic(() => import("../components/3D/Particles/Particles"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default async function Home() {

  const employmentHistoryData = await fetchEmployment();
  const educationHistoryData = await fetchEducation();
  
  return (
    <>
      <LazyMyHead />
      {/* <LazyParticles /> */}
      <DisplayName
        firstName="Kieran"
        lastName="McKelvie"
        jobTitle="Front End Developer"
      />
      <AboutMe />
      <Skills />
      <EmploymentHistory employmentHistoryData={employmentHistoryData} />
      <FurtherInfo educationHistoryData={educationHistoryData} />
      <Logos />
    </>
  );
}
