import { QueryParams52Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QueryParams52Page = () => {
  return (
    <CommonPage
      pageTitle={`query params 5.2`}
      src={QueryParams52Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default QueryParams52Page;
