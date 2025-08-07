import { ResponseBody5411Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5411Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.1.1`}
      src={ResponseBody5411Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5411Page;
