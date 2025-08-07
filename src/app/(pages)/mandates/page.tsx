'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  MandatesImage1,
  MandatesImage2,
  MandatesImage3,
  MandatesImage4,
  MandatesImage5,
  MandatesImage6,
  MandatesImage7,
  MandatesImage8,
  MandatesImage9,
  MandatesImage10,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Create mandate', href: '/mandates-create-mandate', icon: MandatesImage1 },
  { key: '2', title: 'List mandates', href: '/mandates-list-mandates', icon: MandatesImage2 },
  { key: '3', title: 'Get mandate', href: '/mandates-get-mandate', icon: MandatesImage3 },
  { key: '4', title: 'Start authorization flow', href: '/mandates-start-authorization-flow', icon: MandatesImage4 },
  { key: '5', title: 'Submit consent', href: '/mandates-submit-consent', icon: MandatesImage5 },
  { key: '6', title: 'Submit provider selection', href: '/mandates-submit-provider-selection', icon: MandatesImage6 },
  { key: '7', title: 'Revoke mandate', href: '/mandates-revoke-mandate', icon: MandatesImage7 },
  { key: '8', title: 'Confirm funds', href: '/mandates-confirm-funds', icon: MandatesImage8 },
  { key: '9', title: 'Get mandate constraints', href: '/mandates-get-mandate-constraints', icon: MandatesImage9 },
  { key: '10', title: 'Mandate webhooks', href: '/mandates-webhooks', icon: MandatesImage10 },
]

export default function MandatesPage() {
  return (
    <FaGlobalScreen
      pageTitle="Mandates"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/true-layer-payments-api-v3"
    />
  );
}
