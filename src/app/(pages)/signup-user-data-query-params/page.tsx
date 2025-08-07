import { SignupUserDataQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={` Query Params`}
      src={SignupUserDataQueryParamsImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataQueryParamsPage;
