
import React from "react";
import { PaymentsSubmitSchemeSelectionImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Submit scheme selection_ Path Params',
    href: '/submit-scheme-selection-path-params',
    x: 45.01,
    y: 114.26,
    width: 275.27,
    height: 51.94
  },
  {
    id: 2,
    title: 'Submit scheme selection_ Body Params',
    href: '/submit-scheme-selection-body-params',
    x: 597.28,
    y: 114.26,
    width: 289.12,
    height: 51.94
  },
  {
    id: 3,
    title: 'Submit scheme selection_ Headers',
    href: '/submit-scheme-selection-headers',
    x: 1151.28,
    y: 110.80,
    width: 180.05,
    height: 60.59
  },
  {
    id: 4,
    title: 'Submit scheme selection_Responses',
    href: '/submit-scheme-selection-responses',
    x: 34.62,
    y: 432.81,
    width: 214.67,
    height: 50.21
  },
  {
    id: 5,
    title: 'Submit scheme selection_ Responses_200 Payment',
    href: '/submit-scheme-selection-responses-200-payment',
    x: 50.21,
    y: 519.37,
    width: 282.19,
    height: 53.67
  },
  {
    id: 6,
    title: 'Submit scheme selection_ Responses_400 Invalid Request',
    href: '/submit-scheme-selection-responses-400-invalid-request',
    x: 57.13,
    y: 1019.70,
    width: 351.44,
    height: 57.13
  },
  {
    id: 7,
    title: 'Submit scheme selection_ Responses_401 Unauthenticated',
    href: '/submit-scheme-selection-responses-401-unauthenticated',
    x: 55.40,
    y: 1807.42,
    width: 380.87,
    height: 57.13
  },
  {
    id: 8,
    title: 'Submit scheme selection_ Responses_403 Forbidden',
    href: '/submit-scheme-selection-responses-403-forbidden',
    x: 46.74,
    y: 2290.44,
    width: 297.77,
    height: 60.59
  },
  {
    id: 9,
    title: 'Submit scheme selection_ Responses 404 Payment Not Found',
    href: '/submit-scheme-selection-responses-404-payment-not-found',
    x: 57.13,
    y: 2778.65,
    width: 439.74,
    height: 57.13
  },
  {
    id: 10,
    title: 'Submit scheme selection_ Responses 409 Conflict',
    href: '/submit-scheme-selection-responses-409-conflict',
    x: 53.67,
    y: 3258.20,
    width: 259.69,
    height: 62.32
  },
  {
    id: 11,
    title: 'Submit scheme selection_ Responses_422 Idempotency-Key Reuse',
    href: '/submit-scheme-selection-responses-422-idempotency-key-reuse',
    x: 51.94,
    y: 4051.11,
    width: 502.06,
    height: 55.40
  },
  {
    id: 12,
    title: 'Submit scheme selection_ Responses_500 Unknown Error',
    href: '/submit-scheme-selection-responses-500-unknown-error',
    x: 55.40,
    y: 4535.86,
    width: 351.44,
    height: 57.13
  },
  {
    id: 13,
    title: 'POST',
    href: '/https://api.truelayer-sandbox.com/v3/payments/{id}/authorization-flow/actions/scheme-selection',
    x: 1282.85,
    y: 25.97,
    width: 432.81,
    height: 38.09
  }
];

const PaymentsSubmitSchemeSelectionPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsSubmitSchemeSelectionImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Submit scheme selection'}
      areas={areas}
      imageHeight={5022}
      imageWidth={1823}
    />
  );
};

export default PaymentsSubmitSchemeSelectionPage;
