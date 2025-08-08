import { GetSweepingSettings1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetSweepingSettings1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get sweeping settings`}
      src={GetSweepingSettings1Image}
      backRoute="/merchant-get-sweeping-settings"
    />
  );
};

export default GetSweepingSettings1Page;
