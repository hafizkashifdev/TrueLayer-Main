import { PathParams51Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PathParams51Page = () => {
  return (
    <CommonPage
      pageTitle={`path params 5.1`}
      src={PathParams51Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default PathParams51Page;
