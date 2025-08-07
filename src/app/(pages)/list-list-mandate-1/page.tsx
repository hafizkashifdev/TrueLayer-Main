import { ListListMandate1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListListMandate1Page = () => {
  return (
    <CommonPage
      pageTitle={` List Mandate`}
      src={ListListMandate1Image}
      backRoute="/mandates-list-mandates"
    />
  );
};

export default ListListMandate1Page;
