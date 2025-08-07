'use client'
import React, { useCallback } from "react";
import Image from "next/image";
import { Box, Typography, Link, Stack } from "@mui/material";
import { AccountsGetAccountsImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";

const AccountsGetAccounts = () => {
  // Array of links with their coordinates and details
const links = [
    {
      id: 1,
      href: '/accounts-get-accounts-1',
      title: '1',
      x: 17.17948717948718,
      y: 17.17948717948718,
      width: 247.38461538461536,
      height: 70.43589743589743,
    },
    {
      id: 2,
      href: 'https://api.truelayer.com/data/v1/accounts',
      title: 'Get1',
      x: 1372.6410256410256,
      y: 12.025641025641026,
      width: 405.43589743589746,
      height: 65.28205128205128,
    },
    {
      id: 3,
      href: '/accounts-get-accounts-query-params',
      title: '1.1',
      x: 42.94871794871795,
      y: 113.38461538461539,
      width: 278.3076923076923,
      height: 63.56410256410257,
    },
    {
      id: 4,
      href: '/accounts-get-accounts-headers',
      title: '1.2',
      x: 931.1282051282051,
      y: 101.35897435897436,
      width: 204.43589743589746,
      height: 65.28205128205127,
    },
    {
      id: 5,
      href: '/accounts-get-accounts-responses',
      title: '1.3',
      x: 32.64102564102564,
      y: 441.5128205128205,
      width: 213.02564102564102,
      height: 63.5641025641026,
    },
    {
      id: 6,
      href: '/accounts-get-accounts-responses-200-ok',
      title: '1.3.1',
      x: 56.69230769230769,
      y: 537.7179487179487,
      width: 216.46153846153845,
      height: 48.10256410256409,
    },
    {
      id: 7,
      href: '/accounts-get-accounts-responses-200-ok-response-body',
      title: '1.3.1.1',
      x: 72.15384615384616,
      y: 637.3589743589744,
      width: 331.56410256410254,
      height: 60.12820512820508,
    },
    {
      id: 9,
      href: '/accounts-get-accounts-responses-200-ok',
      title: '1.3.1.2',
      x: 79.02564102564102,
      y: 1678.4358974358975,
      width: 231.92307692307693,
      height: 68.71794871794873,
    },
    {
      id: 10,
      href: '/accounts-get-accounts-responses-202accepted',
      title: '1.3.2',
      x: 56.69230769230769,
      y: 2214.4358974358975,
      width: 298.92307692307696,
      height: 65.28205128205127,
    },
    {
      id: 36,
      href: '/accounts-get-accounts-responses-202accepted-response-body',
      title: '1.3.2.1',
      x: 97.92307692307692,
      y: 2298.6153846153848,
      width: 333.2820512820513,
      height: 75.58974358974365,
    },
    {
      id: 11,
      href: '/accounts-get-accounts-responses-202accepted-headers',
      title: '1.3.2.2',
      x: 97.92307692307692,
      y: 2712.641025641026,
      width: 230.20512820512823,
      height: 60.12820512820508,
    },
    {
      id: 12,
      href: '/accounts-get-accounts-responses-401unauthorized',
      title: '1.3.3',
      x: 67,
      y: 3221.153846153846,
      width: 347.02564102564105,
      height: 80.74358974358984,
    },
    {
      id: 13,
      href: '/accounts-get-accounts-responses-401unauthorized-response-body',
      title: '1.3.3.1',
      x: 73.87179487179488,
      y: 3331.102564102564,
      width: 329.84615384615387,
      height: 67,
    },
    {
      id: 14,
      href: '/accounts-get-accounts-responses-401unauthorized-headers',
      title: '1.3.3.2',
      x: 77.3076923076923,
      y: 3618,
      width: 230.20512820512818,
      height: 80.74358974358984,
    },
    {
      id: 15,
      href: '/accounts-get-accounts-responses-403access-denied',
      title: '1.3.4',
      x: 60.12820512820513,
      y: 4147.128205128205,
      width: 383.1025641025641,
      height: 80.74358974358984,
    },
    {
      id: 16,
      href: '/accounts-get-accounts-responses-403access-denied-response-body',
      title: '1.3.4.1',
      x: 73.87179487179488,
      y: 4245.051282051282,
      width: 340.1538461538462,
      height: 60.12820512820508,
    },
    {
      id: 17,
      href: '/accounts-get-accounts-responses-403access-denied-headers',
      title: '1.3.4.2',
      x: 91.05128205128206,
      y: 4538.820512820513,
      width: 209.5897435897436,
      height: 73.87179487179492,
    },
    {
      id: 18,
      href: '/accounts-get-accounts-responses-404not-found',
      title: '1.3.5',
      x: 60.12820512820513,
      y: 5054.205128205128,
      width: 347.025641025641,
      height: 80.74358974358984,
    },
    {
      id: 19,
      href: '/accounts-get-accounts-responses-404not-found-response-body',
      title: '1.3.5.1',
      x: 94.48717948717949,
      y: 5155.5641025641025,
      width: 316.1025641025641,
      height: 77.30769230769238,
    },
    {
      id: 20,
      href: '/accounts-get-accounts-responses-404not-found-headers',
      title: '1.3.5.2',
      x: 79.02564102564102,
      y: 5451.051282051282,
      width: 218.1794871794872,
      height: 85.89743589743557,
    },
    {
      id: 21,
      href: '/accounts-get-accounts-responses-429rate-limit-exceeded',
      title: '1.3.6',
      x: 58.41025641025641,
      y: 5963,
      width: 515.3846153846155,
      height: 85.89743589743557,
    },
    {
      id: 22,
      href: '/accounts-get-accounts-responses-429rate-limit-exceeded-response-body',
      title: '1.6.3.1',
      x: 79.02564102564102,
      y: 6062.641025641025,
      width: 328.1282051282051,
      height: 75.5897435897441,
    },
    {
      id: 23,
      href: '/accounts-get-accounts-responses-429rate-limit-exceeded-headers',
      title: '1.3.6.2',
      x: 79.02564102564102,
      y: 6352.974358974359,
      width: 242.23076923076925,
      height: 101.35897435897368,
    },
    {
      id: 24,
      href: '/accounts-get-accounts-responses-500internal-server-error',
      title: '1.3.7',
      x: 63.56410256410256,
      y: 6868.358974358975,
      width: 484.46153846153845,
      height: 84.1794871794873,
    },
    {
      id: 25,
      href: '/accounts-get-accounts-responses-500internal-server-error-response-body',
      title: '1.3.7.1',
      x: 65.28205128205128,
      y: 6992.051282051282,
      width: 359.05128205128204,
      height: 80.74358974358984,
    },
    {
      id: 26,
      href: '/accounts-get-accounts-responses-500internal-server-error-headers',
      title: '1.3.7.2',
      x: 80.74358974358974,
      y: 7272.076923076923,
      width: 243.94871794871796,
      height: 106.51282051282033,
    },
    {
      id: 27,
      href: '/accounts-get-accounts-responses-501not-implemented',
      title: '1.3.8',
      x: 58.41025641025641,
      y: 7787.461538461538,
      width: 419.1794871794872,
      height: 82.46153846153902,
    },
    {
      id: 28,
      href: '/accounts-get-accounts-responses-501not-implemented-response-body',
      title: '1.3.8.1',
      x: 79.02564102564102,
      y: 7885.384615384615,
      width: 357.33333333333337,
      height: 84.1794871794873,
    },
    {
      id: 29,
      href: '/accounts-get-accounts-responses-501not-implemented-headers',
      title: '1.3.8.2',
      x: 85.8974358974359,
      y: 8175.717948717948,
      width: 247.38461538461536,
      height: 106.51282051282124,
    },
    {
      id: 30,
      href: '/accounts-get-accounts-responses-503service-unavailable',
      title: '1.3.9',
      x: 60.12820512820513,
      y: 8691.102564102564,
      width: 481.02564102564105,
      height: 94.48717948717967,
    },
    {
      id: 31,
      href: '/accounts-get-accounts-responses-503service-unavailable-response-body',
      title: '1.3.9.1',
      x: 79.02564102564102,
      y: 8801.051282051281,
      width: 350.46153846153845,
      height: 108.23076923076951,
    },
    {
      id: 32,
      href: '/accounts-get-accounts-responses-503service-unavailable-headers',
      title: '1.3.9.2',
      x: 79.02564102564102,
      y: 9093.102564102564,
      width: 238.7948717948718,
      height: 109.94871794871688,
    },
    {
      id: 33,
      href: '/accounts-get-accounts-responses-504gateway-timeout',
      title: '1.3.10',
      x: 70.43589743589743,
      y: 9617.076923076924,
      width: 467.28205128205127,
      height: 96.20512820512704,
    },
    {
      id: 34,
      href: '/accounts-get-accounts-responses-504gateway-timeout-response-body',
      title: '1.3.10.1',
      x: 80.74358974358974,
      y: 9711.564102564103,
      width: 377.94871794871796,
      height: 99.64102564102541,
    },
    {
      id: 35,
      href: '/accounts-get-accounts-responses-504gateway-timeout-headers',
      title: '1.3.10.2',
      x: 91.05128205128206,
      y: 10010.48717948718,
      width: 223.33333333333331,
      height: 89.33333333333394,
    },
  ];


  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-accounts");
  }, [router]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"Accounts Get accounts"}
          width={40}
          height={40}
          onClick={onBackIconClick}
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
          Accounts Get accounts
        </Typography>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
        {/* Main image */}
        <Image
          src={AccountsGetAccountsImage}
          alt="Accounts Get accounts"
          width={1809}
          height={10591}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Interactive areas */}
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_parent"}
            title={link.title}
            sx={{
              position: "absolute",
              left: `${(link.x / 1809) * 100}%`,
              top: `${(link.y / 10591) * 100}%`,
              width: `${(link.width / 1809) * 100}%`,
              height: `${(link.height / 10591) * 100}%`,
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AccountsGetAccounts;
