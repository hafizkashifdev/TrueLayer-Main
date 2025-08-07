import { DebugIdaccessTokenResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdaccessTokenResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Debug IDAccess token _ Responses`}
      src={DebugIdaccessTokenResponsesImage}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdaccessTokenResponsesPage;
