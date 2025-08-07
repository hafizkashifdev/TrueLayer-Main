import { ServiceUnavailable503139Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUnavailable503139Page = () => {
  return (
    <CommonPage
      pageTitle={`service unavailable 503 1.3.9`}
      src={ServiceUnavailable503139Image}
      backRoute="/batch"
    />
  );
};

export default ServiceUnavailable503139Page;
