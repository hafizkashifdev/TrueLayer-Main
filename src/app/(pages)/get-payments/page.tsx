import { GetPaymentsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Get Payments 1",
    title: "Get Payments 1",
    href: "/get-payments-01",
    coords: "48,131,334,191",
    shape: "rect",
  },
  {
    alt: "Get Payments 2",
    title: "Get Payments 2",
    href: "/get-payments-02",
    coords: "998,132,1303,187",
    shape: "rect",
  },
  {
    alt: "Get Payments 3",
    title: "Get Payments 3",
    href: "/get-payments-03",
    coords: "31,435,250,487",
    shape: "rect",
  },
  {
    alt: "Get Payments 4",
    title: "Get Payments 4",
    href: "/get-payments-04",
    coords: "59,525,409,582",
    shape: "rect",
  },
  {
    alt: "Get Payments 5",
    title: "Get Payments 5",
    href: "/get-payments-05",
    coords: "106,723,342,775",
    shape: "rect",
  },
  {
    alt: "Get Payments 6",
    title: "Get Payments 6",
    href: "/get-payments-06",
    coords: "881,718,1149,771",
    shape: "rect",
  },
  {
    alt: "Get Payments 7",
    title: "Get Payments 7",
    href: "/get-payments-07",
    coords: "108,1004,304,1058",
    shape: "rect",
  },
  {
    alt: "Get Payments 9",
    title: "Get Payments 9",
    href: "/get-payments-09",
    coords: "54,1345,458,1397",
    shape: "rect",
  },
  {
    alt: "Get Payments 8",
    title: "Get Payments 8",
    href: "/get-payments-08",
    coords: "991,1350,1353,1401",
    shape: "rect",
  },
  {
    alt: "Get Payments 10",
    title: "Get Payments 10",
    href: "/get-payments-10",
    coords: "61,1832,354,1891",
    shape: "rect",
  },
  {
    alt: "Get Payments 11",
    title: "Get Payments 11",
    href: "/get-payments-11",
    coords: "978,1836,1453,1891",
    shape: "rect",
  },
  {
    alt: "Get Payments 12",
    title: "Get Payments 12",
    href: "/get-payments-12",
    coords: "46,2314,461,2364",
    shape: "rect",
  },
  {
    alt: "Get Payments 13",
    title: "Get Payments 13",
    href: "/get-payments-13",
    coords: "983,2319,1390,2374",
    shape: "rect",
  },
  {
    alt: "Get payment",
    title: "Get payment",
    href: "https://api.truelayer-sandbox.com/v3/payment-links/%7Bid%7D/payments",
    coords: "1087,22,1771,72",
    shape: "rect",
  },
];

const GetPaymentsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get payments`}
      image={GetPaymentsImage}
      backRoute="/payment-links"
      areas={areas}
    />
  );
};

export default GetPaymentsPage;
