import { StartResponse403Forbidden16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse403Forbidden16Page = () => {
  return (
    <CommonPage
      pageTitle={`Response (403 Forbidden) `}
      src={StartResponse403Forbidden16Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse403Forbidden16Page;
