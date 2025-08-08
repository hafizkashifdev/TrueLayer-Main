import { PayoutWebhooksImage } from "@/assets";

// data/imageMapData.js
export const imageMapData = {
  imageUrl: {PayoutWebhooksImage}, // Update this path to where you store your SVG
  width: 1876,
  height: 1698,
  areas: [
    {
      id: 1,
      x: 35.63,
      y: 128.27,
      width: 197.75,
      height: 40.98,
      href: "#",
      title: "",
    },
    {
      id: 3,
      x: 60.57,
      y: 236.95,
      width: 222.7,
      height: 30.29,
      href: "/payout-webhooks-payload-executed",
      title: "payout-webhooks-payload-executed",
    },
    {
      id: 4,
      x: 48.1,
      y: 677,
      width: 188.85,
      height: 51.67,
      href: "/payout-webhooks-payload-failed",
      title: "payout-webhooks-payload-failed",
    },
    {
      id: 6,
      x: 39.19,
      y: 1145.55,
      width: 171.03,
      height: 46.32,
      href: "/payout-webhooks-headers",
      title: "payout-webhooks-headers",
    },
    {
      id: 7,
      x: 40.98,
      y: 1423.48,
      width: 267.24,
      height: 37.41,
      href: "/payout-webhooks-response-200",
      title: "payout-webhooks-response-200",
      selected: true,
    },
  ],
};