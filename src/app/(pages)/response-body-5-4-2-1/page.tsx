import { ResponseBody5421Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5421Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.2.1`}
      src={ResponseBody5421Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5421Page;
