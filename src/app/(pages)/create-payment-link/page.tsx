import { CreatePaymentLinkImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Create Payment Link 1",
    title: "Create Payment Link 1",
    href: "/create-payment-link-01",
    coords: "26,121,308,178",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 14",
    title: "Create Payment Link 14",
    href: "/create-payment-link-14",
    coords: "39,436,434,482",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 2",
    title: "Create Payment Link 2",
    href: "/create-payment-link-02",
    coords: "81,749,409,806",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 3",
    title: "Create Payment Link 3",
    href: "/create-payment-link-03",
    coords: "85,2378,323,2429",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 4",
    title: "Create Payment Link 4",
    href: "/create-payment-link-04",
    coords: "6,3097,197,3147",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 5",
    title: "Create Payment Link 5",
    href: "/create-payment-link-05",
    coords: "34,3392,234,3443",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 6",
    title: "Create Payment Link 6",
    href: "/create-payment-link-06",
    coords: "55,3484,420,3528",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 7",
    title: "Create Payment Link 7",
    href: "/create-payment-link-07",
    coords: "489,3476,892,3531",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 8",
    title: "Create Payment Link 8",
    href: "/create-payment-link-08",
    coords: "81,3965,441,4008",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 9",
    title: "Create Payment Link 9",
    href: "/create-payment-link-09",
    coords: "1008,3954,1290,4008",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 10",
    title: "Create Payment Link 10",
    href: "/create-payment-link-10",
    coords: "81,4436,754,4495",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 11",
    title: "Create Payment Link 11",
    href: "/create-payment-link-11",
    coords: "1013,4436,1483,4498",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 12",
    title: "Create Payment Link 12",
    href: "/create-payment-link-12",
    coords: "81,4926,493,4973",
    shape: "rect",
  },
  {
    alt: "Create Payment Link 13",
    title: "Create Payment Link 13",
    href: "/create-payment-link-13",
    coords: "1006,4915,1419,4977",
    shape: "rect",
  },
  {
    alt: "Create Payment Link",
    title: "Create Payment Link",
    href: "https://api.truelayer-sandbox.com/v3/payment-links",
    coords: "1095,27,1545,72",
    shape: "rect",
  },
];

const CreatePaymentLinkPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Create payment link`}
      image={CreatePaymentLinkImage}
      backRoute="/truelayer-payments-api-v3"
      areas={areas}
    />
  );
};

export default CreatePaymentLinkPage;
