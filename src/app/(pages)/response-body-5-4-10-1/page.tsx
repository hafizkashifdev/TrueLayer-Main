import { ResponseBody54101Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody54101Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.10.1`}
      src={ResponseBody54101Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody54101Page;
