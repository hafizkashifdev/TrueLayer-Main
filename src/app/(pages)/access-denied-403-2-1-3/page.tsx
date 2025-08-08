import { AccessDenied403213Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessDenied403213Page = () => {
  return (
    <CommonPage
      pageTitle={`access denied 403 2.1.3`}
      src={AccessDenied403213Image}
      backRoute="/batch"
    />
  );
};

export default AccessDenied403213Page;
