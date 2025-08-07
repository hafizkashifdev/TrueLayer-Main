'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  PayoutsImage1,
  PayoutsImage2,
  PayoutsImage3,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Create payout', href: '/create-payout', icon: PayoutsImage1 },
  { key: '2', title: 'Get payout', href: '/get-payout', icon: PayoutsImage2 },
  { key: '3', title: 'Payout webhooks', href: '/payout-webhooks', icon: PayoutsImage3 },
]

export default function PaymentsProvidersPage() {
  return (
    <FaGlobalScreen
      pageTitle="Payouts"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 4 }}
      backRoute="/true-layer-payments-api-v3"
    />
  );
}
