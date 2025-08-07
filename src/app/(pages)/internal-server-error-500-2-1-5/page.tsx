import { InternalServerError500215Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerError500215Page = () => {
  return (
    <CommonPage
      pageTitle={`internal server error 500 2.1.5`}
      src={InternalServerError500215Image}
      backRoute="/batch"
    />
  );
};

export default InternalServerError500215Page;
