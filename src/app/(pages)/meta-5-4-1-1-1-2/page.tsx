import { Meta541112Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Meta541112Page = () => {
  return (
    <CommonPage
      pageTitle={`meta 5.4.1.1.1.2`}
      src={Meta541112Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Meta541112Page;
