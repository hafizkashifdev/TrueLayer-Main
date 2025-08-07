import { CreatePaymentHeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatePaymentHeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Payment _ Headers`}
      src={CreatePaymentHeadersImage}
      backRoute="/payments-create-payment"
    />
  );
};

export default CreatePaymentHeadersPage;
