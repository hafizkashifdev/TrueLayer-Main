import { Unauthorized401Meta108Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Unauthorized401Meta108Page = () => {
  return (
    <CommonPage
      pageTitle={`401(Unauthorized)`}
      src={Unauthorized401Meta108Image}
      backRoute="/meta-main"
    />
  );
};

export default Unauthorized401Meta108Page;
