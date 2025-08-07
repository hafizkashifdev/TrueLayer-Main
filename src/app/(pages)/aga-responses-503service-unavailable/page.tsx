import { AgaResponses503ServiceUnavailableImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses503ServiceUnavailablePage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable)`}
      src={AgaResponses503ServiceUnavailableImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses503ServiceUnavailablePage;
