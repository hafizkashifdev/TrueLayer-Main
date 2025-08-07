import { AccessTokenBodyParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessTokenBodyParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Access token _ Body Params`}
      src={AccessTokenBodyParamsImage}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default AccessTokenBodyParamsPage;
