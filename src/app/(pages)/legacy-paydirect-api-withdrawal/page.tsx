import { LegacyPaydirectApiWithdrawalImage } from "@/assets";
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

const LegacyPaydirectApiWithdrawalPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  Withdrawal`}
      image={LegacyPaydirectApiWithdrawalImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiWithdrawalPage;
