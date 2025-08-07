import { GetCard15403AccessDeniedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard15403AccessDeniedPage = () => {
  return (
    <CommonPage
      pageTitle={`403(Access Denied) `}
      src={GetCard15403AccessDeniedImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard15403AccessDeniedPage;
