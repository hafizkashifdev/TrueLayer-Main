import { StartResponse404MandateNotFound17Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse404MandateNotFound17Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (404 Mandate Not Found)  `}
      src={StartResponse404MandateNotFound17Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse404MandateNotFound17Page;
