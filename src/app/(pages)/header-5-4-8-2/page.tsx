import { Header5482Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5482Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.8.2`}
      src={Header5482Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5482Page;
