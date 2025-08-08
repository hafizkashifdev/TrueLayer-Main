import { AgabResponses202AcceptedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses202AcceptedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgabResponses202AcceptedResponseBodyImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses202AcceptedResponseBodyPage;
