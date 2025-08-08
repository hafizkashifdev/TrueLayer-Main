import { ExtendAConnectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ExtendAConnectionPage = () => {
  return (
    <CommonPage
      pageTitle={`Extend a connection`}
      src={ExtendAConnectionImage}
      backRoute="/connection-api"
    />
  );
};

export default ExtendAConnectionPage;
