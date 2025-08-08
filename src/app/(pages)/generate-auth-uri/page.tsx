"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { GenerateAuthURIDigramImage } from "@/assets";

const IMG_WIDTH = 1865;
const IMG_HEIGHT = 3628;
const areas = [
  {
    href: "/generate-auth-uri-generate-auth-uri-1", // Replace with your actual route
    x: 7.08,
    y: 5.31,
    width: 407.36,
    height: 69.07,
    title: "generate-auth-uri-generate-auth-uri-1",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-query-params",
    x: 35.42,
    y: 99.18,
    width: 334.74,
    height: 85.01,
    title: "generate-auth-uri-generate-auth-uri-query-params",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-201created",
    x: 53.13,
    y: 531.34,
    width: 460.49,
    height: 95.64,
    title: "generate-auth-uri-generate-auth-uri-response-201created",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-400invalid-parameters",
    x: 887.34,
    y: 517.17,
    width: 582.70,
    height: 92.10,
    title: "generate-auth-uri-generate-auth-uri-response-400invalid-parameters",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-401unauthorized",
    x: 49.59,
    y: 963.49,
    width: 552.59,
    height: 115.12,
    title: "generate-auth-uri-generate-auth-uri-response-401unauthorized",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-403",
    x: 56.68,
    y: 1370.85,
    width: 580.93,
    height: 109.81,
    title: "generate-auth-uri-generate-auth-uri-response-403",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-422",
    x: 56.68,
    y: 1781.76,
    width: 580.93,
    height: 111.58,
    title: "generate-auth-uri-generate-auth-uri-response-422",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-response-500",
    x: 60.22,
    y: 2185.57,
    width: 665.94,
    height: 122.21,
    title: "generate-auth-uri-generate-auth-uri-response-500",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-auth-uri-expired-webhooks",
    x: 40.74,
    y: 2644.30,
    width: 773.98,
    height: 86.79,
    title: "generate-auth-uri-generate-auth-uri-auth-uri-expired-webhooks",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-auth-uri-expired-webhooks",
    x: 51.36,
    y: 2741.71,
    width: 465.81,
    height: 86.79,
    title: "generate-auth-uri-generate-auth-uri-auth-uri-expired-webhooks",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-tracked-api",
    x: 53.13,
    y: 3056.97,
    width: 494.15,
    height: 93.87,
    title: "generate-auth-uri-generate-auth-uri-tracked-api",
  },
  {
    href: "/generate-auth-uri-generate-auth-uri-tracked-api",
    x: 85.01,
    y: 3161.47,
    width: 449.87,
    height: 93.87,
    title: "generate-auth-uri-generate-auth-uri-tracked-api",
  },
];

const GenerateAuthURIPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-signup"); // Update with your actual back route
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
          Generate Auth URI
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={GenerateAuthURIDigramImage}
            alt="Generate Auth URI Diagram"
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            priority
            style={{ width: "100%", height: "auto" }}
          />

          {areas.map((area, index) => (
            <Tooltip key={index} title={area.title} arrow>
              <Box
                component={Link}
                href={area.href}
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

export default GenerateAuthURIPage;