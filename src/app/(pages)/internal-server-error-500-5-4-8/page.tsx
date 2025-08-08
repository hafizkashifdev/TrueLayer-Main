import { InternalServerError500548Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerError500548Page = () => {
  return (
    <CommonPage
      pageTitle={`internal server error 500 5.4.8`}
      src={InternalServerError500548Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default InternalServerError500548Page;
