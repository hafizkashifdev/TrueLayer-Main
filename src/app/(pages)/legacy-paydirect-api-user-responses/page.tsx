import { LegacyPaydirectApiUserResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiUserResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API User Responses`}
      src={LegacyPaydirectApiUserResponsesImage}
      backRoute="/legacy-paydirect-api-user"
    />
  );
};

export default LegacyPaydirectApiUserResponsesPage;
