import { AgaResponses403AccessDeniedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses403AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied)`}
      src={AgaResponses403AccessDeniedImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses403AccessDeniedPage;
