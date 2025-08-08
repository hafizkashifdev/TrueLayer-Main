import { ListProvidersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ListProvidersPage = () => {
  return (
    <CommonPage
      pageTitle={`List providers`}
      src={ListProvidersImage}
      backRoute="/connection-api"
    />
  );
};

export default ListProvidersPage;
