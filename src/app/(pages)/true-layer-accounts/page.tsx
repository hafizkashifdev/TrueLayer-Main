'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  AccountsImage1,
  AccountsImage2,
  AccountsImage3,
  AccountsImage4,
  AccountsImage5,
  AccountsImage6,
  AccountsImage7,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Get accounts', href: '/accounts-get-accounts', icon: AccountsImage1 },
  { key: '2', title: 'Get account', href: '/accounts-get-account', icon: AccountsImage2 },
  { key: '3', title: 'Get account balance', href: '/accounts-get-account-balance', icon: AccountsImage3 },
  { key: '4', title: 'Get account transactions', href: '/accounts-get-account-trasnsactions', icon: AccountsImage4 },
  { key: '5', title: 'Get account pending transactions', href: '/account-get-account-pending-transaction', icon: AccountsImage5 },
  { key: '6', title: 'Get standing orders', href: '/accounts-get-standing-orders', icon: AccountsImage6 },
  { key: '7', title: 'Get direct debits', href: '/accounts-get-direct-debits', icon: AccountsImage7 },
]

export default function AccountsPage() {
  return (
    <FaGlobalScreen
      pageTitle="Accounts"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
