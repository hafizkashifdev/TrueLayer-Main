import { AgaResponses500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaResponses500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={AgaResponses500InternalServerErrorImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaResponses500InternalServerErrorPage;
