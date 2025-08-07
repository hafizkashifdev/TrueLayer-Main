import { Create500Responses16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Create500Responses16Page = () => {
  return (
    <CommonPage
      pageTitle={`500 (Responses)`}
      src={Create500Responses16Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default Create500Responses16Page;
