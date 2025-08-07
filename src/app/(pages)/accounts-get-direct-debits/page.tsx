"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { accountGetDirectDebitsImage } from "@/assets";
// You should place Section.svg in your public folder and use "/Section.svg" as src

const AccountsGetDirectDebitsPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/trure-layer-accounts");
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
            Get direct debits
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
          src={accountGetDirectDebitsImage} // Place Section.svg in public folder
          alt="Get Standing Orders Diagram"
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
          <area target="_parent" alt="Get direct debits" title="Get direct debits" href="accounts-get-direct-debits-2" coords="12,7,340,84" shape="rect" />
          <area target="_parent" alt="Path Params" title="Path Params" href="accounts-get-direct-debits-path-params" coords="29,106,287,185" shape="rect" />
          <area target="_parent" alt="Query Params" title="Query Params" href="accounts-get-direct-debits-query-params" coords="319,105,611,187" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-headers" coords="1356,103,1582,182" shape="rect" />
          <area target="_parent" alt="Responses" title="Responses" href="accounts-get-direct-debits-responses" coords="31,432,290,505" shape="rect" />
          <area target="_parent" alt="200 (OK)" title="200 (OK)" href="accounts-get-direct-debits-responses-200-ok" coords="45,558,287,608" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-200-ok-response-body" coords="77,627,405,692" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-200-ok-headers" coords="81,1691,302,1765" shape="rect" />
          <area target="_parent" alt="Accepted" title="Accepted" href="accounts-get-direct-debits-responses-202-accepted" coords="55,2248,374,2309" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-202-accepted-response-body" coords="98,2352,429,2424" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-202-accepted-headers" coords="98,2800,345,2882" shape="rect" />
          <area target="_parent" alt="401(Unauthorized)" title="401(Unauthorized)" href="accounts-get-direct-debits-responses-401-unauthorized" coords="53,3328,422,3409" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-401-unauthorized-response-body" coords="76,3433,420,3509" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-401-unauthorized-headers" coords="81,3728,311,3811" shape="rect" />
          <area target="_parent" alt="403(Access Denied)" title="403(Access Denied)" href="accounts-get-direct-debits-responses-403-access-denied" coords="55,4325,443,4402" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-403-access-denied-response-body" coords="77,4419,412,4510" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-403-access-denied-headers" coords="74,4741,331,4829" shape="rect" />
          <area target="_parent" alt="404(Not Found)" title="404(Not Found)" href="accounts-get-direct-debits-responses-404-not-found" coords="55,5265,396,5337" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-404-not-found-response-body" coords="76,5354,415,5431" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-404-not-found-headers" coords="74,5659,376,5743" shape="rect" />
          <area target="_parent" alt="429(Rate Limit Exceeded)" title="429(Rate Limit Exceeded)" href="accounts-get-direct-debits-responses-429-rate-limit-exceeded" coords="57,6294,517,6270" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-429-rate-limit-exceeded-response-body" coords="74,6375,474,6456" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-429-rate-limit-exceeded-headers" coords="74,6674,369,6751" shape="rect" />
          <area target="_parent" alt="500(Internal Server Error)" title="500(Internal Server Error)" href="accounts-get-direct-debits-responses-500-internal-server-error" coords="48,7224,542,7308" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-500-internal-server-error-response-body" coords="72,7340,456,7415" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-500-internal-server-error-headers" coords="74,7630,384,7719" shape="rect" />
          <area target="_parent" alt="501(not-implemented)" title="501(not-implemented)" href="accounts-get-direct-debits-responses-501-not-implemented" coords="55,8187,484,8263" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-501-not-implemented-response-body" coords="72,8303,438,8377" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-501-not-implemented-headers" coords="74,8598,412,8682" shape="rect" />
          <area target="_parent" alt="503(Service Unavailable)" title="503(Service Unavailable)" href="accounts-get-direct-debits-responses-503-service-unavailable" coords="58,9159,515,9240" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-503-service-unavailable-response-body" coords="72,9264,465,9350" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-503-service-unavailable-headers" coords="79,9614,378,9698" shape="rect" />
          <area target="_parent" alt="504(Gateway Timeout)" title="504(Gateway Timeout)" href="accounts-get-direct-debits-responses-504-gateway-timeout" coords="58,10026,527,10203" shape="rect" />
          <area target="_parent" alt="Response Body" title="Response Body" href="accounts-get-direct-debits-responses-504-gateway-timeout-response-body" coords="79,10234,480,10318" shape="rect" />
          <area target="_parent" alt="Headers" title="Headers" href="accounts-get-direct-debits-responses-504-gateway-timeout-headers" coords="76,10520,331,10615" shape="rect" />
        </map>
      </Box>
    </Box>
  );
};

export default AccountsGetDirectDebitsPage;