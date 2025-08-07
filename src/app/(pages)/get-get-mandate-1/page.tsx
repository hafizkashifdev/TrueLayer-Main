import { GetGetMandate1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetGetMandate1Page = () => {
  return (
    <CommonPage
      pageTitle={` Get mandate`}
      src={GetGetMandate1Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetGetMandate1Page;
