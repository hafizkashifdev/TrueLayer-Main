import { GetSweepingSettings401UnauthenticatedResponseBodyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetSweepingSettings401UnauthenticatedResponseBodyPage = () => {
  return (
    <CommonPage
      pageTitle={`Response Body`}
      src={GetSweepingSettings401UnauthenticatedResponseBodyImage}
      backRoute="/merchant-get-sweeping-settings"
    />
  );
};

export default GetSweepingSettings401UnauthenticatedResponseBodyPage;
