import { ResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={ResponsesImage}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default ResponsesPage;
