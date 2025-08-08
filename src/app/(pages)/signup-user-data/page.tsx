"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { UserDataMainDigramImage } from "@/assets";

const IMG_WIDTH = 1865;
const IMG_HEIGHT = 9162;
const areas = [
  {
    href: "/signup-user-data-get-user-data-by-payment", // Replace with your actual route
    x: 10.626780626780599,
    y: 8.855650522317188,
    width: 510.0854700854701,
    height: 74.38746438746439,
    title: "signup-user-data-get-user-data-by-payment",
  },
  {
    href: "https://api.truelayer.com/signup-plus/payments",
    x: 1333.6609686609686,
    y: 15.94017094017094,
    width: 456.951566951567,
    height: 69.07407407407408,
    title: "https://api.truelayer.com/signup-plus/payments",
  },
  {
    href: "/signup-user-data-query-params",
    x: 31.880341880341895,
    y: 99.18328584995251,
    width: 354.22602089268753,
    height: 74.3874643874644,
    title: "signup-user-data-query-params",
  },
  {
    href: "/signup-user-data-response",
    x: 33.65147198480532,
    y: 441.011396011396,
    width: 311.71889838556507,
    height: 76.15859449192777,
    title: "signup-user-data-response",
  },
  {
    href: "/signup-user-data-response-200successful-response",
    x: 54.9050332383666,
    y: 522.4833808167141,
    width: 611.039886039886,
    height: 102.72554605887944,
    title: "signup-user-data-response-200successful-response",
  },
  {
    href: "/signup-user-data-response-400invalid-parameters",
    x: 885.5650522317189,
    y: 518.9411206077872,
    width: 658.8603988603988,
    height: 100.95441595441594,
    title: "signup-user-data-response-400invalid-parameters",
  },
  {
    href: "/signup-user-data-response-401unauthorized-2",
    x: 54.90503323836657,
    y: 970.5792972459639,
    width: 529.5679012345679,
    height: 95.64102564102575,
    title: "signup-user-data-response-401unauthorized-2",
  },
  {
    href: "/signup-user-data-response-403-2",
    x: 58.44729344729345,
    y: 1379.710351377018,
    width: 329.4301994301994,
    height: 95.64102564102564,
    title: "signup-user-data-response-403-2",
  },
  {
    href: "/signup-user-data-response-404-2",
    x: 58.44729344729345,
    y: 1787.0702754036088,
    width: 347.14150047483383,
    height: 92.09876543209862,
    title: "signup-user-data-response-404-2",
  },
  {
    href: "/signup-user-data-response-422",
    x: 61.98955365622032,
    y: 2187.3456790123455,
    width: 327.65906932573597,
    height: 100.95441595441616,
    title: "signup-user-data-response-422",
  },
  {
    href: "/signup-user-data-response-500-1",
    x: 53.13390313390313,
    y: 2591.1633428300097,
    width: 345.3703703703704,
    height: 109.81006647673303,
    title: "signup-user-data-response-500-1",
  },
  {
    href: "/signup-user-data-get-user-data-by-connected-account",
    x: 40.73599240265907,
    y: 3060.5128205128203,
    width: 759.8148148148148,
    height: 92.09876543209884,
    title: "signup-user-data-get-user-data-by-connected-account",
  },
  {
    href: "/user-data-main-13",
    x: 1280.5270655270656,
    y: 3055.19943019943,
    width: 554.3637226970559,
    height: 95.64102564102586,
    title: "user-data-main-13",
  },
  {
    href: "/signup-user-data-get-user-data-by-connected-account-query-params",
    x: 58.44729344729345,
    y: 3157.92497625831,
    width: 456.95156695156686,
    height: 99.18328584995243,
    title: "signup-user-data-get-user-data-by-connected-account-query-params",
  },
  {
    href: "/signup-user-data-response-3",
    x: 54.90503323836657,
    y: 3499.753086419753,
    width: 391.41975308641975,
    height: 86.78537511870854,
    title: "signup-user-data-response-3",
  },
  {
    href: "/signup-user-data-response-200successful-response-3",
    x: 67.30294396961065,
    y: 3591.8518518518517,
    width: 603.9553656220324,
    height: 102.72554605887944,
    title: "signup-user-data-response-200successful-response-3",
  },
  {
    href: "/signup-user-data-response-400invalid-parameters-4",
    x: 903.2763532763532,
    y: 3570.5982905982905,
    width: 648.2336182336184,
    height: 99.18328584995243,
    title: "signup-user-data-response-400invalid-parameters-4",
  },
  {
    href: "/signup-user-data-response-401unauthorized-4",
    x: 74.38746438746439,
    y: 4024.0075973409307,
    width: 549.0503323836657,
    height: 116.89458689458706,
    title: "signup-user-data-response-401unauthorized-4",
  },
  {
    href: "/signup-user-data-response-403-4",
    x: 77.92972459639127,
    y: 4429.596391263058,
    width: 403.8176638176638,
    height: 118.66571699905035,
    title: "signup-user-data-response-403-4",
  },
  {
    href: "/signup-user-data-response-422-4",
    x: 76.15859449192783,
    y: 4835.185185185185,
    width: 400.27540360873695,
    height: 118.66571699905035,
    title: "signup-user-data-response-422-4",
  },
  {
    href: "/signup-user-data-response-500-4",
    x: 83.24311490978158,
    y: 5242.5451092117755,
    width: 425.07122507122506,
    height: 125.75023741690438,
    title: "signup-user-data-response-500-4",
  },
  {
    href: "/signup-user-data-response-504-4",
    x: 88.5565052231719,
    y: 5639.278252611586,
    width: 366.62393162393164,
    height: 123.97910731244065,
    title: "signup-user-data-response-504-4",
  },
  {
    href: "/signup-user-data-get-user-data-by-mandate-id",
    x: 28.338081671415004,
    y: 6108.627730294397,
    width: 742.1035137701805,
    height: 97.41215574548914,
    title: "signup-user-data-get-user-data-by-mandate-id",
  },
  {
    href: "/user-data-main-24",
    x: 1253.9601139601139,
    y: 6101.543209876543,
    width: 580.9306742640076,
    height: 97.41215574548914,
    title: "user-data-main-24",
  },
  {
    href: "/signup-user-data-query-params-1",
    x: 47.82051282051282,
    y: 6211.353276353276,
    width: 409.13105413105416,
    height: 99.18328584995288,
    title: "signup-user-data-query-params-1",
  },
  {
    href: "/signup-user-data-response-6",
    x: 46.04938271604938,
    y: 6542.554605887939,
    width: 488.83190883190883,
    height: 88.55650522317228,
    title: "signup-user-data-response-6",
  },
  {
    href: "/signup-user-data-response-200successful-response-6",
    x: 53.13390313390312,
    y: 6639.966761633428,
    width: 607.497625830959,
    height: 108.03893637226975,
    title: "signup-user-data-response-200successful-response-6",
  },
  {
    href: "/signup-user-data-response-400invalid-parameters-5",
    x: 890.8784425451092,
    y: 6631.111111111111,
    width: 641.1490978157644,
    height: 93.86989553656167,
    title: "signup-user-data-response-400invalid-parameters-5",
  },
  {
    href: "/signup-user-data-response-401unauthorized-5",
    x: 65.5318138651472,
    y: 7068.580246913581,
    width: 582.701804368471,
    height: 127.52136752136812,
    title: "signup-user-data-response-401unauthorized-5",
  },
  {
    href: "/signup-user-data-response-403-5",
    x: 58.44729344729345,
    y: 7479.482431149098,
    width: 458.72269705603037,
    height: 138.1481481481478,
    title: "signup-user-data-response-403-5",
  },
  {
    href: "/signup-user-data-response-404-6",
    x: 69.07407407407405,
    y: 7890.384615384615,
    width: 425.07122507122506,
    height: 116.89458689458661,
    title: "signup-user-data-response-404-6",
  },
  {
    href: "/signup-user-data-response-422-6",
    x: 69.0740740740741,
    y: 8301.286799620133,
    width: 433.92687559354226,
    height: 132.8347578347566,
    title: "signup-user-data-response-422-6",
  },
  {
    href: "/signup-user-data-response-500-6",
    x: 65.53181386514721,
    y: 8687.393162393164,
    width: 361.31054131054134,
    height: 111.5811965811954,
    title: "signup-user-data-response-500-6",
  },
];

const SignupUserDataPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-signup"); // Update with your actual back route
  }, [router]);

  return (
    <Box sx={{ p: "40px" }}>
      <Box sx={{ display: "flex" }}>
        <Image
          src={CommonBackIcon}
          alt="Back"
          width={48}
          height={48}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
      </Box>

      <Box sx={{ mt: "34px" }}>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit", lineHeight: "1.25" }}
        >
          User Data
        </Typography>
      </Box>

      <Box sx={{ pt: "20px" }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={UserDataMainDigramImage}
            alt="User Data Main Diagram"
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            priority
            style={{ width: "100%", height: "auto" }}
          />

   {areas.map((area, index) => (
            <Tooltip key={index} title={area.title} arrow>
              <Box
                component={area.href.startsWith('https://') ? 'a' : Link}
                href={area.href}
                {...(area.href.startsWith('https://') ? {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                } : {})}
                sx={{
                  position: "absolute",
                  left: `${(area.x / IMG_WIDTH) * 100}%`,
                  top: `${(area.y / IMG_HEIGHT) * 100}%`,
                  width: `${(area.width / IMG_WIDTH) * 100}%`,
                  height: `${(area.height / IMG_HEIGHT) * 100}%`,
                  cursor: "pointer",
                  "&:hover": {
                    outline: "2px solid white",
                    opacity: 0.2,
                  },
                }}
              />
            </Tooltip>
          ))}
          {/* {areas.map((area, index) => (
            <Tooltip key={index} title={area.title} arrow>
              <Box
                component={Link}
                href={area.href}
                sx={{
                  position: "absolute",
                  left: `${(area.x / IMG_WIDTH) * 100}%`,
                  top: `${(area.y / IMG_HEIGHT) * 100}%`,
                  width: `${(area.width / IMG_WIDTH) * 100}%`,
                  height: `${(area.height / IMG_HEIGHT) * 100}%`,
                  cursor: "pointer",
                  "&:hover": {
                    outline: "2px solid white",
                    opacity: 0.2,
                  },
                }}
              />
            </Tooltip>
          ))} */}
        </Box>
      </Box>
    </Box>
  );
};

export default SignupUserDataPage;