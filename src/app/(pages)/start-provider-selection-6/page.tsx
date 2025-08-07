import { StartProviderSelection6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartProviderSelection6Page = () => {
  return (
    <CommonPage
      pageTitle={` Provider Selection `}
      src={StartProviderSelection6Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartProviderSelection6Page;
