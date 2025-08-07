import { CreateBodyParams2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateBodyParams2Page = () => {
  return (
    <CommonPage
      pageTitle={`Create Body Params-2`}
      src={CreateBodyParams2Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateBodyParams2Page;
