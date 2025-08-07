import { SignupUserDataResponse3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse3Page = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={SignupUserDataResponse3Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse3Page;
