import { AgaResponses401UnauthorizedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses401UnauthorizedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgaResponses401UnauthorizedResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses401UnauthorizedResponseBodyPage;
