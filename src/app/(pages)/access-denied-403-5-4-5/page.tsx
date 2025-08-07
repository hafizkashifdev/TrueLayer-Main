import { AccessDenied403545Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessDenied403545Page = () => {
  return (
    <CommonPage
      pageTitle={`access denied 403 5.4.5`}
      src={AccessDenied403545Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default AccessDenied403545Page;
