import { DebugIdResponses500Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdResponses500Page = () => {
  return (
    <CommonPage
      pageTitle={`Debug ID Responses 500`}
      src={DebugIdResponses500Image}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdResponses500Page;
