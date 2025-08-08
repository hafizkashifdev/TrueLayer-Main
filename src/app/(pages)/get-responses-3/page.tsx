import { GetResponses3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponses3Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={GetResponses3Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponses3Page;
