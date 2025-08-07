import { SignupUserDataGetUserDataByPaymentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataGetUserDataByPaymentPage = () => {
  return (
    <CommonPage
      pageTitle={`Get user data by payment`}
      src={SignupUserDataGetUserDataByPaymentImage}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataGetUserDataByPaymentPage;
