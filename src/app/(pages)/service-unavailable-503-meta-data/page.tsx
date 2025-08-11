import { ServiceUnavailable503MetaDataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503MetaDataPage = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable) `}
      src={ServiceUnavailable503MetaDataImage}
      backRoute="/meta-main"
    />
  );
};

export default ServiceUnavailable503MetaDataPage;
