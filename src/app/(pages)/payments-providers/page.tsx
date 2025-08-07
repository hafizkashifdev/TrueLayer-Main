'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  PaymentsProvidersImage1,
  PaymentsProvidersImage2,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Search Payments providers', href: '/search-payments-providers', icon: PaymentsProvidersImage1 },
  { key: '2', title: 'Get payments provider', href: '/get-payments-provider', icon: PaymentsProvidersImage2 },
]

export default function PaymentsProvidersPage() {
  return (
    <FaGlobalScreen
      pageTitle="Payments providers"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 6 }}
      backRoute="/true-layer-payments-api-v3"
    />
  );
}
