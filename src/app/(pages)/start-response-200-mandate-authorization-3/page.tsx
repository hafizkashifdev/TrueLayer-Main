import { StartResponse200MandateAuthorization3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse200MandateAuthorization3Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (200 Mandate Authorization )  `}
      src={StartResponse200MandateAuthorization3Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse200MandateAuthorization3Page;
