import { Header5492Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header5492Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.9.2`}
      src={Header5492Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header5492Page;
