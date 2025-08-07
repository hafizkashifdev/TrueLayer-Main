"use client";
import { MultiPathPage } from "@/components";
import {
  UserDataImage,
  GenerateAuthUriImage,
} from "@/assets";
import React from "react";

const SignUpPageData = [
  {
    key: "scope-1",
    link: "/signup-user-data",
    icon: UserDataImage,
    title: "User Data",
  },
  {
    key: "scope-2",
    link: "/generate-auth-uri",
    icon: GenerateAuthUriImage,
    title: "Generate auth URI",
  },
];

const SignUp = () => {
  return (
    <MultiPathPage
      arrayData={SignUpPageData}
      pageTitle="SIGNUP"
      backRoute="/"
    />
  );
};

export default SignUp;