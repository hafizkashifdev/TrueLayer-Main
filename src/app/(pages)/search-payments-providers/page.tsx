import { SearchPaymentsProvidersImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Search Payments Providers 1",
    title: "Search Payments Providers 1",
    href: "/search-payments-providers-01",
    coords: "26,118,323,195",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 2",
    title: "Search Payments Providers 2",
    href: "/search-payments-providers-02",
    coords: "24,1055,243,1106",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 3",
    title: "Search Payments Providers 3",
    href: "/search-payments-providers-03",
    coords: "46,1143,505,1202",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 4",
    title: "Search Payments Providers 4",
    href: "/search-payments-providers-04",
    coords: "43,1788,458,1849",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 5",
    title: "Search Payments Providers 5",
    href: "/search-payments-providers-05",
    coords: "982,1796,1355,1852",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 6",
    title: "Search Payments Providers 6",
    href: "/search-payments-providers-06",
    coords: "46,2267,342,2329",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 8",
    title: "Search Payments Providers 8",
    href: "/search-payments-providers-08",
    coords: "974,2270,1399,2328",
    shape: "rect",
  },
  {
    alt: "Search Payments Providers 7",
    title: "Search Payments Providers 7",
    href: "/search-payments-providers-07",
    coords: "50,2758,466,2822",
    shape: "rect",
  },
  {
    alt: "Post Payment Links",
    title: "Post Payment Links",
    href: "https://api.truelayer-sandbox.com/v3/payment-links",
    coords: "1088,24,1568,74",
    shape: "rect",
  },
];

const SearchPaymentsProvidersPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Search Payments providers`}
      image={SearchPaymentsProvidersImage}
      backRoute="/payments-providers"
      areas={areas}
    />
  );
};

export default SearchPaymentsProvidersPage;
