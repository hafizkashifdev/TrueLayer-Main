import { CreateResponse409IdempotencyKeyConcurrencyConflict13Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateResponse409IdempotencyKeyConcurrencyConflict13Page = () => {
  return (
    <CommonPage
      pageTitle={` Response 409(idempotency key concurrency conflict)`}
      src={CreateResponse409IdempotencyKeyConcurrencyConflict13Image}
      backRoute="/mandates-create-mandate"
    />
  );
};

export default CreateResponse409IdempotencyKeyConcurrencyConflict13Page;
