import { Responses200Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Responses200Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses 200`}
      src={Responses200Image}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default Responses200Page;
