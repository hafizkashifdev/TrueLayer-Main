"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { LegacyPaymentAPIMainDigramImage } from "@/assets";

const IMG_WIDTH = 1865;
const IMG_HEIGHT = 10152;
const areas = [
  {
    href: "/legacy-payment-api-get-providers", // Update with your actual route
    x: 10.63,
    y: 5.31,
    width: 449.87,
    height: 92.1,
    title: "legacy-payment-api-get-providers",
  },
  {
    href: "/",
    x: 1142.38,
    y: 7.08,
    width: 688.97,
    height: 86.79,
    title: "Area 2",
  },
  {
    href: "/legacy-payment-api-get-providers",
    x: 31.88,
    y: 108.04,
    width: 364.85,
    height: 99.18,
    title: "legacy-payment-api-get-providers",
  },
  {
    href: "/legacy-payment-api-response-200list-of-providers",
    x: 49.59,
    y: 889.11,
    width: 554.36,
    height: 100.95,
    title: "legacy-payment-api-response-200list-of-providers",
  },
  {
    href: "/legacy-payment-api-response-500internet-error",
    x: 924.53,
    y: 1836.66,
    width: 642.92,
    height: 118.67,
    title: "legacy-payment-api-response-500internet-error",
  },
  {
    href: "/legacy-payment-api-response-403not-authorised-for-the-action",
    x: 67.3,
    y: 1840.2,
    width: 770.44,
    height: 100.95,
    title: "legacy-payment-api-response-403not-authorised-for-the-action",
  },
  {
    href: "/legacy-payment-api-initiate-a-payment",
    x: 35.42,
    y: 2343.21,
    width: 683.66,
    height: 92.1,
    title: "legacy-payment-api-initiate-a-payment",
  },
  {
    href: "/",
    x: 1057.36,
    y: 2344.98,
    width: 733.25,
    height: 90.33,
    title: "Area 9",
  },
  {
    href: "/legacy-payment-api-initiate-a-payment",
    x: 67.3,
    y: 2444.16,
    width: 368.4,
    height: 92.1,
    title: "legacy-payment-api-initiate-a-payment",
  },
  {
    href: "/legacy-payment-api-response-1",
    x: 72.62,
    y: 4080.68,
    width: 441.01,
    height: 108.04,
    title: "legacy-payment-api-response-1",
  },
  {
    href: "/legacy-payment-api-response-200initiation-response",
    x: 102.73,
    y: 4197.58,
    width: 589.79,
    height: 106.27,
    title: "legacy-payment-api-response-200initiation-response",
  },
  {
    href: "/legacy-payment-api-response-400invalid-request",
    x: 99.18,
    y: 4638.59,
    width: 557.91,
    height: 120.44,
    title: "legacy-payment-api-response-400invalid-request",
  },
  {
    href: "/legacy-payment-api-response-403unauthorized",
    x: 100.95,
    y: 4991.04,
    width: 566.76,
    height: 123.98,
    title: "legacy-payment-api-response-403unauthorized",
  },
  {
    href: "/legacy-payment-api-response-500internet-error",
    x: 880.25,
    y: 4992.82,
    width: 557.91,
    height: 115.12,
    title: "legacy-payment-api-response-500internet-error",
  },
  {
    href: "/legacy-payment-api-response-502provider-error",
    x: 108.04,
    y: 5373.61,
    width: 549.05,
    height: 129.29,
    title: "legacy-payment-api-response-502provider-error",
  },
  {
    href: "/legacy-payment-api-submit-embedded-auth-flow-steps",
    x: 38.96,
    y: 5832.33,
    width: 621.67,
    height: 115.12,
    title: "legacy-payment-api-submit-embedded-auth-flow-steps",
  },
  {
    href: "/",
    x: 882.02,
    y: 5823.48,
    width: 938.7,
    height: 108.04,
    title: "Area 18",
  },
  {
    href: "/legacy-payment-api-response",
    x: 86.79,
    y: 6565.58,
    width: 384.34,
    height: 93.87,
    title: "legacy-payment-api-response",
  },
  {
    href: "/legacy-payment-api-response-200embedded-auth-flow-step-submission",
    x: 125.75,
    y: 6668.3,
    width: 839.52,
    height: 97.41,
    title: "legacy-payment-api-response-200embedded-auth-flow-step-submission",
  },
  {
    href: "/legacy-payment-api-response-400invalid-request",
    x: 108.04,
    y: 7134.11,
    width: 552.59,
    height: 111.58,
    title: "legacy-payment-api-response-400invalid-request",
  },
  {
    href: "/legacy-payment-api-response-403not-authorised-for-the-action",
    x: 109.81,
    y: 7444.06,
    width: 674.8,
    height: 120.44,
    title: "legacy-payment-api-response-403not-authorised-for-the-action",
  },
  {
    href: "/legacy-payment-api-response-500internet-error-1",
    x: 926.3,
    y: 7451.14,
    width: 572.08,
    height: 100.95,
    title: "legacy-payment-api-response-500internet-error-1",
  },
  {
    href: "/legacy-payment-api-response-502provider-error-1",
    x: 118.67,
    y: 7792.97,
    width: 518.94,
    height: 113.35,
    title: "legacy-payment-api-response-502provider-error-1",
  },
  {
    href: "/legacy-payment-api-get-a-payment",
    x: 42.51,
    y: 8168.45,
    width: 412.67,
    height: 109.81,
    title: "legacy-payment-api-get-a-payment",
  },
  {
    href: "/legacy-payment-api-get-a-payment",
    x: 72.62,
    y: 8287.12,
    width: 350.68,
    height: 95.64,
    title: "legacy-payment-api-get-a-payment",
  },
  {
    href: "/",
    x: 1163.63,
    y: 8173.77,
    width: 644.69,
    height: 106.27,
    title: "Area 27",
  },
  {
    href: "/legacy-payment-api-response-3",
    x: 95.64,
    y: 8800.75,
    width: 694.28,
    height: 109.81,
    title: "legacy-payment-api-response-3",
  },
  {
    href: "/legacy-payment-api-response-403unauthorized-section2",
    x: 102.73,
    y: 9346.25,
    width: 782.84,
    height: 364.85,
    title: "legacy-payment-api-response-403unauthorized-section2",
  },
  {
    href: "/legacy-payment-api-response-500internet-error-section2",
    x: 917.45,
    y: 9348.02,
    width: 522.48,
    height: 99.18,
    title: "legacy-payment-api-response-500internet-error-section2",
  },
  {
    href: "/legacy-payment-api-response-502provider-error-section2",
    x: 106.27,
    y: 9746.53,
    width: 563.22,
    height: 99.18,
    title: "legacy-payment-api-response-502provider-error-section2",
  },
];

const LegacyPaymentApiPage = () => {
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
          Legacy Payment API
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={LegacyPaymentAPIMainDigramImage}
            alt="Legacy Payment API Section"
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

export default LegacyPaymentApiPage;