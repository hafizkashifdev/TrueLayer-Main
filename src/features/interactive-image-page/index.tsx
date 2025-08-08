"use client";
import { Box, Tooltip, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import Link from "next/link";
import { CheckboxForm } from "@/components/checkbox-form";

interface IteractiveArea {
  id: string | number;
  title: string;
  href: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface CommonPageProps {
  pageTitle: string;
  backRoute?: string;
  imageSrc: string | StaticImageData;
  areas: IteractiveArea[];
  imageHeight: number;
  imageWidth: number;
}

const InteractiveImagePage: React.FC<CommonPageProps> = ({
  imageSrc,
  backRoute = "/",
  pageTitle,
  areas,
  imageHeight,
  imageWidth,
}) => {

  return (
    <Box sx={{ p: '40px' }}>

      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Box component={Link} href={backRoute} sx={{ display: 'inline-flex' }}>
          <Image
            src={CommonBackIcon}
            alt={'Back'}
            width={48}
            height={48}
          />
        </Box>

        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "20", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit", lineHeight: '1.25' }}
        >
          {pageTitle}
        </Typography>
      </Box>

      <Box sx={{ mt: '24px' }}>
        <CheckboxForm />
      </Box>

      <Box sx={{ pt: '20px' }}>
        <Box sx={{ position: "relative", overflow: 'hidden', width: "100%" }}>

          <Image
            src={imageSrc}
            alt={pageTitle}
            width={imageWidth}
            height={imageHeight}
            layout="responsive"
          />

          {areas?.map((area) => (
            <Tooltip
              key={area.id}
              title={area.title}
              arrow
              placement="top"
              slotProps={{
                tooltip: {
                  sx: {
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    fontSize: '0.875rem',
                    maxWidth: 250,
                  }
                },
                arrow: {
                  sx: {
                    color: 'primary.main',
                  }
                }
              }}
            >
              <Box
                component={Link}
                href={area.href}
                sx={{
                  position: "absolute",
                  left: `${(area.x / imageWidth) * 100}%`,
                  top: `${(area.y / imageHeight) * 100}%`,
                  width: `${(area.width / imageWidth) * 100}%`,
                  height: `${(area.height / imageHeight) * 100}%`,
                  display: 'block',
                }}
              />
            </Tooltip>
          ))}

        </Box>
      </Box>
    </Box>
  );
};

export default InteractiveImagePage;
