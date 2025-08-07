"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { ClientTrackingApiImage } from "@/assets";

const IMG_WIDTH = 1848;
const IMG_HEIGHT = 1546;
const areas = [
  {
    href: "/client-tracking-api-tracked-api", // Replace with your actual routes
    x: 21.06,
    y: 19.3,
    width: 268.51,
    height: 57.91,
    title: "client-tracking-api-tracked-api",
  },
  {
    href: "https://client-tracking.truelayer.com/v1/tracked-events",
    x: 1333.79,
    y: 15.79,
    width: 491.4,
    height: 61.42,
    title: "https://client-tracking.truelayer.com/v1/tracked-events",
  },
  {
    href: "/client-tracking-api-response",
    x: 38.61,
    y: 449.28,
    width: 226.39,
    height: 61.42,
    title: "client-tracking-api-response",
  },
  {
    href: "/client-tracking-api-response-200successful-response",
    x: 61.42,
    y: 531.76,
    width: 589.68,
    height: 73.71,
    title: "client-tracking-api-response-200successful-response",
  },
  {
    href: "/client-tracking-api-query-params",
    x: 36.85,
    y: 105.3,
    width: 296.59,
    height: 56.16,
    title: "client-tracking-api-query-params",
  },
  {
    href: "#",
    x: 415.93,
    y: 124.6,
    width: 12.28,
    height: 14.04,
    title: "Area 6",
  },
  {
    href: "/client-tracking-api-response-400bad-request",
    x: 56.16,
    y: 879.25,
    width: 480.87,
    height: 66.69,
    title: "client-tracking-api-response-400bad-request",
  },
  {
    href: "/client-tracking-api-response-401unauthorized",
    x: 658.12,
    y: 879.25,
    width: 482.62,
    height: 70.2,
    title: "client-tracking-api-response-401unauthorized",
  },
  {
    href: "/client-tracking-api-response-404not-found",
    x: 1214.45,
    y: 875.74,
    width: 459.81,
    height: 66.69,
    title: "client-tracking-api-response-404not-found",
  },
  {
    href: "/client-tracking-api-response-500internal-server-error",
    x: 50.89,
    y: 1158.29,
    width: 608.98,
    height: 66.69,
    title: "client-tracking-api-response-500internal-server-error",
  },
];

const ClientTrackingApiPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/"); // Update with your actual back route
  }, [router]);

  return (
    <Box sx={{ p: "40px" }}>
      <Box sx={{ display: "flex" }}>
        <Image
          src={CommonBackIcon}
          alt="Back"
          width={48}
          height={48}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
      </Box>

      <Box sx={{ mt: "34px" }}>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit", lineHeight: "1.25" }}
        >
          Client Tracking API
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={ClientTrackingApiImage}
            alt="Client Tracking API Section"
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            priority
            style={{ width: "100%", height: "auto" }}
          />


{areas.map((area, index) => (
  <Tooltip key={index} title={area.title} arrow>
    <Box
      component={area.href.startsWith('http') ? 'a' : Link}
      href={area.href}
      {...(area.href.startsWith('http') ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      } : {})}
      sx={{
        position: "absolute",
        left: `${(area.x / IMG_WIDTH) * 100}%`,
        top: `${(area.y / IMG_HEIGHT) * 100}%`,
        width: `${(area.width / IMG_WIDTH) * 100}%`,
        height: `${(area.height / IMG_HEIGHT) * 100}%`,
        cursor: "pointer",
        "&:hover": {
          outline: "2px solid white",
          opacity: 0.2,
        },
      }}
    />
  </Tooltip>
))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientTrackingApiPage;