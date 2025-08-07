import { SignupUserDataResponse5006Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse5006Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500`}
      src={SignupUserDataResponse5006Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse5006Page;
