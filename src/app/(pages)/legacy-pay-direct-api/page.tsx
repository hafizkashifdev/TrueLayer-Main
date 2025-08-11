'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  LegacyPayDirectApiImage1,
  LegacyPayDirectApiImage2,
  LegacyPayDirectApiImage3,
  LegacyPayDirectApiImage4,
  LegacyPayDirectApiImage5,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'withdrawal', href: '/legacy-paydirect-api-withdrawal', icon: LegacyPayDirectApiImage1 },
  { key: '2', title: 'Deposit', href: '/legacy-paydirect-api-deposit', icon: LegacyPayDirectApiImage2 },
  { key: '3', title: 'User', href: '/legacy-paydirect-api-user', icon: LegacyPayDirectApiImage3 },
  { key: '4', title: 'Balance', href: '/legacy-paydirect-api-balances', icon: LegacyPayDirectApiImage4 },
  { key: '5', title: 'Transactions', href: '/legacy-paydirect-api-transactions', icon: LegacyPayDirectApiImage5 },
]

export default function LegacyPayDirectApiPage() {
  return (
    <FaGlobalScreen
      pageTitle="Legacy - PayDirect API"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
