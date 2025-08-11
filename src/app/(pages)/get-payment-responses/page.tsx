import { GetPaymentResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Get Payment_Responses`}
      src={GetPaymentResponsesImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponsesPage;
