import { Header5472Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5472Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.7.2`}
      src={Header5472Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5472Page;
