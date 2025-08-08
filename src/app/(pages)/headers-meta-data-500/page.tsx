import { HeadersMetaData500Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HeadersMetaData500Page = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={HeadersMetaData500Image}
      backRoute="/meta-main"
    />
  );
};

export default HeadersMetaData500Page;
