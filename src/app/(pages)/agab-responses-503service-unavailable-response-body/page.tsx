import { AgabResponses503ServiceUnavailableResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses503ServiceUnavailableResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgabResponses503ServiceUnavailableResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses503ServiceUnavailableResponseBodyPage;
