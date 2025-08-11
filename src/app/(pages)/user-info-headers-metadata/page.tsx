import { UserInfoHeadersMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserInfoHeadersMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Headers`}
      src={UserInfoHeadersMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default UserInfoHeadersMetadataPage;
