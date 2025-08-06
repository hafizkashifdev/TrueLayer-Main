"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { createPayoutAreas } from "./data";
import { CreatePayoutImage } from "@/assets";
import { useRouter } from "next/navigation";

const CreatePayoutImageMap = () => {
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
      {/* Main Image */}
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
            "&:hover": {
              outline: "2px solid white",
              opacity: 0.2,
              backgroundColor: "rgba(255,255,255,0.2)",
            },
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default CreatePayoutImageMap;
