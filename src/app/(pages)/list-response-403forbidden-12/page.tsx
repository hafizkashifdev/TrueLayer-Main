import { ListResponse403Forbidden12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListResponse403Forbidden12Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 403(Forbidden) `}
      src={ListResponse403Forbidden12Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListResponse403Forbidden12Page;
