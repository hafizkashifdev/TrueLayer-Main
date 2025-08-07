import { Response21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Response21Page = () => {
  return (
    <CommonPage
      pageTitle={`response 2.1`}
      src={Response21Image}
      backRoute="/batch"
    />
  );
};

export default Response21Page;
