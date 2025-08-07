import { SignupUserDataResponse400InvalidParametersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse400InvalidParametersPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Invalid parameters)`}
      src={SignupUserDataResponse400InvalidParametersImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse400InvalidParametersPage;
