'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  PAYMENTSAPIV3Image1,
  PAYMENTSAPIV3Image2,
  PAYMENTSAPIV3Image3,
  PAYMENTSAPIV3Image4,
  PAYMENTSAPIV3Image5,
  PAYMENTSAPIV3Image6,
  PAYMENTSAPIV3Image7,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Payments', href: '/true-layer-payments-api-v3-payments', icon: PAYMENTSAPIV3Image1 },
  { key: '2', title: 'Payment links', href: '/payment-links', icon: PAYMENTSAPIV3Image2 },
  { key: '3', title: 'Payments providers', href: '/payments-providers', icon: PAYMENTSAPIV3Image3 },
  { key: '4', title: 'Payouts', href: '/payouts', icon: PAYMENTSAPIV3Image4 },
  { key: '5', title: 'Merchant accounts', href: '/merchant-accounts', icon: PAYMENTSAPIV3Image5 },
  { key: '6', title: 'Mandates', href: '/mandates', icon: PAYMENTSAPIV3Image6 },
  { key: '7', title: 'General', href: '/submit-payments-return-parameters', icon: PAYMENTSAPIV3Image7 },
]

export default function PAYMENTSAPIVPage() {
  return (
    <FaGlobalScreen
      pageTitle="PAYMENTS API V3"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
