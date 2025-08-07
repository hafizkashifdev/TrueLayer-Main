export interface InteractiveArea {
  id: string;
  href: string;
  target?: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  selected?: boolean;
}

export const getPayoutAreas: InteractiveArea[] = [
  {
    id: "toplink",
    href: "https://api.truelayer-sandbox.com/v3/payouts/{id}",
    target: "_blank",
    title: "toplink",
    x: 1346.5669515669515,
    y: 240.928774928774928,
    width: 446.93732193732194,
    height: 37.39316239316239
  },
  {
    id: "path-params",
    href: "/get-payout-path-params",
    title: "get-payout-path-params",
    x: 40.95441595441596,
    y: 360.74074074074075,
    width: 283.11965811965814,
    height: 46.29629629629629
  },
  {
    id: "responses",
    href: "/get-payout-responses",
    title: "get-payout-responses",
    x: 30.270655270655272,
    y: 755.5698005698006,
    width: 195.86894586894584,
    height: 49.85754985754983
  },
  {
    id: "response-200",
    href: "/get-payout-responses-200-payout",
    title: "get-payout-responses-200-payout",
    x: 53.41880341880342,
    y: 866.3817663817664,
    width: 245.72649572649573,
    height: 44.515669515669515
  },
  {
    id: "response-200-pending",
    href: "/get-payout-responses-200-payout-pending",
    title: "get-payout-responses-200-payout-pending",
    x: 74.78632478632478,
    y: 1070.4188034188035,
    width: 229.70085470085473,
    height: 42.735042735042725
  },
  {
    id: "response-200-authorized",
    href: "/get-payout-responses-200-payout-authorized",
    title: "get-payout-responses-200-payout-authorized",
    x: 89.03133903133903,
    y: 2971.2678062678065,
    width: 279.55840455840456,
    height: 55.199430199430026
  },
  {
    id: "response-200-executed",
    href: "/get-payout-responses-200-payout-executed",
    title: "get-payout-responses-200-payout-executed",
    x: 90.8119658119658,
    y: 4869.4586894586896,
    width: 247.50712250712252,
    height: 58.760683760683605
  },
  {
    id: "response-200-failed",
    href: "/get-payout-responses-200-payout-failed",
    title: "get-payout-responses-200-payout-failed",
    x: 80.12820512820512,
    y: 6750.185185185185,
    width: 210.1139601139601,
    height: 56.98005698005727
  },
  {
    id: "unnamed-1",
    href: "/get-payout-responses-401-unauthenticated",
    title: "unnamed-link-1",
    x: 53.41880341880342,
    y: 8730.7692307692305,
    width: 359.6866096866097,
    height: 62.321937321937185
  },
  {
    id: "response-403",
    href: "/get-payout-responses-403-forbidden",
    title: "get-payout-responses-403-forbidden",
    x: 970.4415954415955,
    y: 8730.2336182336185,
    width: 297.3646723646724,
    height: 51.638176638176446
  },
  {
    id: "response-404",
    href: "/get-payout-responses-404-payout-not-found",
    title: "get-payout-responses-404-payout-not-found",
    x: 44.515669515669515,
    y: 9318.660968660968,
    width: 418.4472934472935,
    height: 53.41880341880278
  },
  {
    id: "unnamed-2",
    href: "#",
    title: "unnamed-link-2",
    x: 975.7834757834758,
    y: 9318.9059829059825,
    width: 359.6866096866097,
    height: 35.612535612534884,
    
  }
];