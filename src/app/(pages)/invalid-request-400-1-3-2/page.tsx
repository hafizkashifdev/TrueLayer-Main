import { InvalidRequest400132Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvalidRequest400132Page = () => {
  return (
    <CommonPage
      pageTitle={`invalid request 400 1.3.2`}
      src={InvalidRequest400132Image}
      backRoute="/batch"
    />
  );
};

export default InvalidRequest400132Page;
