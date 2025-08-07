import { SignupUserDataResponse400InvalidParameters4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse400InvalidParameters4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Invalid parameters)`}
      src={SignupUserDataResponse400InvalidParameters4Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse400InvalidParameters4Page;
