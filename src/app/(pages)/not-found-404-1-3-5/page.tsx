import { NotFound404135Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NotFound404135Page = () => {
  return (
    <CommonPage
      pageTitle={`not found 404 1.3.5`}
      src={NotFound404135Image}
      backRoute="/batch"
    />
  );
};

export default NotFound404135Page;
