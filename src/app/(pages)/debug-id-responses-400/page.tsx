import { DebugIdResponses400Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdResponses400Page = () => {
  return (
    <CommonPage
      pageTitle={`Debug ID Responses 400`}
      src={DebugIdResponses400Image}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdResponses400Page;
