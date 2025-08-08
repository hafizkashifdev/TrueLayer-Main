import { AuthLinkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AuthLinkPage = () => {
  return (
    <CommonPage
      pageTitle={`Auth Link`}
      src={AuthLinkImage}
      backRoute="/connection-api"
    />
  );
};

export default AuthLinkPage;
