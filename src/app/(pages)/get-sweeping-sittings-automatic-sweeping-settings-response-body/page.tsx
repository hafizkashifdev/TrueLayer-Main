import { GetSweepingSettingsAutomaticSweepingSettingsResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AutomaticSweepingSettingsResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetSweepingSettingsAutomaticSweepingSettingsResponseBodyImage}
      backRoute="/merchant-get-sweeping-settings"
    />
  );
};

export default AutomaticSweepingSettingsResponseBodyPage;
