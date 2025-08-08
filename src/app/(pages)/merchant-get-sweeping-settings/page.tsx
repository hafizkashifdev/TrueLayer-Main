'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { MerchantGetSweepingSettingsImage } from '@/assets';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';

const MerchantGetSweepingSettings = () => {
  // Array of links with their coordinates and details
  const links = [
    {
      id: 1,
      href: '/get-sweeping-settings-1',
      title: '1',
      x: 15.794871794871796,
      y: 12.284900284900285,
      width: 379.0769230769231,
      height: 57.91452991452991,
    },
    {
      id: 2,
      href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/sweeping',
      title: 'get',
      x: 1212.6951566951566,
      y: 12.284900284900285,
      width: 601.9601139601141,
      height: 47.38461538461539,
    },
    {
      id: 3,
      href: '/get-sweeping-settings-responses',
      title: '1.1',
      x: 43.87464387464387,
      y: 368.54700854700855,
      width: 217.6182336182336,
      height: 61.42450142450144,
    },
    {
      id: 4,
      href: '/get-sweeping-sittings-automatic-sweeping-settings-response-body',
      title: '1.1.1',
      x: 80.72934472934473,
      y: 473.84615384615387,
      width: 777.4586894586895,
      height: 45.62962962962962,
    },
    {
      id: 5,
      href: '/get-sweeping-settings-401-unauthenticated-response-body',
      title: '1.1.2',
      x: 82.48433048433048,
      y: 866.9629629629629,
      width: 619.5099715099715,
      height: 45.629629629629676,
    },
    {
      id: 6,
      href: '/get-sweeping-settings-403-forbidden-response-body',
      title: '1.1.3',
      x: 84.23931623931624,
      y: 1170.5754985754986,
      width: 545.8005698005697,
      height: 59.669515669515704,
    },
    {
      id: 7,
      href: '/get-sweeping-settings-404-account-not-found-response-body',
      title: '1.1.4',
      x: 94.76923076923077,
      y: 1470.6780626780626,
      width: 651.099715099715,
      height: 57.91452991453002,
    },
    {
      id: 8,
      href: '/get-sweeping-settings-500-unknown-error-response-body',
      title: '1.1.5',
      x: 85.99430199430199,
      y: 1779.5555555555557,
      width: 603.7150997150998,
      height: 49.13960113960093,
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
             alt={"Merchant _ Get sweeping settings"}
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
           >Merchant _ Get sweeping settings
          
           </Typography>
         </Stack>
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      maxWidth: '1848px', // Match the original SVG width
      mx: 'auto', // Center the container
      '& a:hover': {
        outline: '2px solid white',
        opacity: 0.2,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    }}>
      {/* Main image */}
      <Image
        src={MerchantGetSweepingSettingsImage}
        alt="Merchant Get sweeping settings"
        width={1848}
        height={2108}
        style={{ 
          width: '100%', 
          height: 'auto',
          display: 'block' // Remove any extra space below the image
        }}
        priority // Optional: if this image is above the fold
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
            top: `${(link.y / 2108) * 100}%`,
            width: `${(link.width / 1848) * 100}%`,
            height: `${(link.height / 2108) * 100}%`,
            cursor: 'pointer',
          }}
        />
      ))}
    </Box>
    </Box>
  );
};

export default MerchantGetSweepingSettings;