import { SignupUserDataResponse5004Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse5004Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500`}
      src={SignupUserDataResponse5004Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse5004Page;
