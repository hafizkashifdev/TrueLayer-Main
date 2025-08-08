import { ClientTrackingApiResponse401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponse401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthorized)`}
      src={ClientTrackingApiResponse401UnauthorizedImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponse401UnauthorizedPage;
