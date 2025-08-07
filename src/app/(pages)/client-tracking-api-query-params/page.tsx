import { ClientTrackingApiQueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiQueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`Query Params`}
      src={ClientTrackingApiQueryParamsImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiQueryParamsPage;
