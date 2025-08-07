'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  AccountsCardsImage1,
  AccountsCardsImage2,
  AccountsCardsImage3,
  AccountsCardsImage4,
  AccountsCardsImage5,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Get cards', href: '/cards-get-cards', icon: AccountsCardsImage1 },
  { key: '2', title: 'Get card', href: '/cards-get-card', icon: AccountsCardsImage2 },
  { key: '3', title: 'Get card balance', href: '/cards-get-card-balance', icon: AccountsCardsImage3 },
  { key: '4', title: 'Get Card transactions', href: '/cards-get-card-transactions', icon: AccountsCardsImage4 },
  { key: '5', title: 'Get Card pending transactions', href: '/get-card-pending-transactions', icon: AccountsCardsImage5 },
]

export default function TrueLayerAccountsCardsPage() {
  return (
    <FaGlobalScreen
      pageTitle="Cards"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/true-layer-data-api-v1"
    />
  );
}
