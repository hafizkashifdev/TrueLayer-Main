import { AgaResponses500InternalServerErrorResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses500InternalServerErrorResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgaResponses500InternalServerErrorResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses500InternalServerErrorResponseBodyPage;
