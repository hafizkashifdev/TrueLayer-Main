import { StartWaitForOutcome8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartWaitForOutcome8Page = () => {
  return (
    <CommonPage
      pageTitle={`Wait for Outcome`}
      src={StartWaitForOutcome8Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartWaitForOutcome8Page;
