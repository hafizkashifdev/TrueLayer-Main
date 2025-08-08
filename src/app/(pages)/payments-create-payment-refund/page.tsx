
import React from "react";
import { PaymentsCreatePaymentRefundImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'get-payment-path-params',
    href: '/get-payment-path-params',
    x: 46.30,
    y: 117.52,
    width: 297.36,
    height: 48.08
  },
  {
    id: 2,
    title: 'get-payment-responses',
    href: '/get-payment-responses',
    x: 23.15,
    y: 425.57,
    width: 233.26,
    height: 49.86
  },
  {
    id: 3,
    title: 'get-payment-responses-200-payment',
    href: '/get-payment-responses-200-payment',
    x: 49.86,
    y: 518.16,
    width: 284.90,
    height: 46.30
  },
  {
    id: 4,
    title: 'get-payment-responses-200-payment-authorization-required',
    href: '/get-payment-responses-200-payment-authorization-required',
    x: 96.15,
    y: 681.98,
    width: 400.64,
    height: 49.86
  },
  {
    id: 5,
    title: 'get-payment-responses-200-payment-authorization-required-bank-transfer',
    href: '/get-payment-responses-200-payment-authorization-required-bank-transfer',
    x: 105.06,
    y: 940.17,
    width: 332.98,
    height: 48.08
  },
  {
    id: 6,
    title: 'get-payment-responses-200-payment-authorization-required-mandate',
    href: '/get-payment-responses-200-payment-authorization-required-mandate',
    x: 85.47,
    y: 2540.95,
    width: 288.46,
    height: 74.79
  },
  {
    id: 7,
    title: 'get-payment-responses-200-payment-authorizing',
    href: '/get-payment-responses-200-payment-authorizing',
    x: 87.25,
    y: 3142.81,
    width: 276.00,
    height: 69.44
  },
  {
    id: 8,
    title: 'get-payment-responses-200-payment-authorizing-bank-transfer',
    href: '/get-payment-responses-200-payment-authorizing-bank-transfer',
    x: 105.06,
    y: 3418.80,
    width: 382.83,
    height: 67.66
  },
  {
    id: 9,
    title: 'get-payment-responses-200-payment-authorizing-mandate',
    href: '/get-payment-responses-200-payment-authorizing-mandate',
    x: 103.28,
    y: 5037.39,
    width: 265.31,
    height: 74.79
  },
  {
    id: 10,
    title: 'get-payment-responses-200-payment-authorized',
    href: '/get-payment-responses-200-payment-authorized',
    x: 87.25,
    y: 5619.66,
    width: 263.53,
    height: 74.79
  },
  {
    id: 11,
    title: 'get-payment-responses-200-payment-authorized-bank-transfer',
    href: '/get-payment-responses-200-payment-authorized-bank-transfer',
    x: 105.06,
    y: 5897.44,
    width: 356.13,
    height: 80.13
  },
  {
    id: 12,
    title: 'get-payment-responses-200-payment-authorized-mandate',
    href: '/get-payment-responses-200-payment-authorized-mandate',
    x: 103.28,
    y: 7507.12,
    width: 267.09,
    height: 76.57
  },
  {
    id: 13,
    title: '/get-payment-responses-200-payment-executed',
    href: '/get-payment-responses-200-payment-executed',
    x: 85.47,
    y: 8256.77,
    width: 272.44,
    height: 76.57
  },
  {
    id: 14,
    title: 'get-payment-responses-200-payment-executed-bank-transfer',
    href: '/get-payment-responses-200-payment-executed-bank-transfer',
    x: 97.93,
    y: 8530.98,
    width: 350.78,
    height: 74.79
  },
  {
    id: 15,
    title: 'get-payment-responses-200-payment-executed-mandate',
    href: '/get-payment-responses-200-payment-executed-mandate',
    x: 99.72,
    y: 10156.70,
    width: 272.44,
    height: 69.44
  },
  {
    id: 16,
    title: 'get-payment-responses-200-payment-settled',
    href: '/get-payment-responses-200-payment-settled',
    x: 92.59,
    y: 10895.66,
    width: 233.26,
    height: 60.54
  },
  {
    id: 17,
    title: 'get-payment-responses-200-payment-settled-bank-transfer',
    href: '/get-payment-responses-200-payment-settled-bank-transfer',
    x: 113.96,
    y: 11146.72,
    width: 347.22,
    height: 71.23
  },
  {
    id: 18,
    title: 'get-payment-responses-200-payment-settled-mandate',
    href: '/get-payment-responses-200-payment-settled-mandate',
    x: 106.84,
    y: 12765.31,
    width: 272.44,
    height: 60.54
  },
  {
    id: 19,
    title: 'get-payment-responses-200-payment-failed',
    href: '/get-payment-responses-200-payment-failed',
    x: 90.81,
    y: 13500.71,
    width: 224.36,
    height: 74.79
  },
  {
    id: 20,
    title: 'get-payment-responses-200-payment-failed-bank-transfer',
    href: '/get-payment-responses-200-payment-failed-bank-transfer',
    x: 126.42,
    y: 13771.37,
    width: 359.69,
    height: 65.88
  },
  {
    id: 21,
    title: 'get-payment-responses-200-payment-failed-mandate',
    href: '/get-payment-responses-200-payment-failed-mandate',
    x: 115.74,
    y: 15382.83,
    width: 270.66,
    height: 73.01
  },
  {
    id: 23,
    title: 'get-payment-responses-200-payment-attempt-failed',
    href: '/get-payment-responses-200-payment-attempt-failed',
    x: 92.59,
    y: 16128.92,
    width: 361.47,
    height: 60.54
  },
  {
    id: 24,
    title: 'get-payment-responses-200-payment-attempt-failed-bank-transfer',
    href: '/get-payment-responses-200-payment-attempt-failed-bank-transfer',
    x: 140.67,
    y: 16381.77,
    width: 338.32,
    height: 81.91
  },
  {
    id: 25,
    title: 'get-payment-responses-200-payment-attempt-failed-mandate',
    href: '/get-payment-responses-200-payment-attempt-failed-mandate',
    x: 124.64,
    y: 17996.79,
    width: 272.44,
    height: 69.44
  },
  {
    id: 26,
    title: 'get-payment-responses-401-unauthenticated',
    href: '/get-payment-responses-401-unauthenticated',
    x: 49.86,
    y: 18767.81,
    width: 407.76,
    height: 87.25
  },
  {
    id: 27,
    title: 'get-payment-responses-403-forbidden',
    href: '/get-payment-responses-403-forbidden',
    x: 981.13,
    y: 18766.03,
    width: 292.02,
    height: 71.23
  },
  {
    id: 28,
    title: 'get-payment-responses-404-payment-not-found',
    href: '/get-payment-responses-404-payment-not-found',
    x: 48.08,
    y: 19252.14,
    width: 439.81,
    height: 62.32
  },
  {
    id: 29,
    title: 'get-payment-responses-500-unknown-error',
    href: '/get-payment-responses-500-unknown-error',
    x: 981.13,
    y: 19253.92,
    width: 407.76,
    height: 71.23
  },
  {
    id: 31,
    title: 'POST',
    href: '/',
    x: 1251.78,
    y: 23.15,
    width: 470.09,
    height: 44.52
  }
];

const PaymentsCreatePaymentRefundPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsCreatePaymentRefundImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Create payment refund'}
      areas={areas}
      imageHeight={19729}
      imageWidth={1875}
    />
  );
};

export default PaymentsCreatePaymentRefundPage;
