import { AgaHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgaHeadersImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaHeadersPage;
