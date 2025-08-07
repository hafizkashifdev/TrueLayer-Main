import { LegacyPaydirectApiTransactionsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "",
    coords: "",
    shape: "",
  },
];

const LegacyPaydirectApiTransactionsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API Transactions`}
      image={LegacyPaydirectApiTransactionsImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiTransactionsPage;
