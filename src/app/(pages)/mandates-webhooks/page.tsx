"use client";
import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { MandateWebhooksImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const MandateWebhooksImageMap = () => {
  const imageWidth = 1961;
  const imageHeight = 4288;

  const areas = [
    {
      href: "/mandate-webhooks-mandate-webhooks-1",
      title: "mandate-webhooks-mandate-webhooks-1",
      coords: [
        26.072174738841404, 29.79677113010446, 528.8926875593542,
        78.21652421652422,
      ],
    },
    {
      href: "/mandate-webhooks-payload-2",
      title: "mandate-webhooks-payload-2",
      coords: [
        55.86894586894587, 122.91168091168092, 502.8205128205128,
        83.8034188034188,
      ],
    },
    {
      href: "/mandate-webhooks-mandate-failed-4",
      title: "mandate-webhooks-mandate-failed-4",
      coords: [
        96.8395061728395, 918.1130104463438, 478.610636277303,
        83.80341880341882,
      ],
    },
    {
      href: "/mandate-webhooks-mandate-revoked-5",
      title: "mandate-webhooks-mandate-revoked-5",
      coords: [
        93.11490978157644, 1594.127255460589, 512.1320037986704,
        81.9411206077873,
      ],
    },
    {
      href: "/mandate-webhooks-mandate-remitter-changed-6",
      title: "mandate-webhooks-mandate-remitter-changed-6",
      coords: [
        100.56410256410257, 2260.830009496676, 560.5517568850902,
        83.80341880341894,
      ],
    },
    {
      href: "/mandate-webhooks-mandate-authorized-3",
      title: "mandate-webhooks-mandate-authorized-3",
      coords: [
        338.9382716049383, 243.96106362773028, 491.6467236467236,
        78.21652421652422,
      ],
    },
    {
      href: "/mandate-webhooks-mandate-initial-payment-created-7",
      title: "mandate-webhooks-mandate-initial-payment-created-7",
      coords: [
        91.25261158594495, 2931.257359924027, 588.4862298195632,
        93.11490978157644,
      ],
    },
    {
      href: "/mandate-webhooks-response-200webhook-handled-8",
      title: "mandate-webhooks-response-200webhook-handled-8",
      coords: [
        46.55745489078822, 3622.169990503324, 432.0531813865147,
        85.66571699905035,
      ],
    },
    {
      href: "/mandate-webhooks-response-200webhook-handled-8",
      title: "mandate-webhooks-response-200webhook-handled-8",
      coords: [
        456.2630579297246, 3732.045584045584, 648.0797720797722,
        98.70180436847113,
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
          Mandate
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
          src={MandateWebhooksImage}
          alt="Mandate Webhooks Image Map"
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

export default MandateWebhooksImageMap;
