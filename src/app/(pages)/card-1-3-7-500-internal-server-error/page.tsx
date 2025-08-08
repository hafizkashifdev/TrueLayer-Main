import { Card137500InternalServerErrorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card137500InternalServerErrorPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-7-500-internal-server-error`}
      src={Card137500InternalServerErrorImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card137500InternalServerErrorPage;
