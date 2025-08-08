import { AgaResponses200OkResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses200OkResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={` Response Body`}
      src={AgaResponses200OkResponseBodyImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses200OkResponseBodyPage;
