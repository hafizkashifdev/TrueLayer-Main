import { StartInvalidState14Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartInvalidState14Page = () => {
  return (
    <CommonPage
      pageTitle={` Invalid State `}
      src={StartInvalidState14Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartInvalidState14Page;
