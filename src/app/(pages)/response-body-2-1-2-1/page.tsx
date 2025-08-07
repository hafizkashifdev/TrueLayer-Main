import { ResponseBody2121Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody2121Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 2.1.2.1`}
      src={ResponseBody2121Image}
      backRoute="/batch"
    />
  );
};

export default ResponseBody2121Page;
