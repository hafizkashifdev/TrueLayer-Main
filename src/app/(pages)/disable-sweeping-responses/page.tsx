import { DisableSweepingResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisableSweepingResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={DisableSweepingResponsesImage}
      backRoute="/merchant-disable-sweeping"
    />
  );
};

export default DisableSweepingResponsesPage;
