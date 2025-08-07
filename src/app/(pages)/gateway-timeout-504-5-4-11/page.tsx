import { GatewayTimeout5045411Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GatewayTimeout5045411Page = () => {
  return (
    <CommonPage
      pageTitle={`gateway timeout 504 5.4.11`}
      src={GatewayTimeout5045411Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default GatewayTimeout5045411Page;
