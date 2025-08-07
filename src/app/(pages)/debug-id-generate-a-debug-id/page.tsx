import { DebugIdGenerateADebugIdImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdGenerateADebugIdPage = () => {
  return (
    <CommonPage
      pageTitle={`Debug ID Generate a debug ID`}
      src={DebugIdGenerateADebugIdImage}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdGenerateADebugIdPage;
