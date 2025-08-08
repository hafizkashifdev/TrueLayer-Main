// "use client";

// import { Box, Tooltip, Typography } from "@mui/material";
// import Image from "next/image";
// import { useCallback } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { CommonBackIcon } from "@/assets/common-assets";
// import { accountsGetStandingOrdersImage } from "@/assets";

// const IMG_WIDTH = 1847;
// const IMG_HEIGHT = 4784;

// // ...existing code...
// const areas = [
//   {
//     href: "/accounts-get-standing-orders",
//     x: 15.786324786324808,
//     y: 10.52421652421652,
//     width: 380.62583095916426,
//     height: 75.42355175688508,
//     title: "Get standing orders",
//   },
//   {
//     href: "/accounts-get-standing-orders-path-params",
//     x: 28.064577397910732,
//     y: 108.75023741690408,
//     width: 264.8594491927825,
//     height: 63.14529914529915,
//     title: "Path Params",
//   },
//   {
//     href: "/accounts-get-standing-orders-query-params",
//     x: 328.0047483380817,
//     y: 112.25830959164293,
//     width: 296.43209876543204,
//     height: 66.65337132003799,
//     title: "Query Params",
//   },
//   {
//     href: "/accounts-get-standing-orders-headers",
//     x: 1359.3779677113012,
//     y: 108.75023741690408,
//     width: 231.5327635327635,
//     height: 71.91547958214626,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses",
//     x: 31.572649572649574,
//     y: 427.9848053181386,
//     width: 254.33523266856602,
//     height: 70.16144349477685,
//     title: "Responses",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-200-ok",
//     x: 49.113010446343786,
//     y: 515.6866096866097,
//     width: 249.0731244064577,
//     height: 70.16144349477679,
//     title: "200 (OK)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-200-ok-response-body",
//     x: 82.43969610636277,
//     y: 603.3884140550807,
//     width: 315.7264957264957,
//     height: 73.6695156695157,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-200-ok-headers",
//     x: 78.93162393162393,
//     y: 1617.2212725546058,
//     width: 233.28679962013294,
//     height: 63.145299145299305,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-202-accepted",
//     x: 54.37511870845204,
//     y: 2120.6296296296296,
//     width: 313.9724596391263,
//     height: 66.65337132003788,
//     title: "202(Accepted)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-202-accepted-response-body",
//     x: 91.20987654320987,
//     y: 2206.577397910731,
//     width: 320.988603988604,
//     height: 64.89933523266882,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-202-accepted-headers",
//     x: 96.47198480531816,
//     y: 2610.005698005698,
//     width: 215.74643874643877,
//     height: 75.42355175688499,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-401-unauthorized",
//     x: 59.637226970560306,
//     y: 3132.708452041785,
//     width: 359.5773979107313,
//     height: 75.42355175688499,
//     title: "401(Unauthorized)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-401-unauthorized-response-body",
//     x: 70.16144349477683,
//     y: 3230.934472934473,
//     width: 349.0531813865147,
//     height: 68.40740740740739,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-401-unauthorized-headers",
//     x: 77.17758784425452,
//     y: 3525.612535612536,
//     width: 233.28679962013297,
//     height: 77.1775878442545,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-403-access-denied",
//     x: 56.129154795821464,
//     y: 4046.5612535612536,
//     width: 384.1339031339031,
//     height: 77.17758784425405,
//     title: "403(Access Denied)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-403-access-denied-response-body",
//     x: 82.43969610636277,
//     y: 4144.787274453941,
//     width: 319.2345679012346,
//     height: 73.66951566951593,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-403-access-denied-headers",
//     x: 78.93162393162393,
//     y: 4453.497625830959,
//     width: 231.53276353276354,
//     height: 71.91547958214687,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-404-not-found",
//     x: 64.89933523266856,
//     y: 4960.4140550807215,
//     width: 320.98860398860404,
//     height: 68.40740740740694,
//     title: "404(Not Found)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-404-not-found-response-body",
//     x: 78.93162393162393,
//     y: 5056.88603988604,
//     width: 336.77492877492875,
//     height: 78.93162393162402,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-404-not-found-headers",
//     x: 77.17758784425452,
//     y: 5362.088319088319,
//     width: 236.79487179487182,
//     height: 75.4235517568859,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-429-rate-limit-exceeded",
//     x: 52.62108262108262,
//     y: 5874.26685660019,
//     width: 492.8841405508072,
//     height: 66.65337132003788,
//     title: "429(Rate Limit Exceeded)",
//   },
//   {
//     href: "/accounts-get-standing-order-responses-429-rate-limit-exceeded-response-body",
//     x: 75.42355175688509,
//     y: 5958.460588793922,
//     width: 352.5612535612535,
//     height: 63.14529914529885,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-429-rate-limit-exceeded-headers",
//     x: 78.93162393162393,
//     y: 6275.9411206077875,
//     width: 242.05698005698005,
//     height: 70.1614434947769,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-500-internal-server-error",
//     x: 59.637226970560306,
//     y: 6782.85754985755,
//     width: 496.3922127255461,
//     height: 84.1937321937321,
//     title: "500(Internal Server Error)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-500-internal-server-error-response-body",
//     x: 73.66951566951568,
//     y: 6884.591642924976,
//     width: 333.26685660018995,
//     height: 68.40740740740694,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-500-internal-server-error-headers",
//     x: 80.68566001899335,
//     y: 7188.039886039886,
//     width: 215.74643874643874,
//     height: 71.91547958214596,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-501-not-implemented",
//     x: 54.37511870845204,
//     y: 7696.710351377018,
//     width: 422.7226970560304,
//     height: 89.45584045584019,
//     title: "501(Not Implemented)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-501-not-implemented-response-body",
//     x: 77.17758784425452,
//     y: 7800.198480531814,
//     width: 331.5128205128205,
//     height: 87.70180436847022,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-501-not-implemented-headers",
//     x: 77.17758784425452,
//     y: 8100.138651471985,
//     width: 238.54890788224122,
//     height: 78.93162393162311,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-503-service-unavailable",
//     x: 64.89933523266856,
//     y: 8619.333333333334,
//     width: 443.7711301044634,
//     height: 68.40740740740694,
//     title: "503(Service Unavailable)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-503-service-unavailable-response-body",
//     x: 78.93162393162393,
//     y: 8712.297245963913,
//     width: 361.3314339981007,
//     height: 84.1937321937312,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-503-service-unavailable-headers",
//     x: 78.93162393162393,
//     y: 9013.991452991453,
//     width: 256.08926875593545,
//     height: 84.1937321937312,
//     title: "Headers",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-504-gateway-timeout",
//     x: 57.88319088319093,
//     y: 9527.924026590694,
//     width: 473.5897435897436,
//     height: 85.94776828110116,
//     title: "504(Gateway Timeout)",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-504-gateway-timeout-response-body",
//     x: 82.43969610636277,
//     y: 9626.150047483381,
//     width: 329.7587844254511,
//     height: 84.1937321937312,
//     title: "Response Body",
//   },
//   {
//     href: "/accounts-get-standing-orders-responses-504-gateway-timeout-headers",
//     x: 75.42355175688509,
//     y: 9926.090218423551,
//     width: 259.59734093067425,
//     height: 92.96391263057922,
//     title: "Headers",
//   },
// ];
// // ...existing

