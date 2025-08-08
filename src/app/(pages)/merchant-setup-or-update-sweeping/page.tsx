'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { MerchantSetUpOrUpdateSweepingImage } from '@/assets';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';

const MerchantSetupOrUpdateSweeping = () => {
  // Array of links with their coordinates and details
  const links = [
    {
      id: 1,
      href: '/set-up-or-update-sweeping1',
      title: '1',
      x: 19.304843304843306,
      y: 8.774928774928775,
      width: 435.23646723646726,
      height: 59.66951566951567,
    },
    {
      id: 2,
      href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/sweeping',
      title: 'get',
      x: 1219.7150997150998,
      y: 14.03988603988604,
      width: 601.9601139601139,
      height: 49.13960113960114,
    },
    {
      id: 3,
      href: '/get-merchant-account-responses',
      title: '1.1',
      x: 50.894586894586894,
      y: 379.0769230769231,
      width: 228.14814814814815,
      height: 54.40455840455837,
    },
    {
      id: 4,
      href: '/get-merchant-account-400-invalid-parameter-response-body',
      title: '1.1.1',
      x: 91.25925925925925,
      y: 472.0911680911681,
      width: 647.5897435897436,
      height: 45.62962962962962,
    },
    {
      id: 5,
      href: '/get-merchant-account-401-unauthenticated-response-body',
      title: '1.1.2',
      x: 85.99430199430199,
      y: 765.1737891737891,
      width: 628.2849002849003,
      height: 66.68945868945866,
    },
    {
      id: 6,
      href: '/get-merchant-account-403-forbidden-response-body',
      title: '1.1.3',
      x: 87.74928774928775,
      y: 1068.7863247863247,
      width: 526.4957264957264,
      height: 66.68945868945866,
    },
    {
      id: 7,
      href: '/get-merchant-account-404-account-not-found-response-body',
      title: '1.1.4',
      x: 89.5042735042735,
      y: 1374.1538461538462,
      width: 647.5897435897436,
      height: 63.17948717948707,
    },
    {
      id: 8,
      href: '/get-merchant-account-500-unknown-error-response-body',
      title: '1.1.5',
      x: 84.23931623931624,
      y: 1681.2763532763533,
      width: 654.6096866096866,
      height: 75.4643874643873,
    },
  ];

    const router = useRouter();
   
     const onBackIconClick = useCallback(() => {
       router.push("/merchant-accounts");
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
             alt={"Merchant _ Set up or update sweeping"}
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
           >Merchant _ Set up or update sweeping
          
           </Typography>
         </Stack>
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      maxWidth: '1848px', // Match the original SVG width
      mx: 'auto' // Center the container
    }}>
      {/* Main image */}
      <Image
        src={MerchantSetUpOrUpdateSweepingImage}
        alt="Merchant Set up or update sweeping"
        width={1848}
        height={2031}
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
            left: `${(link.x / 1848) * 100}%`,
            top: `${(link.y / 2031) * 100}%`,
            width: `${(link.width / 1848) * 100}%`,
            height: `${(link.height / 2031) * 100}%`,
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

export default MerchantSetupOrUpdateSweeping;