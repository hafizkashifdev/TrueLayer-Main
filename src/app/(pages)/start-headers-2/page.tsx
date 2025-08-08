import { StartHeaders2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartHeaders2Page = () => {
  return (
    <CommonPage
      pageTitle={`Headers `}
      src={StartHeaders2Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartHeaders2Page;
