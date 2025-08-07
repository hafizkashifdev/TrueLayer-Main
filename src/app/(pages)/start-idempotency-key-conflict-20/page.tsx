import { StartIdempotencyKeyConflict20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartIdempotencyKeyConflict20Page = () => {
  return (
    <CommonPage
      pageTitle={`Idempotency-Key Conflict `}
      src={StartIdempotencyKeyConflict20Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartIdempotencyKeyConflict20Page;
