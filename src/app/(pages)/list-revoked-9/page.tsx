import { ListRevoked9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListRevoked9Page = () => {
  return (
    <CommonPage
      pageTitle={`Revoked `}
      src={ListRevoked9Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListRevoked9Page;
