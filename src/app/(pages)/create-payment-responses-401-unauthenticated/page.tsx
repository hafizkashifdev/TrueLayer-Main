import { CreatePaymentResponses401UnauthenticatedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentResponses401UnauthenticatedPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Responses_401 Unauthenticated`}
      src={CreatePaymentResponses401UnauthenticatedImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentResponses401UnauthenticatedPage;
