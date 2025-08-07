import { CreatePaymentMandateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentMandatePage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Mandate`}
      src={CreatePaymentMandateImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentMandatePage;
