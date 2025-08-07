import { CardsGetCardBalanceImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  { alt: "1", title: "cards-get-card-balance 1 Get card balance", href: "cards-get-card-balance-1-get-card-balance", coords: "2,13,349,87", shape: "rect" },
  { alt: "2", title: "cards-get-card-balance 2 Path Parameters", href: "cards-get-card-balance-2-path-parameters", coords: "30,112,350,175", shape: "rect" },
  { alt: "3", title: "cards-get-card-balance 3 Query Parameters", href: "cards-get-card-balance-3-query-parameters", coords: "481,104,800,172", shape: "rect" },
  { alt: "4", title: "cards-get-card-balance 4 Headers", href: "cards-get-card-balance-4-headers", coords: "1153,103,1391,176", shape: "rect" },
  { alt: "5", title: "cards-get-card-balance 5 Response", href: "cards-get-card-balance-5-response", coords: "27,432,266,500", shape: "rect" },
  { alt: "6", title: "cards-get-card-balance 6 200 OK", href: "cards-get-card-balance-6-200-ok", coords: "45,528,276,586", shape: "rect" },
  { alt: "7", title: "cards-get-card-balance 7 Response body", href: "cards-get-card-balance-7-response-body", coords: "74,602,407,675", shape: "rect" },
  { alt: "8", title: "cards-get-card-balance 8 Header", href: "cards-get-card-balance-8-header", coords: "81,1609,307,1667", shape: "rect" },
  { alt: "9", title: "cards-get-card-balance 9 202(Accepted) ", href: "cards-get-card-balance-9-202accepted", coords: "51,2151,381,2216", shape: "rect" },
  { alt: "10", title: "cards-get-card-balance 10 Response body", href: "cards-get-card-balance-10-response-body", coords: "64,2237,417,2311", shape: "rect" },
  { alt: "11", title: "cards-get-card-balance 11 Header", href: "cards-get-card-balance-11-header", coords: "101,2639,331,2702", shape: "rect" },
  { alt: "12", title: "cards-get-card-balance 12 401(Unauthorized) ", href: "cards-get-card-balance-12-401unauthorized", coords: "68,3194,424,3262", shape: "rect" },
  { alt: "13", title: "cards-get-card-balance 13 Response body", href: "cards-get-card-balance-13-response-body", coords: "72,3282,410,3353", shape: "rect" },
  { alt: "14", title: "cards-get-card-balance 14 Header", href: "cards-get-card-balance-14-header", coords: "70,3591,310,3661", shape: "rect" },
  { alt: "15", title: "cards-get-card-balance 15 403(Access Denied) ", href: "cards-get-card-balance-15-403access-denied", coords: "67,4117,434,4183", shape: "rect" },
  { alt: "16", title: "cards-get-card-balance 16 Response body", href: "cards-get-card-balance-16-response-body", coords: "75,4199,412,4261", shape: "rect" },
  { alt: "17", title: "cards-get-card-balance 17 Header", href: "cards-get-card-balance-17-header", coords: "77,4521,328,4581", shape: "rect" },
  { alt: "18", title: "cards-get-card-balance 18 404(Not Found) ", href: "cards-get-card-balance-18-404not-found", coords: "74,5057,422,5116", shape: "rect" },
  { alt: "19", title: "cards-get-card-balance 19 Response body", href: "cards-get-card-balance-19-response-body", coords: "83,5135,391,5187", shape: "rect" },
  { alt: "20", title: "cards-get-card-balance 20 Header", href: "cards-get-card-balance-20-header", coords: "74,5436,328,5501", shape: "rect" },
  { alt: "21", title: "cards-get-card-balance 21 429(Rate Limit Exceeded) ", href: "cards-get-card-balance-21-429rate-limit-exceeded", coords: "75,5973,528,6034", shape: "rect" },
  { alt: "22", title: "cards-get-card-balance 22 Response body", href: "cards-get-card-balance-22-response-body", coords: "88,6071,399,6134", shape: "rect" },
  { alt: "23", title: "cards-get-card-balance 23 Header", href: "cards-get-card-balance-23-header", coords: "81,6379,327,6447", shape: "rect" },
  { alt: "24", title: "cards-get-card-balance 24 500(Internal Server Error) ", href: "cards-get-card-balance-24-500internal-server-error", coords: "68,6897,528,6965", shape: "rect" },
  { alt: "25", title: "cards-get-card-balance 25 Response body", href: "cards-get-card-balance-25-response-body", coords: "69,6991,391,7051", shape: "rect" },
  { alt: "26", title: "cards-get-card-balance 26 Header", href: "cards-get-card-balance-26-header", coords: "78,7309,324,7385", shape: "rect" },
  { alt: "27", title: "cards-get-card-balance 27 501(Not Implemented) ", href: "cards-get-card-balance-27-501not-implemented", coords: "81,7838,501,7904", shape: "rect" },
  { alt: "28", title: "cards-get-card-balance 28 Response body", href: "cards-get-card-balance-28-response-body", coords: "90,7930,406,8000", shape: "rect" },
  { alt: "29", title: "cards-get-card-balance 29 Header", href: "cards-get-card-balance-29-header", coords: "85,8230,310,8298", shape: "rect" },
  { alt: "30", title: "cards-get-card-balance 30 503(Service Unavailable) ", href: "cards-get-card-balance-30-503service-unavailable", coords: "70,8761,528,8832", shape: "rect" },
  { alt: "31", title: "cards-get-card-balance 31 Response body", href: "cards-get-card-balance-31-response-body", coords: "87,8850,412,8901", shape: "rect" },
  { alt: "32", title: "cards-get-card-balance 32 Header", href: "cards-get-card-balance-32-header", coords: "78,9157,303,9219", shape: "rect" },
  { alt: "33", title: "cards-get-card-balance 33 504(Gateway Timeout) ", href: "cards-get-card-balance-33-504gateway-timeout", coords: "70,9666,499,9739", shape: "rect" },
  { alt: "34", title: "cards-get-card-balance 34 Response body", href: "cards-get-card-balance-34-response-body", coords: "73,9765,407,9837", shape: "rect" },
  { alt: "35", title: "cards-get-card-balance 35 Header", href: "cards-get-card-balance-35-header", coords: "88,10068,308,10144", shape: "rect" }
];

const CardsGetCardBalancePage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get card balance`}
      image={CardsGetCardBalanceImage}
      backRoute="/true-layer-accounts-cards"
      areas={areas}
    />
  );
};

export default CardsGetCardBalancePage;
