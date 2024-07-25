import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import MyHeadLoader from "@/components/3D/HeadLoader";
import DisplayName from "@/components/UI/DisplayName/DisplayName";

const LazyMyHead = dynamic(() => import("../../components/3D/MyHead"), {
  ssr: false,
  loading: () => <MyHeadLoader />,
});

export default async function Test() {
  return (
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
  );
}
