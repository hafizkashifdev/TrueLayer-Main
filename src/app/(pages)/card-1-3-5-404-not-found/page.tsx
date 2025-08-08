import { Card135404NotFoundImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card135404NotFoundPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-5-404-not-found`}
      src={Card135404NotFoundImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card135404NotFoundPage;
