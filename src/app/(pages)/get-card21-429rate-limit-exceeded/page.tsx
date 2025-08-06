import { GetCard21429RateLimitExceededImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GetCard21429RateLimitExceededPage = () => {
  return (
    <CommonPage
      pageTitle={` 429(Rate Limit Exceeded) `}
      src={GetCard21429RateLimitExceededImage}
      backRoute="/cards-get-card"
    />
  );
};

export default GetCard21429RateLimitExceededPage;
