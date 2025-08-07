import { Ok200541Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Ok200541Page = () => {
  return (
    <CommonPage
      pageTitle={`ok 200 5.4.1`}
      src={Ok200541Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Ok200541Page;
