import { Create403Forbidden11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Create403Forbidden11Page = () => {
  return (
    <CommonPage
      pageTitle={`403 (Forbidden)`}
      src={Create403Forbidden11Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default Create403Forbidden11Page;
