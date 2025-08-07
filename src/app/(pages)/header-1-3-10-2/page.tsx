import { Header13102Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header13102Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.10.2`}
      src={Header13102Image}
      backRoute="/batch"
    />
  );
};

export default Header13102Page;
