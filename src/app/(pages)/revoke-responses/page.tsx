import { RevokeResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RevokeResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Revoke Responses`}
      src={RevokeResponsesImage}
      backRoute="/mandates-revoke-mandate"
    />
  );
};

export default RevokeResponsesPage;
