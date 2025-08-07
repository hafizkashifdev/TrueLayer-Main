import { CreatePayoutResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePayoutResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={` Create Payout _ Responses`}
      src={CreatePayoutResponsesImage}
      backRoute="/create-payout"
    />
  );
};

export default CreatePayoutResponsesPage;
