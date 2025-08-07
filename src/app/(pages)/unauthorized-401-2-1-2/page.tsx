import { Unauthorized401212Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized401212Page = () => {
  return (
    <CommonPage
      pageTitle={`unauthorized 401 2.1.2`}
      src={Unauthorized401212Image}
      backRoute="/batch"
    />
  );
};

export default Unauthorized401212Page;
