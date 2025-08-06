import { GetPaymentLinkImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Get Payment Link 1",
    title: "Get Payment Link 1",
    href: "/get-payment-link-01",
    coords: "51,129,351,192",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 2",
    title: "Get Payment Link 2",
    href: "/get-payment-link-02",
    coords: "36,443,240,489",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 3",
    title: "Get Payment Link 3",
    href: "/get-payment-link-03",
    coords: "58,532,409,581",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 4",
    title: "Get Payment Link 4",
    href: "/get-payment-link-04",
    coords: "110,713,330,770",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 5",
    title: "Get Payment Link 5",
    href: "/get-payment-link-05",
    coords: "886,721,1134,776",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 6",
    title: "Get Payment Link 6",
    href: "/get-payment-link-06",
    coords: "113,1002,354,1061",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 7",
    title: "Get Payment Link 7",
    href: "/get-payment-link-07",
    coords: "46,1345,414,1404",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 8",
    title: "Get Payment Link 8",
    href: "/get-payment-link-08",
    coords: "988,1350,1262,1402",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 9",
    title: "Get Payment Link 9",
    href: "/get-payment-link-09",
    coords: "54,1832,533,1884",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 10",
    title: "Get Payment Link 10",
    href: "/get-payment-link-10",
    coords: "983,1832,1401,1886",
    shape: "rect",
  },
  {
    alt: "Get Payment Link 11",
    title: "Get Payment Link 11",
    href: "/get-payment-link-11",
    coords: "51,2324,461,2388",
    shape: "rect",
  },
  {
    alt: "Get Payment Link",
    title: "Get Payment Link",
    href: "https://api.truelayer-sandbox.com/v3/payment-links/%7Bid%7D",
    coords: "1088,18,1773,74",
    shape: "rect",
  },
];

const GetPaymentLinkPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get payment link`}
      image={GetPaymentLinkImage}
      backRoute="/truelayer-payments-api-v3"
      areas={areas}
    />
  );
};

export default GetPaymentLinkPage;
