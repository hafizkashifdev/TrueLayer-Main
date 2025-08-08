import { ConfirmResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConfirmResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={ConfirmResponsesImage}
      backRoute="/mandates-confirm-funds"
    />
  );
};

export default ConfirmResponsesPage;
