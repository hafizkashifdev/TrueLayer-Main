import { StartResponseBodyHeaders12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponseBodyHeaders12Page = () => {
  return (
    <CommonPage
      pageTitle={` Response body & Headers  `}
      src={StartResponseBodyHeaders12Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponseBodyHeaders12Page;
