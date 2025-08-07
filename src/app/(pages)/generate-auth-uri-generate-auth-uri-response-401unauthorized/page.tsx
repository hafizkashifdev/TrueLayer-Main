import { GenerateAuthUriGenerateAuthUriResponse401UnauthorizedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateAuthUriGenerateAuthUriResponse401UnauthorizedPage = () => {
  return (
    <CommonPage
      pageTitle={`Response 401(Unauthorized)`}
      src={GenerateAuthUriGenerateAuthUriResponse401UnauthorizedImage}
      backRoute="/generate-auth-uri"
    />
  );
};

export default GenerateAuthUriGenerateAuthUriResponse401UnauthorizedPage;
