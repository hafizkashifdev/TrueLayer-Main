export interface InteractiveArea {
  id: string;
  href: string;
  target?: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const createPayoutAreas: InteractiveArea[] = [
  {
    id: "post-api",
    href: "https://api.truelayer-sandbox.com/v3/payment-links",
    target: "_blank",
    title: "post",
    x: 1275.7094017094016,
    y: 250.92307692307693,
    width: 433.96011396011386,
    height: 32.82051282051282
  },
  {
    id: "body-params",
    href: "/create-payout-body-params",
    title: "create-payout-body-params",
    x: 45.58404558404558,
    y: 385.2079772079772,
    width: 275.32763532763533,
    height: 43.760683760683776
  },
  {
    id: "unnamed-1",
    href: "/create-payout-body-params-external-account",
    title: "unnamed-link-1",
    x: 70.17094017094017,
    y: 755.2393162393163,
    width: 393.8461538461538,
    height: 51.05413105413106
  },
  {
    id: "payment-source",
    href: "/create-payout-body-params-payment-source",
    title: "create-payout-body-params-payment-source",
    x: 65.64102564102564,
    y: 1180.3247863247864,
    width: 355.14529914529913,
    height: 40.11396011396005
  },
  {
    id: "unnamed-2",
    href: "#",
    title: "unnamed-link-2",
    x: 1033.8461538461536,
    y: 1180.97150997151,
    width: 339.14529914529953,
    height: 43.76068376068372
  },
  {
    id: "headers",
    href: "/create-payout-headers",
    title: "create-payout-headers",
    x: 45.58404558404558,
    y: 1973.6182336182337,
    width: 182.33618233618233,
    height: 38.290598290598155
  },
  {
    id: "responses",
    href: "/create-payout-responses",
    title: "create-payout-responses",
    x: 56.52421652421651,
    y: 2335.826210826211,
    width: 209.68660968660964,
    height: 32.820512820512704
  },
  {
    id: "response-201",
    href: "/create-payout-responses-201-payout",
    title: "create-payout-responses-201-payout",
    x: 67.46438746438747,
    y: 2448.054131054131,
    width: 253.44729344729342,
    height: 47.40740740740762
  },
  {
    id: "response-400",
    href: "/create-payout-responses-400-invalid-parameters",
    title: "create-payout-responses-400-invalid-parameters",
    x: 799.3988603988604,
    y: 2448.054131054131,
    width: 417.5498575498576,
    height: 58.34757834757852
  },
  {
    id: "response-401",
    href: "/create-payout-responses-401-unauthenticated",
    title: "create-payout-responses-401-unauthenticated",
    x: 75.64102564102564,
    y: 3030.774928774929,
    width: 382.9059829059829,
    height: 51.054131054131176
  },
  {
    id: "response-403",
    href: "/create-payout-responses-403-forbidden",
    title: "create-payout-responses-403-forbidden",
    x: 77.46438746438747,
    y: 3590.02849002849,
    width: 293.5612535612536,
    height: 63.81766381766374
  },
  {
    id: "response-409",
    href: "/create-payout-responses-409-idempotency-key-concurrency-conflict",
    title: "create-payout-responses-409-idempotency-key-concurrency-conflict",
    x: 81.99430199430199,
    y: 4150.3390313390314,
    width: 687.4074074074074,
    height: 58.34757834757829
  },
  {
    id: "create-payout-responses-422-idempotency-key-reuse",
    href: "#",
    title: "create-payout-responses-422-idempotency-key-reuse",
    x: 77.46438746438747,
    y: 4699.8860398860397,
    width: 475.89743589743586,
    height: 74.7578347578351
  },
  {
    id: "response-429",
    href: "/create-payout-responses-429-rate-limit-exceeded",
    title: "create-payout-responses-429-rate-limit-exceeded",
    x: 77.93447293447294,
    y: 5250.669515669516,
    width: 437.60683760683764,
    height: 72.93447293447298
  },
  {
    id: "create-payout-responses-500-unknown-error",
    href: "/create-payout-responses-500-unknown-error",
    title: "create-payout-responses-500-unknown-error",
    x: 79.28774928774929,
    y: 5799.5698005698005,
    width: 344.6153846153846,
    height: 76.58119658119631
  }
];