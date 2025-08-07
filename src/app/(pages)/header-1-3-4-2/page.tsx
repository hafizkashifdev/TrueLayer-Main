import { Header1342Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1342Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.4.2`}
      src={Header1342Image}
      backRoute="/batch"
    />
  );
};

export default Header1342Page;
