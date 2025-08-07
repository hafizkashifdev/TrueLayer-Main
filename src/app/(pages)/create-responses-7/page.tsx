import { CreateResponses7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateResponses7Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={CreateResponses7Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateResponses7Page;
