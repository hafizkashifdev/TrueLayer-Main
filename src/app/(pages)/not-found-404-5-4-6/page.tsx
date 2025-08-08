import { NotFound404546Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NotFound404546Page = () => {
  return (
    <CommonPage
      pageTitle={`not found 404 5.4.6`}
      src={NotFound404546Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default NotFound404546Page;
