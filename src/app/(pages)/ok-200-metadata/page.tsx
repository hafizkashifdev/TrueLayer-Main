import { Ok200MetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Ok200MetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`200(OK)`}
      src={Ok200MetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default Ok200MetadataPage;
