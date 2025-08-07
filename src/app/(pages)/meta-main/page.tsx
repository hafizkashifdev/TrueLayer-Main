"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { MetaMainImage } from "@/assets";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import Link from "next/link";

const MetaMainPage = ({
    backRoute = "/hubspot-commerce",
}) => {
    const areas = [
        {
            id: 1,
            x: 10.53,
            y: 10.53,
            width: 394.87,
            height: 101.79,
            href: "/connection-metadata",
            title: "Connection Metadata",
            target: "_self"
        },
        {
            id: 2,
            x: 15.79,
            y: 121.09,
            width: 277.29,
            height: 82.48,
            href: "/headers-metadata",
            title: "Metadata Structure",
            target: "_self"
        },
        {
            id: 3,
            x: 26.32,
            y: 435.24,
            width: 277.29,
            height: 87.75,
            href: "/responses-metadata",
            title: "Responses",
            target: "_self"
        },
        {
            id: 4,
            x: 35.10,
            y: 537.03,
            width: 277.29,
            height: 70.20,
            href: "/ok-200-metadata",
            title: "Response Codes",
            target: "_self"
        },
        {
            id: 5,
            x: 49.14,
            y: 644.08,
            width: 375.57,
            height: 61.42,
            href: "/response-body-metadata",
            title: "Response Body",
            target: "_self"
        },
        {
            id: 6,
            x: 57.91,
            y: 1642.67,
            width: 272.02,
            height: 131.62,
            href: "/headers-200ok-metadata",
            title: "Error Handling",
            target: "_self"
        },
        {
            id: 7,
            x: 29.83,
            y: 2220.06,
            width: 401.89,
            height: 100.03,
            href: "/unauthorized-1-metadata-401",
            title: "Success Responses",
            target: "_self"
        },
        {
            id: 8,
            x: 66.69,
            y: 3116.85,
            width: 398.38,
            height: 119.34,
            href: "/403access-denied-metadata",
            title: "Pagination",
            target: "_self"
        },
        {
            id: 9,
            x: 50.89,
            y: 2330.62,
            width: 363.28,
            height: 101.79,
            href: "/response-body-metadata-3",
            title: "Response Body",
            target: "_self"
        },
        {
            id: 10,
            x: 59.67,
            y: 2607.91,
            width: 280.80,
            height: 115.83,
            href: "/headers-200ok-metadata",
            title: "Response Headers",
            target: "_self"
        },
        {
            id: 11,
            x: 77.22,
            y: 3246.72,
            width: 333.45,
            height: 91.26,
            href: "/response-body-metadata-4",
            title: "Response Body",
            target: "_self"
        },
        {
            id: 12,
            x: 54.40,
            y: 3527.52,
            width: 289.57,
            height: 126.36,
            href: "/headers-metadata-4033",
            title: "Rate Limiting",
            target: "_self"
        },
        {
            id: 13,
            x: 35.10,
            y: 4054.02,
            width: 473.85,
            height: 122.85,
            href: "/429rate-limit-exceeded-metadataa",
            title: "Authentication",
            target: "_self"
        },
        {
            id: 14,
            x: 66.69,
            y: 4183.89,
            width: 361.53,
            height: 78.97,
            href: "/response-body-metadataa-res",
            title: "Response Body",
            target: "_self"
        },
        {
            id: 15,
            x: 59.67,
            y: 4448.89,
            width: 300.10,
            height: 145.66,
            href: "/headers-metadataa-res",
            title: "Timeouts",
            target: "_self"
        },
        {
            id: 16,
            x: 56.16,
            y: 4989.42,
            width: 487.89,
            height: 112.32,
            href: "/500internal-server-error-metadata",
            title: "Retry Policies",
            target: "_self"
        },
        {
            id: 17,
            x: 70.20,
            y: 5114.03,
            width: 356.26,
            height: 78.97,
            href: "/response-body-meta-data-10",
            title: "Logging",
            target: "_self"
        },
        {
            id: 18,
            x: 61.42,
            y: 5373.77,
            width: 277.29,
            height: 135.13,
            href: "/headers-meta-data-500",
            title: "Monitoring",
            target: "_self"
        },
        {
            id: 19,
            x: 47.38,
            y: 5893.24,
            width: 454.54,
            height: 157.95,
            href: "/service-unavailable-503-meta-data",
            title: "Webhooks",
            target: "_self"
        },
        ////////////////////////////////////////////////////////// start tommorow
        {
            id: 20,
            x: 43.87,
            y: 6058.21,
            width: 400.14,
            height: 94.77,
            href: "/response-body-metadata-08",
            title: "Webhook Security",
            target: "_self"
        },
        {
            id: 21,
            x: 59.67,
            y: 6310.93,
            width: 336.96,
            height: 126.36,
            href: "/headers-metadata-08",
            title: "Webhook Retries",
            target: "_self"
        },
        {
            id: 22,
            x: 49.14,
            y: 6847.95,
            width: 463.32,
            height: 117.58,
            href: "/service-unavailable503-metadata-09",
            title: "Testing",
            target: "_self"
        },
        {
            id: 23,
            x: 78.97,
            y: 6981.33,
            width: 345.73,
            height: 105.30,
            href: "/response-body-metadata-010",
            title: "Sandbox",
            target: "_self"
        },
        {
            id: 24,
            x: 70.20,
            y: 7263.89,
            width: 266.76,
            height: 119.34,
            href: "/headers-metadata-010",
            title: "Troubleshooting",
            target: "_self"
        },
        {
            id: 25,
            x: 17.55,
            y: 7888.66,
            width: 250.96,
            height: 124.60,
            href: "/user-info-metadata",
            title: "FAQ",
            target: "_self"
        },
        {
            id: 26,
            x: 21.06,
            y: 8018.53,
            width: 250.96,
            height: 89.50,
            href: "/user-info-headers-metadata",
            title: "Support",
            target: "_self"
        },
        {
            id: 27,
            x: 15.79,
            y: 8316.88,
            width: 270.27,
            height: 114.07,
            href: "/user-info-responses-metadata",
            title: "Documentation",
            target: "_self"
        },
        {
            id: 28,
            x: 33.34,
            y: 8427.44,
            width: 261.49,
            height: 89.50,
            href: "/ok-200-meta-001",
            title: "API Reference",
            target: "_self"
        },
        {
            id: 29,
            x: 43.87,
            y: 8520.46,
            width: 384.34,
            height: 89.50,
            href: "/response-body-meta-002",
            title: "SDK",
            target: "_self"
        },
        {
            id: 30,
            x: 54.40,
            y: 9199.64,
            width: 301.86,
            height: 117.58,
            href: "/headers-meta-003",
            title: "Changelog",
            target: "_self"
        },
        {
            id: 31,
            x: 35.10,
            y: 9696.30,
            width: 405.40,
            height: 121.09,
            href: "/unauthorized401-meta-108",
            title: "Migration",
            target: "_self"
        },
        {
            id: 32,
            x: 54.40,
            y: 9833.19,
            width: 366.79,
            height: 91.26,
            href: "/response-body-meta-108",
            title: "Best Practices",
            target: "_self"
        },
        {
            id: 33,
            x: 56.16,
            y: 10094.68,
            width: 284.31,
            height: 126.36,
            href: "/headers-meta-118",
            title: "Security",
            target: "_self"
        },
        {
            id: 34,
            x: 43.87,
            y: 10615.91,
            width: 419.44,
            height: 129.87,
            href: "/access-denied403-meta-118",
            title: "Performance",
            target: "_self"
        },
        {
            id: 35,
            x: 43.87,
            y: 10752.80,
            width: 426.46,
            height: 96.52,
            href: "/response-body-meta-119",
            title: "Scalability",
            target: "_self"
        },
        {
            id: 36,
            x: 56.16,
            y: 11026.58,
            width: 280.80,
            height: 133.38,
            href: "/headers-meta-119",
            title: "Caching",
            target: "_self"
        },
        {
            id: 37,
            x: 54.40,
            y: 11546.05,
            width: 468.58,
            height: 129.87,
            href: "/rate-limit-exceeded429-meta-119",
            title: "Deprecation",
            target: "_self"
        },
        {
            id: 38,
            x: 56.16,
            y: 11670.66,
            width: 363.28,
            height: 121.09,
            href: "/response-body-429",
            title: "Versioning",
            target: "_self"
        },
        {
            id: 39,
            x: 45.63,
            y: 11939.17,
            width: 310.63,
            height: 136.89,
            href: "/headers-meta-119",
            title: "Compliance",
            target: "_self"
        },
        {
            id: 40,
            x: 15.79,
            y: 12479.70,
            width: 537.03,
            height: 142.15,
            href: "/internal-server-error500-meta-120",
            title: "Legal",
            target: "_self"
        },
        {
            id: 41,
            x: 70.20,
            y: 12630.63,
            width: 349.24,
            height: 105.30,
            href: "/response-body-meta-120",
            title: "Response Body",
            target: "_self"
        },
        {
            id: 42,
            x: 54.40,
            y: 12874.58,
            width: 291.33,
            height: 133.38,
            href: "/headers-meta-118",
            title: "Privacy",
            target: "_self"
        },
        {
            id: 43,
            x: 52.65,
            y: 13408.09,
            width: 421.20,
            height: 147.42,
            href: "/not-implemented-meta-data-5011",
            title: "Terms",
            target: "_self"
        },
        {
            id: 44,
            x: 54.40,
            y: 13541.47,
            width: 363.28,
            height: 119.34,
            href: "/response-body-meta-data-5011",
            title: "SLA",
            target: "_self"
        },
        {
            id: 45,
            x: 54.40,
            y: 13824.02,
            width: 287.82,
            height: 115.83,
            href: "/headers-meta-118",
            title: "Contact",
            target: "_self"
        },
        {
            id: 46,
            x: 47.38,
            y: 14345.25,
            width: 482.62,
            height: 133.38,
            href: "/service-unavailable503-meta-data-5033",
            title: "Feedback",
            target: "_self"
        },
        {
            id: 47,
            x: 49.14,
            y: 14478.63,
            width: 387.85,
            height: 122.85,
            href: "/response-body-meta-data-5033",
            title: "Roadmap",
            target: "_self"
        },
        {
            id: 48,
            x: 54.40,
            y: 14734.86,
            width: 293.08,
            height: 150.93,
            href: "/headers-meta-118",
            title: "Community",
            target: "_self"
        },
        {
            id: 49,
            x: 61.42,
            y: 15278.91,
            width: 440.50,
            height: 140.40,
            href: "/gateway-timeout504-meta-data-5044",
            title: "504 (Gateway Timeout)",
            target: "_self"
        },
        {
            id: 50,
            x: 66.69,
            y: 15419.30,
            width: 349.24,
            height: 98.28,
            href: "/response-body-meta-5044",
            title: "Timeout Handling",
            target: "_self"
        },
        {
            id: 51,
            x: 57.91,
            y: 15670.27,
            width: 273.78,
            height: 143.91,
            href: "/headers-meta-118",
            title: "Recovery",
            target: "_self"
        }
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
                    alt={'Meta'}
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
                    {'Meta'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1848 16329"
                role="img"
                aria-label="Meta Main Overview"
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
                    xlinkHref={MetaMainImage.src}
                    style={{ width: "1848px" }}
                />

                {areas.map((area) => (
                    <Tooltip key={area.id} title={area.title} arrow>
                        <Link
                            href={area.href}
                            target={area.target}
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

export default MetaMainPage;