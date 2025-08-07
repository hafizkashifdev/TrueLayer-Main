import { CreatePayoutHeadersImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const CreatePayoutHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payout _ Headers`}
      src={CreatePayoutHeadersImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutHeadersPage;
