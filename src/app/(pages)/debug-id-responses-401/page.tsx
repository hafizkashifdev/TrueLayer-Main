import { DebugIdResponses401Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdResponses401Page = () => {
  return (
    <CommonPage
      pageTitle={`Debug ID Responses 401`}
      src={DebugIdResponses401Image}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdResponses401Page;
