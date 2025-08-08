import { AuthenticationServerAccessTokenImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [{
    alt: "Generate or refresh an access token",
    title: "Generate or refresh an access token",
    href: "/generate-or-refresh-an-access-token",
    coords: "51,123,1183,191",
    shape: "rect",
  },
  {
    alt: "Body Params",
    title: "Body Params",
    href: "/access-token-body-params",
    coords: "65,437,365,509",
    shape: "rect",
  },
  {
    alt: "Token exchange Request",
    title: "Token exchange Request",
    href: "/access-token-body-params-token-exchange-request",
    coords: "104,528,523,604",
    shape: "rect",
  },
  {
    alt: "Client Credentials Grant Request",
    title: "Client Credentials Grant Request",
    href: "/access-token-body-params-client-credentials-grant-request",
    coords: "98,877,616,944",
    shape: "rect",
  },
  {
    alt: "Responses",
    title: "Responses",
    href: "/responses",
    coords: "63,1550,304,1622",
    shape: "rect",
  },
  {
    alt: "Responses 200",
    title: "Responses 200",
    href: "/responses-200",
    coords: "105,1667,505,1730",
    shape: "rect",
  },
  {
    alt: "Response 500",
    title: "Response 500",
    href: "responses-500",
    coords: "97,1966,465,2045",
    shape: "rect",
  },
  {
    alt: "Delete a Credential",
    title: "Delete a Credential",
    href: "/delete-a-credential",
    coords: "58,2359,384,2434",
    shape: "rect",
  },
  {
    alt: "Response 400",
    title: "Response 400",
    href: "/responses-400",
    coords: "1176,1653,1557,1725",
    shape: "rect",
  },];

const AuthenticationServerAccessTokenPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Authentication Server_Access Token`}
      image={AuthenticationServerAccessTokenImage}
      backRoute="/truelayer-authentication-server"
      areas={areas}
    />
  );
};

export default AuthenticationServerAccessTokenPage;
