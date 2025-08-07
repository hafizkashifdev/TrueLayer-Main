import { LegacyPaydirectApiDepositImage } from "@/assets";
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

const LegacyPaydirectApiDepositPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  Deposit`}
      image={LegacyPaydirectApiDepositImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiDepositPage;
