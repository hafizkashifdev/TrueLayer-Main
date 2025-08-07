import { ClientTrackingApiResponse400BadRequestImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponse400BadRequestPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Bad Request) `}
      src={ClientTrackingApiResponse400BadRequestImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponse400BadRequestPage;
