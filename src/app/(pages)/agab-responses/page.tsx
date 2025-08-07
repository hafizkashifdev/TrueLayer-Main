import { AgabResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={AgabResponsesImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponsesPage;
