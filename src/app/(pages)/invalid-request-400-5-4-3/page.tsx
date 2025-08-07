import { InvalidRequest400543Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvalidRequest400543Page = () => {
  return (
    <CommonPage
      pageTitle={`invalid request 400 5.4.3`}
      src={InvalidRequest400543Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default InvalidRequest400543Page;
