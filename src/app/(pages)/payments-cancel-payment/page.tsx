import { PaymentsCancelPaymentImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "https://api.truelayer-sandbox.com/v3/payments",
    coords: "1093,24,1680,71",
    shape: "rect",
    target: "_blank"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-path-params",
    coords: "46,114,336,184",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-headers",
    coords: "943,114,1160,188",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses",
    coords: "25,425,247,488",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-202-accepted",
    coords: "49,523,344,580",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-400-invalid-request",
    coords: "46,980,449,1045",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-401-unauthenticated",
    coords: "54,1470,434,1532",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-403-forbidden",
    coords: "64,1975,354,2036",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-404-payment-not-found",
    coords: "54,2458,467,2517",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-409-conflict",
    coords: "58,2960,316,3019",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-422-idempotency-key-reuse",
    coords: "45,3760,519,3824",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-cancel-payment-responses-500-unknown-error",
    coords: "50,4249,413,4318",
    shape: "rect",
    target: "_self"
  }
];


const PaymentsCancelPaymentPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Cancel Payment`}
      image={PaymentsCancelPaymentImage}
      backRoute="/true-layer-payments-api-v3-payments"
      areas={areas}
    />
  );
};

export default PaymentsCancelPaymentPage;
