import { SearchPaymentsProviders01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SearchPaymentsProviders01Page = () => {
  return (
    <CommonPage
      pageTitle={`Search Payments providers 01`}
      src={SearchPaymentsProviders01Image}
      backRoute="/search-payments-providers"
    />
  );
};

export default SearchPaymentsProviders01Page;
