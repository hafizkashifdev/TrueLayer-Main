"use client";

import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { RevokeMandateImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const RevokeMandateImageMap = () => {
  const imageWidth = 1848;
  const imageHeight = 3706;

  const areas = [
    {
      href: "/revoke-revoke-mandate",
      title: "revoke-revoke-mandate",
      coords: [
        7.01994301994302, 8.774928774928775, 559.8404558404558,
        77.21937321937321,
      ],
    },
    {
      href: "/revoke-responses",
      title: "revoke-responses",
      coords: [
        29.834757834757834, 373.8119658119658, 575.6353276353276,
        75.46438746438747,
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
          Revoke mandate
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
        src={RevokeMandateImage}
        alt="Revoke Mandate Image Map"
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
        priority
        quality={90}
      />

      {areas.map((area, index) => {
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

export default RevokeMandateImageMap;
