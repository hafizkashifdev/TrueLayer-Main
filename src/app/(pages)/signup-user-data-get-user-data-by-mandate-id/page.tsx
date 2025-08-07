import { SignupUserDataGetUserDataByMandateIdImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataGetUserDataByMandateIdPage = () => {
  return (
    <CommonPage
      pageTitle={`Get user data by mandate ID`}
      src={SignupUserDataGetUserDataByMandateIdImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataGetUserDataByMandateIdPage;
