import { DisableSweeping1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisableSweeping1Page = () => {
  return (
    <CommonPage
      pageTitle={`Disable sweeping`}
      src={DisableSweeping1Image}
      backRoute="/merchant-disable-sweeping"
    />
  );
};

export default DisableSweeping1Page;
