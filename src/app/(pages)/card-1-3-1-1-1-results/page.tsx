import { Card13111ResultsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card13111ResultsPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-1-1-1-results`}
      src={Card13111ResultsImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card13111ResultsPage;
