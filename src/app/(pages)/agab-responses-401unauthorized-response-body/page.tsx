import { AgabResponses401UnauthorizedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses401UnauthorizedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgabResponses401UnauthorizedResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses401UnauthorizedResponseBodyPage;
