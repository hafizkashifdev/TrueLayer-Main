import { CreateHeader6Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateHeader6Page = () => {
  return (
    <CommonPage
      pageTitle={`Header`}
      src={CreateHeader6Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateHeader6Page;
