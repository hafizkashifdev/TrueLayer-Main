'use client'
import React from 'react';
import { AccountsGetAccountTransactions } from '@/assets';
import InteractiveImagePage from "@/features/interactive-image-page";

// const AccountTransactionsImageMap = () => {
//     const imageAreas = [
//         {
//             alt: "accounts-get-account-transactions",
//             title: "accounts-get-account-transactions",
//             href: "/accounts-get-account-transactions-component",
//             coords: "17,12,489,76",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-path-params",
//             title: "accounts-get-account-transactions-path-params",
//             href: "/accounts-get-account-transactions-path-params",
//             coords: "29,106,285,172",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-query-params",
//             title: "accounts-get-account-transactions-query-params",
//             href: "/accounts-get-account-transactions-query-params",
//             coords: "326,103,630,168",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-headers",
//             title: "accounts-get-account-transactions-headers",
//             href: "/accounts-get-account-transactions-headers",
//             coords: "1361,108,1644,177",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-response1",
//             title: "accounts-get-account-response1",
//             href: "/accounts-get-account-response1",
//             coords: "31,436,371,498",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-200-ok",
//             title: "accounts-get-account-transactions-responses-200-ok",
//             href: "/accounts-get-account-transactions-responses-200-ok",
//             coords: "48,522,390,573",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-200-ok-response-body",
//             title: "accounts-get-account-transactions-responses-200-ok-response-body",
//             href: "/accounts-get-account-transactions-responses-200-ok-response-body",
//             coords: "77,597,407,657",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
//             title: "accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
//             href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
//             coords: "985,928,1378,992",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
//             title: "accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
//             href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
//             coords: "130,1212,362,1273",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-200-ok-headers",
//             title: "accounts-get-account-transactions-responses-200-ok-headers",
//             href: "/accounts-get-account-transactions-responses-200-ok-headers",
//             coords: "79,2039,333,2111",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-202accepted",
//             title: "accounts-get-account-transactions-responses-202accepted",
//             href: "/accounts-get-account-transactions-responses-202accepted",
//             coords: "63,2555,402,2622",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-202accepted-response-body",
//             title: "accounts-get-account-transactions-responses-202accepted-response-body",
//             href: "/accounts-get-account-transactions-responses-202accepted-response-body",
//             coords: "101,2639,458,2710",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-202accepted-headers",
//             title: "accounts-get-account-transactions-responses-202accepted-headers",
//             href: "/accounts-get-account-transactions-responses-202accepted-headers",
//             coords: "105,3048,367,3128",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-400invalid-request",
//             title: "accounts-get-account-transactions-responses-400invalid-request",
//             href: "/accounts-get-account-transactions-responses-400invalid-request",
//             coords: "67,3571,501,3645",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-400invalid-request-response-body",
//             title: "accounts-get-account-transactions-responses-400invalid-request-response-body",
//             href: "/accounts-get-account-transactions-responses-400invalid-request-response-body",
//             coords: "89,3671,429,3746",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-400invalid-request-headers",
//             title: "accounts-get-account-transactions-responses-400invalid-request-headers",
//             href: "/accounts-get-account-transactions-responses-400invalid-request-headers",
//             coords: "84,3968,317,4040",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-401unauthorized",
//             title: "accounts-get-account-transactions-responses-401unauthorized",
//             href: "/accounts-get-account-transactions-responses-401unauthorized",
//             coords: "70,4486,432,4563",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-401unauthorized-response-body",
//             title: "accounts-get-account-transactions-responses-401unauthorized-response-body",
//             href: "/accounts-get-account-transactions-responses-401unauthorized-response-body",
//             coords: "81,4585,415,4654",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-401unauthorized-headers",
//             title: "accounts-get-account-transactions-responses-401unauthorized-headers",
//             href: "/accounts-get-account-transactions-responses-401unauthorized-headers",
//             coords: "86,4887,345,4965",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-403access-denied",
//             title: "accounts-get-account-transactions-responses-403access-denied",
//             href: "/accounts-get-account-transactions-responses-403access-denied",
//             coords: "67,5409,470,5479",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-403access-denied-response-body",
//             title: "accounts-get-account-transactions-responses-403access-denied-response-body",
//             href: "/accounts-get-account-transactions-responses-403access-denied-response-body",
//             coords: "86,5500,417,5575",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-403access-denied-headers",
//             title: "accounts-get-account-transactions-responses-403access-denied-headers",
//             href: "/accounts-get-account-transactions-responses-403access-denied-headers",
//             coords: "86,5800,336,5876",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-404not-found",
//             title: "accounts-get-account-transactions-responses-404not-found",
//             href: "/accounts-get-account-transactions-responses-404not-found",
//             coords: "65,6317,400,6394",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-404not-found-response-body",
//             title: "accounts-get-account-transactions-responses-404not-found-response-body",
//             href: "/accounts-get-account-transactions-responses-404not-found-response-body",
//             coords: "81,6416,408,6483",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-404not-found-headers",
//             title: "accounts-get-account-transactions-responses-404not-found-headers",
//             href: "/accounts-get-account-transactions-responses-404not-found-headers",
//             coords: "81,6713,331,6796",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded",
//             title: "accounts-get-account-transactions-responses-429rate-limit-exceeded",
//             href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded",
//             coords: "63,7238,537,7309",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
//             title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
//             href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
//             coords: "84,7328,407,7413",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
//             title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
//             href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
//             coords: "86,7633,316,7707",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-500internal-server-error",
//             title: "accounts-get-account-transactions-responses-500internal-server-error",
//             href: "/accounts-get-account-transactions-responses-500internal-server-error",
//             coords: "65,8144,544,8216",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-500internal-server-error-response-body",
//             title: "accounts-get-account-transactions-responses-500internal-server-error-response-body",
//             href: "/accounts-get-account-transactions-responses-500internal-server-error-response-body",
//             coords: "86,8246,424,8313",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-500internal-server-error-headers",
//             title: "accounts-get-account-transactions-responses-500internal-server-error-headers",
//             href: "/accounts-get-account-transactions-responses-500internal-server-error-headers",
//             coords: "84,8544,326,8616",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-501not-implemented",
//             title: "accounts-get-account-transactions-responses-501not-implemented",
//             href: "/accounts-get-account-transactions-responses-501not-implemented",
//             coords: "67,9061,472,9135",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-501not-implemented-response-body",
//             title: "accounts-get-account-transactions-responses-501not-implemented-response-body",
//             href: "/accounts-get-account-transactions-responses-501not-implemented-response-body",
//             coords: "82,9157,408,9229",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-501not-implemented-headers",
//             title: "accounts-get-account-transactions-responses-501not-implemented-headers",
//             href: "/accounts-get-account-transactions-responses-501not-implemented-headers",
//             coords: "89,9466,329,9536",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-503service-unavailable",
//             title: "accounts-get-account-transactions-responses-503service-unavailable",
//             href: "/accounts-get-account-transactions-responses-503service-unavailable",
//             coords: "67,9974,517,10053",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-503service-unavailable-response-body",
//             title: "accounts-get-account-transactions-responses-503service-unavailable-response-body",
//             href: "/accounts-get-account-transactions-responses-503service-unavailable-response-body",
//             coords: "82,10077,417,10140",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-503service-unavailable-headers",
//             title: "accounts-get-account-transactions-responses-503service-unavailable-headers",
//             href: "/accounts-get-account-transactions-responses-503service-unavailable-headers",
//             coords: "86,10375,335,10444",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-504gateway-timeout",
//             title: "accounts-get-account-transactions-responses-504gateway-timeout",
//             href: "/accounts-get-account-transactions-responses-504gateway-timeout",
//             coords: "69,10895,527,10971",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-504gateway-timeout-response-body",
//             title: "accounts-get-account-transactions-responses-504gateway-timeout-response-body",
//             href: "/accounts-get-account-transactions-responses-504gateway-timeout-response-body",
//             coords: "89,10993,415,11062",
//             shape: "rect"
//         },
//         {
//             alt: "accounts-get-account-transactions-responses-504gateway-timeout-headers",
//             title: "accounts-get-account-transactions-responses-504gateway-timeout-headers",
//             href: "/accounts-get-account-transactions-responses-504gateway-timeout-headers",
//             coords: "88,11292,312,11362",
//             shape: "rect"
//         }
//     ];
//     const router = useRouter()


