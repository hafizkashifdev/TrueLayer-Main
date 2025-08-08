import { LegacyPaydirectApiWithdrawalImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  { alt: "", title: "", href: "/", coords: "37,49,515,114", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1377,36,1800,109", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "61,147,316,193", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1382,145,1535,186", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "58,433,275,496", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "344,500,900,563", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1077,498,1609,560", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "82,761,608,837", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "941,767,1545,839", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "24,1117,535,1175", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1330,1107,1793,1172", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "55,1200,318,1270", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1385,1206,1566,1260", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "40,1499,280,1567", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "340,1561,920,1626", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1080,1556,1619,1641", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "82,1838,593,1904", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "951,1835,1548,1907", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "37,2181,375,2243", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "60,2277,322,2335", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "975,2170,1793,2245", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "55,2575,295,2633", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "69,2666,572,2731", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1322,2664,1744,2754", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "63,3110,597,3172", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "626,3105,1132,3174", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1170,3099,1761,3179", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "30,3463,319,3518", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1268,3445,1785,3525", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "53,3544,316,3605", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "56,3845,277,3903", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "68,3941,566,4011", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1318,3947,1736,4034", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "69,4378,600,4447", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "620,4382,1137,4442", shape: "rect" },
  { alt: "", title: "", href: "/", coords: "1178,4374,1759,4450", shape: "rect" }
];

const LegacyPaydirectApiWithdrawalPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Legacy - PayDirect API  Withdrawal`}
      image={LegacyPaydirectApiWithdrawalImage}
      backRoute="/truelayer-signup"
      areas={areas}
    />
  );
};

export default LegacyPaydirectApiWithdrawalPage;
