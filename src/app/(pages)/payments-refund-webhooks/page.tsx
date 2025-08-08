import { PaymentsRefundWebhooksImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "payments-refund-webhooks-payload-1",
    coords: "253,179,26,119",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-refund-webhooks-payload-executed",
    coords: "46,224,304,293",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-refund-webhooks-payload-failed",
    coords: "44,543,280,608",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-refund-webhooks-payload-headers",
    coords: "27,923,238,984",
    shape: "rect",
    target: "_self"
  },
  {
    alt: "",
    title: "",
    href: "payments-refund-webhooks-payload-responses",
    coords: "36,1212,326,1285",
    shape: "rect",
    target: "_self"
  }
];


const PaymentsRefundWebhooksPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Refund webhooks`}
      image={PaymentsRefundWebhooksImage}
      backRoute="/true-layer-payments-api-v3-payments"
      areas={areas}
    />
  );
};

export default PaymentsRefundWebhooksPage;
