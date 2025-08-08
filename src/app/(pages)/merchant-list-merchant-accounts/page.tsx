"use client";

import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { interactiveAreas } from "./data";
import { MerchantListMerchantAccountsImage } from "@/assets";
import { Stack, Typography } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";

const InteractiveArea = styled("div")(({ theme }) => ({
  position: "absolute",
  cursor: "pointer",
}));

interface CommonPageProps {
  backRoute?: string;
}

const MerchantListMerchantAccounts = ({ backRoute = "/merchant-accounts" }) => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    if (backRoute) {
      router.push(backRoute);
    }
  }, [router, backRoute]);

  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleStatusChange = (selectedValue: string, page: string) => {
    setSelectedStatus(selectedValue);
    // You can add additional logic here based on the selected value
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        maxWidth: "1848px", // Optional: set max width to match original SVG
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
        p={3}
      >
        <Image
          src={CommonBackIcon}
          alt={"pageTitle"}
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
          Merchant _ List merchant accounts
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={handleStatusChange} />
      </Box>
      {/* Next.js Image component */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        p={2}
        ml={3}
      >
        <Image
          src={MerchantListMerchantAccountsImage}
          alt="Get Payout Diagram"
          width={1875}
          height={7749}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority
        />
      </Box>

      {/* Render interactive areas from data */}
      {interactiveAreas.map((area) => (
        <Link key={area.id} href={area.href} passHref>
          <InteractiveArea
            style={{
              width: `${area.width}%`,
              height: `${area.height}%`,
              left: `${area.x}%`,
              top: `${area.y}%`,
              textDecoration: "none",
            }}
          />
        </Link>
      ))}
    </Box>
  );
};

export default MerchantListMerchantAccounts;
