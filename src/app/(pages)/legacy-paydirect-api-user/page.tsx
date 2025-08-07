import { LegacyPaydirectApiUserImage } from "@/assets";
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

const LegacyPaydirectApiUserPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  User`}
      image={LegacyPaydirectApiUserImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiUserPage;
