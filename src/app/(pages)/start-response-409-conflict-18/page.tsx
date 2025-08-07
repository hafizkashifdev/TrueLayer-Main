import { StartResponse409Conflict18Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse409Conflict18Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (409 Conflict) `}
      src={StartResponse409Conflict18Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse409Conflict18Page;
