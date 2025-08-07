import { Results54111Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Results54111Page = () => {
  return (
    <CommonPage
      pageTitle={`results 5.4.1.1.1`}
      src={Results54111Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Results54111Page;
