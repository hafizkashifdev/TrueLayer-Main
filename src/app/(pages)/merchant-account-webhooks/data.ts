export interface InteractiveArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const merchantWebhooksAreas: InteractiveArea[] = [
  {
    id: 'merchant-account-webhooks-1',
    href: '/merchant-account-webhooks-1',
    title: 'merchant-account-webhooks-1',
    x: 49.13960113960114,
    y: 220.774928774928775,
    width: 424.7065527065527,
    height: 56.15954415954416
  },
  {
    id: 'merchant-account-webhooks-external-payment',
    href: '/merchant-account-webhooks-external-payment',
    title: 'merchant-account-webhooks-external-payment',
    x: 43.87464387464387,
    y: 327.05413105413105,
    width: 312.3874643874644,
    height: 59.66951566951569
  },
  {
    id: 'balance-notification',
    href: '/merchant-account-webhooks-balance-notification',
    title: 'merchant-account-webhooks-balance-notification',
    x: 45.629629629629626,
    y: 1144.1139601139602,
    width: 359.7720797720798,
    height: 47.38461538461536
  }
];