import { GenerateAuthUriGenerateAuthUriResponse500Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GenerateAuthUriGenerateAuthUriResponse500Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 500`}
      src={GenerateAuthUriGenerateAuthUriResponse500Image}
      backRoute="/generate-auth-uri"
    />
  );
};

export default GenerateAuthUriGenerateAuthUriResponse500Page;
