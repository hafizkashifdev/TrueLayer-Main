"use client";
import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography, } from "@mui/material";
import { ListMandateImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const ListMandateImageMap = () => {
  const areas = [
    {
      href: "/list-list-mandate-1",
      title: "list-list-mandate-1",
      coords: [
        10.638176638176638, 5.319088319088319, 413.1158594491928,
        60.28300094966761,
      ],
    },
    {
      href: "/list-query-params-2",
      title: "list-query-params-2",
      coords: [
        40.77967711301044, 102.83570750237416, 370.5631528964862,
        60.28300094966761,
      ],
    },
    {
      href: "/list-response-3",
      title: "list-response-3",
      coords: [
        49.64482431149098, 414.8888888888889, 358.15194681861345,
        63.829059829059815,
      ],
    },
    {
      href: "/list-response-200-mandates-list-4",
      title: "list-response-200-mandates-list-4",
      coords: [
        65.60208926875593, 496.44824311490976, 668.4320987654321,
        60.28300094966761,
      ],
    },
    {
      href: "/list-mandate-sweepingcommercialdirect-debits-4",
      title: "list-mandate-sweepingcommercialdirect-debits-4",
      coords: [
        101.06267806267806, 640.0636277302943, 852.8271604938271,
        67.37511870845208,
      ],
    },
    {
      href: "/list-authorization-required-5",
      title: "list-authorization-required-5",
      coords: [
        134.75023741690407, 721.6229819563152, 556.7312440645775,
        81.5593542260209,
      ],
    },
    {
      href: "/list-authorizing-6",
      title: "list-authorizing-6",
      coords: [
        120.56600189933523, 2115.224121557455, 476.94491927825266,
        83.33238366571686,
      ],
    },
    {
      href: "/list-authorized-7",
      title: "list-authorized-7",
      coords: [
        131.20417853751186, 3487.548907882241, 359.9249762583096,
        99.28964862298199,
      ],
    },
    {
      href: "/list-failed-8",
      title: "list-failed-8",
      coords: [
        122.33903133903134, 4934.340930674264, 306.7340930674264,
        85.10541310541248,
      ],
    },
    {
      href: "/list-revoked-9",
      title: "list-revoked-9",
      coords: [
        113.47388414055081, 6336.8072174738845, 393.6125356125356,
        92.19753086419678,
      ],
    },
    {
      href: "/list-400-invalid-parameters-10",
      title: "list-400-invalid-parameters-10",
      coords: [
        53.19088319088319, 7936.079772079772, 523.0436847103514,
        95.74358974358984,
      ],
    },
    {
      href: "/list-response-401unauthenticated-11",
      title: "list-response-401unauthenticated-11",
      coords: [
        62.05603038936372, 8460.89648622982, 583.3266856600189,
        104.6087369420693,
      ],
    },
    {
      href: "/list-response-403forbidden-12",
      title: "list-response-403forbidden-12",
      coords: [
        76.24026590693259, 8882.877492877493, 475.1718898385566,
        101.06267806267715,
      ],
    },
    {
      href: "/list-response-500unknown-error-13",
      title: "list-response-500unknown-error-13",
      coords: [
        65.60208926875589, 9301.312440645774, 579.7806267806266,
        102.83570750237413,
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
          List Mandate
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>
    <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
      <Image
        src={ListMandateImage}
        alt="List Mandate Image Map"
        width={1867}
        height={9771}
        layout="responsive"
      />

      {areas.map((area, index) => (
        <Link
          key={index}
          href={area.href}
          title={area.title}
          sx={{
            position: "absolute",
            left: `${(area.coords[0] / 1867) * 100}%`,
            top: `${(area.coords[1] / 9771) * 100}%`,
            width: `${(area.coords[2] / 1867) * 100}%`,
            height: `${(area.coords[3] / 9771) * 100}%`,
            cursor: "pointer",
          }}
        />
      ))}
    </Box>
</Box>


  );
};

export default ListMandateImageMap;
