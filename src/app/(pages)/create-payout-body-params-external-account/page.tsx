import { CreatePayoutBodyParamsExternalAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePayoutBodyParamsExternalAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payout _ Body Params_External Account`}
      src={CreatePayoutBodyParamsExternalAccountImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutBodyParamsExternalAccountPage;
