"use client";

import React from "react";
import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import { GetTransactionsImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const TransactionsImageMap = () => {
  const imageWidth = 1848;
  const imageHeight = 10771;

  const areas = [
    {
      href: "/transactions-get-transactions-1",
      title: "transactions-get-transactions-1",
      coords: [
        8.774928774928775, 5.264957264957264, 422.951566951567,
        71.95441595441595,
      ],
    },
    {
      href: "/transactions-responses-2",
      title: "transactions-responses-2",
      coords: [
        38.60968660968661, 363.28205128205127, 403.6467236467237,
        77.21937321937321,
      ],
    },
    {
      href: "/transactions-200-transaction-response-body-3",
      title: "transactions-200-transaction-response-body-3",
      coords: [
        80.72934472934473, 458.05128205128204, 603.7150997150998,
        80.72934472934475,
      ],
    },
    {
      href: "/transactions-merchant-account-payment-4",
      title: "transactions-merchant-account-payment-4",
      coords: [
        122.84900284900284, 719.5441595441596, 594.9401709401709,
        75.46438746438741,
      ],
    },
    {
      href: "/transactions-settled-payment-source-object-5",
      title: "transactions-settled-payment-source-object-5",
      coords: [
        163.2136752136752, 1210.940170940171, 721.2991452991454,
        75.46438746438753,
      ],
    },
    {
      href: "/transactions-external-payment-6",
      title: "transactions-external-payment-6",
      coords: [
        119.33903133903134, 1911.179487179487, 679.1794871794872,
        84.23931623931617,
      ],
    },
    {
      href: "/transactions-remitter-object-7",
      title: "transactions-remitter-object-7",
      coords: [
        157.94871794871796, 2397.3105413105413, 505.4358974358974,
        82.48433048433026,
      ],
    },
    {
      href: "/transactions-return-for-object-8",
      title: "transactions-return-for-object-8",
      coords: [
        157.94871794871796, 3067.7150997150998, 558.08547008547,
        80.72934472934458,
      ],
    },
    {
      href: "/transactions-pending-payout-9",
      title: "transactions-pending-payout-9",
      coords: [
        115.82905982905983, 3513.4814814814818, 638.8148148148148,
        87.74928774928776,
      ],
    },
    {
      href: "/transactions-external-account-10",
      title: "transactions-external-account-10",
      coords: [
        154.43874643874645, 4006.6324786324785, 493.1509971509971,
        89.50427350427344,
      ],
    },
    {
      href: "/transactions-payment-source-11",
      title: "transactions-payment-source-11",
      coords: [
        152.68376068376068, 4648.957264957265, 601.9601139601139,
        89.50427350427344,
      ],
    },
    {
      href: "/transactions-business-account-12",
      title: "transactions-business-account-12",
      coords: [
        150.92877492877494, 5231.612535612536, 635.3048433048433,
        98.27920227920185,
      ],
    },
    {
      href: "/transactions-executed-payout-13",
      title: "transactions-executed-payout-13",
      coords: [
        114.07407407407409, 5952.911680911681, 552.8205128205128,
        100.03418803418754,
      ],
    },
    {
      href: "/transactions-external-account-14",
      title: "transactions-external-account-14",
      coords: [
        156.1937321937322, 6444.307692307692, 510.70085470085473,
        82.48433048433071,
      ],
    },
    {
      href: "/transactions-payment-source-15",
      title: "transactions-payment-source-15",
      coords: [
        159.70370370370372, 7102.42735042735, 537.0256410256411,
        89.50427350427344,
      ],
    },
    {
      href: "/transactions-business-account-16",
      title: "transactions-business-account-16",
      coords: [
        161.4586894586895, 7688.592592592593, 547.5555555555555,
        93.0142450142448,
      ],
    },
    {
      href: "/transactions-refund-17",
      title: "transactions-refund-17",
      coords: [
        119.33903133903134, 8364.262108262108, 440.50142450142454,
        94.76923076923049,
      ],
    },
    {
      href: "/transactions-payment-source-object-18",
      title: "transactions-payment-source-object-18",
      coords: [
        156.19373219373216, 8853.903133903135, 617.7549857549857,
        100.03418803418754,
      ],
    },
    {
      href: "/transactions-401-unauthenticated-response-body-19",
      title: "transactions-401-unauthenticated-response-body-19",
      coords: [
        73.70940170940179, 9480.433048433048, 682.6894586894587,
        100.03418803418936,
      ],
    },
    {
      href: "/transactions-403-forbidden-response-body-20",
      title: "transactions-403-forbidden-response-body-20",
      coords: [
        71.95441595441595, 9791.065527065528, 705.5042735042736,
        98.27920227920185,
      ],
    },
    {
      href: "/transactions-404-account-not-found-response-body-21",
      title: "transactions-404-account-not-found-response-body-21",
      coords: [
        77.21937321937322, 10099.943019943019, 731.8290598290598,
        93.0142450142448,
      ],
    },
    {
      href: "/transactions-500-unknown-error-response-body-22",
      title: "transactions-500-unknown-error-response-body-22",
      coords: [
        77.21937321937322, 10403.555555555555, 754.6438746438746,
        94.76923076923049,
      ],
    },
    {
      href: "https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/transactions",
      title:
        "https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/transactions",
      coords: [
        1195.145299145299, 3.50997150997151, 647.5897435897436,
        73.70940170940172,
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
          onClick={() => router.push("/merchant-accounts")}
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
          Get transactions
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
          src={GetTransactionsImage}
          alt="Transactions API Documentation"
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

export default TransactionsImageMap;
