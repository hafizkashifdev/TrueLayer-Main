import { AgaResponses403AccessDeniedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses403AccessDeniedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={AgaResponses403AccessDeniedResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses403AccessDeniedResponseBodyPage;
