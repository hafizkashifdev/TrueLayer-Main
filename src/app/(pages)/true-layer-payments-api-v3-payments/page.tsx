'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  PaymentsImage1,
  PaymentsImage2,
  PaymentsImage3,
  PaymentsImage4,
  PaymentsImage5,
  PaymentsImage6,
  PaymentsImage7,
  PaymentsImage8,
  PaymentsImage9,
  PaymentsImage10,
  PaymentsImage11,
  PaymentsImage12,
  PaymentsImage13,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Create payment', href: '/create-payment', icon: PaymentsImage1 },
  { key: '2', title: 'Start authorization flow', href: '/start-authorization-flow', icon: PaymentsImage2 },
  { key: '3', title: 'Submit provider selection', href: '/submit-provider-selection', icon: PaymentsImage3 },
  { key: '4', title: 'Submit scheme selection', href: '/submit-scheme-selection', icon: PaymentsImage4 },
  { key: '5', title: 'Submit form', href: '/submit-form', icon: PaymentsImage5 },
  { key: '6', title: 'Submit consent', href: '/submit-consent', icon: PaymentsImage6 },
  { key: '7', title: 'Cancel payment', href: '/cancel-payment', icon: PaymentsImage7 },
  { key: '8', title: 'Get payment', href: '/get-payment', icon: PaymentsImage8 },
  { key: '9', title: 'Create payment refund', href: '/create-payment-refund', icon: PaymentsImage9 },
  { key: '10', title: 'Get payment refunds', href: '/get-payment-refunds', icon: PaymentsImage10 },
  { key: '11', title: 'Get payment refund', href: '/get-payment-refund', icon: PaymentsImage11 },
  { key: '12', title: 'Payment webhooks', href: '/payment-webhooks', icon: PaymentsImage12 },
  { key: '13', title: 'Refund webhooks', href: '/refund-webhooks', icon: PaymentsImage13 },
]

export default function PaymentsPage() {
  return (
    <FaGlobalScreen
      pageTitle="Payments"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
