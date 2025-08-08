import { InternalServerError500Meta120Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InternalServerError500Meta120Page = () => {
  return (
    <CommonPage
      pageTitle={`500(Internal Server Error)`}
      src={InternalServerError500Meta120Image}
      backRoute="/meta-main"
    />
  );
};

export default InternalServerError500Meta120Page;
