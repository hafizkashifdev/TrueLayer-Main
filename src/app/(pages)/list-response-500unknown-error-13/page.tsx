import { ListResponse500UnknownError13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListResponse500UnknownError13Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500(Unknown Error)`}
      src={ListResponse500UnknownError13Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListResponse500UnknownError13Page;
