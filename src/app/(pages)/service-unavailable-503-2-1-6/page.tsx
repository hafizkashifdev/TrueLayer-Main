import { ServiceUnavailable503216Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503216Page = () => {
  return (
    <CommonPage
      pageTitle={`service unavailable 503 2.1.6`}
      src={ServiceUnavailable503216Image}
      backRoute="/batch"
    />
  );
};

export default ServiceUnavailable503216Page;
