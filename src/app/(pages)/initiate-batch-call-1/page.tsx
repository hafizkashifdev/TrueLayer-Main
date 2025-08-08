import { InitiateBatchCall1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitiateBatchCall1Page = () => {
  return (
    <CommonPage
      pageTitle={`initiate batch call 1`}
      src={InitiateBatchCall1Image}
      backRoute="/batch"
    />
  );
};

export default InitiateBatchCall1Page;
