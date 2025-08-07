import { ResponseBody5461Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5461Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.6.1`}
      src={ResponseBody5461Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5461Page;
