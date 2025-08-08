
import React from "react";
import { PaymentsCreatePaymentRefundImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'create-payment-refund-path-params',
    href: '/create-payment-refund-path-params',
    x: 48.47,
    y: 114.26,
    width: 283.92,
    height: 57.13
  },
  {
    id: 2,
    title: 'create-payment-refund-body-params',
    href: '/create-payment-refund-body-params',
    x: 410.30,
    y: 110.80,
    width: 318.55,
    height: 65.79
  },
  {
    id: 3,
    title: 'create-payment-refund-headers',
    href: '/create-payment-refund-headers',
    x: 1092.42,
    y: 112.53,
    width: 231.99,
    height: 57.13
  },
  {
    id: 4,
    title: 'create-payment-refund-responses',
    href: '/create-payment-refund-responses',
    x: 34.62,
    y: 424.15,
    width: 242.37,
    height: 55.40
  },
  {
    id: 5,
    title: 'create-payment-refund-responses-202-refund',
    href: '/create-payment-refund-responses-202-refund',
    x: 55.40,
    y: 517.64,
    width: 273.54,
    height: 50.21
  },
  {
    id: 6,
    title: 'create-payment-refund-responses-400-invalid-parameters',
    href: '/create-payment-refund-responses-400-invalid-parameters',
    x: 62.32,
    y: 1002.39,
    width: 410.30,
    height: 45.01
  },
  {
    id: 7,
    title: 'create-payment-refund-responses-401-unauthenticated',
    href: '/create-payment-refund-responses-401-unauthenticated',
    x: 58.86,
    y: 1473.29,
    width: 363.56,
    height: 62.32
  },
  {
    id: 8,
    title: 'create-payment-refund-responses-403-forbidden',
    href: '/create-payment-refund-responses-403-forbidden',
    x: 60.59,
    y: 1968.42,
    width: 309.89,
    height: 57.13
  },
  {
    id: 9,
    title: 'create-payment-refund-responses-404-payment-id-not-found',
    href: '/create-payment-refund-responses-404-payment-id-not-found',
    x: 62.32,
    y: 2473.95,
    width: 451.85,
    height: 62.32
  },
  {
    id: 10,
    title: 'create-payment-refund-responses-409-idempotency-key-concurrency-conflict',
    href: '/create-payment-refund-responses-409-idempotency-key-concurrency-conflict',
    x: 64.06,
    y: 2965.62,
    width: 675.19,
    height: 58.86
  },
  {
    id: 12,
    title: 'create-payment-refund-responses-422-idempotency-key-reuse',
    href: '/create-payment-refund-responses-422-idempotency-key-reuse',
    x: 60.59,
    y: 3452.10,
    width: 462.24,
    height: 57.13
  },
  {
    id: 13,
    title: 'Post',
    href: '/',
    x: 1282.85,
    y: 19.04,
    width: 522.84,
    height: 57.13
  }
];

const PaymentsCreatePaymentRefundPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsCreatePaymentRefundImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Create payment refund'}
      areas={areas}
      imageHeight={4003}
      imageWidth={1823}
    />
  );
};

export default PaymentsCreatePaymentRefundPage;
