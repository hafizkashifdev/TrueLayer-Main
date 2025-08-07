import { SignupUserDataResponse422Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse422Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 422`}
      src={SignupUserDataResponse422Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse422Page;
