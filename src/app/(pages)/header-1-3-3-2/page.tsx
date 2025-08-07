import { Header1332Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header1332Page = () => {
  return (
    <CommonPage
      pageTitle={`header 1.3.3.2`}
      src={Header1332Image}
      backRoute="/batch"
    />
  );
};

export default Header1332Page;
