import { Header1312Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1312Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.1.2`}
      src={Header1312Image}
      backRoute="/batch"
    />
  );
};

export default Header1312Page;
