import { AgaResponses503ServiceUnavailableResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses503ServiceUnavailableResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgaResponses503ServiceUnavailableResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses503ServiceUnavailableResponseBodyPage;
