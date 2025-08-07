import { CreateCreateMandate1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateCreateMandate1Page = () => {
  return (
    <CommonPage
      pageTitle={`Create Mandate`}
      src={CreateCreateMandate1Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateCreateMandate1Page;
