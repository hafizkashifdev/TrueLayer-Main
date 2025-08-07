import { Header2132Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header2132Page = () => {
  return (
    <CommonPage
      pageTitle={`header 2.1.3.2`}
      src={Header2132Image}
      backRoute="/batch"
    />
  );
};

export default Header2132Page;
