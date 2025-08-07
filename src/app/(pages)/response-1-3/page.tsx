import { Response13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Response13Page = () => {
  return (
    <CommonPage
      pageTitle={`response 1.3`}
      src={Response13Image}
      backRoute="/batch"
    />
  );
};

export default Response13Page;
