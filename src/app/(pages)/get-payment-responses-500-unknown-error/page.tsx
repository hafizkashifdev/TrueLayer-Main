import { GetPaymentResponses500UnknownErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses500UnknownErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _ Responses_500  Unknown Error`}
      src={GetPaymentResponses500UnknownErrorImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses500UnknownErrorPage;
