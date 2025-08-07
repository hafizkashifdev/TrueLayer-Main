import { AgaResponses202AcceptedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses202AcceptedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgaResponses202AcceptedResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses202AcceptedResponseBodyPage;
