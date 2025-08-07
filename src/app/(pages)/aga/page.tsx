import { AgaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AgaPage = () => {
  return (
    <CommonPage
      pageTitle={`Get account`}
      src={AgaImage}
      backRoute="/accounts-get-account"
    />
  );
};

export default AgaPage;
