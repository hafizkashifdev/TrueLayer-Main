import { Header1382Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1382Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.8.2`}
      src={Header1382Image}
      backRoute="/batch"
    />
  );
};

export default Header1382Page;
