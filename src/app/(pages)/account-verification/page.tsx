"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { AccountVerificationImage } from "@/assets";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import Link from "next/link";

const AccountVerificationPage = ({
    backRoute = "/hubspot-commerce",
}) => {
    const areas = [
        {
            id: 1,
            x: 20.62,
            y: -1.72,
            width: 474.15,
            height: 91.05,
            href: "/verify-account-holder-name-verify-account",
            title: "Account Verification Overview",
            target: "_self"
        },
        {
            id: 2,
            x: 24.05,
            y: 94.49,
            width: 304.08,
            height: 80.74,
            href: "/body-params-verify-account",
            title: "Verification Methods",
            target: "_self"
        },
        {
            id: 3,
            x: 915.67,
            y: 87.62,
            width: 266.28,
            height: 104.79,
            href: "/headers-verify-account",
            title: "API Integration",
            target: "_self"
        },
        {
            id: 4,
            x: 12.03,
            y: 417.46,
            width: 240.51,
            height: 89.33,
            href: "/response-link-verify-account",
            title: "Document Requirements",
            target: "_self"
        },
        {
            id: 5,
            x: 41.23,
            y: 515.38,
            width: 231.92,
            height: 84.18,
            href: "/ok-200-verify-account",
            title: "Verification Process",
            target: "_self"
        },
        {
            id: 6,
            x: 25.77,
            y: 1616.59,
            width: 405.44,
            height: 99.64,
            href: "/bad-request-400-verify-account",
            title: "Status Codes",
            target: "_self"
        },
        {
            id: 7,
            x: 39.51,
            y: 2130.26,
            width: 381.38,
            height: 99.64,
            href: "/unauthorized-401-verify-account",
            title: "Success Responses",
            target: "_self"
        },
        {
            id: 8,
            x: 25.77,
            y: 2563.18,
            width: 364.21,
            height: 103.08,
            href: "/forbidden-403-verify-account",
            title: "Error Responses",
            target: "_self"
        },
        {
            id: 9,
            x: 27.49,
            y: 2994.38,
            width: 472.44,
            height: 113.38,
            href: "/too-many-requests-429-verify-account",
            title: "Retry Mechanism",
            target: "_self"
        },
        {
            id: 10,
            x: 41.23,
            y: 3444.49,
            width: 479.31,
            height: 101.36,
            href: "/internal-server-error-500-verify-account",
            title: "Rate Limiting",
            target: "_self"
        },
        {
            id: 11,
            x: 34.36,
            y: 3873.97,
            width: 479.31,
            height: 116.82,
            href: "/service-unavailable-503-verify-account",
            title: "503 (Service Unavailable)",
            target: "_self"
        },
        {
            id: 12,
            x: 54.97,
            y: 4330.95,
            width: 439.79,
            height: 104.79,
            href: "/gateway-timeout-504-verify-account",
            title: "Troubleshooting",
            target: "_self"
        },
    ];

    const router = useRouter();

    const onBackIconClick = useCallback(() => {
        router.push(backRoute);
    }, [router, backRoute]);

    return (
        <Box sx={{ width: "100%", position: "relative", p: 3 }}>
            <Box sx={{ display: 'flex' }}>
                <Image
                    src={CommonBackIcon}
                    alt={'Account Verification'}
                    width={48}
                    height={48}
                    onClick={onBackIconClick}
                    style={{ cursor: "pointer" }}
                />
            </Box>
            <Box sx={{ my: '34px' }}>
                <Typography
                    variant="h5"
                    color="#5A5867"
                    fontSize={{ xs: "20", sm: "26px", md: "32px" }}
                    fontWeight={{ md: 600, xs: 500 }}
                    sx={{ fontFamily: "inherit", lineHeight: '1.25' }}
                >
                    {'Account Verification'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1809 4818"
                role="img"
                aria-label="Account Verification Overview"
            >
                <style>
                    {`
                        .image-mapper-shape {
                            fill: rgba(0, 0, 0, 0);
                        }
                        g:hover .image-mapper-shape {
                            stroke: white;
                            stroke-width: 2px;
                            opacity: 20%;
                        }
                    `}
                </style>

                <image
                    xlinkHref={AccountVerificationImage.src}
                    style={{ width: "1809px" }}
                />

                {areas.map((area) => (
                    <Tooltip key={area.id} title={area.title} arrow>
                        <Link
                            href={area.href}
                            target={area.target}
                            title={area.title}
                        >
                            <g>
                                <rect
                                    x={area.x}
                                    y={area.y}
                                    width={area.width}
                                    height={area.height}
                                    className="image-mapper-shape"
                                    data-index={area.id}
                                />
                            </g>
                        </Link>
                    </Tooltip>
                ))}
            </svg>
        </Box>
    );
};

export default AccountVerificationPage;