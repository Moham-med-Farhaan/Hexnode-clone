import React from "react";
import PageService from "./page-service";
import map from "lodash/map";
import Navbar from "../components/nav";
import Landing from "../sections/landing/landing";
import Achievements from "../sections/achievements/list";
function Home() {
  const ELEMENTS = [
    {
      component: <Landing />,
    },
    {
      component: <Achievements />,
    },
    {
      component: <div>helo</div>,
    },
    {
      component: <div>helo</div>,
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
