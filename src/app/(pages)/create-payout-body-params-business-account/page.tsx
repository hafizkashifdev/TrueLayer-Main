import { CreatePayoutBodyParamsBusinessAccountImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePayoutBodyParamsBusinessAccountPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payout _ Body Params_Business Account`}
      src={CreatePayoutBodyParamsBusinessAccountImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutBodyParamsBusinessAccountPage;
