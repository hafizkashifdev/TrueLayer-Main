import { GenerateAuthUriGenerateAuthUriResponse403Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateAuthUriGenerateAuthUriResponse403Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 403`}
      src={GenerateAuthUriGenerateAuthUriResponse403Image}
      backRoute="/generate-auth-uri"
    />
  );
};

export default GenerateAuthUriGenerateAuthUriResponse403Page;
