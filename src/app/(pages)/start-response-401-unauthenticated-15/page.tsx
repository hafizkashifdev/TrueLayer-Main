import { StartResponse401Unauthenticated15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse401Unauthenticated15Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (401 Unauthenticated)  `}
      src={StartResponse401Unauthenticated15Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse401Unauthenticated15Page;
