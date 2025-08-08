import { Card13102HeaderImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card13102HeaderPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-10-2-header`}
      src={Card13102HeaderImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card13102HeaderPage;
