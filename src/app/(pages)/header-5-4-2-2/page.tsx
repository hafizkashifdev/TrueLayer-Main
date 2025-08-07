import { Header5422Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5422Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.2.2`}
      src={Header5422Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5422Page;
