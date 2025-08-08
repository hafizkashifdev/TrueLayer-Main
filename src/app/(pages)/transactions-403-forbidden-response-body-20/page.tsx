import { Transactions403ForbiddenResponseBody20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Transactions403ForbiddenResponseBody20Page = () => {
  return (
    <CommonPage
      pageTitle={`403 _ Forbidden _ Response Body `}
      src={Transactions403ForbiddenResponseBody20Image}
      backRoute="/get-transactions"
    />
  );
};

export default Transactions403ForbiddenResponseBody20Page;
