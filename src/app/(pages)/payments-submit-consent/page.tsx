
import React from "react";
import { PaymentsSubmitConsentImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Submit consent_ Path Params',
    href: '/submit-consent-path-params',
    x: 39.82,
    y: 117.72,
    width: 278.73,
    height: 51.94
  },
  {
    id: 2,
    title: 'Submit consent_ Body Params',
    href: '/submit-consent-body-params',
    x: 597.28,
    y: 110.80,
    width: 275.27,
    height: 53.67
  },
  {
    id: 3,
    title: 'Submit consent_ Headers',
    href: '/submit-consent-headers',
    x: 1146.08,
    y: 114.26,
    width: 188.71,
    height: 55.40
  },
  {
    id: 4,
    title: 'Submit consent _Responses',
    href: '/submit-consent-responses',
    x: 38.09,
    y: 436.27,
    width: 225.06,
    height: 48.47
  },
  {
    id: 5,
    title: 'Submit consent_ Responses_200 Payment',
    href: '/submit-consent-responses-200-payment',
    x: 48.47,
    y: 522.84,
    width: 294.31,
    height: 50.21
  },
  {
    id: 6,
    title: 'Submit consent _ Responses_400 Invalid Request',
    href: '/submit-consent-responses-400-invalid-request',
    x: 55.40,
    y: 1026.63,
    width: 377.41,
    height: 50.21
  },
  {
    id: 7,
    title: 'Submit consent_ Responses_401 Unauthenticated',
    href: '/submit-consent-responses-401-unauthenticated',
    x: 57.13,
    y: 1814.34,
    width: 365.29,
    height: 48.47
  },
  {
    id: 9,
    title: 'Submit consent _ Responses_403 Forbidden',
    href: '/submit-consent-responses-403-forbidden',
    x: 58.86,
    y: 2304.29,
    width: 283.92,
    height: 55.40
  },
  {
    id: 10,
    title: 'Submit consent _ Responses 404 Payment Not Found',
    href: '/submit-consent-responses-404-payment-not-found',
    x: 60.59,
    y: 2792.50,
    width: 403.38,
    height: 58.86
  },
  {
    id: 11,
    title: 'Submit consent_ Responses 409 Conflict',
    href: '/submit-consent-responses-409-conflict',
    x: 53.67,
    y: 3284.17,
    width: 247.57,
    height: 57.13
  },
  {
    id: 12,
    title: 'Submit consent _ Responses_422 Idempotency-Key Reuse',
    href: '/submit-consent-responses-422-idempotency-key-reuse',
    x: 57.13,
    y: 4059.77,
    width: 462.24,
    height: 62.32
  },
  {
    id: 13,
    title: 'Submit consent _ Responses_500 Unknown Error',
    href: '/submit-consent-responses-500-unknown-error',
    x: 60.59,
    y: 4546.25,
    width: 342.79,
    height: 62.32
  }
];

const PaymentsSubmitConsentPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsSubmitConsentImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Submit consent'}
      areas={areas}
      imageHeight={5020}
      imageWidth={1823}
    />
  );
};

export default PaymentsSubmitConsentPage;
