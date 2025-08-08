import { Card12HeadersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card12HeadersPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-2-headers`}
      src={Card12HeadersImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card12HeadersPage;