//     const parseCoords = (coords: any) => {
//         const [x1, y1, x2, y2] = coords.split(',').map(Number);
//         return {
//             left: x1,
//             top: y1,
//             width: x2 - x1,
//             height: y2 - y1
//         };
//     };
//     const onChange = () => { }
//     return (
//         <Box sx={{p:"8px"}}>
//             <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
//                 <Image
//                     src={CommonBackIcon}
//                     alt='back'
//                     width={40}
//                     height={40}
//                     onClick={() => { router.push('/true-layer-accounts') }}
//                     style={{ cursor: "pointer" }}
//                 />
//                 <Typography
//                     variant="h5"
//                     color="#5A5867"
//                     fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
//                     fontWeight={{ md: 600, xs: 500 }}
//                     ml={{ md: 2, xs: 1 }}
//                     sx={{ fontFamily: "Outfit, inherit" }}
//                 >
//                     Get account transactions
//                 </Typography>
//             </Box>
//             <Box flexGrow={1}>
//                 <CheckboxForm onChange={onChange} />
//             </Box>
//             <Box mt={2} sx={{ position: 'relative', display: 'inline-block' }}>
//                 <Image
//                     src={AccountsGetAccountTransactions}
//                     alt="Accounts Get Account Transactions API Diagram"
//                     width={1920}
//                     height={12094}
//                     priority
//                     style={{
//                         maxWidth: '100%',
//                         height: '100%'
//                     }}
//                 // useMap="#image-map"
//                 />

