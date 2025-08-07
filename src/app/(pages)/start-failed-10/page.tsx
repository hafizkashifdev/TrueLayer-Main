import { StartFailed10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartFailed10Page = () => {
  return (
    <CommonPage
      pageTitle={`Failed `}
      src={StartFailed10Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartFailed10Page;
