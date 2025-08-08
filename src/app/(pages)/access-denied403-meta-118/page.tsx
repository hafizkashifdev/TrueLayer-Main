import { AccessDenied403Meta118Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessDenied403Meta118Page = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied)`}
      src={AccessDenied403Meta118Image}
      backRoute="/meta-main"
    />
  );
};

export default AccessDenied403Meta118Page;
