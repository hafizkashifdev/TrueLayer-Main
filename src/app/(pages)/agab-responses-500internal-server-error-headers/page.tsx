import { AgabResponses500InternalServerErrorHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses500InternalServerErrorHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabResponses500InternalServerErrorHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses500InternalServerErrorHeadersPage;
