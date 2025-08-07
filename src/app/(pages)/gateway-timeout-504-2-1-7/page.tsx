import { GatewayTimeout504217Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GatewayTimeout504217Page = () => {
  return (
    <CommonPage
      pageTitle={`gateway timeout 504 2.1.7`}
      src={GatewayTimeout504217Image}
      backRoute="/batch"
    />
  );
};

export default GatewayTimeout504217Page;
