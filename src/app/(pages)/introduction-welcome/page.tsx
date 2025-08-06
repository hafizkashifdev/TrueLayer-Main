import { IntroductionWelcomeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IntroductionWelcomePage = () => {
  return (
    <CommonPage
      pageTitle={`Introduction _ Welcome`}
      src={IntroductionWelcomeImage}
      backRoute="/introduction"
    />
  );
};

export default IntroductionWelcomePage;
