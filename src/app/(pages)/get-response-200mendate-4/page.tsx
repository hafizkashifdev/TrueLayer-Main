import { GetResponse200Mendate4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse200Mendate4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 200(Mendate) `}
      src={GetResponse200Mendate4Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse200Mendate4Page;
