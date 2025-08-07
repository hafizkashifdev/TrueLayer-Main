'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  SignupImage1,
  SignupImage2,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'User Data', href: '/signup-user-data', icon: SignupImage1 },
  { key: '2', title: 'Generate auth URI', href: '/generate-auth-uri', icon: SignupImage2 },
]

export default function SignupPage() {
  return (
    <FaGlobalScreen
      pageTitle="SIGNUP"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 6 }}
      backRoute="/"
    />
  );
}
