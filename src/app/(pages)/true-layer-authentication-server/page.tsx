'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  AuthenticationServerImage1,
  AuthenticationServerImage2,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Access tokens', href: '/authentication-server-access-token', icon: AuthenticationServerImage1 },
  { key: '2', title: 'Debug ID', href: '/debug-id', icon: AuthenticationServerImage2 },
]

export default function AuthenticationServerPage() {
  return (
    <FaGlobalScreen
      pageTitle="Authentication Server"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 6 }}
      backRoute="/"
    />
  );
}
