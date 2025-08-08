import { ResponseBody13101Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody13101Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 1.3.10.1`}
      src={ResponseBody13101Image}
      backRoute="/batch"
    />
  );
};

export default ResponseBody13101Page;
