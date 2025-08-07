import { CreatePaymentResponses500UnknownErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentResponses500UnknownErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Responses_500  Unknown Error`}
      src={CreatePaymentResponses500UnknownErrorImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentResponses500UnknownErrorPage;
