import { ListResponse401Unauthenticated11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListResponse401Unauthenticated11Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthenticated) `}
      src={ListResponse401Unauthenticated11Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListResponse401Unauthenticated11Page;
