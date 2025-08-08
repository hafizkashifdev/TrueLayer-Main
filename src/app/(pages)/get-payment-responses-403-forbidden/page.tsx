import { GetPaymentResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetPaymentResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Get payment _ Responses_403 Forbidden`}
      src={GetPaymentResponses403ForbiddenImage}
      backRoute="/payments-get-payment"
    />
  );
};

export default GetPaymentResponses403ForbiddenPage;
