import { GetPaymentResponses200PaymentFailedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses200PaymentFailedPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _Responses_200 Payment_Failed`}
      src={GetPaymentResponses200PaymentFailedImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses200PaymentFailedPage;
