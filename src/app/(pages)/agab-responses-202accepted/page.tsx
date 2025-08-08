import { AgabResponses202AcceptedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses202AcceptedPage = () => {
  return (
    <CommonPage
      pageTitle={`202(Accepted)`}
      src={AgabResponses202AcceptedImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses202AcceptedPage;
