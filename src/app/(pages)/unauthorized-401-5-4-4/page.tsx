import { Unauthorized401544Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized401544Page = () => {
  return (
    <CommonPage
      pageTitle={`unauthorized 401 5.4.4`}
      src={Unauthorized401544Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Unauthorized401544Page;
