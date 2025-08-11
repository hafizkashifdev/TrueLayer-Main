import { Card13ResponseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card13ResponsePage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-response`}
      src={Card13ResponseImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card13ResponsePage;
