import { CreatePaymentResponses403ForbiddenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentResponses403ForbiddenPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Responses_403 Forbidden`}
      src={CreatePaymentResponses403ForbiddenImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentResponses403ForbiddenPage;
