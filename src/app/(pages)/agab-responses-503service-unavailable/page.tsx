import { AgabResponses503ServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable)`}
      src={AgabResponses503ServiceUnavailableImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses503ServiceUnavailablePage;
