import { PaymentLinkWebhooksImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Payment Link Webhooks 1",
    title: "Payment Link Webhooks 1",
    href: "/payment-link-webhooks-01",
    coords: "14,28,357,65",
    shape: "rect",
  },
  {
    alt: "Payment Link Webhooks 2",
    title: "Payment Link Webhooks 2",
    href: "/payment-link-webhooks-02",
    coords: "61,196,628,257",
    shape: "rect",
  },
  {
    alt: "Payment Link Webhooks 3",
    title: "Payment Link Webhooks 3",
    href: "/payment-link-webhooks-03",
    coords: "52,541,508,589",
    shape: "rect",
  },
];

const PaymentLinkWebhooksPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Payment link webhooks`}
      image={PaymentLinkWebhooksImage}
      backRoute="/payment-links"
      areas={areas}
    />
  );
};

export default PaymentLinkWebhooksPage;
