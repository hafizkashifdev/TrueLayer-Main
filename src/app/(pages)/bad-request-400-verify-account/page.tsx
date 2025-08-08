import { BadRequest400VerifyAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BadRequest400VerifyAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`400(Bad Request)`}
      src={BadRequest400VerifyAccountImage}
      backRoute="/account-verification"
    />
  );
};

export default BadRequest400VerifyAccountPage;
