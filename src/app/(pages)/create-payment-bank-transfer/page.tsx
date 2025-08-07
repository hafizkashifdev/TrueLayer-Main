import { CreatePaymentBankTransferImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentBankTransferPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Bank Transfer`}
      src={CreatePaymentBankTransferImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentBankTransferPage;
