import { StartRedirect7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartRedirect7Page = () => {
  return (
    <CommonPage
      pageTitle={` Redirect `}
      src={StartRedirect7Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartRedirect7Page;
