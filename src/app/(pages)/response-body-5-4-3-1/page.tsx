import { ResponseBody5431Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5431Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.3.1`}
      src={ResponseBody5431Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5431Page;
