"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Link, Stack, Typography } from '@mui/material';
import { StartAuthImage } from '@/assets';
import { CommonBackIcon } from '@/assets/common-assets';
import { CheckboxForm } from '@/components/checkbox-form';
import { useRouter } from 'next/navigation';

const StartAuthImageMap = () => {
  const imageWidth = 1848;
  const imageHeight = 5970;

  const areas = [
    {
      href: "/start-headers-2",
      title: "start-headers-2",
      coords: [1288.159544159544, 47.38461538461539, 417.6866096866097, 71.95441595441595]
    },
    {
      href: "/start-body-params-1",
      title: "start-body-params-1",
      coords: [24.56980056980057, 296.5925925925926, 429.97150997151, 73.70940170940167]
    },
    {
      href: "/start-response-200-mandate-authorization-3",
      title: "start-response-200-mandate-authorization-3",
      coords: [28.079772079772077, 898.5527065527066, 738.8490028490029, 78.974358974359]
    },
    {
      href: "/start-response-body-headers-4",
      title: "start-response-body-headers-4",
      coords: [42.11965811965812, 996.8319088319088, 545.8005698005699, 78.97435897435912]
    },
    {
      href: "/start-actions-object-next-5",
      title: "start-actions-object-next-5",
      coords: [59.66951566951567, 1277.6296296296296, 473.84615384615387, 70.19943019943025]
    },
    {
      href: "/start-provider-selection-6",
      title: "start-provider-selection-6",
      coords: [75.46438746438747, 1356.6039886039887, 517.7207977207977, 66.68945868945866]
    },
    {
      href: "/start-redirect-7",
      title: "start-wait-for-outcome-8",
      coords: [78.97435897435898, 1883.099715099715, 301.8575498575499, 73.70940170940185]
    },
    {
      href: "/start-wait-for-outcome-8",
      title: "start-consent-9",
      coords: [410.6666666666667, 1881.3447293447293, 380.83190883190883, 77.21937321937321]
    },
    {
      href: "/start-consent-9",
      title: "start-consent-9",
      coords: [1451.3732193732194, 1888.3646723646723, 315.8974358974358, 71.95441595441594]
    },
    {
      href: "/start-failed-10",
      title: "start-failed-10",
      coords: [56.15954415954416, 2434.165242165242, 324.67236467236467, 64.93447293447298]
    },
    {
      href: "/start-response-400-invalid-request-11",
      title: "start-response-400-invalid-request-11",
      coords: [29.834757834757788, 2741.287749287749, 544.0455840455841, 71.95441595441616]
    },
    {
      href: "/start-response-body-headers-12",
      title: "start-response-body-headers-12",
      coords: [43.87464387464387, 2818.5071225071224, 547.5555555555555, 68.44444444444434]
    },
    {
      href: "/start-invalid-parameters-13",
      title: "start-invalid-parameters-13",
      coords: [56.15954415954416, 2899.2364672364674, 531.7606837606838, 73.70940170940139]
    },
    {
      href: "/start-invalid-state-14",
      title: "start-invalid-state-14",
      coords: [59.66951566951567, 3185.2991452991455, 512.4558404558404, 78.97435897435889]
    },
    {
      href: "/start-response-401-unauthenticated-15",
      title: "start-response-401-unauthenticated-15",
      coords: [26.324786324786324, 3453.811965811966, 601.9601139601139, 78.97435897435889]
    },
    {
      href: "/start-response-403-forbidden-16",
      title: "start-response-403-forbidden-16",
      coords: [17.54985754985755, 3825.868945868946, 631.7948717948718, 70.19943019943003]
    },
    {
      href: "/start-response-404-mandate-not-found-17",
      title: "start-response-404-mandate-not-found-17",
      coords: [21.05982905982906, 4182.131054131054, 663.3846153846154, 84.2393162393164]
    },
    {
      href: "/start-response-409-conflict-18",
      title: "start-response-409-conflict-18",
      coords: [19.304843304843306, 4541.9031339031335, 465.07122507122506, 77.21937321937367]
    },
    {
      href: "/start-response-body-headers-19",
      title: "start-response-body-headers-19",
      coords: [43.87464387464387, 4629.652421652421, 466.8262108262108, 73.7094017094023]
    },
    {
      href: "/start-idempotency-key-conflict-20",
      title: "start-idempotency-key-conflict-20",
      coords: [57.914529914529915, 4715.646723646723, 540.5356125356126, 68.44444444444434]
    },
    {
      href: "/start-concurrency-conflict-21",
      title: "start-concurrency-conflict-21",
      coords: [57.914529914529986, 4952.5698005698005, 544.0455840455841, 70.19943019943003]
    },
    {
      href: "/start-response-422-idempotency-key-reuse-22",
      title: "start-response-422-idempotency-key-reuse-22",
      coords: [21.05982905982906, 5221.082621082621, 723.0541310541311, 77.21937321937367]
    },
    {
      href: "/start-response-500-unknown-error-23",
      title: "start-response-500-unknown-error-23",
      coords: [33.344729344729345, 5591.384615384615, 545.8005698005699, 77.21937321937367]
    }
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
          Start authorization flow
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>

    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: 'auto',
      maxWidth: `${imageWidth}px`,
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <Image
        src={StartAuthImage}
        alt="Start Authorization Image Map"
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
              position: 'absolute',
              left: `${left}%`,
              top: `${top}%`,
              width: `${width}%`,
              height: `${height}%`,
              cursor: 'pointer',
            }}
          />
        );
      })}
    </Box>
    </Box>
  );
};

export default StartAuthImageMap;