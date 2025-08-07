import { AgabResponses500InternalServerErrorResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses500InternalServerErrorResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgabResponses500InternalServerErrorResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses500InternalServerErrorResponseBodyPage;
