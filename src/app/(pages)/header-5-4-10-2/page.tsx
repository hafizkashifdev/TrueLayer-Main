import { Header54102Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header54102Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.10.2`}
      src={Header54102Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header54102Page;
