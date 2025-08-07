import { Accepted202542Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Accepted202542Page = () => {
  return (
    <CommonPage
      pageTitle={`accepted 202 5.4.2`}
      src={Accepted202542Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Accepted202542Page;
