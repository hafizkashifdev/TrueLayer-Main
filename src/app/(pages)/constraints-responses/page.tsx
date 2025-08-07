import { ConstraintsResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConstraintsResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`constraints Responses`}
      src={ConstraintsResponsesImage}
      backRoute="/mandates-get-mandate-constraints"
    />
  );
};

export default ConstraintsResponsesPage;
