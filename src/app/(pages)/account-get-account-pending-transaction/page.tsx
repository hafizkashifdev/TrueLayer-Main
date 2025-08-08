'use client'
import React from 'react'
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { GetAccountPendingTransactions } from '@/assets';
import { CommonBackIcon } from '@/assets/common-assets';
import { useRouter } from 'next/navigation';
import { CheckboxForm } from '@/components/checkbox-form';

const GetAccountPendingTransactionsImageMap = () => {
  const router = useRouter()
  const imageAreas = [
    {
      alt: "accounts-get-account-pending-transactions",
      title: "accounts-get-account-pending-transactions",
      href: "/accounts-get-account-pending-transactions",
      coords: "12,5,601,84",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-path-params",
      title: "accounts-get-account-pending-path-params",
      href: "/accounts-get-account-pending-path-params",
      coords: "29,101,288,185",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-query-params",
      title: "accounts-get-account-pending-query-params",
      href: "/accounts-get-account-pending-query-params",
      coords: "326,105,625,175",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers1",
      title: "accounts-get-account-pending-headers1",
      href: "/accounts-get-account-pending-headers1",
      coords: "1359,105,1639,172",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-transactions-response",
      title: "accounts-get-account-pending-transactions-response",
      href: "/accounts-get-account-pending-transactions-response",
      coords: "29,429,293,496",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-200-ok",
      title: "accounts-get-account-pending-response-200-ok",
      href: "/accounts-get-account-pending-response-200-ok",
      coords: "48,508,341,578",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body1",
      title: "accounts-get-account-pending-response-body1",
      href: "/accounts-get-account-pending-response-body1",
      coords: "79,592,444,662",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-meta",
      title: "accounts-get-account-pending-meta",
      href: "/accounts-get-account-pending-meta",
      coords: "132,1205,393,1280",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers2",
      title: "accounts-get-account-pending-headers2",
      href: "/accounts-get-account-pending-headers2",
      coords: "77,2037,357,2112",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-running-balance",
      title: "accounts-get-account-pending-running-balance",
      href: "/accounts-get-account-pending-running-balance",
      coords: "988,928,1388,1000",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-202-accepted",
      title: "accounts-get-account-pending-202-accepted",
      href: "/accounts-get-account-pending-202-accepted",
      coords: "65,2555,407,2626",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body2",
      title: "accounts-get-account-pending-response-body2",
      href: "/accounts-get-account-pending-response-body2",
      coords: "105,2643,463,2713",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers3",
      title: "accounts-get-account-pending-headers3",
      href: "/accounts-get-account-pending-headers3",
      coords: "103,3046,364,3128",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-400-invalid-request",
      title: "accounts-get-account-pending-400-invalid-request",
      href: "/accounts-get-account-pending-400-invalid-request",
      coords: "69,3568,480,3647",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body3",
      title: "accounts-get-account-pending-response-body3",
      href: "/accounts-get-account-pending-response-body3",
      coords: "86,3667,427,3746",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers4",
      title: "accounts-get-account-pending-headers4",
      href: "/accounts-get-account-pending-headers4",
      coords: "89,3964,335,4045",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-401-unauthorized",
      title: "accounts-get-account-pending-401-unauthorized",
      href: "/accounts-get-account-pending-401-unauthorized",
      coords: "65,4487,450,4563",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body4",
      title: "accounts-get-account-pending-response-body4",
      href: "/accounts-get-account-pending-response-body4",
      coords: "82,4587,420,4666",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers5",
      title: "accounts-get-account-pending-headers5",
      href: "/accounts-get-account-pending-headers5",
      coords: "82,4886,340,4961",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-403-access-denied",
      title: "accounts-get-account-pending-403-access-denied",
      href: "/accounts-get-account-pending-403-access-denied",
      coords: "67,5402,446,5479",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body5",
      title: "accounts-get-account-pending-response-body5",
      href: "/accounts-get-account-pending-response-body5",
      coords: "82,5497,432,5574",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers6",
      title: "accounts-get-account-pending-headers6",
      href: "/accounts-get-account-pending-headers6",
      coords: "86,5799,338,5877",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-404-not-found",
      title: "accounts-get-account-pending-404-not-found",
      href: "/accounts-get-account-pending-404-not-found",
      coords: "63,6315,393,6399",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body6",
      title: "accounts-get-account-pending-response-body6",
      href: "/accounts-get-account-pending-response-body6",
      coords: "82,6416,402,6497",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers7",
      title: "accounts-get-account-pending-headers7",
      href: "/accounts-get-account-pending-headers7",
      coords: "82,6713,324,6790",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-limit-exceeded",
      title: "accounts-get-account-pending-limit-exceeded",
      href: "/accounts-get-account-pending-limit-exceeded",
      coords: "65,7228,561,7305",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body7",
      title: "accounts-get-account-pending-response-body7",
      href: "/accounts-get-account-pending-response-body7",
      coords: "84,7331,426,7403",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers8",
      title: "accounts-get-account-pending-headers8",
      href: "/accounts-get-account-pending-headers8",
      coords: "82,7626,331,7712",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-internal-server-error",
      title: "accounts-get-account-pending-internal-server-error",
      href: "/accounts-get-account-pending-internal-server-error",
      coords: "67,8146,549,8225",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body8",
      title: "accounts-get-account-pending-response-body8",
      href: "/accounts-get-account-pending-response-body8",
      coords: "81,8237,412,8316",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers9",
      title: "accounts-get-account-pending-headers9",
      href: "/accounts-get-account-pending-headers9",
      coords: "81,8542,323,8630",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-not-implemented",
      title: "accounts-get-account-pending-not-implemented",
      href: "/accounts-get-account-pending-not-implemented",
      coords: "67,9062,498,9143",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body9",
      title: "accounts-get-account-pending-response-body9",
      href: "/accounts-get-account-pending-response-body9",
      coords: "86,9157,412,9234",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers10",
      title: "accounts-get-account-pending-headers10",
      href: "/accounts-get-account-pending-headers10",
      coords: "88,9457,331,9538",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-service-unavailable",
      title: "accounts-get-account-pending-service-unavailable",
      href: "/accounts-get-account-pending-service-unavailable",
      coords: "63,9977,532,10056",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body10",
      title: "accounts-get-account-pending-response-body10",
      href: "/accounts-get-account-pending-response-body10",
      coords: "84,10078,419,10142",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers11",
      title: "accounts-get-account-pending-headers11",
      href: "/accounts-get-account-pending-headers11",
      coords: "81,10379,317,10454",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-gateway-timeout",
      title: "accounts-get-account-pending-gateway-timeout",
      href: "/accounts-get-account-pending-gateway-timeout",
      coords: "62,10897,503,10967",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-response-body11",
      title: "accounts-get-account-pending-response-body11",
      href: "/accounts-get-account-pending-response-body11",
      coords: "84,10991,412,11063",
      shape: "rect"
    },
    {
      alt: "accounts-get-account-pending-headers12",
      title: "accounts-get-account-pending-headers12",
      href: "/accounts-get-account-pending-headers12",
      coords: "84,11290,314,11365",
      shape: "rect"
    }
  ];
  const handleAreaClick = (href: any) => {
   router.push(href)
  };
 
  const parseCoords = (coords: any) => {
    const [x1, y1, x2, y2] = coords.split(',').map(Number);
    return {
      left: x1,
      top: y1,
      width: x2 - x1,
      height: y2 - y1
    };
  };
  const onChange = () => { }
  return (
    <Box>
      <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
        <Image
          src={CommonBackIcon}
          alt='back'
          width={40}
          height={40}
          onClick={() => { router.push('/true-layer-accounts') }}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "Outfit, inherit" }}
        >
          Get account pending transactions
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <CheckboxForm onChange={onChange} />
      </Box>
      <Box mt={2} sx={{ position: 'relative', display: 'inline-block' }}>
        <Image
          src={GetAccountPendingTransactions}
          alt="Accounts Get Account Transactions API Diagram"
          width={1803}
          height={11841}
          priority
          style={{
            maxWidth: '100%',
            height: '100%'
          }}
        // useMap="#image-map"
        />

        {imageAreas.map((area, index) => {
          const coords = parseCoords(area.coords);
          return (
            <Box key={index}
              component="button"
              onClick={() => handleAreaClick(area.href)}
              sx={{
                position: 'absolute',
                left: coords.left,
                top: coords.top,
                width: coords.width,
                height: coords.height,
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
              aria-label={area.alt}
              title={area.title}
            />
          );
        })}
      </Box>
    </Box>
  )
}

export default GetAccountPendingTransactionsImageMap