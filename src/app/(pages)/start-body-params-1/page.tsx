import { StartBodyParams1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartBodyParams1Page = () => {
  return (
    <CommonPage
      pageTitle={`Body Params`}
      src={StartBodyParams1Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartBodyParams1Page;
