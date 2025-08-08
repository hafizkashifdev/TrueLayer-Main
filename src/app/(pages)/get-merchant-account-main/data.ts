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

export const merchantAccountAreas: InteractiveArea[] = [
  {
    id: 'post-api',
    href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}',
    title: 'post',
    x: 1286.4045584045584,
    y: 220.52991452991453,
    width: 524.7407407407406,
    height: 49.13960113960114,
    target: '_blank'
  },
  {
    id: 'merchant-account-1',
    href: '/get-merchant-account',
    title: '',
    x: 3.50997150997151,
    y: 220.794871794871796,
    width: 394.87179487179486,
    height: 40.364672364672366
  },
  {
    id: 'merchant-account-2',
    href: '/get-merchant-account-responses',
    title: 'get-merchant-account-responses',
    x: 42.41310541310543,
    y: 678.3817663817664,
    width: 263.834757834757795,
    height: 45.794871794871767
  },
  
  {
    id: 'merchant-account-response-200',
    href: '/merchant-account-response-body-200-section1',
    title: 'merchant-account-response-body-200-section1',
    x: 75.46438746438747,
    y: 793.3162393162393,
    width: 654.6096866096866,
    height: 56.15954415954417
  },
  {
    id: 'sort-code-account-number',
    href: '/sort-code-account-number-section1',
    title: 'sort-code-account-number-section1',
    x: 991.5669515669516,
    y: 843.43589743589746,
    width: 500.17094017094007,
    height: 42.119658119658084
  },
  {
    id: 'merchant-account-ibn',
    href: '/get-merchant-account-ibn',
    title: 'get-merchant-account-ibn',
    x: 96.52421652421653,
    y: 1250.8233618233618,
    width: 170.23361823361824,
    height: 45.629629629629676
  },
  {
    id: 'merchant-account-nrb',
    href: '/get-merchant-account-nrb',
    title: 'get-merchant-account-nrb',
    x: 547.5555555555555,
    y: 1250.3333333333334,
    width: 161.4586894586895,
    height: 47.38461538461536
  },
  {
    id: 'unauthenticated-response-401',
    href: '/get-merchant-account-401-unauthenticated-response-body',
    title: 'get-merchant-account-401-unauthenticated-response-body',
    x: 84.23931623931624,
    y: 1682.4957264957266,
    width: 628.2849002849002,
    height: 54.40455840455843
  },
  {
    id: 'forbidden-response-403',
    href: '#',
    title: '',
    x: 80.72934472934473,
    y: 2070.3931623931624,
    width: 542.2905982905984,
    height: 50.89458689458684
  },
  {
    id: 'account-not-found-404',
    href: '/get-merchant-account-404-account-not-found-response-body',
    title: 'get-merchant-account-404-account-not-found-response-body',
    x: 78.97435897435902,
    y: 2460.5156695156695,
    width: 673.9145299145298,
    height: 43.87464387464388
  },
  {
    id: 'unknown-error-500',
    href: '/get-merchant-account-500-unknown-error-response-body',
    title: 'get-merchant-account-500-unknown-error-response-body',
    x: 78.97435897435898,
    y: 2860.3931623931626,
    width: 617.7549857549857,
    height: 38.60968660968638
  }
];