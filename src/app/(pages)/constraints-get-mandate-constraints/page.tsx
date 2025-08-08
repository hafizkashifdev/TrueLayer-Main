import { ConstraintsGetMandateConstraintsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConstraintsGetMandateConstraintsPage = () => {
  return (
    <CommonPage
      pageTitle={`constraints Get mandate constraints`}
      src={ConstraintsGetMandateConstraintsImage}
      backRoute="/mandates-get-mandate-constraints"
    />
  );
};

export default ConstraintsGetMandateConstraintsPage;
