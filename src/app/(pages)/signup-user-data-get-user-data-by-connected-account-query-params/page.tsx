import { SignupUserDataGetUserDataByConnectedAccountQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataGetUserDataByConnectedAccountQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Get user data by connected account`}
      src={SignupUserDataGetUserDataByConnectedAccountQueryParamsImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataGetUserDataByConnectedAccountQueryParamsPage;
