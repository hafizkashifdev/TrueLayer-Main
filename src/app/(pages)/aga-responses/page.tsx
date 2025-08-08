import { AgaResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={AgaResponsesImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponsesPage;
