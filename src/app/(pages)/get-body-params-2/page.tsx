import { GetBodyParams2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetBodyParams2Page = () => {
  return (
    <CommonPage
      pageTitle={`Body Params`}
      src={GetBodyParams2Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetBodyParams2Page;
