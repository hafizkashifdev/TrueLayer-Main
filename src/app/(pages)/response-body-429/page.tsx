import { ResponseBody429Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBody429Page = () => {
  return (
    <CommonPage
      pageTitle={`Response Body `}
      src={ResponseBody429Image}
      backRoute="/meta-main"
    />
  );
};

export default ResponseBody429Page;
