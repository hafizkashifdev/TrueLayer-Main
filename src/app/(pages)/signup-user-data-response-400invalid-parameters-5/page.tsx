import { SignupUserDataResponse400InvalidParameters5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SignupUserDataResponse400InvalidParameters5Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Invalid parameters)`}
      src={SignupUserDataResponse400InvalidParameters5Image}
      backRoute="/signup-user-data"
    />
  );
};

export default SignupUserDataResponse400InvalidParameters5Page;
