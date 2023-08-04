import dynamic from "next/dynamic";
import MyHeadLoader from "@/components/3D/HeadLoader";

import DisplayName from "@/components/UI/DisplayName/DisplayName";
import AboutMe from "@/components/Profile/AboutMe/AboutMe";
import Skills from "@/components/Profile/Skills/Skills";
import EmploymentHistory from "@/components/Profile/EmploymentHistory/EmploymentHistory";
import FurtherInfo from "@/components/Profile/FurtherInfo/FurtherInfo";
import Logos from "@/components/Technologies/Logos/Logos";

import fetchEmployment from "@/api/employment";

const LazyMyHead = dynamic(() => import("../components/3D/MyHead"), {
  ssr: false,
  loading: () => <MyHeadLoader />,
});

export default async function Home() {

  const employmentHistoryData = await fetchEmployment();
  
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
      <EmploymentHistory employmentHistoryData={employmentHistoryData} />
      <FurtherInfo />
      <Logos />
    </>
  );
}
