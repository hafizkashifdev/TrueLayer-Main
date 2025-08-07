import { SignupUserDataQueryParams1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataQueryParams1Page = () => {
  return (
    <CommonPage
      pageTitle={`Query Params`}
      src={SignupUserDataQueryParams1Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataQueryParams1Page;
