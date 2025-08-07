import { SignupUserDataResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={SignupUserDataResponseImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponsePage;
