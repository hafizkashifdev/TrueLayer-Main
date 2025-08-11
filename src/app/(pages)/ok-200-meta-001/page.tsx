import { Ok200Meta001Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Ok200Meta001Page = () => {
  return (
    <CommonPage
      pageTitle={`200 (OK)`}
      src={Ok200Meta001Image}
      backRoute="/meta-main"
    />
  );
};

export default Ok200Meta001Page;
