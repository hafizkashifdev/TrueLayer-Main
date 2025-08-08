import { Card11QueryParamsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card11QueryParamsPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-1-query-params`}
      src={Card11QueryParamsImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card11QueryParamsPage;
