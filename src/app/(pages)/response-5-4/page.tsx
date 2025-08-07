import { Response54Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Response54Page = () => {
  return (
    <CommonPage
      pageTitle={`response 5.4`}
      src={Response54Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Response54Page;
