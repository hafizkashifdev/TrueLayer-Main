import { Responses400Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Responses400Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses 400`}
      src={Responses400Image}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default Responses400Page;
