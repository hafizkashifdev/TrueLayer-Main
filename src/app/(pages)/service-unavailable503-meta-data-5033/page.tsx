import { ServiceUnavailable503MetaData5033Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503MetaData5033Page = () => {
  return (
    <CommonPage
      pageTitle={`503(Service Unavailable)`}
      src={ServiceUnavailable503MetaData5033Image}
      backRoute="/meta-main"
    />
  );
};

export default ServiceUnavailable503MetaData5033Page;
