
import React from "react";
import { PaymentsCreatePaymentImage } from "@/assets";
import InteractiveImagePage from "@/features/interactive-image-page";

const areas = [
  {
    id: 1,
    title: 'Create Payment _ Body Params',
    href: '/create-payment-body-params',
    x: 46,
    y: 123,
    width: 282,  // 328 - 46
    height: 60   // 183 - 123
  },
  {
    id: 2,
    title: 'https://api.truelayer-sandbox.com/v3/payments',
    href: 'https://api.truelayer-sandbox.com/v3/payments',
    x: 1144,
    y: 49,
    width: 518,  // 1662 - 1144
    height: 32   // 81 - 49
  },
  {
    id: 3,
    title: 'Create Payment _ Bank Transfer',
    href: '/create-payment-bank-transfer',
    x: 93,
    y: 453,
    width: 311,  // 404 - 93
    height: 51   // 504 - 453
  },
  {
    id: 4,
    title: 'Create Payment _ Mandate',
    href: '/create-payment-mandate',
    x: 79,
    y: 2067,
    width: 239,  // 318 - 79
    height: 65   // 2132 - 2067
  },
  {
    id: 5,
    title: 'Create Payment _ Headers',
    href: '/create-payment-headers',
    x: 60,
    y: 2668,
    width: 216,  // 276 - 60
    height: 61   // 2729 - 2668
  },
  {
    id: 6,
    title: 'Create Payment _ Responses',
    href: '/create-payment-responses',
    x: 63,
    y: 3010,
    width: 216,  // 279 - 63
    height: 54   // 3064 - 3010
  },
  {
    id: 7,
    title: 'Create Payment _ Responses_201 Payment',
    href: '/create-payment-responses-201-payment',
    x: 81,
    y: 3098,
    width: 265,  // 346 - 81
    height: 57   // 3155 - 3098
  },
  {
    id: 8,
    title: 'Create Payment _ Responses_400 Invalid Parameters',
    href: '/create-payment-responses-400-invalid-parameters',
    x: 79,
    y: 4193,
    width: 418,  // 497 - 79
    height: 59   // 4252 - 4193
  },
  {
    id: 9,
    title: 'Create Payment _ Responses_401 Unauthenticated',
    href: '/create-payment-responses-401-unauthenticated',
    x: 81,
    y: 4644,
    width: 368,  // 449 - 81
    height: 66   // 4710 - 4644
  },
  {
    id: 10,
    title: 'Create Payment _ Responses_403 Forbidden',
    href: '/create-payment-responses-403-forbidden',
    x: 86,
    y: 5096,
    width: 291,  // 377 - 86
    height: 60   // 5156 - 5096
  },
  {
    id: 11,
    title: 'Create Payment _ Responses_409 Idempotency-Key Concurrency Conflict',
    href: '/create-payment-responses-409-idempotency-key-concurrency-conflict',
    x: 82,
    y: 5546,
    width: 680,  // 762 - 82
    height: 63   // 5609 - 5546
  },
  {
    id: 12,
    title: 'Create Payment _ Responses_422 Idempotency-Key Reuse',
    href: '/create-payment-responses-422-idempotency-key-reuse',
    x: 81,
    y: 6002,
    width: 474,  // 555 - 81
    height: 72   // 6074 - 6002
  },
  {
    id: 13,
    title: 'Create Payment _ Responses_429 Rate Limit Exceeded',
    href: '/create-payment-responses-429-rate-limit-exceeded',
    x: 95,
    y: 6460,
    width: 410,  // 505 - 95
    height: 62   // 6522 - 6460
  },
  {
    id: 14,
    title: 'Create Payment _ Responses_500 Unknown Error',
    href: '/create-payment-responses-500-unknown-error',
    x: 84,
    y: 6920,
    width: 355,  // 439 - 84
    height: 56   // 6976 - 6920
  }
];

const CreatePaymentPage = () => {
  return (
    <InteractiveImagePage
      imageSrc={PaymentsCreatePaymentImage}
      backRoute={'/true-layer-payments-api-v3-payments'}
      pageTitle={'Create payment'}
      areas={areas}
      imageHeight={7424}
      imageWidth={1848}
    />
  );
};

export default CreatePaymentPage;
