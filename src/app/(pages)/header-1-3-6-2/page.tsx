import { Header1362Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1362Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.6.2`}
      src={Header1362Image}
      backRoute="/batch"
    />
  );
};

export default Header1362Page;
