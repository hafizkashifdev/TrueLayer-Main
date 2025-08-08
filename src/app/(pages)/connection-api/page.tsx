"use client";
import React, { useCallback } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import { ConnectionAPIImage } from "@/assets";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import Link from "next/link";

const ConnectionAPIPage = ({
    backRoute = "/trueLayer",
}) => {
    const areas = [
        {
            id: 1,
            x: 22.20,
            y: 81.96,
            width: 413.22,
            height: 100.74,
            href: "/create-a-connection",
            title: "Connection API Overview",
        },
        {
            id: 2,
            x: 27.32,
            y: 1053.53,
            width: 391.02,
            height: 99.04,
            href: "/extend-a-connection",
            title: "API Authentication",
        },
        {
            id: 3,
            x: 17.08,
            y: 2566.38,
            width: 273.20,
            height: 133.19,
            href: "/auth-link",
            title: "Endpoint Configuration",
        },
        {
            id: 4,
            x: 32.44,
            y: 2721.76,
            width: 722.27,
            height: 81.96,
            href: "/generate-a-direct-bank-authentication-link",
            title: "Request Parameters",
        },
        {
            id: 5,
            x: 29.03,
            y: 3611.37,
            width: 590.80,
            height: 93.91,
            href: "/generate-a-reauthentication-link",
            title: "Response Handling",
        },
        {
            id: 6,
            x: 5.12,
            y: 4374.62,
            width: 264.66,
            height: 107.57,
            href: "/providers",
            title: "Error Codes",
        },
        {
            id: 7,
            x: 27.32,
            y: 4495.85,
            width: 317.60,
            height: 99.04,
            href: "/list-providers",
            title: "List Providers",
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
                    alt={'Connection API'}
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
                    {'Connection API'}
                </Typography>
            </Box>
            <svg
                style={{ width: "100%" }}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1798 5611"
                role="img"
                aria-label="Connection API Overview"
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
                    xlinkHref={ConnectionAPIImage.src}
                    style={{ width: "1798px" }}
                />

                {areas.map((area) => (
                    <Tooltip key={area.id} title={area.title} arrow>
                        <Link
                            href={area.href}
                            // title={area.title}
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

export default ConnectionAPIPage;