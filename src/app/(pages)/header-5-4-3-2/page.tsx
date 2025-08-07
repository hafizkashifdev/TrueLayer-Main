import { Header5432Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5432Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.3.2`}
      src={Header5432Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5432Page;
