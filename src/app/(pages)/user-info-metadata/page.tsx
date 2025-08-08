import { UserInfoMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserInfoMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`User Info`}
      src={UserInfoMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default UserInfoMetadataPage;
