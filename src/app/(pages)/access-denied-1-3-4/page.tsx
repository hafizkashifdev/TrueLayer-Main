import { AccessDenied134Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessDenied134Page = () => {
  return (
    <CommonPage
      pageTitle={`access denied 1.3.4`}
      src={AccessDenied134Image}
      backRoute="/batch"
    />
  );
};

export default AccessDenied134Page;
