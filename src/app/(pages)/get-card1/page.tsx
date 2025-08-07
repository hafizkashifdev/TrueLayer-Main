import { GetCard1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard1Page = () => {
  return (
    <CommonPage
      pageTitle={`Get Card`}
      src={GetCard1Image}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard1Page;
