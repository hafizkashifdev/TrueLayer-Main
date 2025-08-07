import { Header54112Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header54112Page = () => {
  return (
    <CommonPage
      pageTitle={`header 5.4.11.2`}
      src={Header54112Image}
      backRoute="/get-card-pending-transactions"
    />
  );
};

export default Header54112Page;
