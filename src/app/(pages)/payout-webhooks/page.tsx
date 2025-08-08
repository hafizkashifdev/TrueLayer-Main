"use client";
import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Stack, Typography } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";

// Import your image
import { PayoutWebhooksImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";

interface CommonPageProps {
  backRoute?: string;
}

// Define your areas data
const payoutWebhookAreas = [
  {
    id: 1,
    x: 35.63,
    y: 298.27,
    width: 197.75,
    height: 40.98,
    href: "#",
    title: "",
  },
  {
    id: 3,
    x: 60.57,
    y: 426.95,
    width: 222.7,
    height: 30.29,
    href: "/payout-webhooks-payload-executed",
    title: "payout-webhooks-payload-executed",
  },
  {
    id: 4,
    x: 48.1,
    y: 977,
    width: 188.85,
    height: 51.67,
    href: "/payout-webhooks-payload-failed",
    title: "payout-webhooks-payload-failed",
  },
  {
    id: 6,
    x: 39.19,
    y: 1565.55,
    width: 171.03,
    height: 46.32,
    href: "/payout-webhooks-headers",
    title: "payout-webhooks-headers",
  },
  {
    id: 7,
    x: 40.98,
    y: 1923.48,
    width: 267.24,
    height: 37.41,
    href: "/payout-webhooks-response-200",
    title: "payout-webhooks-response-200",
    selected: true,
  },
];

const PayoutWebhooksImageMap = ({ backRoute = "/payouts" }) => {
  const router = useRouter();
  const [selectedArea, setSelectedArea] = useState<number | null>(7); // Initialize with the selected area
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleStatusChange = (selectedValue: string, page: string) => {
    setSelectedStatus(selectedValue);
    // You can add additional logic here based on the selected value
  };
  const handleClick = (
    e: React.MouseEvent,
    area: { href: string; target?: string; id: number }
  ) => {
    e.preventDefault();
    setSelectedArea(area.id);

    // Handle external links
    if (area.href.startsWith("http") && area.target === "_blank") {
      window.open(area.href, "_blank");
      return;
    }

    // Handle internal navigation
    if (!area.href.startsWith("#")) {
      router.push(area.href);
    }
  };

  const onBackIconClick = useCallback(() => {
    if (backRoute) {
      router.push(backRoute);
    }
  }, [router, backRoute]);

  // Convert pixel values to percentages for responsiveness
  const toPercentage = (value: number, total: number) =>
    `${(value / total) * 100}%`;

  return (
    <Box
      position="relative"
      width="100%"
      sx={{
        height: { xs: "auto", md: 1698 },
        aspectRatio: "1876/1698",
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
          alt={"back"}
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
          Payout Webhooks
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={handleStatusChange} />
      </Box>
      <Image
        src={PayoutWebhooksImage}
        alt="Payout Webhooks Diagram"
        width={1876}
        height={1698}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        priority
      />

      {/* Interactive Areas */}
      {payoutWebhookAreas.map((area) => (
        <Box
          key={area.id}
          component="a"
          href={area.href}
          title={area.title}
          onClick={(e) => handleClick(e, area)}
          position="absolute"
          left={toPercentage(area.x, 1876)}
          top={toPercentage(area.y, 1698)}
          width={toPercentage(area.width, 1876)}
          height={toPercentage(area.height, 1698)}
          sx={{
            cursor: "pointer",
            backgroundColor:
              selectedArea === area.id
                ? "rgba(255, 255, 255, 0.3)"
                : "transparent",
          }}
        />
      ))}
    </Box>
  );
};

export default PayoutWebhooksImageMap;
