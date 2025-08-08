export interface InteractiveArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  target?: string;
}

export const paymentSourcesAreas: InteractiveArea[] = [
  {
    id: 'get-payment-sources-1',
    href: '/get-payment-sources-1',
    title: 'get-payment-sources-1',
    x: 61.42450142450142,
    y: 210.304843304843306,
    width: 319.4074074074074,
    height: 43.87464387464388
  },
  {
    id: 'post-api',
    href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/payment-sources',
    title: 'post',
    x: 1170.5754985754986,
    y: 210.54985754985755,
    width: 656.3646723646723,
    height: 54.4045584045584,
    target: '_blank'
  },
  {
    id: 'get-payment-sources-responses',
    href: 'get-payment-sources-responses',
    title: 'get-payment-sources-responses',
    x: 40.364672364672366,
    y: 686.0968660968661,
    width: 233.4131054131054,
    height: 36.854700854700866
  },
  {
    id: 'user-external-account-response',
    href: '/user-external-account-payment-200-sources-response-body',
    title: 'user-external-account-payment-200-sources-response-body',
    x: 73.70940170940167,
    y: 796.82621082621085,
    width: 928.3874643874644,
    height: 45.62962962962956
  },
  {
    id: 'get-payment-sources-401-unauthenticated-response-body',
    href: '/get-payment-sources-401-unauthenticated-response-body',
    title: 'get-payment-sources-401-unauthenticated-response-body',
    x: 82.48433048433048,
    y: 1715.145299145299,
    width: 619.5099715099715,
    height: 57.91452991453002
  },
  {
    id: 'forbidden-response-403',
    href: '/get-payment-sources-403-forbidden-response-body',
    title: 'get-payment-sources-403-forbidden-response-body',
    x: 80.72934472934473,
    y: 2102.2678062678062,
    width: 537.0256410256411,
    height: 52.64957264957275
  },
  {
    id: 'get-payment-sources-404-account-not-found-response-body',
    href: '/get-payment-sources-404-account-not-found-response-body',
    title: 'get-payment-sources-404-account-not-found-response-body',
    x: 73.7094017094017,
    y: 2509.3903133903134,
    width: 668.6495726495726,
    height: 49.139601139601155
  },
  {
    id: 'unknown-error-500',
    href: '/get-payment-sources-500-unknown-error-response-body',
    title: 'get-payment-sources-500-unknown-error-response-body',
    x: 80.72934472934473,
    y: 2890.7179487179487,
    width: 596.6951566951567,
    height: 59.66951566951548
  }
];