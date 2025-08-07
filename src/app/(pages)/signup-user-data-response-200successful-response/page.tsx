import { SignupUserDataResponse200SuccessfulResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse200SuccessfulResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response 200(Successful response)`}
      src={SignupUserDataResponse200SuccessfulResponseImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse200SuccessfulResponsePage;
