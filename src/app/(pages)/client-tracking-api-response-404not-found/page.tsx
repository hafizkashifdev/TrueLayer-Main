import { ClientTrackingApiResponse404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponse404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 404(Not Found)`}
      src={ClientTrackingApiResponse404NotFoundImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponse404NotFoundPage;
