"use client";
import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { createPayoutAreas } from "./data";
import { CreatePayoutImage } from "@/assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { Stack, Typography } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";

interface CommonPageProps {
  backRoute?: string;
}
const CreatePayoutImageMap = ({ backRoute = "/get-payout" }) => {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent,
    area: { href: string; target?: string }
  ) => {
    e.preventDefault();

    // Handle external links
    if (area.href.startsWith("http") && area.target === "_blank") {
      window.open(area.href, "_blank");
      return;
    }

    // Handle internal navigation
    if (!area.href.startsWith("#")) {
      router.push(area.href);
    }

    // # links can be handled separately if needed
  };
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
  // Convert pixel values to percentages for responsiveness
  const toPercentage = (value: number, total: number) =>
    `${(value / total) * 100}%`;

  return (
    <Box
      position="relative"
      width="100%"
      sx={{
        height: { xs: "auto", md: 5218 },
        aspectRatio: "1920/5218",
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
          Create payout
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={handleStatusChange} />
      </Box>

      <Image
        src={CreatePayoutImage}
        alt="Create Payout Diagram"
        width={1920}
        height={5218}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        priority
      />

      {/* Interactive Areas */}
      {createPayoutAreas.map((area) => (
        <Box
          key={area.id}
          component="a"
          href={area.href}
          target={area.target}
          rel={area.target ? "noopener noreferrer" : undefined}
          onClick={(e) => handleClick(e, area)}
          position="absolute"
          left={toPercentage(area.x, 1920)}
          top={toPercentage(area.y, 5218)}
          width={toPercentage(area.width, 1920)}
          height={toPercentage(area.height, 5218)}
          sx={{
            cursor: "pointer",
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default CreatePayoutImageMap;
