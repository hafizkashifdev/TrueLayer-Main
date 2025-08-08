import { GetPayoutResponsesImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const GetPayoutResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` Get payout _ Responses`}
      src={GetPayoutResponsesImage}
      backRoute="/get-payout"
    />
  );
};

export default GetPayoutResponsesPage;
