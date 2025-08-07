import { AgabResponses200OkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses200OkPage = () => {
  return (
    <CommonPage
      pageTitle={`200 (OK)`}
      src={AgabResponses200OkImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses200OkPage;
