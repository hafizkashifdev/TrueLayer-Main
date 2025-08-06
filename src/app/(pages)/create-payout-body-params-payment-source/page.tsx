import { CreatePayoutBodyParamsPaymentSourceImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const CreatePayoutBodyParamsPaymentSourcePage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payout _ Body Params_Payment Source`}
      src={CreatePayoutBodyParamsPaymentSourceImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutBodyParamsPaymentSourcePage;
