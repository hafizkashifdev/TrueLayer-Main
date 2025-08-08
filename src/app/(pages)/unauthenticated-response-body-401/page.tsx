import { UnauthenticatedResponseBody401Image } from "@/assets";
import { CommonPage } from "@/components";

import React from "react";

const UnauthenticatedResponseBody401Page = () => {
  return (
    <CommonPage
      pageTitle={` Unauthenticated _ Response Body_401 `}
      src={UnauthenticatedResponseBody401Image}
      backRoute="/merchant-list-merchant-accounts"
    />
  );
};

export default UnauthenticatedResponseBody401Page;
