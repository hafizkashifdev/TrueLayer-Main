import { ListResponse3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListResponse3Page = () => {
  return (
    <CommonPage
      pageTitle={`Response `}
      src={ListResponse3Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListResponse3Page;
