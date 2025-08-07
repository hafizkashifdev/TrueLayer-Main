'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  MerchantAccountsImage1,
  MerchantAccountsImage2,
  MerchantAccountsImage3,
  MerchantAccountsImage4,
  MerchantAccountsImage5,
  MerchantAccountsImage6,
  MerchantAccountsImage7,
  MerchantAccountsImage8,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'List merchant accounts', href: '/merchant-list-merchant-accounts', icon: MerchantAccountsImage1 },
  { key: '2', title: 'Get merchant account', href: '/get-merchant-account', icon: MerchantAccountsImage2 },
  { key: '3', title: 'Get transactions', href: '/merchant-get-transactions', icon: MerchantAccountsImage3 },
  { key: '4', title: 'Set up or update sweeping', href: '/merchant-setup-or-update-sweeping', icon: MerchantAccountsImage4 },
  { key: '5', title: 'Disable sweeping', href: '/merchant-disable-sweeping', icon: MerchantAccountsImage5 },
  { key: '6', title: 'Get sweeping settings', href: '/merchant-get-sweeping-settings', icon: MerchantAccountsImage6 },
  { key: '7', title: 'Get payment sources', href: '/merchant-get-payment-sources', icon: MerchantAccountsImage7 },
  { key: '8', title: 'Merchant account webhooks', href: '/merchant-account-webhooks', icon: MerchantAccountsImage8 },
]

export default function MerchantAccountsPage() {
  return (
    <FaGlobalScreen
      pageTitle="Merchant accounts"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/true-layer-payments-api-v3"
    />
  );
}
