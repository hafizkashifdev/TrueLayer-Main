"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { PendingTransactionSections } from "@/assets";

const IMG_WIDTH = 1847;
const IMG_HEIGHT = 11845;

const areas = [
  {
    x: 17.54,
    y: 15.786,
    width: 501.654,
    height: 57.883,
    href: "/get-card-pending-transactions-5",
    title: "get-card-pending-transactions-5",
  },
  {
    x: 1131.353,
    y: 17.54,
    width: 664.78,
    height: 47.359,
    href: "https://api.truelayer.com/data/v1/cards/{account_id}/transactions/pending",
    title:
      "https://api.truelayer.com/data/v1/cards/{account_id}/transactions/pending",
  },
  {
    x: 36.835,
    y: 108.75,
    width: 249.073,
    height: 59.637,
    href: "/path-params-5-1",
    title: "path-params-5-1",
  },
  {
    x: 328.005,
    y: 108.75,
    width: 284.154,
    height: 56.129,
    href: "/query-params-5-2",
    title: "query-params-5-2",
  },
  {
    x: 1361.132,
    y: 105.242,
    width: 217.5,
    height: 64.899,
    href: "/headers-5-3",
    title: "headers-5-3",
  },
  {
    x: 36.835,
    y: 436.755,
    width: 280.646,
    height: 56.129,
    href: "/response-5-4",
    title: "response-5-4",
  },
  {
    x: 85.948,
    y: 512.179,
    width: 208.73,
    height: 57.883,
    href: "/ok-200-5-4-1",
    title: "ok-200-5-4-1",
  },
  {
    x: 108.75,
    y: 589.356,
    width: 315.726,
    height: 59.637,
    href: "/response-body-5-4-1-1",
    title: "response-body-5-4-1-1",
  },
  {
    x: 128.045,
    y: 671.796,
    width: 252.581,
    height: 64.899,
    href: "/results-5-4-1-1-1",
    title: "results-5-4-1-1-1",
  },
  {
    x: 159.617,
    y: 1198.007,
    width: 226.271,
    height: 68.407,
    href: "/meta-5-4-1-1-1-2",
    title: "meta-5-4-1-1-1-2",
  },
  {
    x: 122.783,
    y: 1675.104,
    width: 245.565,
    height: 71.915,
    href: "/status-5-4-1-1-2",
    title: "status-5-4-1-1-2",
  },
  {
    x: 82.44,
    y: 2034.682,
    width: 226.271,
    height: 73.67,
    href: "/header-5-4-1-2",
    title: "header-5-4-1-2",
  },
  {
    x: 99.98,
    y: 2550.368,
    width: 310.464,
    height: 63.145,
    href: "/accepted-202-5-4-2",
    title: "accepted-202-5-4-2",
  },
  {
    x: 136.815,
    y: 2638.07,
    width: 319.235,
    height: 64.899,
    href: "/response-body-5-4-2-1",
    title: "response-body-5-4-2-1",
  },
  {
    x: 138.569,
    y: 3046.761,
    width: 219.255,
    height: 61.391,
    href: "/header-5-4-2-2",
    title: "header-5-4-2-2",
  },
  {
    x: 96.472,
    y: 3560.693,
    width: 382.38,
    height: 78.932,
    href: "/invalid-request-400-5-4-3",
    title: "invalid-request-400-5-4-3",
  },
  {
    x: 112.258,
    y: 3667.689,
    width: 338.529,
    height: 57.883,
    href: "/response-body-5-4-3-1",
    title: "response-body-5-4-3-1",
  },
  {
    x: 108.75,
    y: 3960.613,
    width: 238.549,
    height: 73.67,
    href: "/header-5-4-3-2",
    title: "header-5-4-3-2",
  },
  {
    x: 98.226,
    y: 4483.316,
    width: 350.807,
    height: 63.145,
    href: "/unauthorized-401-5-4-4",
    title: "unauthorized-401-5-4-4",
  },
  {
    x: 119.274,
    y: 4578.034,
    width: 313.972,
    height: 68.407,
    href: "/response-body-5-4-4-1",
    title: "response-body-5-4-4-1",
  },
  {
    x: 122.783,
    y: 4869.204,
    width: 210.484,
    height: 78.932,
    href: "/header-5-4-4-2",
    title: "header-5-4-4-2",
  },
  {
    x: 61.391,
    y: 5407.693,
    width: 405.182,
    height: 68.407,
    href: "/access-denied-403-5-4-5",
    title: "access-denied-403-5-4-5",
  },
  {
    x: 87.702,
    y: 5497.149,
    width: 320.989,
    height: 71.915,
    href: "/response-body-5-4-5-1",
    title: "response-body-5-4-5-1",
  },
  {
    x: 91.21,
    y: 5798.843,
    width: 215.746,
    height: 68.407,
    href: "/header-5-4-5-2",
    title: "header-5-4-5-2",
  },
  {
    x: 68.407,
    y: 6312.776,
    width: 313.972,
    height: 80.686,
    href: "/not-found-404-5-4-6",
    title: "not-found-404-5-4-6",
  },
  {
    x: 91.21,
    y: 6416.264,
    width: 317.481,
    height: 70.161,
    href: "/response-body-5-4-6-1",
    title: "response-body-5-4-6-1",
  },
  {
    x: 89.456,
    y: 6717.958,
    width: 250.827,
    height: 73.67,
    href: "/header-5-4-6-2",
    title: "header-5-4-6-2",
  },
  {
    x: 66.653,
    y: 7228.383,
    width: 454.295,
    height: 80.686,
    href: "/rate-limit-exceeded-429-5-4-7",
    title: "rate-limit-exceeded-429-5-4-7",
  },
  {
    x: 80.686,
    y: 7326.609,
    width: 329.759,
    height: 73.67,
    href: "/response-body-5-4-7-1",
    title: "response-body-5-4-7-1",
  },
  {
    x: 92.964,
    y: 7626.549,
    width: 219.255,
    height: 71.915,
    href: "/header-5-4-7-2",
    title: "header-5-4-7-2",
  },
  {
    x: 68.407,
    y: 8143.99,
    width: 477.098,
    height: 80.686,
    href: "/internal-server-error-500-5-4-8",
    title: "internal-server-error-500-5-4-8",
  },
  {
    x: 89.456,
    y: 8240.462,
    width: 335.021,
    height: 77.178,
    href: "/response-body-5-4-8-1",
    title: "response-body-5-4-8-1",
  },
  {
    x: 85.948,
    y: 8536.894,
    width: 229.779,
    height: 77.178,
    href: "/header-5-4-8-2",
    title: "header-5-4-8-2",
  },
  {
    x: 70.161,
    y: 9050.826,
    width: 405.182,
    height: 89.456,
    href: "/not-implemented-501-5-4-9",
    title: "not-implemented-501-5-4-9",
  },
  {
    x: 85.948,
    y: 9152.56,
    width: 320.989,
    height: 80.686,
    href: "/response-body-5-4-9-1",
    title: "response-body-5-4-9-1",
  },
  {
    x: 92.964,
    y: 9461.271,
    width: 226.271,
    height: 70.161,
    href: "/header-5-4-9-2",
    title: "header-5-4-9-2",
  },
  {
    x: 71.915,
    y: 9973.449,
    width: 459.557,
    height: 84.194,
    href: "/service-unavailable-503-5-4-10",
    title: "service-unavailable-503-5-4-10",
  },
  {
    x: 89.456,
    y: 10066.413,
    width: 335.021,
    height: 85.948,
    href: "/response-body-5-4-10-1",
    title: "response-body-5-4-10-1",
  },
  {
    x: 80.686,
    y: 10366.353,
    width: 238.549,
    height: 77.178,
    href: "/header-5-4-10-2",
    title: "header-5-4-10-2",
  },
  {
    x: 68.407,
    y: 10889.056,
    width: 422.723,
    height: 73.67,
    href: "/gateway-timeout-504-5-4-11",
    title: "gateway-timeout-504-5-4-11",
  },
  {
    x: 84.194,
    y: 10985.528,
    width: 319.235,
    height: 87.702,
    href: "/response-body-5-4-11-1",
    title: "response-body-5-4-11-1",
  },
  {
    x: 84.194,
    y: 11287.222,
    width: 259.597,
    height: 75.424,
    href: "/header-5-4-11-2",
    title: "header-5-4-11-2",
  },
];

const GetCardPendingTransactionsPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-accounts-cards");
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
          Cards Get Card Pending Transactions
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={PendingTransactionSections}
            alt="JavaScript Section"
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            priority
            style={{ width: "100%", height: "auto" }}
          />

          {areas.map((area, index) => {
            const isExternal = area.href.startsWith("http");
            return (
              <Tooltip key={index} title={area.title} arrow>
                {isExternal ? (
                  <Box
                    component="a"
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      position: "absolute",
                      left: `${(area.x / IMG_WIDTH) * 100}%`,
                      top: `${(area.y / IMG_HEIGHT) * 100}%`,
                      width: `${(area.width / IMG_WIDTH) * 100}%`,
                      height: `${(area.height / IMG_HEIGHT) * 100}%`,
                      "&:hover": {
                        outline: "2px solid white",
                        opacity: 0.2,
                      },
                    }}
                  />
                ) : (
                  <Box
                    component={Link}
                    href={area.href}
                    sx={{
                      position: "absolute",
                      left: `${(area.x / IMG_WIDTH) * 100}%`,
                      top: `${(area.y / IMG_HEIGHT) * 100}%`,
                      width: `${(area.width / IMG_WIDTH) * 100}%`,
                      height: `${(area.height / IMG_HEIGHT) * 100}%`,
                      "&:hover": {
                        outline: "2px solid white",
                        opacity: 0.2,
                      },
                    }}
                  />
                )}
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GetCardPendingTransactionsPage;
