import { Forbidden403VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Forbidden403VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`(Forbidden)403`}
      src={Forbidden403VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default Forbidden403VerifyAccountPage;
