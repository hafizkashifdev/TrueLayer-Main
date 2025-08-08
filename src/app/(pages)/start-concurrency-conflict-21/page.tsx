import { StartConcurrencyConflict21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StartConcurrencyConflict21Page = () => {
  return (
    <CommonPage
      pageTitle={`Concurrency Conflict `}
      src={StartConcurrencyConflict21Image}
      backRoute="/mandates-start-authorization-flow"
    />
  );
};

export default StartConcurrencyConflict21Page;
