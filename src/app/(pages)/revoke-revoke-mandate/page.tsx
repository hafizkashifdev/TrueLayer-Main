import { RevokeRevokeMandateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RevokeRevokeMandatePage = () => {
  return (
    <CommonPage
      pageTitle={`Revoke Revoke mandate`}
      src={RevokeRevokeMandateImage}
      backRoute="/mandates-revoke-mandate"
    />
  );
};

export default RevokeRevokeMandatePage;
