import { DeleteACredentialImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeleteACredentialPage = () => {
  return (
    <CommonPage
      pageTitle={`Delete a credential`}
      src={DeleteACredentialImage}
      backRoute="/authentication-server-access-token"
    />
  );
};

export default DeleteACredentialPage;
