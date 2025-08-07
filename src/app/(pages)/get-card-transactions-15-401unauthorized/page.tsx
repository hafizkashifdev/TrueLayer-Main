import { GetCardTransactions15401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCardTransactions15401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Get card transactions 15 401(Unauthorized) `}
      src={GetCardTransactions15401UnauthorizedImage}
      backRoute="/get-card-transactions"
    />
  );
};

export default GetCardTransactions15401UnauthorizedPage;
