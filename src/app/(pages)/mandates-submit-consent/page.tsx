
"use client";
import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { SubmitConcentImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const SubmitConsentImageMap = () => {
  const imageWidth = 1863;
  const imageHeight = 5880;

  const areas = [
    {
      href: "/consent-consent-1",
      title: "consent-consent-1",
      coords: [-1.7730294396961064, 0, 446.8034188034188, 63.82905982905983],
    },
    {
      href: "/consent-path-params-2",
      title: "consent-path-params-2",
      coords: [
        37.23361823361823, 90.42450142450143, 434.3922127255461,
        72.69420702754034,
      ],
    },
    {
      href: "/consent-body-params-3",
      title: "consent-body-params-3",
      coords: [
        40.77967711301044, 413.1158594491928, 407.79677113010445,
        83.33238366571697,
      ],
    },
    {
      href: "/consent-header-4",
      title: "consent-header-4",
      coords: [
        40.77967711301044, 735.8072174738842, 381.2013295346629,
        79.78632478632471,
      ],
    },
    {
      href: "/consent-response-5",
      title: "consent-response-5",
      coords: [
        42.55270655270655, 1035.449192782526, 475.17188983855647,
        90.42450142450139,
      ],
    },
    {
      href: "/consent-200-mandate-provider-selection-action-6",
      title: "consent-200-mandate-provider-selection-action-6",
      coords: [
        62.05603038936372, 1136.5118708452042, 824.4586894586895,
        78.01329534662864,
      ],
    },
    {
      href: "/consent-400-invalid-parameters-7",
      title: "consent-400-invalid-parameters-7",
      coords: [
        56.736942070275404, 1824.4472934472935, 547.8660968660969,
        69.14814814814804,
      ],
    },
    {
      href: "/consent-401-unauthenticated-8",
      title: "consent-401-unauthenticated-8",
      coords: [
        51.41785375118708, 2335.0797720797723, 537.2279202279202,
        67.37511870845174,
      ],
    },
    {
      href: "/consent-403-forbidden-9",
      title: "consent-403-forbidden-9",
      coords: [
        53.19088319088319, 2833.301044634378, 404.25071225071224,
        69.14814814814827,
      ],
    },
    {
      href: "/consent-404-mandate-not-found-10",
      title: "consent-404-mandate-not-found-10",
      coords: [
        60.28300094966762, 3320.8841405508074, 581.5536562203229,
        70.92117758784389,
      ],
    },
    {
      href: "/consent-409-conflict-11",
      title: "consent-409-conflict-11",
      coords: [
        54.963912630579294, 3824.4245014245016, 476.9449192782526,
        76.24026590693256,
      ],
    },
    {
      href: "/consent-422-idempotency-key-reuse-12",
      title: "consent-422-idempotency-key-reuse-12",
      coords: [
        51.41785375118708, 4343.9221272554605, 592.1918328584995,
        72.69420702754087,
      ],
    },
    {
      href: "/consent-500-unknow-error-13",
      title: "consent-500-unknow-error-13",
      coords: [
        54.963912630579294, 4836.824311490978, 489.35612535612535,
        74.46723646723603,
      ],
    },
    {
      href: "/consent-502-provide-error-14",
      title: "consent-502-provide-error-14",
      coords: [
        49.64482431149098, 5310.223171889838, 521.2706552706553,
        74.46723646723694,
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
          Submit Consent
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
        src={SubmitConcentImage}
        alt="Submit Consent Image Map"
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
        priority
      />

      {areas.map((area, index) => {
        // Calculate percentage positions and dimensions
        const left = Math.max(0, (area.coords[0] / imageWidth) * 100);
        const top = (area.coords[1] / imageHeight) * 100;
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

export default SubmitConsentImageMap;
