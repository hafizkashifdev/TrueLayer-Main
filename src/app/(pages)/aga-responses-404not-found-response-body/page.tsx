import { AgaResponses404NotFoundResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses404NotFoundResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgaResponses404NotFoundResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses404NotFoundResponseBodyPage;
