"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { BatchSection } from "@/assets";

const IMG_WIDTH = 1848;
const IMG_HEIGHT = 22389;

const areas = [
  {
    x: 28.049,
    y: 21.037,
    width: 333.086,
    height: 50.84,
    href: "/initiate-batch-call-1",
    title: "initiate-batch-call-1",
  },
  {
    x: 52.593,
    y: 106.938,
    width: 268.222,
    height: 57.852,
    href: "/body-params-1-1",
    title: "body-params-1-1",
  },
  {
    x: 1355.136,
    y: 103.432,
    width: 213.877,
    height: 63.111,
    href: "/headers-1-2",
    title: "headers-1-2",
  },
  {
    x: 54.346,
    y: 448.79,
    width: 229.654,
    height: 54.346,
    href: "/response-1-3",
    title: "response-1-3",
  },
  {
    x: 77.136,
    y: 546.963,
    width: 308.543,
    height: 54.346,
    href: "/accepted-202-1-3-1",
    title: "accepted-202-1-3-1",
  },
  {
    x: 106.938,
    y: 631.111,
    width: 345.358,
    height: 57.852,
    href: "/response-body-1-3-1-1",
    title: "response-body-1-3-1-1",
  },
  {
    x: 117.457,
    y: 1032.568,
    width: 226.148,
    height: 63.111,
    href: "/header-1-3-1-2",
    title: "header-1-3-1-2",
  },
  {
    x: 78.889,
    y: 1558.494,
    width: 382.173,
    height: 66.617,
    href: "/invalid-request-400-1-3-2",
    title: "invalid-request-400-1-3-2",
  },
  {
    x: 87.654,
    y: 1661.926,
    width: 345.358,
    height: 54.346,
    href: "/response-body-1-3-2-1",
    title: "response-body-1-3-2-1",
  },
  {
    x: 92.914,
    y: 1958.198,
    width: 236.667,
    height: 63.111,
    href: "/header-1-3-2-2",
    title: "header-1-3-2-2",
  },
  {
    x: 80.642,
    y: 2473.605,
    width: 347.111,
    height: 66.617,
    href: "/unauthorized-401-1-3-3",
    title: "unauthorized-401-1-3-3",
  },
  {
    x: 94.667,
    y: 2571.778,
    width: 329.58,
    height: 63.111,
    href: "/response-body-1-3-3-1",
    title: "response-body-1-3-3-1",
  },
  {
    x: 98.173,
    y: 2868.049,
    width: 229.654,
    height: 63.111,
    href: "/header-1-3-3-2",
    title: "header-1-3-3-2",
  },
  {
    x: 75.383,
    y: 3388.716,
    width: 371.654,
    height: 63.111,
    href: "/access-denied-1-3-4",
    title: "access-denied-1-3-4",
  },
  {
    x: 98.173,
    y: 3488.642,
    width: 343.605,
    height: 59.605,
    href: "/response-body-1-3-4-1",
    title: "response-body-1-3-4-1",
  },
  {
    x: 94.667,
    y: 3781.407,
    width: 241.926,
    height: 68.37,
    href: "/header-1-3-4-2",
    title: "header-1-3-4-2",
  },
  {
    x: 71.877,
    y: 4300.321,
    width: 333.086,
    height: 73.63,
    href: "/not-found-404-1-3-5",
    title: "not-found-404-1-3-5",
  },
  {
    x: 99.926,
    y: 4396.741,
    width: 322.568,
    height: 71.877,
    href: "/response-body-1-3-5-1",
    title: "response-body-1-3-5-1",
  },
  {
    x: 101.679,
    y: 4693.012,
    width: 213.877,
    height: 71.877,
    href: "/header-1-3-5-2",
    title: "header-1-3-5-2",
  },
  {
    x: 71.877,
    y: 5213.679,
    width: 461.062,
    height: 75.383,
    href: "/rate-limit-exceeded-429-1-3-6",
    title: "rate-limit-exceeded-429-1-3-6",
  },
  {
    x: 101.679,
    y: 5317.111,
    width: 324.321,
    height: 63.111,
    href: "/response-body-429-1-3-6-1",
    title: "response-body-429-1-3-6-1",
  },
  {
    x: 94.667,
    y: 5615.136,
    width: 240.173,
    height: 68.37,
    href: "/header-1-3-6-2",
    title: "header-1-3-6-2",
  },
  {
    x: 80.642,
    y: 6128.79,
    width: 461.062,
    height: 68.37,
    href: "/internal-server-error-500-1-3-7",
    title: "internal-server-error-500-1-3-7",
  },
  {
    x: 94.667,
    y: 6225.21,
    width: 320.815,
    height: 80.642,
    href: "/response-body-1-3-7-1",
    title: "response-body-1-3-7-1",
  },
  {
    x: 94.667,
    y: 6523.235,
    width: 252.444,
    height: 73.63,
    href: "/header-1-3-7-2",
    title: "header-1-3-7-2",
  },
  {
    x: 75.383,
    y: 7038.642,
    width: 413.728,
    height: 85.901,
    href: "/not-implemented-501-1-3-8",
    title: "not-implemented-501-1-3-8",
  },
  {
    x: 98.173,
    y: 7140.321,
    width: 319.062,
    height: 82.395,
    href: "/response-body-1-3-8-1",
    title: "response-body-1-3-8-1",
  },
  {
    x: 101.679,
    y: 7443.605,
    width: 234.914,
    height: 78.889,
    href: "/header-1-3-8-2",
    title: "header-1-3-8-2",
  },
  {
    x: 78.889,
    y: 7959.012,
    width: 447.037,
    height: 82.395,
    href: "/service-unavailable-503-1-3-9",
    title: "service-unavailable-503-1-3-9",
  },
  {
    x: 98.173,
    y: 8055.432,
    width: 315.556,
    height: 73.63,
    href: "/response-body-1-3-9-1",
    title: "response-body-1-3-9-1",
  },
  {
    x: 96.42,
    y: 8346.444,
    width: 261.21,
    height: 84.148,
    href: "/header-1-3-9-2",
    title: "header-1-3-9-2",
  },
  {
    x: 80.642,
    y: 8868.864,
    width: 429.506,
    height: 75.383,
    href: "/gateway-timeout-504-1-3-10",
    title: "gateway-timeout-504-1-3-10",
  },
  {
    x: 101.679,
    y: 8974.049,
    width: 350.617,
    height: 77.136,
    href: "/response-body-1-3-10-1",
    title: "response-body-1-3-10-1",
  },
  {
    x: 101.679,
    y: 9268.568,
    width: 250.691,
    height: 70.123,
    href: "/header-1-3-10-2",
    title: "header-1-3-10-2",
  },
  {
    x: 19.284,
    y: 9929.481,
    width: 322.568,
    height: 73.63,
    href: "/get-data-in-batch-2",
    title: "get-data-in-batch-2",
  },
  {
    x: 42.074,
    y: 10029.407,
    width: 245.432,
    height: 73.63,
    href: "/response-2-1",
    title: "response-2-1",
  },
  {
    x: 59.605,
    y: 10120.568,
    width: 236.667,
    height: 66.617,
    href: "/ok-200-2-1-1",
    title: "ok-200-2-1-1",
  },
  {
    x: 103.432,
    y: 10206.469,
    width: 315.556,
    height: 66.617,
    href: "/response-body-2-1-1-1",
    title: "response-body-2-1-1-1",
  },
  {
    x: 119.21,
    y: 10606.173,
    width: 243.679,
    height: 68.37,
    href: "/results-2-1-1-1-3",
    title: "results-2-1-1-1-3",
  },
  {
    x: 178.815,
    y: 10781.481,
    width: 329.58,
    height: 73.63,
    href: "/transactions-2-1-1-1-3-1-1",
    title: "transactions-2-1-1-1-3-1-1",
  },
  {
    x: 173.556,
    y: 11787.753,
    width: 455.802,
    height: 77.136,
    href: "/pending-transactions-2-1-1-1-3-1-2",
    title: "pending-transactions-2-1-1-1-3-1-2",
  },
  {
    x: 98.173,
    y: 16330.0,
    width: 306.79,
    height: 77.136,
    href: "/header-1-3-1-2",
    title: "header-1-3-1-2",
  },
  {
    x: 61.358,
    y: 16813.852,
    width: 371.654,
    height: 85.901,
    href: "/unauthorized-401-2-1-2",
    title: "unauthorized-401-2-1-2",
  },
  {
    x: 78.889,
    y: 16913.778,
    width: 320.815,
    height: 84.148,
    href: "/response-body-2-1-2-1",
    title: "response-body-2-1-2-1",
  },
  {
    x: 78.889,
    y: 17210.049,
    width: 220.889,
    height: 77.136,
    href: "/header-2-1-2-2",
    title: "header-2-1-2-2",
  },
  {
    x: 61.358,
    y: 17739.481,
    width: 382.173,
    height: 73.63,
    href: "/access-denied-403-2-1-3",
    title: "access-denied-403-2-1-3",
  },
  {
    x: 78.889,
    y: 17832.395,
    width: 326.074,
    height: 77.136,
    href: "/response-body-2-1-3-1",
    title: "response-body-2-1-3-1",
  },
  {
    x: 80.642,
    y: 18130.42,
    width: 224.395,
    height: 73.63,
    href: "/header-2-1-3-2",
    title: "header-2-1-3-2",
  },
  {
    x: 63.111,
    y: 18656.346,
    width: 336.593,
    height: 78.889,
    href: "/not-found-404-2-1-4",
    title: "not-found-404-2-1-4",
  },
  {
    x: 77.136,
    y: 18749.259,
    width: 361.136,
    height: 80.642,
    href: "/response-body-2-1-4-1",
    title: "response-body-2-1-4-1",
  },
  {
    x: 87.654,
    y: 19050.79,
    width: 238.42,
    height: 75.383,
    href: "/header-2-1-4-2",
    title: "header-2-1-4-2",
  },
  {
    x: 68.37,
    y: 19592.494,
    width: 497.877,
    height: 84.148,
    href: "/internal-server-error-500-2-1-5",
    title: "internal-server-error-500-2-1-5",
  },
  {
    x: 82.395,
    y: 19997.457,
    width: 215.63,
    height: 66.617,
    href: "/header-2-1-5-2",
    title: "header-2-1-5-2",
  },
  {
    x: 64.864,
    y: 20511.111,
    width: 457.556,
    height: 87.654,
    href: "/service-unavailable-503-2-1-6",
    title: "service-unavailable-503-2-1-6",
  },
  {
    x: 84.148,
    y: 20619.802,
    width: 317.309,
    height: 66.617,
    href: "/response-body-2-1-6-1",
    title: "response-body-2-1-6-1",
  },
  {
    x: 91.16,
    y: 20919.58,
    width: 269.975,
    height: 73.63,
    href: "/header-2-1-6-2",
    title: "header-2-1-6-2",
  },
  {
    x: 70.123,
    y: 21427.975,
    width: 536.444,
    height: 80.642,
    href: "/gateway-timeout-504-2-1-7",
    title: "gateway-timeout-504-2-1-7",
  },
  {
    x: 91.16,
    y: 21526.148,
    width: 366.395,
    height: 73.63,
    href: "/response-body-2-1-7-1",
    title: "response-body-2-1-7-1",
  },
  {
    x: 92.914,
    y: 21829.432,
    width: 238.42,
    height: 68.37,
    href: "/header-2-1-7-2",
    title: "header-2-1-7-2",
  },
  {
    x: 84.148,
    y: 19694.173,
    width: 333.086,
    height: 82.395,
    href: "/response-body-2-1-5-1",
    title: "response-body-2-1-5-1",
  },
];

const BatchPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-data-api-v1");
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
          Batch
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={BatchSection}
            alt="JavaScript Section"
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

export default BatchPage;
