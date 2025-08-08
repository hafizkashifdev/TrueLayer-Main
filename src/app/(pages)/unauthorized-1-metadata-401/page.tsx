import { Unauthorized1MetadataImage401 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized1MetadataPage401 = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={Unauthorized1MetadataImage401}
      backRoute="/meta-main"
    />
  );
};

export default Unauthorized1MetadataPage401;
