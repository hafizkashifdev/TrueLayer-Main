import { ResponseBody5481Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5481Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.8.1`}
      src={ResponseBody5481Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5481Page;
