import { ClientTrackingApiTrackedApiImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiTrackedApiPage = () => {
  return (
    <CommonPage
      pageTitle={`Tracked API`}
      src={ClientTrackingApiTrackedApiImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiTrackedApiPage;
