import { Ok200211Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Ok200211Page = () => {
  return (
    <CommonPage
      pageTitle={`ok 200 2.1.1`}
      src={Ok200211Image}
      backRoute="/batch"
    />
  );
};

export default Ok200211Page;
