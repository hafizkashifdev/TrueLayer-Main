import { ResponseBody5441Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5441Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.4.1`}
      src={ResponseBody5441Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5441Page;
