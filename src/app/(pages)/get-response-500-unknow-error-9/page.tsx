import { GetResponse500UnknowError9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse500UnknowError9Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500 (Unknow Error)`}
      src={GetResponse500UnknowError9Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse500UnknowError9Page;
