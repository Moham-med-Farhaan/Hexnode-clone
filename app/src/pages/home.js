import React from "react";
import PageService from "./page-service";
import map from "lodash/map";
import Navbar from "../components/nav";
import Landing from "../sections/landing/landing";
import Achievements from "../sections/achievements/list";
import WhyUs from "../sections/why/list";
import Elaborate from "../sections/elaborate/list";
import MultiSection from "../sections/multi/list";
import CustomersSay from "../sections/customers-say/list";
import FinalPitch from "../sections/final-pitch/list";
function Home() {
  const ELEMENTS = [
    {
      component: <Landing />,
    },
    {
      component: <Achievements />,
    },
    {
      component: <WhyUs />,
    },
    {
      component: <Elaborate />,
    },
    {
      component: <MultiSection />,
    },
    {
      component: <CustomersSay />,
    },
    {
      component: <FinalPitch />,
    },
  ];
  const RESULTANT_CHILDREN = map(ELEMENTS, (EL) => {
    return <PageService>{EL.component}</PageService>;
  });
  return (
    <>
      <Navbar />
      {RESULTANT_CHILDREN}
    </>
  );
}

export default Home;
