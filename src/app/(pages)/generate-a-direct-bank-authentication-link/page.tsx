import { GenerateADirectBankAuthenticationLinkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateADirectBankAuthenticationLinkPage = () => {
  return (
    <CommonPage
      pageTitle={`Generate a direct bank authentication link`}
      src={GenerateADirectBankAuthenticationLinkImage}
      backRoute="/connection-api"
    />
  );
};

export default GenerateADirectBankAuthenticationLinkPage;
