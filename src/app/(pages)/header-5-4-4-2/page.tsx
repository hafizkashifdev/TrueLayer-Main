import { Header5442Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5442Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.4.2`}
      src={Header5442Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5442Page;
