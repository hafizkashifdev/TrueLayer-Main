'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CommonBackIcon } from '@/assets/common-assets';
import { AccountsGetAccountImage } from '@/assets';

const AccountsGetAccount = () => {
  // Array of links with their coordinates and details
  const links = [
    {
      id: 1,
      href: '/aga',
      title: '2',
      x: 17.397910731244064,
      y: 8.698955365622032,
      width: 250.52991452991455,
      height: 66.11206077872745,
    },
    {
      id: 2,
      href: '/aga-path-params',
      title: '2.1',
      x: 27.8366571699905,
      y: 114.82621082621083,
      width: 267.9278252611586,
      height: 60.892687559354215,
    },
    {
      id: 4,
      href: 'https://api.truelayer.com/data/v1/accounts/{account_id}',
      title: 'get',
      x: 1308.3228869895536,
      y: 20.87749287749287,
      width: 492.36087369420716,
      height: 48.714150047483386,
    },
    {
      id: 5,
      href: '/aga-query-params',
      title: '2.2',
      x: 499.3200379867047,
      y: 113.08641975308642,
      width: 306.20322886989555,
      height: 62.63247863247862,
    },
    {
      id: 6,
      href: '/aga-headers',
      title: '2.3',
      x: 1143.042735042735,
      y: 114.82621082621083,
      width: 212.2545109211776,
      height: 53.93352326685661,
    },
    {
      id: 7,
      href: '/aga-responses',
      title: '2.4',
      x: 36.535612535612536,
      y: 426.24881291547956,
      width: 224.43304843304844,
      height: 71.33143399810069,
    },
    {
      id: 8,
      href: '/aga-responses-200-ok',
      title: '2.4.1',
      x: 60.89268755935423,
      y: 527.1566951566952,
      width: 191.3770180436847,
      height: 55.67331433998106,
    },
    {
      id: 9,
      href: '/aga-responses-200-ok-response-body',
      title: '2.4.1.1',
      x: 85.24976258309592,
      y: 610.6666666666666,
      width: 342.7388414055081,
      height: 41.754985754985796,
    },
    {
      id: 11,
      href: '/aga-responses-200-ok-headers',
      title: '2.4.1.2',
      x: 80.03038936372269,
      y: 1612.7863247863247,
      width: 248.79012345679013,
      height: 93.94871794871801,
    },
    {
      id: 12,
      href: '/aga-responses-202accepted',
      title: '2.4.2',
      x: 59.15289648622982,
      y: 2141.6828110161446,
      width: 297.50427350427356,
      height: 73.07122507122494,
    },
    {
      id: 13,
      href: '/aga-responses-202accepted-response-body',
      title: '2.4.2.1',
      x: 93.94871794871794,
      y: 2230.412155745489,
      width: 327.0807217473884,
      height: 76.5508072174739,
    },
    {
      id: 14,
      href: '/aga-responses-202accepted-headers',
      title: '2.4.2.2',
      x: 92.20892687559355,
      y: 2641.002849002849,
      width: 233.1320037986705,
      height: 64.37226970560323,
    },
    {
      id: 15,
      href: '/aga-responses-401unauthorized',
      title: '2.4.3',
      x: 53.933523266856604,
      y: 3161.2003798670466,
      width: 386.23361823361824,
      height: 62.632478632478524,
    },
    {
      id: 16,
      href: '/aga-responses-401unauthorized-headers',
      title: '2.4.3.2',
      x: 74.81101614434948,
      y: 3547.4339981006647,
      width: 243.57075023741692,
      height: 102.64767331433995,
    },
    {
      id: 17,
      href: '/aga-responses-403access-denied',
      title: '2.4.4',
      x: 53.9335232668566,
      y: 4074.59069325736,
      width: 365.35612535612535,
      height: 74.8110161443501,
    },
    {
      id: 19,
      href: '/aga-responses-401unauthorized-response-body',
      title: '2.4.3.1',
      x: 73.07122507122507,
      y: 3260.3684710351376,
      width: 321.8613485280152,
      height: 76.5508072174739,
    },
    {
      id: 20,
      href: '/aga-responses-403access-denied-response-body',
      title: '2.4.4.1',
      x: 73.07122507122507,
      y: 4173.758784425451,
      width: 328.8205128205128,
      height: 60.89268755935427,
    },
    {
      id: 21,
      href: '/aga-responses-403access-denied-headers',
      title: '2.4.4.2',
      x: 74.81101614434948,
      y: 4464.303893637227,
      width: 220.9534662867996,
      height: 74.8110161443501,
    },
    {
      id: 22,
      href: '/aga-responses-404not-found',
      title: '2.4.5',
      x: 55.67331433998101,
      y: 4993.200379867047,
      width: 328.8205128205128,
      height: 60.89268755935427,
    },
    {
      id: 23,
      href: '/aga-responses-404not-found-headers',
      title: '2.4.5.2',
      x: 85.24976258309592,
      y: 5388.132953466286,
      width: 205.29534662867997,
      height: 78.29059829059861,
    },
    {
      id: 24,
      href: '/aga-responses-404not-found-response-body',
      title: '2.4.5.1',
      x: 60.89268755935423,
      y: 5087.149097815764,
      width: 340.99905033238366,
      height: 78.29059829059861,
    },
    {
      id: 25,
      href: '/aga-responses-429rate-limit-exceeded',
      title: '2.4.6',
      x: 64.37226970560305,
      y: 5903.111111111111,
      width: 461.0446343779677,
      height: 76.55080721747345,
    },
    {
      id: 26,
      href: '/aga-responses-429rate-limit-exceeded-response-body',
      title: '2.4.6.1',
      x: 64.37226970560305,
      y: 5995.320037986705,
      width: 368.83570750237413,
      height: 78.2905982905977,
    },
    {
      id: 27,
      href: '/aga-responses-429rate-limit-exceeded-headers',
      title: '2.4.6.2',
      x: 67.85185185185185,
      y: 6289.34472934473,
      width: 234.87179487179486,
      height: 107.86704653371271,
    },
    {
      id: 28,
      href: '/aga-responses-500internal-server-error',
      title: '2.4.7',
      x: 55.673314339981005,
      y: 6816.5014245014245,
      width: 478.4425451092117,
      height: 76.55080721747436,
    },
    {
      id: 29,
      href: '/aga-responses-500internal-server-error-response-body',
      title: '2.4..7.1',
      x: 85.24976258309592,
      y: 6912.1899335232665,
      width: 306.20322886989555,
      height: 76.55080721747436,
    },
    {
      id: 30,
      href: '/aga-responses-500internal-server-error-headers',
      title: '2.4.7.2',
      x: 78.2905982905983,
      y: 7207.954415954416,
      width: 243.5707502374169,
      height: 86.98955365622078,
    },
    {
      id: 31,
      href: '/aga-responses-501not-implemented',
      title: '2.4.8',
      x: 48.71415004748338,
      y: 7733.371320037987,
      width: 415.81006647673314,
      height: 80.03038936372195,
    },
    {
      id: 32,
      href: '/aga-responses-501not-implemented-response-body',
      title: '2.4.8.1',
      x: 74.81101614434948,
      y: 7823.840455840455,
      width: 339.25925925925924,
      height: 78.29059829059861,
    },
    {
      id: 33,
      href: '/aga-responses-501not-implemented-headers',
      title: '2.4.8.2',
      x: 81.7701804368471,
      y: 8119.604938271605,
      width: 215.7340930674264,
      height: 86.98955365621987,
    },
    {
      id: 34,
      href: '/accounts-get-accounts-responses-503service-unavailable',
      title: '2.4.9',
      x: 50.45394112060779,
      y: 8631.10351377018,
      width: 487.1415004748338,
      height: 83.50997150997136,
    },
    {
      id: 35,
      href: '/accounts-get-accounts-responses-503service-unavailable-response-body',
      title: '2.4.9.1',
      x: 74.81101614434948,
      y: 8728.531813865147,
      width: 334.039886039886,
      height: 85.24976258309653,
    },
    {
      id: 36,
      href: '/accounts-get-accounts-responses-503service-unavailable-headers',
      title: '2.4.9.2',
      x: 76.55080721747387,
      y: 9038.214624881291,
      width: 219.2136752136752,
      height: 73.07122507122585,
    },
    {
      id: 37,
      href: '/accounts-get-accounts-responses-504gateway-timeout',
      title: '2.4.10',
      x: 59.15289648622982,
      y: 9553.192782526115,
      width: 457.56505223171894,
      height: 83.50997150997136,
    },
    {
      id: 38,
      href: '/accounts-get-accounts-responses-504gateway-timeout-response-body',
      title: '2.4.10.1',
      x: 78.2905982905983,
      y: 9657.58024691358,
      width: 361.87654320987656,
      height: 60.89268755935518,
    },
    {
      id: 39,
      href: '/accounts-get-accounts-responses-504gateway-timeout-headers',
      title: '2.4.10.2',
      x: 73.07122507122507,
      y: 9951.604938271605,
      width: 231.39221272554607,
      height: 73.07122507122585,
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
           alt={"Accounts Get account"}
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
           Accounts Get account
         </Typography>
       </Stack>
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto',
      maxWidth: '1832px', // Match the original SVG width
      mx: 'auto' // Center the container
    }}>
      {/* Main image */}
      <Image
        src={AccountsGetAccountImage}
        alt="Accounts Get account"
        width={1832}
        height={10545}
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
            left: `${(link.x / 1832) * 100}%`,
            top: `${(link.y / 10545) * 100}%`,
            width: `${(link.width / 1832) * 100}%`,
            height: `${(link.height / 10545) * 100}%`,
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

export default AccountsGetAccount;