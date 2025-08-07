import { ClientTrackingApiResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`Response`}
      src={ClientTrackingApiResponseImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponsePage;
