import { ResponseBody5491Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody5491Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 5.4.9.1`}
      src={ResponseBody5491Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ResponseBody5491Page;
