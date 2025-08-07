'use client'
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { AccountsGetAccountTransactions } from '@/assets';

const AccountTransactionsImageMap = () => {
    const imageAreas = [
        {
            alt: "accounts-get-account-transactions",
            title: "accounts-get-account-transactions",
            href: "/accounts-get-account-transactions",
            coords: "17,12,489,76",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-path-params",
            title: "accounts-get-account-transactions-path-params",
            href: "/accounts-get-account-transactions-path-params",
            coords: "29,106,285,172",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-query-params",
            title: "accounts-get-account-transactions-query-params",
            href: "/accounts-get-account-transactions-query-params",
            coords: "326,103,630,168",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-headers",
            title: "accounts-get-account-transactions-headers",
            href: "/accounts-get-account-transactions-headers",
            coords: "1361,108,1644,177",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-response1",
            title: "accounts-get-account-response1",
            href: "/accounts-get-account-response1",
            coords: "31,436,371,498",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-200-ok",
            title: "accounts-get-account-transactions-responses-200-ok",
            href: "/accounts-get-account-transactions-responses-200-ok",
            coords: "48,522,390,573",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-200-ok-response-body",
            title: "accounts-get-account-transactions-responses-200-ok-response-body",
            href: "/accounts-get-account-transactions-responses-200-ok-response-body",
            coords: "77,597,407,657",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
            title: "accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
            href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-running-balance",
            coords: "985,928,1378,992",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
            title: "accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
            href: "/accounts-get-account-transactions-responses-200-ok-response-body-results-meta",
            coords: "130,1212,362,1273",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-200-ok-headers",
            title: "accounts-get-account-transactions-responses-200-ok-headers",
            href: "/accounts-get-account-transactions-responses-200-ok-headers",
            coords: "79,2039,333,2111",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-202accepted",
            title: "accounts-get-account-transactions-responses-202accepted",
            href: "/accounts-get-account-transactions-responses-202accepted",
            coords: "63,2555,402,2622",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-202accepted-response-body",
            title: "accounts-get-account-transactions-responses-202accepted-response-body",
            href: "/accounts-get-account-transactions-responses-202accepted-response-body",
            coords: "101,2639,458,2710",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-202accepted-headers",
            title: "accounts-get-account-transactions-responses-202accepted-headers",
            href: "/accounts-get-account-transactions-responses-202accepted-headers",
            coords: "105,3048,367,3128",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-400invalid-request",
            title: "accounts-get-account-transactions-responses-400invalid-request",
            href: "/accounts-get-account-transactions-responses-400invalid-request",
            coords: "67,3571,501,3645",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-400invalid-request-response-body",
            title: "accounts-get-account-transactions-responses-400invalid-request-response-body",
            href: "/accounts-get-account-transactions-responses-400invalid-request-response-body",
            coords: "89,3671,429,3746",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-400invalid-request-headers",
            title: "accounts-get-account-transactions-responses-400invalid-request-headers",
            href: "/accounts-get-account-transactions-responses-400invalid-request-headers",
            coords: "84,3968,317,4040",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-401unauthorized",
            title: "accounts-get-account-transactions-responses-401unauthorized",
            href: "/accounts-get-account-transactions-responses-401unauthorized",
            coords: "70,4486,432,4563",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-401unauthorized-response-body",
            title: "accounts-get-account-transactions-responses-401unauthorized-response-body",
            href: "/accounts-get-account-transactions-responses-401unauthorized-response-body",
            coords: "81,4585,415,4654",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-401unauthorized-headers",
            title: "accounts-get-account-transactions-responses-401unauthorized-headers",
            href: "/accounts-get-account-transactions-responses-401unauthorized-headers",
            coords: "86,4887,345,4965",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-403access-denied",
            title: "accounts-get-account-transactions-responses-403access-denied",
            href: "/accounts-get-account-transactions-responses-403access-denied",
            coords: "67,5409,470,5479",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-403access-denied-response-body",
            title: "accounts-get-account-transactions-responses-403access-denied-response-body",
            href: "/accounts-get-account-transactions-responses-403access-denied-response-body",
            coords: "86,5500,417,5575",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-403access-denied-headers",
            title: "accounts-get-account-transactions-responses-403access-denied-headers",
            href: "/accounts-get-account-transactions-responses-403access-denied-headers",
            coords: "86,5800,336,5876",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-404not-found",
            title: "accounts-get-account-transactions-responses-404not-found",
            href: "/accounts-get-account-transactions-responses-404not-found",
            coords: "65,6317,400,6394",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-404not-found-response-body",
            title: "accounts-get-account-transactions-responses-404not-found-response-body",
            href: "/accounts-get-account-transactions-responses-404not-found-response-body",
            coords: "81,6416,408,6483",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-404not-found-headers",
            title: "accounts-get-account-transactions-responses-404not-found-headers",
            href: "/accounts-get-account-transactions-responses-404not-found-headers",
            coords: "81,6713,331,6796",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded",
            title: "accounts-get-account-transactions-responses-429rate-limit-exceeded",
            href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded",
            coords: "63,7238,537,7309",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
            title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
            href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-response-body",
            coords: "84,7328,407,7413",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
            title: "accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
            href: "/accounts-get-account-transactions-responses-429rate-limit-exceeded-headers",
            coords: "86,7633,316,7707",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-500internal-server-error",
            title: "accounts-get-account-transactions-responses-500internal-server-error",
            href: "/accounts-get-account-transactions-responses-500internal-server-error",
            coords: "65,8144,544,8216",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-500internal-server-error-response-body",
            title: "accounts-get-account-transactions-responses-500internal-server-error-response-body",
            href: "/accounts-get-account-transactions-responses-500internal-server-error-response-body",
            coords: "86,8246,424,8313",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-500internal-server-error-headers",
            title: "accounts-get-account-transactions-responses-500internal-server-error-headers",
            href: "/accounts-get-account-transactions-responses-500internal-server-error-headers",
            coords: "84,8544,326,8616",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-501not-implemented",
            title: "accounts-get-account-transactions-responses-501not-implemented",
            href: "/accounts-get-account-transactions-responses-501not-implemented",
            coords: "67,9061,472,9135",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-501not-implemented-response-body",
            title: "accounts-get-account-transactions-responses-501not-implemented-response-body",
            href: "/accounts-get-account-transactions-responses-501not-implemented-response-body",
            coords: "82,9157,408,9229",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-501not-implemented-headers",
            title: "accounts-get-account-transactions-responses-501not-implemented-headers",
            href: "/accounts-get-account-transactions-responses-501not-implemented-headers",
            coords: "89,9466,329,9536",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-503service-unavailable",
            title: "accounts-get-account-transactions-responses-503service-unavailable",
            href: "/accounts-get-account-transactions-responses-503service-unavailable",
            coords: "67,9974,517,10053",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-503service-unavailable-response-body",
            title: "accounts-get-account-transactions-responses-503service-unavailable-response-body",
            href: "/accounts-get-account-transactions-responses-503service-unavailable-response-body",
            coords: "82,10077,417,10140",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-503service-unavailable-headers",
            title: "accounts-get-account-transactions-responses-503service-unavailable-headers",
            href: "/accounts-get-account-transactions-responses-503service-unavailable-headers",
            coords: "86,10375,335,10444",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-504gateway-timeout",
            title: "accounts-get-account-transactions-responses-504gateway-timeout",
            href: "/accounts-get-account-transactions-responses-504gateway-timeout",
            coords: "69,10895,527,10971",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-504gateway-timeout-response-body",
            title: "accounts-get-account-transactions-responses-504gateway-timeout-response-body",
            href: "/accounts-get-account-transactions-responses-504gateway-timeout-response-body",
            coords: "89,10993,415,11062",
            shape: "rect"
        },
        {
            alt: "accounts-get-account-transactions-responses-504gateway-timeout-headers",
            title: "accounts-get-account-transactions-responses-504gateway-timeout-headers",
            href: "/accounts-get-account-transactions-responses-504gateway-timeout-headers",
            coords: "88,11292,312,11362",
            shape: "rect"
        }
    ];

    const handleAreaClick = (href: any) => {
        window.open(href, '_parent');
    };

    const parseCoords = (coords: any) => {
        const [x1, y1, x2, y2] = coords.split(',').map(Number);
        return {
            left: x1,
            top: y1,
            width: x2 - x1,
            height: y2 - y1
        };
    };

    return (
        <Box sx={{ position: 'relative', }}>
            <Image
                src={AccountsGetAccountTransactions}
                alt="Accounts Get Account Transactions API Diagram"
                width={1803}
                height={11841}
                priority
                style={{
                    maxWidth: '100%',
                    height: '100%'
                }}
            // useMap="#image-map"
            />

            {imageAreas.map((area, index) => {
                const coords = parseCoords(area.coords);
                return (
                    <Box key={index}
                        component="button"
                        onClick={() => handleAreaClick(area.href)}
                        sx={{
                            position: 'absolute',
                            left: coords.left,
                            top: coords.top,
                            width: coords.width,
                            height: coords.height,
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 1,
                        }}
                        aria-label={area.alt}
                        title={area.title}
                    />
                );
            })}
        </Box>
    );
};

export default AccountTransactionsImageMap;