import { Unauthorized401133Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized401133Page = () => {
  return (
    <CommonPage
      pageTitle={`unauthorized 401 1.3.3`}
      src={Unauthorized401133Image}
      backRoute="/batch"
    />
  );
};

export default Unauthorized401133Page;
