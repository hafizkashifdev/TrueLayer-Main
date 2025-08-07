import { ClientTrackingApiResponse200SuccessfulResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ClientTrackingApiResponse200SuccessfulResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`ResResponse 200(Successful response)`}
      src={ClientTrackingApiResponse200SuccessfulResponseImage}
      backRoute="/client-tracking-api"
    />
  );
};

export default ClientTrackingApiResponse200SuccessfulResponsePage;
