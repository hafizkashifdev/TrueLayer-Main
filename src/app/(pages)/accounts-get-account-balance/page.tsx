'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { GetAccountBalanceImage } from '@/assets';

const GetAccountBalance = () => {
  // Array of links with their coordinates and details
  const links = [
    {
      id: 1,
      href: '/agab-1',
      title: '3',
      x: 24.05128205128205,
      y: 15.461538461538462,
      width: 345.3076923076923,
      height: 65.28205128205127,
    },
    {
      id: 2,
      href: '/agab-path-params',
      title: '3.1',
      x: 42.94871794871795,
      y: 111.66666666666667,
      width: 250.82051282051282,
      height: 51.53846153846153,
    },
    {
      id: 3,
      href: 'https://api.truelayer.com/data/v1/accounts/{account_id}/balance',
      title: 'get',
      x: 1200.8461538461538,
      y: 17.17948717948718,
      width: 594.4102564102564,
      height: 49.82051282051282,
    },
    {
      id: 4,
      href: '/agab-query-params',
      title: '3.2',
      x: 489.61538461538464,
      y: 104.7948717948718,
      width: 305.7948717948717,
      height: 77.30769230769232,
    },
    {
      id: 5,
      href: '/agab-headers',
      title: '',
      x: 1151.025641025641,
      y: 113.38461538461539,
      width: 197.56410256410254,
      height: 42.948717948717956,
    },
    {
      id: 6,
      href: '/agab-responses',
      title: '3.4',
      x: 30.923076923076923,
      y: 441.5128205128205,
      width: 235.35897435897434,
      height: 51.53846153846155,
    },
    {
      id: 7,
      href: '/agab-responses-200-ok',
      title: '3.4.1',
      x: 56.69230769230769,
      y: 527.4102564102565,
      width: 216.46153846153845,
      height: 60.12820512820508,
    },
    {
      id: 8,
      href: '/agab-responses-200-ok-response-body',
      title: '3.4.1.1',
      x: 67,
      y: 599.5641025641025,
      width: 336.71794871794873,
      height: 63.56410256410254,
    },
    {
      id: 9,
      href: '/agab-responses-200-ok-headers',
      title: '3.4.1.2',
      x: 80.74358974358974,
      y: 1324.5384615384614,
      width: 230.20512820512823,
      height: 94.48717948717967,
    },
    {
      id: 10,
      href: '/agab-responses-202accepted',
      title: '3.4.2',
      x: 51.53846153846154,
      y: 1851.948717948718,
      width: 321.2564102564102,
      height: 63.56410256410254,
    },
    {
      id: 11,
      href: '/agab-responses-202accepted-response-body',
      title: '3.4.2.1',
      x: 97.92307692307692,
      y: 1929.2564102564102,
      width: 326.4102564102564,
      height: 73.87179487179492,
    },
    {
      id: 12,
      href: '/agab-responses-202accepted-headers',
      title: '3.4.2.2',
      x: 87.61538461538461,
      y: 2341.5641025641025,
      width: 226.76923076923075,
      height: 58.41025641025635,
    },
    {
      id: 13,
      href: '/agab-responses-401unauthorized',
      title: '3.4.3',
      x: 56.69230769230769,
      y: 2862.102564102564,
      width: 374.51282051282055,
      height: 73.87179487179492,
    },
    {
      id: 14,
      href: '/agab-responses-401unauthorized-response-body',
      title: '3.4.3.1',
      x: 67,
      y: 2956.5897435897436,
      width: 333.28205128205127,
      height: 82.46153846153857,
    },
    {
      id: 15,
      href: '/agab-responses-401unauthorized-headers',
      title: '3.4.3.2',
      x: 67,
      y: 3252.076923076923,
      width: 238.79487179487177,
      height: 82.46153846153857,
    },
    {
      id: 16,
      href: '/agab-responses-403access-denied',
      title: '3.4.4',
      x: 56.69230769230769,
      y: 3769.1794871794873,
      width: 381.3846153846154,
      height: 84.17948717948684,
    },
    {
      id: 17,
      href: '/agab-responses-403access-denied-response-body',
      title: '3.4.4.1',
      x: 70.43589743589743,
      y: 3879.128205128205,
      width: 340.1538461538462,
      height: 73.87179487179492,
    },
    {
      id: 18,
      href: '/agab-responses-403access-denied-headers',
      title: '3.4.4.2',
      x: 65.28205128205128,
      y: 4167.74358974359,
      width: 247.38461538461542,
      height: 77.30769230769238,
    },
    {
      id: 19,
      href: '/agab-responses-404not-found',
      title: '3.4.5',
      x: 56.69230769230769,
      y: 4696.871794871795,
      width: 340.1538461538462,
      height: 73.87179487179492,
    },
    {
      id: 20,
      href: '/agab-responses-404not-found-response-body',
      title: '3.4.5.1',
      x: 80.74358974358974,
      y: 4784.48717948718,
      width: 336.71794871794873,
      height: 79.02564102564065,
    },
    {
      id: 21,
      href: '/agab-responses-404not-found-headers',
      title: '3.4.5.2',
      x: 79.02564102564102,
      y: 5079.974358974359,
      width: 209.58974358974362,
      height: 82.46153846153811,
    },
    {
      id: 22,
      href: '/agab-responses-429rate-limit-exceeded',
      title: '3.4.6',
      x: 42.94871794871795,
      y: 5595.358974358975,
      width: 463.8461538461538,
      height: 82.46153846153811,
    },
    {
      id: 23,
      href: '/agab-responses-429rate-limit-exceeded-response-body',
      title: '3.4.6.1',
      x: 67,
      y: 5698.4358974358975,
      width: 321.2564102564103,
      height: 85.89743589743557,
    },
    {
      id: 24,
      href: '/agab-responses-429rate-limit-exceeded-headers',
      title: '3.4.6.2',
      x: 58.41025641025641,
      y: 6000.794871794872,
      width: 249.1025641025641,
      height: 72.15384615384573,
    },
    {
      id: 25,
      href: '/agab-responses-500internal-server-error',
      title: '3.4.7',
      x: 41.23076923076923,
      y: 6519.615384615384,
      width: 503.3589743589743,
      height: 79.02564102564156,
    },
    {
      id: 26,
      href: '/agab-responses-500internal-server-error-response-body',
      title: '3.4.7.1',
      x: 73.87179487179488,
      y: 6615.820512820513,
      width: 314.3846153846154,
      height: 79.02564102564156,
    },
    {
      id: 27,
      href: '/agab-responses-500internal-server-error-headers',
      title: '3.4.7.2',
      x: 63.56410256410256,
      y: 6904.4358974358975,
      width: 237.07692307692307,
      height: 103.07692307692287,
    },
    {
      id: 28,
      href: '/agab-responses-501not-implemented',
      title: '3.4.8',
      x: 56.69230769230769,
      y: 7438.717948717949,
      width: 414.02564102564105,
      height: 63.56410256410254,
    },
    {
      id: 29,
      href: '/agab-responses-501not-implemented-response-body',
      title: '3.4.8.1',
      x: 77.3076923076923,
      y: 7540.076923076923,
      width: 340.15384615384613,
      height: 65.28205128205173,
    },
    {
      id: 30,
      href: '/agab-responses-501not-implemented-headers',
      title: '3.4.8.2',
      x: 65.28205128205128,
      y: 7823.538461538462,
      width: 223.33333333333331,
      height: 84.1794871794873,
    },
    {
      id: 31,
      href: '/agab-responses-503service-unavailable',
      title: '3.4.9',
      x: 44.66666666666667,
      y: 8344.076923076924,
      width: 453.53846153846155,
      height: 75.58974358974228,
    },
    {
      id: 32,
      href: '/agab-responses-503service-unavailable-response-body',
      title: '3.4.9.1',
      x: 72.15384615384615,
      y: 8442,
      width: 329.84615384615387,
      height: 77.30769230769147,
    },
    {
      id: 33,
      href: '/agab-responses-503service-unavailable-headers',
      title: '3.4.9.2',
      x: 68.7179487179487,
      y: 8744.358974358975,
      width: 237.07692307692307,
      height: 60.12820512820508,
    },
    {
      id: 34,
      href: '/agab-responses-504gateway-timeout',
      title: '3.4.10',
      x: 60.12820512820513,
      y: 9263.179487179488,
      width: 444.94871794871796,
      height: 66.99999999999818,
    },
    {
      id: 35,
      href: '/agab-responses-504gateway-timeout-response-body',
      title: '3.4.10.1',
      x: 73.87179487179488,
      y: 9343.923076923076,
      width: 335,
      height: 80.74358974358984,
    },
    {
      id: 36,
      href: '/agab-responses-504gateway-timeout-headers',
      title: '3.4.10.2',
      x: 77.3076923076923,
      y: 9648,
      width: 235.35897435897436,
      height: 80.74358974358984,
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
            alt={"Get account balance"}
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
           Get account balance
          </Typography>
        </Stack>
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      maxWidth: '1809px', // Match the original SVG width
      mx: 'auto' // Center the container
    }}>
      {/* Main image */}
      <Image
        src={GetAccountBalanceImage}
        alt="Get account balance"
        width={1809}
        height={10222}
        style={{ 
          width: '100%', 
          height: 'auto',
          display: 'block' // Remove any extra space below the image
        }}
      />
      
      {/* Interactive areas */}
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_parent'}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          title={link.title}
          sx={{
            position: 'absolute',
            left: `${(link.x / 1809) * 100}%`,
            top: `${(link.y / 10222) * 100}%`,
            width: `${(link.width / 1809) * 100}%`,
            height: `${(link.height / 10222) * 100}%`,
            cursor: 'pointer',
            '&:hover': {
              outline: '2px solid white',
              opacity: 0.2,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        />
      ))}
    </Box>
    </Box>
  );
};

export default GetAccountBalance;