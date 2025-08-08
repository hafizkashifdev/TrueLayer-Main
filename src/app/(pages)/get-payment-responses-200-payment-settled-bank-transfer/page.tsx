import { GetPaymentResponses200PaymentSettledBankTransferImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses200PaymentSettledBankTransferPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _Responses_200 Payment_Settled_Bank Transfer`}
      src={GetPaymentResponses200PaymentSettledBankTransferImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses200PaymentSettledBankTransferPage;
