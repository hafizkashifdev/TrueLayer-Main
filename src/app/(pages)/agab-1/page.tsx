import { Agab1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Agab1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get account balance `}
      src={Agab1Image}
      backRoute="/accounts-get-account-balance"
    />
  );
};

export default Agab1Page;
