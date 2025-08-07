import { StartResponse500UnknownError23Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse500UnknownError23Page = () => {
  return (
    <CommonPage
      pageTitle={`  Response (500 Unknown Error) `}
      src={StartResponse500UnknownError23Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse500UnknownError23Page;
