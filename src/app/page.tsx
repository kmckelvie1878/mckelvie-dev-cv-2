import dynamic from "next/dynamic";
import MyHeadLoader from "@/components/3D/HeadLoader";
import { Grid, Box } from "@chakra-ui/react";
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

export default async function Home() {
  const employmentHistoryData = await fetchEmployment();
  const educationHistoryData = await fetchEducation();

  return (
    <>
      <Grid
        justifyContent={"space-between"}
        alignItems={"center"}
        gridTemplateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
      >
        <Box className="min-w-[50%] lg:min-w-[60%]" order={{ base: 2, md: 1 }}>
          <DisplayName
            firstName="Kieran"
            lastName="McKelvie"
            jobTitle="Software Engineer"
          />
        </Box>
        <Box order={{ base: 1, md: 2 }}>
          <LazyMyHead />
        </Box>{" "}
      </Grid>
      <AboutMe />
      <Skills />
      <EmploymentHistory employmentHistoryData={employmentHistoryData} />
      <FurtherInfo educationHistoryData={educationHistoryData} />
      <Logos />
    </>
  );
}
