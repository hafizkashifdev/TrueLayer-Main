import { Header2122Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Header2122Page = () => {
  return (
    <CommonPage
      pageTitle={`header 2.1.2.2`}
      src={Header2122Image}
      backRoute="/batch"
    />
  );
};

export default Header2122Page;
