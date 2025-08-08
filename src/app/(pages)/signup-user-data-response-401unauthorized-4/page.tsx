import { SignupUserDataResponse401Unauthorized4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse401Unauthorized4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthorized)`}
      src={SignupUserDataResponse401Unauthorized4Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse401Unauthorized4Page;
