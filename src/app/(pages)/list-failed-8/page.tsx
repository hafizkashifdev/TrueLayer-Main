import { ListFailed8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListFailed8Page = () => {
  return (
    <CommonPage
      pageTitle={`Failed `}
      src={ListFailed8Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListFailed8Page;
