import { UnknownErrorResponseBody400Image } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const UnknownErrorResponseBody400Page = () => {
  return (
    <CommonPage
      pageTitle={`Unknown Error _ Response Body_400`}
      src={UnknownErrorResponseBody400Image}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default UnknownErrorResponseBody400Page;
