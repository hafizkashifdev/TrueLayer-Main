"use client";

import React from "react";
import { GetCardTransactionsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";

const areas = [
  { alt: "", title: "", href: "get-card-transactions-1", coords: "2,13,384,83", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-2-path-params", coords: "32,111,290,171", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-3-query-params", coords: "316,111,619,171", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-4-headers", coords: "1355,104,1574,171", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-5-responses", coords: "25,445,288,511", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-6-200-ok", coords: "45,526,288,587", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-7-response-body", coords: "79,604,410,666", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-8-headers", coords: "73,2045,319,2109", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-9-202-accepted", coords: "69,2566,402,2641", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-10-response-body", coords: "92,2659,436,2721", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-11-header", coords: "94,3064,342,3139", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-12-400invalid-request", coords: "76,3598,463,3667", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-13-response-body", coords: "94,3691,426,3745", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-14-header", coords: "86,3998,350,4056", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-15-401unauthorized", coords: "75,4516,456,4578", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-16-response-body", coords: "86,4620,425,4677", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-17-header", coords: "87,4921,355,4976", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-18-403access-denied", coords: "82,5441,467,5506", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-19-response-body", coords: "83,5530,448,5603", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-20-header", coords: "89,5829,347,5892", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-21-404not-found", coords: "74,6351,428,6416", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-22-response-body", coords: "76,6451,415,6516", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-23-header", coords: "81,6753,327,6813", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-24-429-rate-limit-exceeded", coords: "64,7264,510,7323", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-25-response-body", coords: "68,7367,425,7431", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-26-header", coords: "74,7676,326,7738", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-27-500-internal-server-error", coords: "73,8198,536,8265", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-28-response-body", coords: "86,8301,414,8363", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-29-header", coords: "84,8585,323,8642", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-30-501not-implemented", coords: "73,9114,464,9181", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-31-response-body", coords: "86,9209,406,9271", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-32-header", coords: "93,9509,322,9566", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-33-503service-unavailable", coords: "74,10031,533,10088", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-34-response-body", coords: "88,10123,411,10192", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-35-header", coords: "96,10427,314,10491", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-36-504gateway-timeout", coords: "76,10939,379,11001", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-37-response-body", coords: "94,11044,364,11105", shape: "rect" },
  { alt: "", title: "", href: "get-card-transactions-38-header", coords: "99,11342,316,11409", shape: "rect" },
];

const GetCardTransactionsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get card transactions`}
      image={GetCardTransactionsImage}
      backRoute="/trure-layer-accounts-cards"
      areas={areas}
    />
  );
};

export default GetCardTransactionsPage;
