'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { DisableSweepingImage } from '@/assets';

const DisableSweeping = () => {
  // Array of links with their coordinates and details
  const links = [
    {
      id: 1,
      href: '/disable-sweeping-1',
      title: '1',
      x: 17.54985754985755,
      y: 10.52991452991453,
      width: 324.67236467236467,
      height: 54.40455840455841,
    },
    {
      id: 2,
      href: 'https://api.truelayer-sandbox.com/v3/merchant-accounts/{id}/sweeping',
      title: 'delete',
      x: 1217.9601139601139,
      y: 10.52991452991453,
      width: 596.6951566951568,
      height: 47.38461538461539,
    },
    {
      id: 3,
      href: '/disable-sweeping-responses',
      title: '1.1',
      x: 43.87464387464387,
      y: 375.56695156695156,
      width: 215.86324786324786,
      height: 52.64957264957263,
    },
    {
      id: 4,
      href: '/disable-sweeping-401-unauthenticated-response-body',
      title: '1.1.2',
      x: 84.23931623931624,
      y: 459.8062678062678,
      width: 610.7350427350427,
      height: 80.7293447293448,
    },
    {
      id: 5,
      href: '/disable-sweeping-403-forbidden-response-body',
      title: '1.1.3',
      x: 85.99430199430199,
      y: 765.1737891737891,
      width: 547.5555555555555,
      height: 73.70940170940173,
    },
    {
      id: 6,
      href: '/disable-sweeping-404-account-not-found-response-body',
      title: '1.1.4',
      x: 85.99430199430199,
      y: 1075.806267806268,
      width: 682.6894586894588,
      height: 43.87464387464388,
    },
    {
      id: 7,
      href: '/disable-sweeping-500-unknown-error-response-body',
      title: '1.1.5',
      x: 84.23931623931624,
      y: 1377.6638176638176,
      width: 637.059829059829,
      height: 68.44444444444457,
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
             alt={"Merchant _ Disable sweeping"}
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
           >Merchant _ Disable sweeping
          
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
        src={DisableSweepingImage}
        alt="Disable sweeping"
        width={1848}
        height={1726}
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
            top: `${(link.y / 1726) * 100}%`,
            width: `${(link.width / 1848) * 100}%`,
            height: `${(link.height / 1726) * 100}%`,
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

export default DisableSweeping;