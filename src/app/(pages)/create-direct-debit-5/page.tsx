import { CreateDirectDebit5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateDirectDebit5Page = () => {
  return (
    <CommonPage
      pageTitle={`Direct Debit`}
      src={CreateDirectDebit5Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateDirectDebit5Page;
