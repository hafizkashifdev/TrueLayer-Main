import { ClientTrackingApiResponse500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponse500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 500(Internal Server Error)`}
      src={ClientTrackingApiResponse500InternalServerErrorImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponse500InternalServerErrorPage;
