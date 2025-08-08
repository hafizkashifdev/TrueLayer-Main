import { ListAuthorizationRequired5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListAuthorizationRequired5Page = () => {
  return (
    <CommonPage
      pageTitle={` Authorization Required `}
      src={ListAuthorizationRequired5Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListAuthorizationRequired5Page;
