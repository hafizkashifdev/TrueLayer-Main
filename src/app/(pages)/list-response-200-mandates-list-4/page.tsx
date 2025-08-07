import { ListResponse200MandatesList4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListResponse200MandatesList4Page = () => {
  return (
    <CommonPage
      pageTitle={`Response  200 (mandates list) `}
      src={ListResponse200MandatesList4Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListResponse200MandatesList4Page;
