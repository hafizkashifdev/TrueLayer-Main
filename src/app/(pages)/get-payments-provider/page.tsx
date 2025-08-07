import { GetPaymentsProviderImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Get Payments Provider 1",
    title: "Get Payments Provider 1",
    href: "/get-payments-provider-01",
    coords: "14,15,411,75",
    shape: "rect",
  },
  {
    alt: "Get Payments Provider 2",
    title: "Get Payments Provider 2",
    href: "/get-payments-provider-02",
    coords: "39,440,265,488",
    shape: "rect",
  },
  {
    alt: "Get Payments Provider 3",
    title: "Get Payments Provider 3",
    href: "/get-payments-provider-03",
    coords: "53,524,518,579",
    shape: "rect",
  },
  {
    alt: "Get Payments Provider 4",
    title: "Get Payments Provider 4",
    href: "/get-payments-provider-04",
    coords: "54,1168,474,1225",
    shape: "rect",
  },
  {
    alt: "Get Payments Provider 5",
    title: "Get Payments Provider 5",
    href: "/get-payments-provider-05",
    coords: "998,1171,1426,1230",
    shape: "rect",
  },
  {
    alt: "Get Payments Provider By Id",
    title: "Get Payments Provider By Id",
    href: "https://api.truelayer-sandbox.com/v3/payments-providers",
    coords: "1110,27,1659,79",
    shape: "rect",
  },
];

const GetPaymentsProviderPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get payments provider`}
      image={GetPaymentsProviderImage}
      backRoute="/payments-providers"
      areas={areas}
    />
  );
};

export default GetPaymentsProviderPage;
