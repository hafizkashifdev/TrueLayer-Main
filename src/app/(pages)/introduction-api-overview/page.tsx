import { IntroductionApiOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IntroductionApiOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Introduction _ API overview`}
      src={IntroductionApiOverviewImage}
      backRoute="/introduction"
    />
  );
};

export default IntroductionApiOverviewPage;
