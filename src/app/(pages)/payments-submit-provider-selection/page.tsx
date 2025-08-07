
import React from "react";
import { PaymentsSubmitProviderSelectionImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Submit provider selection_ Path Params',
    href: '/submit-provider-selection-path-params',
    x: 39.82,
    y: 119.46,
    width: 273.54,
    height: 50.21
  },
  {
    id: 2,
    title: 'Submit provider selection_ Body Params',
    href: '/submit-provider-selection-body-params',
    x: 585.16,
    y: 117.72,
    width: 299.51,
    height: 53.67
  },
  {
    id: 3,
    title: 'Submit provider selection_ Headers',
    href: '/submit-provider-selection-headers',
    x: 1133.96,
    y: 121.19,
    width: 211.21,
    height: 51.94
  },
  {
    id: 4,
    title: 'Submit provider selection_Responses',
    href: '/submit-provider-selection-responses',
    x: 41.55,
    y: 425.89,
    width: 219.87,
    height: 53.67
  },
  {
    id: 5,
    title: 'Submit provider selection_ Responses_200 Payment',
    href: '/submit-provider-selection-responses-200-payment',
    x: 58.86,
    y: 519.37,
    width: 270.07,
    height: 53.67
  },
  {
    id: 6,
    title: 'Submit provider selection_ Responses_400 Invalid Request',
    href: '/submit-provider-selection-responses-400-invalid-request',
    x: 48.47,
    y: 1024.90,
    width: 377.41,
    height: 53.67
  },
  {
    id: 7,
    title: 'Submit provider selection_ Responses_401 Unauthenticated',
    href: '/submit-provider-selection-responses-401-unauthenticated',
    x: 50.21,
    y: 1812.61,
    width: 384.34,
    height: 60.59
  },
  {
    id: 8,
    title: 'Submit provider selection_ Responses_403 Forbidden',
    href: '/submit-provider-selection-responses-403-forbidden',
    x: 51.94,
    y: 2300.82,
    width: 290.85,
    height: 60.59
  },
  {
    id: 9,
    title: 'Submit provider selection_ Responses 404 Payment Not Found',
    href: '/submit-provider-selection-responses-404-payment-not-found',
    x: 50.21,
    y: 2790.77,
    width: 432.81,
    height: 55.40
  },
  {
    id: 10,
    title: 'Submit provider selection_ Responses 409 Conflict',
    href: '/submit-provider-selection-responses-409-conflict',
    x: 55.40,
    y: 3277.25,
    width: 277.00,
    height: 67.52
  },
  {
    id: 11,
    title: 'Submit provider selection_ Responses_422 Idempotency-Key Reuse',
    href: '/submit-provider-selection-responses-422-idempotency-key-reuse',
    x: 51.94,
    y: 4068.42,
    width: 467.44,
    height: 58.86
  },
  {
    id: 12,
    title: 'Submit provider selection_ Responses_500 Unknown Error',
    href: '/submit-provider-selection-responses-500-unknown-error',
    x: 50.21,
    y: 4567.02,
    width: 354.91,
    height: 53.67
  },
  {
    id: 13,
    title: 'POST',
    href: 'https://api.truelayer-sandbox.com/v3/payments/{id}/authorization-flow/actions/provider-selection',
    x: 1286.31,
    y: 27.70,
    width: 438.00,
    height: 39.82
  }
];

const PaymentsSubmitProviderSelectionPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsSubmitProviderSelectionImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Submit provider selection'}
      areas={areas}
      imageHeight={5022}
      imageWidth={1823}
    />
  );
};

export default PaymentsSubmitProviderSelectionPage;
