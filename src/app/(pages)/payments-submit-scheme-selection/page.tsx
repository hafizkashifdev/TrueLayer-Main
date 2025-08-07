
import React from "react";
import { PaymentsSubmitSchemeSelectionImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Submit form_ Path Params',
    href: '/submit-form-path-params',
    x: 43.28,
    y: 110.80,
    width: 275.27,
    height: 50.21
  },
  {
    id: 2,
    title: 'Submit form_ Body Params',
    href: '/submit-form-body-params',
    x: 595.55,
    y: 109.07,
    width: 280.46,
    height: 51.94
  },
  {
    id: 3,
    title: 'Submit form_ Headers',
    href: '/submit-form-headers',
    x: 1147.81,
    y: 114.26,
    width: 204.29,
    height: 48.47
  },
  {
    id: 4,
    title: 'Submit form_Responses',
    href: '/submit-form-responses',
    x: 34.62,
    y: 431.08,
    width: 207.75,
    height: 51.94
  },
  {
    id: 5,
    title: 'Submit form_ Responses_200 Payment',
    href: '/submit-form-responses-200-payment',
    x: 57.13,
    y: 522.84,
    width: 277.00,
    height: 48.47
  },
  {
    id: 6,
    title: 'Submit form_ Responses_400 Invalid Request',
    href: '/submit-form-responses-400-invalid-request',
    x: 55.40,
    y: 1026.63,
    width: 375.68,
    height: 46.74
  },
  {
    id: 7,
    title: 'Submit form_ Responses_401 Unauthenticated',
    href: '/submit-form-responses-401-unauthenticated',
    x: 55.40,
    y: 1807.42,
    width: 367.02,
    height: 53.67
  },
  {
    id: 8,
    title: 'Submit form_ Responses_403 Forbidden',
    href: '/submit-form-responses-403-forbidden',
    x: 53.67,
    y: 2290.44,
    width: 297.77,
    height: 57.13
  },
  {
    id: 9,
    title: 'Submit form_ Responses 404 Payment Not Found',
    href: '/submit-form-responses-404-payment-not-found',
    x: 50.21,
    y: 2789.03,
    width: 410.30,
    height: 53.67
  },
  {
    id: 10,
    title: 'Submit form_ Responses 409 Conflict',
    href: '/submit-form-responses-409-conflict',
    x: 53.67,
    y: 3266.86,
    width: 257.96,
    height: 58.86
  },
  {
    id: 11,
    title: 'Submit form_ Responses_422 Idempotency-Key Reuse',
    href: '/submit-form-responses-422-idempotency-key-reuse',
    x: 50.21,
    y: 4056.30,
    width: 465.70,
    height: 58.86
  },
  {
    id: 12,
    title: 'Submit form_ Responses_500 Unknown Error',
    href: '/submit-form-responses-500-unknown-error',
    x: 55.40,
    y: 4541.05,
    width: 332.40,
    height: 60.59
  },
  {
    id: 13,
    title: 'Submit form_ Responses_502 Provider Error',
    href: '/submit-form-responses-502-provider-error',
    x: 46.74,
    y: 5013.68,
    width: 337.59,
    height: 60.59
  }
];

const PaymentsSubmitSchemeSelectionPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsSubmitSchemeSelectionImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Submit scheme selection'}
      areas={areas}
      imageHeight={5488}
      imageWidth={1823}
    />
  );
};

export default PaymentsSubmitSchemeSelectionPage;
