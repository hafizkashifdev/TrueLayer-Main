import { SortCodeAccountNumberImage } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const SortCodeAccountNumberPage = () => {
  return (
    <CommonPage
      pageTitle={` Sort Code + Account Number`}
      src={SortCodeAccountNumberImage}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default SortCodeAccountNumberPage;
