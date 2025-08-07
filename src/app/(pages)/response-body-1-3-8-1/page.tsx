import { ResponseBody1381Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody1381Page = () => {
  return (
    <CommonPage
      pageTitle={`response body 1.3.8.1`}
      src={ResponseBody1381Image}
      backRoute="/batch"
    />
  );
};

export default ResponseBody1381Page;