// const JavaScriptPage = () => {
//   const router = useRouter();

//   const onBackIconClick = useCallback(() => {
//     router.push("/");
//   }, [router]);

//   return (
//     <Box sx={{ p: "40px" }}>
//       <Box sx={{ display: "flex" }}>
//         <Image
//           src={CommonBackIcon}
//           alt="Back"
//           width={48}
//           height={48}
//           onClick={onBackIconClick}
//           style={{ cursor: "pointer" }}
//         />
//       </Box>

//       <Box sx={{ mt: "34px" }}>
//         <Typography
//           variant="h5"
//           color="#5A5867"
//           fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
//           fontWeight={{ md: 600, xs: 500 }}
//           sx={{ fontFamily: "inherit", lineHeight: "1.25" }}
//         >
//           Get standing orders
//         </Typography>
//       </Box>

//       <Box sx={{ pt: "20px" }}>
//         <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
//           <Image
//             src={accountsGetStandingOrdersImage}
//             alt="JavaScript Section"
//             width={IMG_WIDTH}
//             height={IMG_HEIGHT}
//             priority
//             style={{ width: "100%", height: "auto" }}
//           />

//           {areas.map((area, index) => (
//             <Tooltip key={index} title={area.title} arrow>
//               <Box
//                 component={Link}
//                 href={area.href}
//                 sx={{
//                   position: "absolute",
//                   left: `${(area.x / IMG_WIDTH) * 100}%`,
//                   top: `${(area.y / IMG_HEIGHT) * 100}%`,
//                   width: `${(area.width / IMG_WIDTH) * 100}%`,
//                   height: `${(area.height / IMG_HEIGHT) * 100}%`,
//                   "&:hover": {
//                     outline: "2px solid white",
//                     opacity: 0.2,
//                   },
//                 }}
//               />
//             </Tooltip>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default JavaScriptPage;

 "use client";


import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { accountsGetStandingOrdersImage } from "@/assets";
import { useCallback } from "react";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";


const AccountsGetStandingOrdersPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-accounts");
  }, [router]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", my: "34px" }}>
        <Image
          src={CommonBackIcon}
          alt="Back"
          width={48}
          height={48}
          onClick={onBackIconClick}
          style={{ cursor: "pointer", margin: "0 16px" }}
        />

          <Box>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit", lineHeight: "1.25" }}
        >
          Get standing orders
        </Typography>
      </Box>
      </Box>

    

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <Image
          src={accountsGetStandingOrdersImage} // Place Section.svg in public folder
          alt="Get Standing Orders Diagram"
          width={1920} // Adjust if you know exact width
          height={10050} // Estimated height from max Y-coordinate
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
          useMap="#image-map"
        />
        <map name="image-map">
          <area target="_parent" alt="Get standing orders" title="Get standing orders" href="/accounts-get-standing-orders-1" coords="16,11,396,86" shape="rect" />
          <area target="_parent" alt="Path Params" title="Path Params" href="/accounts-get-standing-orders-path-params" coords="28,109,293,172" shape="rect" />
          <area target="_parent" alt="Query Params" title="Query Params" href="/accounts-get-standing-orders-query-params" coords="328,112,624,179" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-headers" coords="1359,111,1591,182" shape="rect" />
          <area target="_parent" alt="Responses" title="Responses" href="/accounts-get-standing-orders-responses" coords="32,428,286,498" shape="rect" />
          <area target="_parent" alt="200 (OK)" title="200 (OK)" href="/accounts-get-standing-orders-responses-200-ok" coords="49,516,298,586" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-200-ok-response-body" coords="82,605,398,679" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-200-ok-headers" coords="79,1667,312,1730" shape="rect" />
          <area target="_parent" alt="202(Accepted)" title="202(Accepted)" href="/accounts-get-standing-orders-responses-202-accepted" coords="54,2192,368,2260" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-202-accepted-response-body" coords="91,2287,412,2350" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-202-accepted-headers" coords="96,2710,312,2785" shape="rect" />
          <area target="_parent" alt="401(Unauthorized)" title="401(Unauthorized)" href="/accounts-get-standing-orders-responses-401-unauthorized" coords="60,3233,419,3308" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-401-unauthorized-response-body" coords="70,3381,419,3450" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-401-unauthorized-headers" coords="77,3666,310,3743" shape="rect" />
          <area target="_parent" alt="403(Access Denied)" title="403(Access Denied)" href="/accounts-get-standing-orders-responses-403-access-denied" coords="56,4187,440,4264" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-403-access-denied-response-body" coords="82,4365,402,4328" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-403-access-denied-headers" coords="79,4600,310,4675" shape="rect" />
          <area target="_parent" alt="404(Not Found)" title="404(Not Found)" href="/accounts-get-standing-orders-responses-404-not-found" coords="65,5120,386,5199" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-404-not-found-response-body" coords="79,5227,416,5306" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-404-not-found-headers" coords="77,5562,314,5638" shape="rect" />
          <area target="_parent" alt="429(Rate Limit Exceeded)" title="429(Rate Limit Exceeded)" href="/accounts-get-standing-orders-responses-429-rate-limit-exceeded" coords="53,6074,546,6141" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-order-responses-429-rate-limit-exceeded-response-body" coords="75,6198,428,6262" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-429-rate-limit-exceeded-headers" coords="79,6534,321,6604" shape="rect" />
          <area target="_parent" alt="500(Internal Server Error)" title="500(Internal Server Error)" href="/accounts-get-standing-orders-responses-500-internal-server-error" coords="60,7053,556,7137" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-500-internal-server-error-response-body" coords="74,7165,407,7233" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-500-internal-server-error-headers" coords="81,7488,296,7560" shape="rect" />
          <area target="_parent" alt="501(Not Implemented)" title="501(Not Implemented)" href="/accounts-get-standing-orders-responses-501-not-implemented" coords="54,7997,477,8086" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-501-not-implemented-response-body" coords="77,8100,409,8188" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-501-not-implemented-headers" coords="77,8400,316,8479" shape="rect" />
          <area target="_parent" alt="503(Service Unavailable)" title="503(Service Unavailable)" href="/accounts-get-standing-orders-responses-503-service-unavailable" coords="65,8969,509,9038" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-503-service-unavailable-response-body" coords="79,9062,440,9146" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-503-service-unavailable-headers" coords="79,9364,335,9448" shape="rect" />
          <area target="_parent" alt="504(Gateway Timeout)" title="504(Gateway Timeout)" href="/accounts-get-standing-orders-responses-504-gateway-timeout" coords="60,9908,533,10000" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="/accounts-get-standing-orders-responses-504-gateway-timeout-response-body" coords="82,10026,412,10110" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="/accounts-get-standing-orders-responses-504-gateway-timeout-headers" coords="75,10326,335,10419" shape="rect" />
        </map>
      </Box>
    </Box>
  );
};

export default AccountsGetStandingOrdersPage;
