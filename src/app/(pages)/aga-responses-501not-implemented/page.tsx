import { AgaResponses501NotImplementedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses501NotImplementedPage = () => {
  return (
    <CommonPage
      pageTitle={`501(Not Implemented)`}
      src={AgaResponses501NotImplementedImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses501NotImplementedPage;
