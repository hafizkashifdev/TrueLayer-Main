import { SubmitPaymentsReturnParametersImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Post Payment Provider Return",
    title: "Post Payment Provider Return",
    href: "https://api.truelayer-sandbox.com/v3/payments-provider-return",
    coords: "1205,26,1766,72",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 1",
    title: "Submit Payments Return Parameters 1",
    href: "/submit-payments-return-parameters-01",
    coords: "12,16,590,72",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 2",
    title: "Submit Payments Return Parameters 2",
    href: "/submit-payments-return-parameters-02",
    coords: "38,424,254,486",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 3",
    title: "Submit Payments Return Parameters 3",
    href: "/submit-payments-return-parameters-03",
    coords: "52,512,352,569",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 4",
    title: "Submit Payments Return Parameters 4",
    href: "/submit-payments-return-parameters-04",
    coords: "56,991,468,1055",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 5",
    title: "Submit Payments Return Parameters 5",
    href: "/submit-payments-return-parameters-05",
    coords: "51,1805,505,1862",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 6",
    title: "Submit Payments Return Parameters 6",
    href: "/submit-payments-return-parameters-06",
    coords: "48,2292,745,2351",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 7",
    title: "Submit Payments Return Parameters 7",
    href: "/submit-payments-return-parameters-07",
    coords: "57,2772,540,2833",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 8",
    title: "Submit Payments Return Parameters 8",
    href: "/submit-payments-return-parameters-08",
    coords: "54,3263,420,3315",
    shape: "rect",
  },
  {
    alt: "Submit Payments Return Parameters 9",
    title: "Submit Payments Return Parameters 9",
    href: "/submit-payments-return-parameters-09",
    coords: "57,3735,394,3795",
    shape: "rect",
  },
];

const SubmitPaymentsReturnParametersPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Submit payments return parameters`}
      image={SubmitPaymentsReturnParametersImage}
      backRoute="/true-layer-payments-api-v3"
      areas={areas}
    />
  );
};

export default SubmitPaymentsReturnParametersPage;
