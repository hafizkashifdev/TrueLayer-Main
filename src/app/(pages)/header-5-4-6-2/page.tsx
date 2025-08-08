import { Header5462Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5462Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.6.2`}
      src={Header5462Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5462Page;
