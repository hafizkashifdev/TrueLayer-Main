import { GetSweepingSettingsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetSweepingSettingsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={GetSweepingSettingsResponsesImage}
      backRoute="/merchant-get-sweeping-settings"
    />
  );
};

export default GetSweepingSettingsResponsesPage;
