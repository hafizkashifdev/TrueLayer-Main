'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  DATAAPIV1Image1,
  DATAAPIV1Image2,
  DATAAPIV1Image3,
  DATAAPIV1Image4,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Meta', href: '/trure-layer-meta', icon: DATAAPIV1Image1 },
  { key: '2', title: 'Accounts', href: '/true-layer-accounts', icon: DATAAPIV1Image2 },
  { key: '3', title: 'Cards', href: '/true-layer-accounts-cards', icon: DATAAPIV1Image3 },
  { key: '4', title: 'Batch', href: '/batch', icon: DATAAPIV1Image4 },
]

export default function DATAAPIV1Page() {
  return (
    <FaGlobalScreen
      pageTitle="DATA API V1"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
