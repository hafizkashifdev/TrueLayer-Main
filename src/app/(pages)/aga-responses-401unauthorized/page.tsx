import { AgaResponses401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={AgaResponses401UnauthorizedImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses401UnauthorizedPage;
