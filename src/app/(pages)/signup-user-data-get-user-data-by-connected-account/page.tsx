import { SignupUserDataGetUserDataByConnectedAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataGetUserDataByConnectedAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Get user data by connected account`}
      src={SignupUserDataGetUserDataByConnectedAccountImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataGetUserDataByConnectedAccountPage;
