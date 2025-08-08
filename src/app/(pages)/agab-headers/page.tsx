import { AgabHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={AgabHeadersImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabHeadersPage;
