import { AccountsGetAccountsResponses429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccountsGetAccountsResponses429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={`429(Rate Limit Exceeded)`}
      src={AccountsGetAccountsResponses429RateLimitExceededImage}
      backRoute="/accounts-get-accounts"
    />
  );
};

export default AccountsGetAccountsResponses429RateLimitExceededPage;
