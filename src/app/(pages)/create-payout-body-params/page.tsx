import { CreatePayoutBodyParamsImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const CreatePayoutBodyParamsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={` Create Payout _ Body Params`}
      src={CreatePayoutBodyParamsImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutBodyParamsPage;
