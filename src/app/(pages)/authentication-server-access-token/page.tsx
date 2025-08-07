import { AuthenticationServerAccessTokenImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "",
    title: "",
    href: "",
    coords: "",
    shape: "",
  },
];

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
