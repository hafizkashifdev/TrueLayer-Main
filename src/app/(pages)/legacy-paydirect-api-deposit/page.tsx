import { LegacyPaydirectApiDepositImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  { alt: "", title: "", href: "/", coords: "40,42,309,100", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1353,46,1801,99", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "53,129,314,194", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "56,973,282,1025", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "73,1056,605,1113", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "64,2033,621,2088", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "659,2031,1196,2086", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1251,2031,1764,2091", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "60,2289,598,2349", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "634,2286,1219,2343", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1256,2286,1792,2344", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "38,2603,384,2664", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1233,2601,1803,2668", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "49,2691,327,2743", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "53,2968,282,3020", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "71,3060,610,3113", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "76,4227,628,4304", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "944,4225,1478,4294", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "79,4499,597,4562", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "944,4501,1545,4566", shape: "rect" }
];

const LegacyPaydirectApiDepositPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  Deposit`}
      image={LegacyPaydirectApiDepositImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiDepositPage;
