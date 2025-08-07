import { GetResponse400InvalidParameters5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetResponse400InvalidParameters5Page = () => {
  return (
    <CommonPage
      pageTitle={`Response 400(Invalid Parameters)`}
      src={GetResponse400InvalidParameters5Image}
      backRoute="/mandates-get-mandate"
    />
  );
};

export default GetResponse400InvalidParameters5Page;
