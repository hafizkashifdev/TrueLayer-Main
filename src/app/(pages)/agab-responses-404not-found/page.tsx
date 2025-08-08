import { AgabResponses404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`404(Not Found)`}
      src={AgabResponses404NotFoundImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses404NotFoundPage;
