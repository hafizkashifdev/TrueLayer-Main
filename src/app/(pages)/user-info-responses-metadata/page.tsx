import { UserInfoResponsesMetadataImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UserInfoResponsesMetadataPage = () => {
  return (
    <CommonPage
      pageTitle={`Responses`}
      src={UserInfoResponsesMetadataImage}
      backRoute="/meta-main"
    />
  );
};

export default UserInfoResponsesMetadataPage;
