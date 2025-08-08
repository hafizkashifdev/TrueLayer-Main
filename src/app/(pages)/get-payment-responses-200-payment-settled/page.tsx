import { GetPaymentResponses200PaymentSettledImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses200PaymentSettledPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _Responses_200 Payment_Settled`}
      src={GetPaymentResponses200PaymentSettledImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses200PaymentSettledPage;
