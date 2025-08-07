import { ServiceUnavailable5035410Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable5035410Page = () => {
  return (
    <CommonPage
      pageTitle={`service unavailable 503 5.4.10`}
      src={ServiceUnavailable5035410Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default ServiceUnavailable5035410Page;
