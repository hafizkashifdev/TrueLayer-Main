import { InternalServerError500137Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerError500137Page = () => {
  return (
    <CommonPage
      pageTitle={`internal server error 500 1.3.7`}
      src={InternalServerError500137Image}
      backRoute="/batch"
    />
  );
};

export default InternalServerError500137Page;
