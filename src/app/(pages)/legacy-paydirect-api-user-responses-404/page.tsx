import { LegacyPaydirectApiUserResponses404Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiUserResponses404Page = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API User Responses 404`}
      src={LegacyPaydirectApiUserResponses404Image}
      backRoute="/legacy-paydirect-api-user"
    />
  );
};

export default LegacyPaydirectApiUserResponses404Page;
