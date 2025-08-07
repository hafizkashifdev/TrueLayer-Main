import { ListAuthorizing6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListAuthorizing6Page = () => {
  return (
    <CommonPage
      pageTitle={`Authorizing`}
      src={ListAuthorizing6Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListAuthorizing6Page;
