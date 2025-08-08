import { Card13111StatusImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Card13111StatusPage = () => {
  return (
    <CommonPage
      pageTitle={`card-1-3-1-1-1-status`}
      src={Card13111StatusImage}
      backRoute="/cards-get-cards"
    />
  );
};

export default Card13111StatusPage;
