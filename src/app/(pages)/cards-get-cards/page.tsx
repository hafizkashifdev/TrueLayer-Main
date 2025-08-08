"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CardsGetCardsMain } from "@/assets";

// If Section.svg is in public, use "/Section.svg" as src below

const CardGetCardsPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/true-layer-accounts-cards");
  }, [router]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", my: "34px" }}>
        <Image
          src={CommonBackIcon}
          alt="Back"
          width={48}
          height={48}
          onClick={onBackIconClick}
          style={{ cursor: "pointer", margin: "0 16px" }}
        />
        <Box>
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "20px", sm: "26px", md: "32px" }}
            fontWeight={{ md: 600, xs: 500 }}
            sx={{ fontFamily: "inherit", lineHeight: "1.25" }}
          >
            Get cards
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        <Image
          src={CardsGetCardsMain} // Place Section.svg in public folder
          alt="Get Cards Diagram"
          width={1920} // Adjust if you know exact width
          height={10050} // Estimated height from max Y-coordinate
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
          useMap="#image-map"
        />

        <map name="image-map">
          <area target="_parent" alt="Get cards" title="Get cards" href="card-1-get-cards" coords="12,17,254,77" shape="rect" />
          <area target="_parent" alt="Query Params" title="Query Params" href="card-1-1-query-params" coords="34,112,337,177" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="card-1-2-headers" coords="926,105,1137,179" shape="rect" />
          <area target="_parent" alt="Response" title="Response" href="card-1-3-response" coords="29,470,294,537" shape="rect" />
          <area target="_parent" alt="200(OK)" title="200(OK)" href="card-1-3-1-200-ok" coords="55,568,301,635" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-1-1-response-body" coords="76,657,395,726" shape="rect" />
          <area target="_parent" alt="Results" title="Results" href="card-1-3-1-1-1-results" coords="94,758,333,813" shape="rect" />
          <area target="_parent" alt="Status" title="Status" href="card-1-3-1-1-1-status" coords="91,1314,308,1381" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-1-2-header" coords="69,1753,302,1832" shape="rect" />
          <area target="_parent" alt="202 Accepted" title="202 Accepted" href="card-1-3-2-202-accepted" coords="62,2333,352,2395" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-2-1-response-body" coords="107,2452,414,2521" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-2-2-header" coords="98,2879,321,2950" shape="rect" />
          <area target="_parent" alt="401 unauthorized" title="401 unauthorized" href="card-1-3-3-401-unauthorized" coords="62,3435,424,3498" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-3-1-response-body" coords="81,3529,400,3600" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-3-2-header" coords="86,3827,308,3895" shape="rect" />
          <area target="_parent" alt="Access Denied" title="Access Denied" href="card-1-3-4-403-access-denied" coords="65,4407,452,4481" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-4-1-response-body" coords="86,4503,400,4581" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-4-2-header" coords="89,4841,330,4916" shape="rect" />
          <area target="_parent" alt="404 not found" title="404 not found" href="card-1-3-5-404-not-found" coords="58,5358,400,5425" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-5-1-response-body" coords="84,5459,411,5531" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-5-2-header" coords="88,5761,376,5834" shape="rect" />
          <area target="_parent" alt="429 Rate Limit Exceeded" title="429 Rate Limit Exceeded" href="card-1-3-6-429-rate-limit-exceeded" coords="67,6328,524,6401" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="card-1-3-6-1-response-body" coords="84,6471,419,6547" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-6-2-header" coords="88,6767,321,6849" shape="rect" />
          <area target="_parent" alt="500 Internal server error" title="500 Internal server error" href="card-1-3-7-500-internal-server-error" coords="69,7291,534,7365" shape="rect" />
          <area target="_parent" alt="Response body" title="Response body" href="card-1-3-7-1-response-body" coords="88,7410,400,7474" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-7-2-header" coords="86,7688,356,7775" shape="rect" />
          <area target="_parent" alt="501 not implemented" title="501 not implemented" href="card-1-3-8-501-not-implemented" coords="67,8310,500,8385" shape="rect" />
          <area target="_parent" alt="Response body" title="Response body" href="card-1-3-8-1-response-body" coords="86,8399,431,8478" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-8-2-header" coords="82,8698,320,8779" shape="rect" />
          <area target="_parent" alt="503 service unavailable" title="503 service unavailable" href="card-1-3-9-503-service-unavailable" coords="62,9224,539,9303" shape="rect" />
          <area target="_parent" alt="Response body" title="Response body" href="card-1-3-9-1-response-body" coords="76,9320,462,9397" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-9-2-header" coords="84,9669,352,9744" shape="rect" />
          <area target="_parent" alt="504 gateway timeout" title="504 gateway timeout" href="card-1-3-10-504-gateway-timeout" coords="72,10233,519,10315" shape="rect" />
          <area target="_parent" alt="Response body" title="Response body" href="card-1-3-10-1-response-body" coords="89,10336,490,10411" shape="rect" />
          <area target="_parent" alt="Header" title="Header" href="card-1-3-10-2-header" coords="89,10631,342,10703" shape="rect" />

        </map>
      </Box>
    </Box>
  );
};

export default CardGetCardsPage;