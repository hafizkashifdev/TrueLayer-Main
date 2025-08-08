"use client";

import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { GetMandateImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const GetMandateImageMap = () => {
  const imageWidth = 1848;
  const imageHeight = 2819;

  const areas = [
    {
      href: "/get-get-mandate-1",
      title: "get-get-mandate-1",
      coords: [
        28.07977207977208, 31.58974358974359, 547.5555555555555,
        112.31908831908831,
      ],
    },
    {
      href: "/get-body-params-2",
      title: "get-body-params-2",
      coords: [
        35.0997150997151, 152.68376068376068, 542.2905982905983,
        84.23931623931625,
      ],
    },
    {
      href: "/get-responses-3",
      title: "get-responses-3",
      coords: [
        68.44444444444444, 579.1452991452992, 522.985754985755,
        75.46438746438741,
      ],
    },
    {
      href: "/get-response-200mendate-4",
      title: "get-response-200mendate-4",
      coords: [
        96.52421652421653, 675.6695156695157, 493.1509971509971,
        70.19943019943014,
      ],
    },
    {
      href: "/get-response-400invalid-parameters-5",
      title: "get-response-400invalid-parameters-5",
      coords: [
        893.2877492877493, 651.0997150997151, 612.4900284900285,
        82.48433048433048,
      ],
    },
    {
      href: "/get-response-401-unauthenticated-6",
      title: "get-response-401-unauthenticated-6",
      coords: [
        93.01424501424502, 1081.0712250712252, 573.8803418803419,
        94.76923076923072,
      ],
    },
    {
      href: "/get-response-403-forbidden-7",
      title: "get-response-403-forbidden-7",
      coords: [
        94.76923076923077, 1474.1880341880342, 565.1054131054132,
        89.50427350427344,
      ],
    },
    {
      href: "/get-response-404-mendate-not-found-8",
      title: "get-response-404-mendate-not-found-8",
      coords: [
        78.97435897435898, 1869.059829059829, 700.2393162393162,
        103.54415954415958,
      ],
    },
    {
      href: "/get-response-500-unknow-error-9",
      title: "get-response-500-unknow-error-9",
      coords: [
        100.03418803418803, 2262.1766381766383, 624.7749287749289,
        101.78917378917367,
      ],
    },
  ];

  const router = useRouter();

  return (
    <Box p={3}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt="Back Icon"
          width={40}
          height={40}
          onClick={() => router.push("/mandates")}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
          Get Mandate
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          maxWidth: `${imageWidth}px`,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Image
          src={GetMandateImage}
          alt="Get Mandate Image Map"
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
          priority
          quality={90}
        />

        {areas.map((area, index) => {
          // Calculate percentage positions and dimensions
          const left = Math.max(0, (area.coords[0] / imageWidth) * 100);
          const top = Math.max(0, (area.coords[1] / imageHeight) * 100);
          const width = (area.coords[2] / imageWidth) * 100;
          const height = (area.coords[3] / imageHeight) * 100;

          return (
            <Link
              key={index}
              href={area.href}
              title={area.title}
              sx={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}%`,
                height: `${height}%`,
                cursor: "pointer",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default GetMandateImageMap;
