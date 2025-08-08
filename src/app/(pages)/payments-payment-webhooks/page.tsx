import { PaymentsPaymentWebhooksImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload",
    coords: "29,98,259,167",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-authorized",
    coords: "51,199,327,257",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-executed",
    coords: "51,1389,298,1455",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-failed",
    coords: "52,2586,248,2652",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-settled",
    coords: "59,3785,280,3848",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-payment-creditable",
    coords: "59,4973,464,5054",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-settlement-stalled",
    coords: "53,5310,418,5387",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-payload-payment-disputed",
    coords: "44,5625,429,5708",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-headers",
    coords: "24,6033,258,6107",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-payment-webhooks-responses",
    coords: "29,6332,334,6410",
    shape: "rect",
    target: "_self"
  }
];

const PaymentsPaymentWebhooksPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Payments webhooks`}
      image={PaymentsPaymentWebhooksImage}
      backRoute="/true-layer-payments-api-v3-payments"
      areas={areas}
    />
  );
};

export default PaymentsPaymentWebhooksPage;
