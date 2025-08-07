import { LegacyPaydirectApiUserGetUserAccountsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegacyPaydirectApiUserGetUserAccountsPage = () => {
  return (
    <CommonPage
      pageTitle={`Legacy-PayDirect API User Get user accounts`}
      src={LegacyPaydirectApiUserGetUserAccountsImage}
      backRoute="/legacy-paydirect-api-user"
    />
  );
};

export default LegacyPaydirectApiUserGetUserAccountsPage;
