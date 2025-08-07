import { CreatePayoutBodyParamsImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const CreatePayoutBodyParamsPage = () => {
  return (
    <CommonPage
      pageTitle={` Create Payout _ Body Params`}
      src={CreatePayoutBodyParamsImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutBodyParamsPage;
