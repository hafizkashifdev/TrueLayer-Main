import { SignupUserDataResponse5001Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse5001Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500`}
      src={SignupUserDataResponse5001Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse5001Page;
