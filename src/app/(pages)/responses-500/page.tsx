import { Responses500Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Responses500Page = () => {
  return (
    <CommonPage
      pageTitle={`Responses 500`}
      src={Responses500Image}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default Responses500Page;
