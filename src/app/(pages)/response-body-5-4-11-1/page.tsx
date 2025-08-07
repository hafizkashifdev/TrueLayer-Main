import { ResponseBody54111Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody54111Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.11.1`}
      src={ResponseBody54111Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody54111Page;
