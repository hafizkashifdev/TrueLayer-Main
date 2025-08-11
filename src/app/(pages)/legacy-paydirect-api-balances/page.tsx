import { LegacyPaydirectApiBalancesImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "legacy-paydirect-api-balances-get-account-balances",
    title: "legacy-paydirect-api-balances-get-account-balances",
    href: "/legacy-paydirect-api-balances-get-account-balances",
    coords: "12,21,375,78",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-balances-responses",
    title: "legacy-paydirect-api-balances-responses",
    href: "/legacy-paydirect-api-balances-responses",
    coords: "72,351,593,400",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-balances-responses-200-body-balance",
    title: "legacy-paydirect-api-balances-responses-200-body-balance",
    href: "/legacy-paydirect-api-balances-responses-200-body-balance",
    coords: "95,483,618,548",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-balances-responses-401-body-unauthorized",
    title: "legacy-paydirect-api-balances-responses-401-body-unauthorized",
    href: "/legacy-paydirect-api-balances-responses-401-body-unauthorized",
    coords: "100,809,654,870",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-balances-responses-500-body-internal-server-error",
    title: "legacy-paydirect-api-balances-responses-500-body-internal-server-error",
    href: "/legacy-paydirect-api-balances-responses-500-body-internal-server-error",
    coords: "955,812,1590,878",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-balances",
    title: "legacy-paydirect-api-balances",
    href: "https://paydirect.truelayer.com/v1/balances",
    coords: "1394,18,1790,76",
    shape: "rect",
  },
];

const LegacyPaydirectApiBalancesPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API balances`}
      image={LegacyPaydirectApiBalancesImage}
      backRoute="/legacy-pay-direct-api"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiBalancesPage;
