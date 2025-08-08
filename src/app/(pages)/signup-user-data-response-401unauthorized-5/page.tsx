import { SignupUserDataResponse401Unauthorized5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse401Unauthorized5Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthorized)`}
      src={SignupUserDataResponse401Unauthorized5Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse401Unauthorized5Page;
