import { GetResponse404MendateNotFound8Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse404MendateNotFound8Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 404 (Mendate Not found)`}
      src={GetResponse404MendateNotFound8Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse404MendateNotFound8Page;
