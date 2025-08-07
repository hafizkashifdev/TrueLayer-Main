"use client";
import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { CreateMandateImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1848px",
  aspectRatio: "1848 / 7264",
  margin: "0 auto",
}));

const OverlayButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: 0,
  minWidth: "unset",
  padding: 0,
  cursor: "pointer",
}));

interface ClickableArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const clickableAreas: ClickableArea[] = [
  {
    id: "1",
    href: "/create-create-mandate-1",
    title: "Create Mandate",
    x: 21.05982905982906,
    y: 29.834757834757834,
    width: 470.33618233618233,
    height: 85.99430199430198,
  },
  {
    id: "2",
    href: "/create-body-params-2",
    title: "Body Parameters",
    x: 50.894586894586894,
    y: 133.37891737891738,
    width: 459.8062678062678,
    height: 89.5042735042735,
  },
  {
    id: "3",
    href: "/create-vrp-sweeping-3",
    title: "VRP Sweeping",
    x: 91.25925925925925,
    y: 231.65811965811966,
    width: 449.27635327635335,
    height: 87.74928774928773,
  },
  {
    id: "4",
    href: "/create-vrp-commercial-4",
    title: "VRP Commercial",
    x: 100.03418803418803,
    y: 786.2336182336182,
    width: 429.97150997151,
    height: 89.50427350427344,
  },
  {
    id: "5",
    href: "/create-direct-debit-5",
    title: "Direct Debit",
    x: 91.25925925925925,
    y: 1728.6609686609686,
    width: 396.62678062678066,
    height: 82.48433048433048,
  },
  {
    id: "6",
    href: "/create-header-6",
    title: "Create Header",
    x: 47.38461538461539,
    y: 3776.7293447293446,
    width: 359.7720797720798,
    height: 96.52421652421663,
  },
  {
    id: "7",
    href: "/create-responses-7",
    title: "API Responses",
    x: 63.17948717948718,
    y: 4138.25641025641,
    width: 391.3618233618234,
    height: 75.46438746438798,
  },
  {
    id: "8",
    href: "/create-201-responses-8",
    title: "201 Created Response",
    x: 80.72934472934473,
    y: 4227.760683760684,
    width: 487.8860398860399,
    height: 77.21937321937367,
  },
  {
    id: "9",
    href: "/create-400-responses-9",
    title: "400 Bad Request Response",
    x: 919.6125356125356,
    y: 4203.190883190883,
    width: 617.7549857549859,
    height: 98.27920227920276,
  },
  {
    id: "10",
    href: "/create-401-responses-10",
    title: "401 Unauthorized Response",
    x: 73.70940170940167,
    y: 4650.71225071225,
    width: 591.4301994301995,
    height: 108.80911680911686,
  },
  {
    id: "11",
    href: "/create-403-forbidden-11",
    title: "403 Forbidden Response",
    x: 94.76923076923077,
    y: 5064.888888888889,
    width: 524.7407407407406,
    height: 84.2393162393164,
  },
  {
    id: "12",
    href: "/create-response-409idempotency-key-concurrency-conflict-13",
    title: "409 Idempotency Key Concurrency Conflict",
    x: 80.72934472934473,
    y: 5480.820512820512,
    width: 875.7378917378918,
    height: 82.48433048433071,
  },
  {
    id: "13",
    href: "/create-422-responses-14",
    title: "422 Unprocessable Entity Response",
    x: 91.25925925925925,
    y: 5894.997150997151,
    width: 652.8547008547009,
    height: 80.72934472934503,
  },
  {
    id: "14",
    href: "/create-429-responses-15",
    title: "429 Too Many Requests Response",
    x: 66.68945868945872,
    y: 6312.683760683762,
    width: 682.6894586894587,
    height: 93.0142450142448,
  },
  {
    id: "15",
    href: "/create-500-responses-16",
    title: "500 Internal Server Error Response",
    x: 82.48433048433046,
    y: 6723.350427350428,
    width: 600.2051282051282,
    height: 103.54415954415981,
  },
];

interface CreateMandateImageMapProps {
  imageSrc: string;
  imageAlt?: string;
}

const CreateMandateImageMap: React.FC<CreateMandateImageMapProps> = () => {
  const router = useRouter();

  const handleAreaClick = (href: string) => {
    router.push(href);
  };

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
          Create Mandate
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>
      <ImageContainer>
        <Image
          src={CreateMandateImage}
          alt="Create Mandate API Documentation"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {clickableAreas.map((area) => (
          <OverlayButton
            key={area.id}
            onClick={() => handleAreaClick(area.href)}
            style={{
              left: `${(area.x / 1848) * 100}%`,
              top: `${(area.y / 7264) * 100}%`,
              width: `${(area.width / 1848) * 100}%`,
              height: `${(area.height / 7264) * 100}%`,
            }}
            aria-label={area.title}
          />
        ))}
      </ImageContainer>
    </Box>
  );
};

export default CreateMandateImageMap;
