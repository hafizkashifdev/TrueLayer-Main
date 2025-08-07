import { ResponseBody2111Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody2111Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 2.1.1.1`}
      src={ResponseBody2111Image}
      backRoute="/batch"
    />
  );
};

export default ResponseBody2111Page;
