import { ResponseBody1311Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody1311Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 1.3.1.1`}
      src={ResponseBody1311Image}
      backRoute="/batch"
    />
  );
};

export default ResponseBody1311Page;
