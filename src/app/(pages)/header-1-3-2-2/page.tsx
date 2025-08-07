import { Header1322Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1322Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.2.2`}
      src={Header1322Image}
      backRoute="/batch"
    />
  );
};

export default Header1322Page;
