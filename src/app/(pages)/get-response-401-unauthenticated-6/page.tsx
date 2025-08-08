import { GetResponse401Unauthenticated6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse401Unauthenticated6Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 401 (Unauthenticated)`}
      src={GetResponse401Unauthenticated6Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse401Unauthenticated6Page;
