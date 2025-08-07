import { AccessTokenBodyParamsClientCredentialsGrantRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessTokenBodyParamsClientCredentialsGrantRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Access token _ Body Params_ Client Credentials Grant Request`}
      src={AccessTokenBodyParamsClientCredentialsGrantRequestImage}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default AccessTokenBodyParamsClientCredentialsGrantRequestPage;
