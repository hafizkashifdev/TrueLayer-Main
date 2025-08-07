import { ResponseBody5471Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5471Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.7.1`}
      src={ResponseBody5471Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5471Page;
