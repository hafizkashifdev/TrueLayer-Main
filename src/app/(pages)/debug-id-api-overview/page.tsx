import { DebugIdApiOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DebugIdApiOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Debug ID API Overview`}
      src={DebugIdApiOverviewImage}
      backRoute="/debug-id"
    />
  );
};

export default DebugIdApiOverviewPage;
