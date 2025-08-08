import { ResponseBodyMeta120Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponseBodyMeta120Page = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={ResponseBodyMeta120Image}
      backRoute="/meta-main"
    />
  );
};

export default ResponseBodyMeta120Page;
