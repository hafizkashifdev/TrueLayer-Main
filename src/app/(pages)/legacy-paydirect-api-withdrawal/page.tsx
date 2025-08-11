import { LegacyPaydirectApiWithdrawalImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Legacy - PayDirect API Withdrawal 01",
    title: "Legacy - PayDirect API Withdrawal 01",
    href: "/legacy-paydirect-api-withdrawal-01",
    coords: "37,49,515,114",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 02",
    title: "Legacy - PayDirect API Withdrawal 02",
    href: "/legacy-paydirect-api-withdrawal-02",
    coords: "1377,36,1800,109",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 03",
    title: "Legacy - PayDirect API Withdrawal 03",
    href: "/legacy-paydirect-api-withdrawal-03",
    coords: "61,147,316,193",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 04",
    title: "Legacy - PayDirect API Withdrawal 04",
    href: "/legacy-paydirect-api-withdrawal-04",
    coords: "1382,145,1535,186",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 05",
    title: "Legacy - PayDirect API Withdrawal 05",
    href: "/legacy-paydirect-api-withdrawal-05",
    coords: "58,433,275,496",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 06",
    title: "Legacy - PayDirect API Withdrawal 06",
    href: "/legacy-paydirect-api-withdrawal-06",
    coords: "344,500,900,563",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 07",
    title: "Legacy - PayDirect API Withdrawal 07",
    href: "/legacy-paydirect-api-withdrawal-07",
    coords: "1077,498,1609,560",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 08",
    title: "Legacy - PayDirect API Withdrawal 08",
    href: "/legacy-paydirect-api-withdrawal-08",
    coords: "82,761,608,837",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 09",
    title: "Legacy - PayDirect API Withdrawal 09",
    href: "/legacy-paydirect-api-withdrawal-09",
    coords: "941,767,1545,839",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 10",
    title: "Legacy - PayDirect API Withdrawal 10",
    href: "/legacy-paydirect-api-withdrawal-10",
    coords: "24,1117,535,1175",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 11",
    title: "Legacy - PayDirect API Withdrawal 11",
    href: "/legacy-paydirect-api-withdrawal-11",
    coords: "1330,1107,1793,1172",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 12",
    title: "Legacy - PayDirect API Withdrawal 12",
    href: "/legacy-paydirect-api-withdrawal-12",
    coords: "55,1200,318,1270",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 13",
    title: "Legacy - PayDirect API Withdrawal 13",
    href: "/legacy-paydirect-api-withdrawal-13",
    coords: "1385,1206,1566,1260",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 14",
    title: "Legacy - PayDirect API Withdrawal 14",
    href: "/legacy-paydirect-api-withdrawal-14",
    coords: "40,1499,280,1567",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 15",
    title: "Legacy - PayDirect API Withdrawal 15",
    href: "/legacy-paydirect-api-withdrawal-15",
    coords: "340,1561,920,1626",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 16",
    title: "Legacy - PayDirect API Withdrawal 16",
    href: "/legacy-paydirect-api-withdrawal-16",
    coords: "1080,1556,1619,1641",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 17",
    title: "Legacy - PayDirect API Withdrawal 17",
    href: "/legacy-paydirect-api-withdrawal-17",
    coords: "82,1838,593,1904",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 18",
    title: "Legacy - PayDirect API Withdrawal 18",
    href: "/legacy-paydirect-api-withdrawal-18",
    coords: "951,1835,1548,1907",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 19",
    title: "Legacy - PayDirect API Withdrawal 19",
    href: "/legacy-paydirect-api-withdrawal-19",
    coords: "37,2181,375,2243",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 20",
    title: "Legacy - PayDirect API Withdrawal 20",
    href: "/legacy-paydirect-api-withdrawal-20",
    coords: "60,2277,322,2335",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 21",
    title: "Legacy - PayDirect API Withdrawal 21",
    href: "/legacy-paydirect-api-withdrawal-21",
    coords: "975,2170,1793,2245",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 22",
    title: "Legacy - PayDirect API Withdrawal 22",
    href: "/legacy-paydirect-api-withdrawal-22",
    coords: "55,2575,295,2633",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 23",
    title: "Legacy - PayDirect API Withdrawal 23",
    href: "/legacy-paydirect-api-withdrawal-23",
    coords: "69,2666,572,2731",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 24",
    title: "Legacy - PayDirect API Withdrawal 24",
    href: "/legacy-paydirect-api-withdrawal-24",
    coords: "1322,2664,1744,2754",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 25",
    title: "Legacy - PayDirect API Withdrawal 25",
    href: "/legacy-paydirect-api-withdrawal-25",
    coords: "63,3110,597,3172",
    shape: "rect",
  },
  {
    alt: "Legacy - PayDirect API Withdrawal 26",
    title: "Legacy - PayDirect API Withdrawal 26",
    href: "/legacy-paydirect-api-withdrawal-26",
    coords: "626,3105,1132,3174",
    shape: "rect",
  },
];

const LegacyPaydirectApiWithdrawalPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  Withdrawal`}
      image={LegacyPaydirectApiWithdrawalImage}
      backRoute="/legacy-pay-direct-api"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiWithdrawalPage;
