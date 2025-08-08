import { ServiceUnavailable503Metadata09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503Metadata09Page = () => {
  return (
    <CommonPage
      pageTitle={`504(Gateway Timeout)`}
      src={ServiceUnavailable503Metadata09Image}
      backRoute="/meta-main"
    />
  );
};

export default ServiceUnavailable503Metadata09Page;
