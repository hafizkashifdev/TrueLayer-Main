import { Status54112Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Status54112Page = () => {
  return (
    <CommonPage
      pageTitle={`status 5.4.1.1.2`}
      src={Status54112Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Status54112Page;
