import { AgaResponses200OkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses200OkPage = () => {
  return (
    <CommonPage
      pageTitle={`200 (OK)`}
      src={AgaResponses200OkImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses200OkPage;
