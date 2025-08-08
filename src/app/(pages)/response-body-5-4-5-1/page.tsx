import { ResponseBody5451Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5451Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.5.1`}
      src={ResponseBody5451Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5451Page;
