import { AccessDeniedMetadataImage403 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AccessDeniedMetadataPage403 = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied)`}
      src={AccessDeniedMetadataImage403}
      backRoute="/meta-main"
    />
  );
};

export default AccessDeniedMetadataPage403;
