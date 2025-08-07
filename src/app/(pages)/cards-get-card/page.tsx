import { CardsGetCardImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  { alt: "", title: "", href: "get-card1", coords: "9,13,213,76", shape: "rect" },
  { alt: "", title: "", href: "get-card2-path-parameters", coords: "25,100,287,170", shape: "rect" },
  { alt: "", title: "", href: "get-card3-query-parameters", coords: "477,102,779,172", shape: "rect" },
  { alt: "", title: "", href: "get-card4-headers", coords: "1142,99,1352,165", shape: "rect" },
  { alt: "", title: "", href: "get-card5-response", coords: "27,435,252,503", shape: "rect" },
  { alt: "", title: "", href: "get-card6-200ok", coords: "38,526,274,583", shape: "rect" },
  { alt: "", title: "", href: "get-card7-response-body", coords: "72,597,410,672", shape: "rect" },
  { alt: "", title: "", href: "get-card8-header", coords: "67,1657,320,1730", shape: "rect" },
  { alt: "", title: "", href: "get-card9-202accepted", coords: "48,2171,362,2237", shape: "rect" },
  { alt: "", title: "", href: "get-card10-response-body", coords: "86,2272,451,2342", shape: "rect" },
  { alt: "", title: "", href: "get-card11-header", coords: "78,2654,308,2730", shape: "rect" },
  { alt: "", title: "", href: "get-card12-401unauthorized", coords: "53,3190,436,3268", shape: "rect" },
  { alt: "", title: "", href: "get-card13-response-body", coords: "70,3289,407,3362", shape: "rect" },
  { alt: "", title: "", href: "get-card14-header", coords: "80,3610,297,3678", shape: "rect" },
  { alt: "", title: "", href: "get-card15-403access-denied", coords: "38,4126,449,4210", shape: "rect" },
  { alt: "", title: "", href: "get-card16-response-body", coords: "72,4237,391,4313", shape: "rect" },
  { alt: "", title: "", href: "get-card17-header", coords: "67,4525,323,4596", shape: "rect" },
  { alt: "", title: "", href: "get-card18-404not-found", coords: "43,5045,391,5116", shape: "rect" },
  { alt: "", title: "", href: "get-card19-response-body", coords: "77,5149,409,5219", shape: "rect" },
  { alt: "", title: "", href: "get-card20-header", coords: "72,5449,305,5515", shape: "rect" },
  { alt: "", title: "", href: "get-card21-429rate-limit-exceeded", coords: "56,5963,506,6039", shape: "rect" },
  { alt: "", title: "", href: "get-card22-response-body", coords: "77,6077,402,6157", shape: "rect" },
  { alt: "", title: "", href: "get-card23-header", coords: "62,6412,376,6485", shape: "rect" },
  { alt: "", title: "", href: "get-card24-500internal-server-error", coords: "60,6901,513,6985", shape: "rect" },
  { alt: "", title: "", href: "get-card25-response-body", coords: "82,7042,415,7113", shape: "rect" },
  { alt: "", title: "", href: "get-card26-header", coords: "83,7311,302,7382", shape: "rect" },
  { alt: "", title: "", href: "get-card27-501not-implemented", coords: "50,7822,466,7892", shape: "rect" },
  { alt: "", title: "", href: "get-card28-response-body", coords: "67,7934,413,8015", shape: "rect" },
  { alt: "", title: "", href: "get-card29-header", coords: "72,8228,316,8304", shape: "rect" },
  { alt: "", title: "", href: "get-card30-503service-unavailable", coords: "55,8734,508,8800", shape: "rect" },
  { alt: "", title: "", href: "get-card31-response-body", coords: "75,8831,402,8902", shape: "rect" },
  { alt: "", title: "", href: "get-card32-header", coords: "67,9167,326,9248", shape: "rect" },
  { alt: "", title: "", href: "get-card33-504gateway-timeout", coords: "54,9695,509,9776", shape: "rect" },
  { alt: "", title: "", href: "get-card34-response-body", coords: "76,9811,433,9870", shape: "rect" },
  { alt: "", title: "", href: "get-card35-header", coords: "69,10070,333,10160", shape: "rect" },
];
const CardsGetCardPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Get card`}
      image={CardsGetCardImage}
      backRoute="/true-layer-accounts-cards"
      areas={areas}
    />
  );
};

export default CardsGetCardPage;
