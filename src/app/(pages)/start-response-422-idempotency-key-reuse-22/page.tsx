import { StartResponse422IdempotencyKeyReuse22Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartResponse422IdempotencyKeyReuse22Page = () => {
  return (
    <CommonPage
      pageTitle={` Response (422 Idempotency-Key Reuse) `}
      src={StartResponse422IdempotencyKeyReuse22Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartResponse422IdempotencyKeyReuse22Page;
