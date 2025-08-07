import { GetResponse403Forbidden7Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse403Forbidden7Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 403 (Forbidden) `}
      src={GetResponse403Forbidden7Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse403Forbidden7Page;
