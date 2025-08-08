import { AgaResponses500InternalServerErrorHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses500InternalServerErrorHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaResponses500InternalServerErrorHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses500InternalServerErrorHeadersPage;
