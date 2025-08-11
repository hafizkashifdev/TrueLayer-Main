import { LegacyPaydirectApiTransactionsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Legacy Paydirect Api Transactions Query Params",
    title: "Legacy Paydirect Api Transactions Query Params",
    href: "/legacy-paydirect-api-transactions-query-params",
    coords: "33,112,291,171",
    shape: "rect",
  },
  {
    alt: "Legacy Paydirect Api Transactions Responses",
    title: "Legacy Paydirect Api Transactions Responses",
    href: "/legacy-paydirect-api-transactions-responses",
    coords: "43,427,268,472",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-body-collection-of-transactions",
    title: "legacy-paydirect-api-transactions-responses-200-body-collection-of-transactions",
    href: "/legacy-paydirect-api-transactions-responses-200-body-collection-of-transactions",
    coords: "68,538,812,611",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-deposit-transaction",
    title: "legacy-paydirect-api-transactions-responses-200-deposit-transaction",
    href: "/legacy-paydirect-api-transactions-responses-200-deposit-transaction",
    coords: "86,674,457,728",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-authorized-with-drawl",
    title: "legacy-paydirect-api-transactions-responses-200-authorized-with-drawl",
    href: "/legacy-paydirect-api-transactions-responses-200-authorized-with-drawl",
    coords: "100,987,489,1042",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-submitted-with-drawl",
    title: "legacy-paydirect-api-transactions-responses-200-submitted-with-drawl",
    href: "/legacy-paydirect-api-transactions-responses-200-submitted-with-drawl",
    coords: "103,1298,475,1358",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-settled-with-drawl",
    title: "legacy-paydirect-api-transactions-responses-200-settled-with-drawl",
    href: "/legacy-paydirect-api-transactions-responses-200-settled-with-drawl",
    coords: "107,1584,429,1644",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactionsresponses-200-failed-with-drawl",
    title: "legacy-paydirect-api-transactionsresponses-200-failed-with-drawl",
    href: "/legacy-paydirect-api-transactionsresponses-200-failed-with-drawl",
    coords: "105,1858,406,1921",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-200-rejected-with-drawl",
    title: "legacy-paydirect-api-transactions-responses-200-rejected-with-drawl",
    href: "/legacy-paydirect-api-transactions-responses-200-rejected-with-drawl",
    coords: "103,2120,450,2183",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-400-body-invalid-request",
    title: "legacy-paydirect-api-transactions-responses-400-body-invalid-request",
    href: "/legacy-paydirect-api-transactions-responses-400-body-invalid-request",
    coords: "81,2410,613,2478",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-401-body-unauthorized",
    title: "legacy-paydirect-api-transactions-responses-401-body-unauthorized",
    href: "/legacy-paydirect-api-transactions-responses-401-body-unauthorized",
    coords: "957,2413,1469,2473",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-404-body-not-found",
    title: "legacy-paydirect-api-transactions-responses-404-body-not-found",
    href: "/legacy-paydirect-api-transactions-responses-404-body-not-found",
    coords: "81,2678,580,2740",
    shape: "rect",
  },
  {
    alt: "legacy-paydirect-api-transactions-responses-500-body-internal-server-error",
    title: "legacy-paydirect-api-transactions-responses-500-body-internal-server-error",
    href: "/legacy-paydirect-api-transactions-responses-500-body-internal-server-error",
    coords: "950,2703,1551,2761",
    shape: "rect",
  },
  {
    alt: "balances",
    title: "balances",
    href: "https://paydirect.truelayer.com/v1/balances",
    coords: "1388,23,1813,80",
    shape: "rect",
  },
];

const LegacyPaydirectApiTransactionsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API Transactions`}
      image={LegacyPaydirectApiTransactionsImage}
      backRoute="/legacy-pay-direct-api"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiTransactionsPage;
