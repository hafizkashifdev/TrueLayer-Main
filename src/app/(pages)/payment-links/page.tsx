'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  PaymentLinksImage1,
  PaymentLinksImage2,
  PaymentLinksImage3,
  PaymentLinksImage4,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Create payment link', href: '/create-payment-link', icon: PaymentLinksImage1 },
  { key: '2', title: 'Get payment link', href: '/get-payment-link', icon: PaymentLinksImage2 },
  { key: '3', title: 'Get payments', href: '/get-payments', icon: PaymentLinksImage3 },
  { key: '4', title: 'Payment link webhooks', href: '/payment-link-webhooks', icon: PaymentLinksImage4 },
]

export default function PaymentLinksPage() {
  return (
    <FaGlobalScreen
      pageTitle="Payment links"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/true-layer-payments-api-v3"
    />
  );
}
