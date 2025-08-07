import { Header5412Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5412Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.1.2`}
      src={Header5412Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5412Page;
