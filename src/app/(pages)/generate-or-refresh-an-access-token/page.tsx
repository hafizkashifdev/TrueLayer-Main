import { GenerateOrRefreshAnAccessTokenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateOrRefreshAnAccessTokenPage = () => {
  return (
    <CommonPage
      pageTitle={`Generate or refresh an access token`}
      src={GenerateOrRefreshAnAccessTokenImage}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default GenerateOrRefreshAnAccessTokenPage;
