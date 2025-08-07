import { NotFound404214Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NotFound404214Page = () => {
  return (
    <CommonPage
      pageTitle={`not found 404 2.1.4`}
      src={NotFound404214Image}
      backRoute="/batch"
    />
  );
};

export default NotFound404214Page;
