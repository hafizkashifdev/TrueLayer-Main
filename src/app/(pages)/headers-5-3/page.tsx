import { Headers53Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Headers53Page = () => {
  return (
    <CommonPage
      pageTitle={`headers 5.3`}
      src={Headers53Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Headers53Page;
