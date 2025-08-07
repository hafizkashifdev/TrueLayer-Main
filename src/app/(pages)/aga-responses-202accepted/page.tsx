import { AgaResponses202AcceptedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses202AcceptedPage = () => {
  return (
    <CommonPage
      pageTitle={`202(Accepted)`}
      src={AgaResponses202AcceptedImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses202AcceptedPage;
