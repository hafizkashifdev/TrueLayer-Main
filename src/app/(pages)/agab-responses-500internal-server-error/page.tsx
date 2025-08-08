import { AgabResponses500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgabResponses500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={AgabResponses500InternalServerErrorImage}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default AgabResponses500InternalServerErrorPage;
