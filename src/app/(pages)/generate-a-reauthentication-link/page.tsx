import { GenerateAReauthenticationLinkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateAReauthenticationLinkPage = () => {
  return (
    <CommonPage
      pageTitle={`Generate a reauthentication link`}
      src={GenerateAReauthenticationLinkImage}
      backRoute="/connection-api"
    />
  );
};

export default GenerateAReauthenticationLinkPage;
