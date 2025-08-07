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
  { key: '1', title: 'Create payment', href: '/payments-create-payment', icon: PaymentsImage1 },
  { key: '2', title: 'Start authorization flow', href: '/payments-start-authorization-flow', icon: PaymentsImage2 },
  { key: '3', title: 'Submit provider selection', href: '/payments-submit-provider-selection', icon: PaymentsImage3 },
  { key: '4', title: 'Submit scheme selection', href: '/payments-submit-scheme-selection', icon: PaymentsImage4 },
  { key: '5', title: 'Submit form', href: '/payments-submit-form', icon: PaymentsImage5 },
  { key: '6', title: 'Submit consent', href: '/payments-submit-consent', icon: PaymentsImage6 },
  { key: '7', title: 'Cancel payment', href: '/payments-cancel-payment', icon: PaymentsImage7 },
  { key: '8', title: 'Get payment', href: '/payments-get-payment', icon: PaymentsImage8 },
  { key: '9', title: 'Create payment refund', href: '/payments-create-payment-refund', icon: PaymentsImage9 },
  { key: '10', title: 'Get payment refunds', href: '/payments-get-payment-refunds', icon: PaymentsImage10 },
  { key: '11', title: 'Get payment refund', href: '/payments-get-payment-refund', icon: PaymentsImage11 },
  { key: '12', title: 'Payment webhooks', href: '/payments-payment-webhooks', icon: PaymentsImage12 },
  { key: '13', title: 'Refund webhooks', href: '/payments-refund-webhooks', icon: PaymentsImage13 },
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
