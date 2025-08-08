import { AgaResponses501NotImplementedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses501NotImplementedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgaResponses501NotImplementedResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses501NotImplementedResponseBodyPage;
