import { Headers12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Headers12Page = () => {
  return (
    <CommonPage
      pageTitle={`headers 1.2`}
      src={Headers12Image}
      backRoute="/batch"
    />
  );
};

export default Headers12Page;
