import { AgaResponses404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={` 404(Not Found)`}
      src={AgaResponses404NotFoundImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses404NotFoundPage;
