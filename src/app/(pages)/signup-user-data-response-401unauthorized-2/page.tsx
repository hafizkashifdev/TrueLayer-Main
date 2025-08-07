import { SignupUserDataResponse401Unauthorized2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse401Unauthorized2Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthorized)`}
      src={SignupUserDataResponse401Unauthorized2Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse401Unauthorized2Page;
