"use client";
import React from "react";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitProviders } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

// Styled components
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "1842px",
  aspectRatio: "1842 / 7185",
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

// Interface for clickable areas
interface ClickableArea {
  id: string;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Clickable areas data
const clickableAreas: ClickableArea[] = [
  {
    id: "1",
    href: "/submit-submit-provider-selection-1",
    title: "Submit Provider Selection",
    x: 8.746438746438736,
    y: 0,
    width: 484.5527065527065,
    height: 76.96866096866098,
  },
  {
    id: "2",
    href: "/submit-responses-2",
    title: "Submit Responses",
    x: 43.732193732193736,
    y: 374.34757834757835,
    width: 437.3219373219373,
    height: 66.47293447293447,
  },
  {
    id: "3",
    href: "/submit-200-mandate-provider-selection-action-response-body-3",
    title: "200 Mandate Provider Selection Action Response",
    x: 83.96581196581197,
    y: 463.5612535612536,
    width: 906.131054131054,
    height: 69.97150997150993,
  },
  {
    id: "4",
    href: "/submit-authorizing-4",
    title: "Submit Authorizing",
    x: 111.95441595441595,
    y: 551.025641025641,
    width: 402.33618233618233,
    height: 71.72079772079769,
  },
  {
    id: "5",
    href: "/submit-provider-selection-5",
    title: "Submit Provider Selection",
    x: 159.1851851851852,
    y: 855.4017094017094,
    width: 435.57264957264954,
    height: 83.96581196581201,
  },
  {
    id: "6",
    href: "/submit-redirect-6",
    title: "Submit Redirect",
    x: 153.93732193732194,
    y: 1539.3732193732194,
    width: 342.86039886039885,
    height: 78.71794871794873,
  },
  {
    id: "7",
    href: "/submit-consent-7",
    title: "Submit Consent",
    x: 927.1225071225072,
    y: 1537.6239316239316,
    width: 337.61253561253557,
    height: 85.71509971509977,
  },
  {
    id: "8",
    href: "/submit-wait-for-outcome-8",
    title: "Wait for Outcome",
    x: 157.43589743589743,
    y: 1829.7549857549857,
    width: 468.80911680911674,
    height: 71.72079772079769,
  },
  {
    id: "9",
    href: "/submit-failed-9",
    title: "Submit Failed",
    x: 104.957264957265,
    y: 2155.122507122507,
    width: 369.09971509971507,
    height: 94.46153846153857,
  },
  {
    id: "10",
    href: "/submit-400-invalid-request-response-body-10",
    title: "400 Invalid Request Response",
    x: 76.96866096866101,
    y: 3306.153846153846,
    width: 746.9458689458689,
    height: 87.46438746438753,
  },
  {
    id: "11",
    href: "/submit-invalid-state-11",
    title: "Submit Invalid State",
    x: 110.20512820512825,
    y: 3717.2364672364674,
    width: 383.0940170940171,
    height: 85.71509971509977,
  },
  {
    id: "12",
    href: "/submit-401-unauthenticated-response-body-12",
    title: "401 Unauthenticated Response",
    x: 73.47008547008554,
    y: 4012.866096866097,
    width: 659.4814814814814,
    height: 97.96011396011363,
  },
  {
    id: "13",
    href: "/submit-403-forbidden-response-body-13",
    title: "403 Forbidden Response",
    x: 76.96866096866097,
    y: 4373.219373219374,
    width: 633.2421652421652,
    height: 99.70940170940139,
  },
  {
    id: "14",
    href: "/submit-404-mandate-not-found-response-body-14",
    title: "404 Mandate Not Found Response",
    x: 80.46723646723646,
    y: 4740.5698005698005,
    width: 720.7065527065527,
    height: 99.70940170940139,
  },
  {
    id: "15",
    href: "/submit-409-conflict-response-body-15",
    title: "409 Conflict Response",
    x: 83.96581196581197,
    y: 5113.168091168091,
    width: 556.2735042735043,
    height: 80.46723646723603,
  },
  {
    id: "16",
    href: "/submit-concurrency-conflict-16",
    title: "Concurrency Conflict",
    x: 104.95726495726502,
    y: 5520.752136752137,
    width: 556.2735042735043,
    height: 71.72079772079815,
  },
  {
    id: "17",
    href: "/submit-422-idempotency-key-reuse-response-body-17",
    title: "422 Idempotency Key Reuse Response",
    x: 76.96866096866091,
    y: 6052.535612535613,
    width: 767.9373219373219,
    height: 92.71225071225035,
  },
  {
    id: "18",
    href: "/submit-500-unknown-error-response-body-18",
    title: "500 Unknown Error Response",
    x: 78.7179487179487,
    y: 6407.641025641025,
    width: 629.7435897435897,
    height: 89.21367521367574,
  },
  {
    id: "19",
    href: "/submit-502-provider-error-response-body-19",
    title: "502 Provider Error Response",
    x: 78.71794871794872,
    y: 6773.242165242165,
    width: 634.991452991453,
    height: 92.71225071225035,
  },
];

const SubmitProvidersImageMap = () => {
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
          Submit Provider Selection
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>

      <ImageContainer>
        {/* Main Image */}
        <Image
          src={SubmitProviders}
          alt="Submit Providers"
          fill
          style={{ objectFit: "contain" }}
          priority
        />

        {/* Clickable Areas */}
        {clickableAreas.map((area) => (
          <OverlayButton
            key={area.id}
            onClick={() => handleAreaClick(area.href)}
            style={{
              left: `${(area.x / 1842) * 100}%`,
              top: `${(area.y / 7185) * 100}%`,
              width: `${(area.width / 1842) * 100}%`,
              height: `${(area.height / 7185) * 100}%`,
            }}
            aria-label={area.title}
          />
        ))}
      </ImageContainer>
    </Box>
  );
};

export default SubmitProvidersImageMap;
