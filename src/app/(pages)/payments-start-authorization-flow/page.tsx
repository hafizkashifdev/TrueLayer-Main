
import React from "react";
import { PaymentsStartAuthorizationFlowImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Start authorization flow_ Path Params',
    href: '/start-authorization-flow-path-params',
    x: 36.36,
    y: 124.65,
    width: 277.00,
    height: 50.21
  },
  {
    id: 2,
    title: 'Start authorization flow_ Body Params',
    href: '/start-authorization-flow-body-params',
    x: 354.91,
    y: 126.38,
    width: 282.19,
    height: 50.21
  },
  {
    id: 3,
    title: 'Start authorization flow_ Headers',
    href: '/start-authorization-flow-headers',
    x: 38.09,
    y: 432.81,
    width: 204.29,
    height: 57.13
  },
  {
    id: 4,
    title: 'Start authorization flow_Responses',
    href: '/start-authorization-flow-responses',
    x: 41.55,
    y: 761.75,
    width: 212.94,
    height: 57.13
  },
  {
    id: 5,
    title: 'Start authorization flow_ Responses_200 Payment',
    href: '/start-authorization-flow-responses-200-payment',
    x: 62.32,
    y: 862.16,
    width: 297.77,
    height: 46.74
  },
  {
    id: 6,
    title: 'Start authorization flow_ Responses_400 Invalid Request',
    href: '/start-authorization-flow-responses-400-invalid-request',
    x: 65.79,
    y: 1372.88,
    width: 349.71,
    height: 55.40
  },
  {
    id: 7,
    title: 'Start authorization flow_ Responses_401 Unauthenticated',
    href: '/start-authorization-flow-responses-401-unauthenticated',
    x: 62.32,
    y: 2158.86,
    width: 373.95,
    height: 64.06
  },
  {
    id: 8,
    title: 'Start authorization flow_ Responses_403 Forbidden',
    href: '/start-authorization-flow-responses-403-forbidden',
    x: 60.59,
    y: 2652.27,
    width: 297.77,
    height: 51.94
  },
  {
    id: 9,
    title: 'Start authorization flow_ Responses 404 Payment Not Found',
    href: '/start-authorization-flow-responses-404-payment-not-found',
    x: 67.52,
    y: 3138.75,
    width: 415.50,
    height: 53.67
  },
  {
    id: 10,
    title: 'Start authorization flow_ Responses 409 Conflict',
    href: '/start-authorization-flow-responses-409-conflict',
    x: 65.79,
    y: 3623.49,
    width: 247.57,
    height: 57.13
  },
  {
    id: 11,
    title: 'Start authorization flow_ Responses_422 Idempotency-Key Reuse',
    href: '/start-authorization-flow-responses-422-idempotency-key-reuse',
    x: 64.06,
    y: 4412.94,
    width: 467.44,
    height: 55.40
  },
  {
    id: 12,
    title: 'Start authorization flow_ Responses_500 Unknown Error',
    href: '/start-authorization-flow-responses-500-unknown-error',
    x: 65.79,
    y: 4890.76,
    width: 365.29,
    height: 69.25
  },
  {
    id: 13,
    title: 'POST',
    href: 'https://api.truelayer-sandbox.com/v3/payments/{id}/authorization-flow',
    x: 1300.16,
    y: 43.28,
    width: 413.77,
    height: 34.62
  }
];

const PaymentsStartAuthorizationFlowPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsStartAuthorizationFlowImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Start authorization flow'}
      areas={areas}
      imageHeight={5430}
      imageWidth={1823}
    />
  );
};

export default PaymentsStartAuthorizationFlowPage;
