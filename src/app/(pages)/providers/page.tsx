import { ProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`Providers`}
      src={ProvidersImage}
      backRoute="/connection-api"
    />
  );
};

export default ProvidersPage;
