import { StartResponseBodyHeaders4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponseBodyHeaders4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response body & Headers `}
      src={StartResponseBodyHeaders4Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponseBodyHeaders4Page;
