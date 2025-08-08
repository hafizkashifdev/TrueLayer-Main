"use client";
import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { ConfirmFundsImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const ConfirmFundsImageMap = () => {
  const imageWidth = 1848;
  const imageHeight = 2963;

  const areas = [
    {
      href: "/confirm-confirm-funds",
      title: "confirm-confirm-funds",
      coords: [
        10.52991452991453, -1.754985754985755, 461.5612535612535,
        85.99430199430199,
      ],
    },
    {
      href: "/confirm-responses",
      title: "confirm-responses",
      coords: [
        24.56980056980055, 372.05698005698, 468.58119658119654,
        73.70940170940173,
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
          Confirm Funds
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
        }}
      >
        <Image
          src={ConfirmFundsImage}
          alt="Confirm Funds Image Map"
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
          priority
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
                "&:hover": {
                  border: "2px solid white",
                  opacity: 0.2,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ConfirmFundsImageMap;
