import { PaymentsGetPaymentRefundsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas =  [
  {
    name: "",
    alt: "",
    title: "",
    href: "https://api.truelayer-sandbox.com/v3/payments/%7Bid%7D/refunds",
    coords: "1184,17,1855,86",
    shape: "rect",
    target: "_blank"
  },
  {
    name: "Path Params",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-path-params",
    coords: "32,116,344,184",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Responses",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses",
    coords: "35,418,256,489",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Refunds of the Payment",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-200-refunds-of-the-payment",
    coords: "49,517,294,577",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Refund Pending",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-200-refunds-of-the-payment-pending",
    coords: "70,636,319,686",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Refund Authorized",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-200-refunds-of-the-payment-authorized",
    coords: "79,910,390,970",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Refund Executed",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-200-refunds-of-the-payment-executed",
    coords: "72,1182,349,1236",
    shape: "rect",
    target: "_self"
  },
  {
    name: "Refund Failed",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-200-refunds-of-the-payment-failed",
    coords: "74,1452,324,1503",
    shape: "rect",
    target: "_parent"
  },
  {
    name: "401 Unauthenticated",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-401-unauthenticated",
    coords: "45,1958,426,2019",
    shape: "rect",
    target: "_self"
  },
  {
    name: "403 Forbidden",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-403-forbidden",
    coords: "977,1950,1282,2009",
    shape: "rect",
    target: "_self"
  },
  {
    name: "404 Refund Not Found",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-404-refund-not-found",
    coords: "42,2438,455,2499",
    shape: "rect",
    target: "_self"
  },
  {
    name: "500 Unknown Error",
    alt: "",
    title: "",
    href: "payments-get-payments-refund-responses-500-unknown-error",
    coords: "978,2437,1340,2493",
    shape: "rect",
    target: "_self"
  }
];

const PaymentsGetPaymentRefundsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get payment refunds`}
      image={PaymentsGetPaymentRefundsImage}
      backRoute="/true-layer-payments-api-v3-payments"
      areas={areas}
    />
  );
};

export default PaymentsGetPaymentRefundsPage;
