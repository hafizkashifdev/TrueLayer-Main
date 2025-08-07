import { Header5452Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5452Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.5.2`}
      src={Header5452Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5452Page;
