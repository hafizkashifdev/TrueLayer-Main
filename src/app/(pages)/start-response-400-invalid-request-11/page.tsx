import { StartResponse400InvalidRequest11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse400InvalidRequest11Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (400 Invalid Request) `}
      src={StartResponse400InvalidRequest11Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse400InvalidRequest11Page;