//                 {imageAreas.map((area, index) => {
//                     const coords = parseCoords(area.coords);
//                     return (
//                         <Box key={index}
//                             component="button"
//                             onClick={() => handleAreaClick(area.href)}
//                             sx={{
//                                 position: 'absolute',
//                                 left: coords.left,
//                                 top: coords.top,
//                                 width: coords.width,
//                                 height: coords.height,
//                                 backgroundColor: 'transparent',
//                                 border: 'none',
//                                 cursor: 'pointer',
//                                 zIndex: 1,
//                             }}
//                             aria-label={area.alt}
//                             title={area.title}
//                         />
//                     );
//                 })}
//             </Box>
//         </Box>
//     );
// };

// export default AccountTransactionsImageMap;




const imageAreas = [
    {
        id: 1,
        title: "accounts-get-account-transactions",
        href: "/accounts-get-account-transactions-component",
        x: 17,
        y: 12,
        width: 472,  // 489 - 17
        height: 64    // 76 - 12
    },
    {
        id: 2,
        title: "accounts-get-account-transactions-path-params",
        href: "/accounts-get-account-transactions-path-params",
        x: 29,
        y: 106,
        width: 256,  // 285 - 29
        height: 66    // 172 - 106
    },
    {
        id: 3,
        title: "accounts-get-account-transactions-query-params",
        href: "/accounts-get-account-transactions-query-params",
        x: 326,
        y: 103,
        width: 304,  // 630 - 326
        height: 65    // 168 - 103
    },
    {
        id: 4,
        title: "accounts-get-account-transactions-headers",
        href: "/accounts-get-account-transactions-headers",
        x: 1361,
        y: 108,
        width: 283,  // 1644 - 1361
        height: 69    // 177 - 108
    },
    {
        id: 5,
        title: "accounts-get-account-response1",
        href: "/accounts-get-account-response1",
        x: 31,
        y: 436,
        width: 340,  // 371 - 31
        height: 62    // 498 - 436
    },
    {
        id: 6,
        title: "accounts-get-account-transactions-responses-200-ok",
        href: "/accounts-get-account-transactions-responses-200-ok",
        x: 48,
        y: 522,
        width: 342,  // 390 - 48
        height: 51    // 573 - 522
    },
    {
        id: 7,
        title: "accounts-get-account-transactions-responses-200-ok-response-body",
        href: "/accounts-get-account-transactions-responses-200-ok-response-body",
        x: 77,
        y: 597,
        width: 330,  // 407 - 77
        height: 60    // 657 - 597
    },
    {
        id: 8,
        title: "accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
        href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
        x: 985,
        y: 928,
        width: 393,  // 1378 - 985
        height: 64    // 992 - 928
    },
    {
        id: 9,
        title: "accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
        href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
        x: 130,
        y: 1212,
        width: 232,  // 362 - 130
        height: 61    // 1273 - 1212
    },
    {
        id: 10,
        title: "accounts-get-account-transactions-responses-200-ok-headers",
        href: "/accounts-get-account-transactions-responses-200-ok-headers",
        x: 79,
        y: 2039,
        width: 254,  // 333 - 79
        height: 72    // 2111 - 2039
    },
    {
        id: 11,
        title: "accounts-get-account-transactions-responses-202accepted",
        href: "/accounts-get-account-transactions-responses-202accepted",
        x: 63,
        y: 2555,
        width: 339,  // 402 - 63
        height: 67    // 2622 - 2555
    },
    {
        id: 12,
        title: "accounts-get-account-transactions-responses-202accepted-response-body",
        href: "/accounts-get-account-transactions-responses-202accepted-response-body",
        x: 101,
        y: 2639,
        width: 357,  // 458 - 101
        height: 71    // 2710 - 2639
    },
    {
        id: 13,
        title: "accounts-get-account-transactions-responses-202accepted-headers",
        href: "/accounts-get-account-transactions-responses-202accepted-headers",
        x: 105,
        y: 3048,
        width: 262,  // 367 - 105
        height: 80    // 3128 - 3048
    },
    {
        id: 14,
        title: "accounts-get-account-transactions-responses-400invalid-request",
        href: "/accounts-get-account-transactions-responses-400invalid-request",
        x: 67,
        y: 3571,
        width: 434,  // 501 - 67
        height: 74    // 3645 - 3571
    },
    {
        id: 15,
        title: "accounts-get-account-transactions-responses-400invalid-request-response-body",
        href: "/accounts-get-account-transactions-responses-400invalid-request-response-body",
        x: 89,
        y: 3671,
        width: 340,  // 429 - 89
        height: 75    // 3746 - 3671
    },
    {
        id: 16,
        title: "accounts-get-account-transactions-responses-400invalid-request-headers",
        href: "/accounts-get-account-transactions-responses-400invalid-request-headers",
        x: 84,
        y: 3968,
        width: 233,  // 317 - 84
        height: 72    // 4040 - 3968
    },
    {
        id: 17,
        title: "accounts-get-account-transactions-responses-401unauthorized",
        href: "/accounts-get-account-transactions-responses-401unauthorized",
        x: 70,
        y: 4486,
        width: 362,  // 432 - 70
        height: 77    // 4563 - 4486
    },
    {
        id: 18,
        title: "accounts-get-account-transactions-responses-401unauthorized-response-body",
        href: "/accounts-get-account-transactions-responses-401unauthorized-response-body",
        x: 81,
        y: 4585,
        width: 334,  // 415 - 81
        height: 69    // 4654 - 4585
    },
    {
        id: 19,
        title: "accounts-get-account-transactions-responses-401unauthorized-headers",
        href: "/accounts-get-account-transactions-responses-401unauthorized-headers",
        x: 86,
        y: 4887,
        width: 259,  // 345 - 86
        height: 78    // 4965 - 4887
    },
    {
        id: 20,
        title: "accounts-get-account-transactions-responses-403access-denied",
        href: "/accounts-get-account-transactions-responses-403access-denied",
        x: 67,
        y: 5409,
        width: 403,  // 470 - 67
        height: 70    // 5479 - 5409
    },
    {
        id: 21,
        title: "accounts-get-account-transactions-responses-403access-denied-response-body",
        href: "/accounts-get-account-transactions-responses-403access-denied-response-body",
        x: 86,
        y: 5500,
        width: 331,  // 417 - 86
        height: 75    // 5575 - 5500
    },
    {
        id: 22,
        title: "accounts-get-account-transactions-responses-403access-denied-headers",
        href: "/accounts-get-account-transactions-responses-403access-denied-headers",
        x: 86,
        y: 5800,
        width: 250,  // 336 - 86
        height: 76    // 5876 - 5800
    },
    {
        id: 23,
        title: "accounts-get-account-transactions-responses-404not-found",
        href: "/accounts-get-account-transactions-responses-404not-found",
        x: 65,
        y: 6317,
        width: 335,  // 400 - 65
        height: 77    // 6394 - 6317
    },
    {
        id: 24,
        title: "accounts-get-account-transactions-responses-404not-found-response-body",
        href: "/accounts-get-account-transactions-responses-404not-found-response-body",
        x: 81,
        y: 6416,
        width: 327,  // 408 - 81
        height: 67    // 6483 - 6416
    },
    {
        id: 25,
        title: "accounts-get-account-transactions-responses-404not-found-headers",
        href: "/accounts-get-account-transactions-responses-404not-found-headers",
        x: 81,
        y: 6713,
        width: 250,  // 331 - 81
        height: 83    // 6796 - 6713
    },
    {
        id: 26,
        title: "accounts-get-account-transactions-responses-429rate-limit-exceeded",
        href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded",
        x: 63,
        y: 7238,
        width: 474,  // 537 - 63
        height: 71    // 7309 - 7238
    },
    {
        id: 27,
        title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
        href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
        x: 84,
        y: 7328,
        width: 323,  // 407 - 84
        height: 85    // 7413 - 7328
    },
    {
        id: 28,
        title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
        href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
        x: 86,
        y: 7633,
        width: 230,  // 316 - 86
        height: 74    // 7707 - 7633
    },
    {
        id: 29,
        title: "accounts-get-account-transactions-responses-500internal-server-error",
        href: "/accounts-get-account-transactions-responses-500internal-server-error",
        x: 65,
        y: 8144,
        width: 479,  // 544 - 65
        height: 72    // 8216 - 8144
    },
    {
        id: 30,
        title: "accounts-get-account-transactions-responses-500internal-server-error-response-body",
        href: "/accounts-get-account-transactions-responses-500internal-server-error-response-body",
        x: 86,
        y: 8246,
        width: 338,  // 424 - 86
        height: 67    // 8313 - 8246
    },
    {
        id: 31,
        title: "accounts-get-account-transactions-responses-500internal-server-error-headers",
        href: "/accounts-get-account-transactions-responses-500internal-server-error-headers",
        x: 84,
        y: 8544,
        width: 242,  // 326 - 84
        height: 72    // 8616 - 8544
    },
    {
        id: 32,
        title: "accounts-get-account-transactions-responses-501not-implemented",
        href: "/accounts-get-account-transactions-responses-501not-implemented",
        x: 67,
        y: 9061,
        width: 405,  // 472 - 67
        height: 74    // 9135 - 9061
    },
    {
        id: 33,
        title: "accounts-get-account-transactions-responses-501not-implemented-response-body",
        href: "/accounts-get-account-transactions-responses-501not-implemented-response-body",
        x: 82,
        y: 9157,
        width: 326,  // 408 - 82
        height: 72    // 9229 - 9157
    },
    {
        id: 34,
        title: "accounts-get-account-transactions-responses-501not-implemented-headers",
        href: "/accounts-get-account-transactions-responses-501not-implemented-headers",
        x: 89,
        y: 9466,
        width: 240,  // 329 - 89
        height: 70    // 9536 - 9466
    },
    {
        id: 35,
        title: "accounts-get-account-transactions-responses-503service-unavailable",
        href: "/accounts-get-account-transactions-responses-503service-unavailable",
        x: 67,
        y: 9974,
        width: 450,  // 517 - 67
        height: 79    // 10053 - 9974
    },
    {
        id: 36,
        title: "accounts-get-account-transactions-responses-503service-unavailable-response-body",
        href: "/accounts-get-account-transactions-responses-503service-unavailable-response-body",
        x: 82,
        y: 10077,
        width: 335,  // 417 - 82
        height: 63    // 10140 - 10077
    },
    {
        id: 37,
        title: "accounts-get-account-transactions-responses-503service-unavailable-headers",
        href: "/accounts-get-account-transactions-responses-503service-unavailable-headers",
        x: 86,
        y: 10375,
        width: 249,  // 335 - 86
        height: 69    // 10444 - 10375
    },
    {
        id: 38,
        title: "accounts-get-account-transactions-responses-504gateway-timeout",
        href: "/accounts-get-account-transactions-responses-504gateway-timeout",
        x: 69,
        y: 10895,
        width: 458,  // 527 - 69
        height: 76    // 10971 - 10895
    },
    {
        id: 39,
        title: "accounts-get-account-transactions-responses-504gateway-timeout-response-body",
        href: "/accounts-get-account-transactions-responses-504gateway-timeout-response-body",
        x: 89,
        y: 10993,
        width: 326,  // 415 - 89
        height: 69    // 11062 - 10993
    },
    {
        id: 40,
        title: "accounts-get-account-transactions-responses-504gateway-timeout-headers",
        href: "/accounts-get-account-transactions-responses-504gateway-timeout-headers",
        x: 88,
        y: 11292,
        width: 224,  // 312 - 88
        height: 70    // 11362 - 11292
    }
];
const AccountTransactionsImageMap = () => {
    return (
        <InteractiveImagePage
            imageSrc={AccountsGetAccountTransactions}
            backRoute={'/true-layer-accounts'}
            pageTitle={'Accounts Get account transactions'}
            areas={imageAreas}
            imageHeight={11845}
            imageWidth={1807}
        />
    );
};

export default AccountTransactionsImageMap;

