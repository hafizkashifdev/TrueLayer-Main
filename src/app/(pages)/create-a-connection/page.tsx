import { CreateAConnectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateAConnectionPage = () => {
  return (
    <CommonPage
      pageTitle={`Create a Connection`}
      src={CreateAConnectionImage}
      backRoute="/connection-api"
    />
  );
};

export default CreateAConnectionPage;
