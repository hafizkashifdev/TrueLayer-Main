export interface InteractiveArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const interactiveAreas: InteractiveArea[] = [
  {
    id: 'list-merchant-accounts',
    href: '/list-merchant-accounts',
    title: 'list-merchant-accounts',
    x: 1.04,
    y: 10.76,
    width: 21.27,
    height: 2.31
  },
  {
    id: 'post-api',
    href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts',
    title: 'post',
    x: 69.14,
    y: 10.76,
    width: 25.93,
    height: 2.87
  },
  {
    id: 'list-merchant-accounts-responses',
    href: '/list-merchant-accounts-responses',
    title: 'list-merchant-accounts-responses',
    x: 3.04,
    y: 16.43,
    width: 12.06,
    height: 1.85
  },
  {
    id: 'merchant-account-response-body-200',
    href: '/merchant-account-response-body-200',
    title: 'merchant-account-response-body-200',
    x: 4.84,
    y: 20.59,
    width: 34.19,
    height: 2.69
  },
  {
    id: 'sort-code-account-number',
    href: '/sort-code-account-number',
    title: 'sort-code-account-number',
    x: 61.54,
    y: 22.26,
    width: 26.78,
    height: 3.06
  },
  {
    id: 'list-merchant-accounts-ibn',
    href: '/list-merchant-accounts-ibn',
    title: 'list-merchant-accounts-ibn',
    x: 5.7,
    y: 36.75,
    width: 8.36,
    height: 3.52
  },
  {
    id: 'list-merchant-accounts-nrb',
    href: '/list-merchant-accounts-nrb',
    title: 'list-merchant-accounts-nrb',
    x: 30.7,
    y: 36.75,
    width: 8.36,
    height: 3.52
  },
  {
    id: 'unauthenticated-response-body-401',
    href: '/unauthenticated-response-body-401',
    title: 'unauthenticated-response-body-401',
    x: 4.84,
    y: 53.8,
    width: 32.95,
    height: 2.69
  },
  {
    id: 'forbidden-response-body-403',
    href: '/forbidden-response-body-403',
    title: 'forbidden-response-body-403',
    x: 4.37,
    y: 67.81,
    width: 29.06,
    height: 2.87
  },
  {
    id: 'unknown-error-response-body-400',
    href: '/unknown-error-response-body-400',
    title: 'unknown-error-response-body-400',
    x: 4.46,
    y: 82.11,
    width: 32.57,
    height: 2.78
  }
];