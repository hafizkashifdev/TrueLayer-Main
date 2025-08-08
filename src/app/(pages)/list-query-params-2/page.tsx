import { ListQueryParams2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListQueryParams2Page = () => {
  return (
    <CommonPage
      pageTitle={`Query Params `}
      src={ListQueryParams2Image}
      backRoute="/mandates-list-mandatese"
    />
  );
};

export default ListQueryParams2Page;
