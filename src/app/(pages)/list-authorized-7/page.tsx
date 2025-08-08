import { ListAuthorized7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListAuthorized7Page = () => {
  return (
    <CommonPage
      pageTitle={`Authorized `}
      src={ListAuthorized7Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListAuthorized7Page;
