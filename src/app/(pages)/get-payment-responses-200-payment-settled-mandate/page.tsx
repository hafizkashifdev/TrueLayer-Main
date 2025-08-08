import { GetPaymentResponses200PaymentSettledMandateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses200PaymentSettledMandatePage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _Responses_200 Payment_Settled_Mandate`}
      src={GetPaymentResponses200PaymentSettledMandateImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses200PaymentSettledMandatePage;
