import { DisableSweeping401UnauthenticatedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisableSweeping401UnauthenticatedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`401_ unauthenticated _ Response Body`}
      src={DisableSweeping401UnauthenticatedResponseBodyImage}
      backRoute="/merchant-disable-sweeping"
    />
  );
};

export default DisableSweeping401UnauthenticatedResponseBodyPage;
