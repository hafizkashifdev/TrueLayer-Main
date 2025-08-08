import FaGlobalScreen from "@/components/fa-global-screen";
import {
  TrueLayerHome1,
  TrueLayerHome2,
  TrueLayerHome3,
  TrueLayerHome4,
  TrueLayerHome5,
  TrueLayerHome6,
  TrueLayerHome7,
  TrueLayerHome8,
  TrueLayerHome9,
  TrueLayerHome10,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Introduction', href: '/introduction', icon: TrueLayerHome1 },
  { key: '2', title: 'Authentication Server', href: '/true-layer-authentication-server', icon: TrueLayerHome2 },
  { key: '3', title: 'Payments API v3', href: '/true-layer-payments-api-v3', icon: TrueLayerHome3 },
  { key: '4', title: 'Data API v1', href: '/true-layer-data-api-v1', icon: TrueLayerHome4 },
  { key: '5', title: 'Connections API', href: '/connection-api', icon: TrueLayerHome5 },
  { key: '6', title: 'Client Tracking API', href: '/client-tracking-api', icon: TrueLayerHome6 },
  { key: '7', title: 'Signup+', href: '/true-layer-signup', icon: TrueLayerHome7 },
  { key: '8', title: 'Verification API', href: '/account-verification', icon: TrueLayerHome8 },
  { key: '9', title: 'Legacy - Paym ents API', href: '/legacy-payment-api', icon: TrueLayerHome9 },
  { key: '10', title: 'Legacy - PayDirect API', href: '/legacy-pay-direct-api', icon: TrueLayerHome10 },
]


export default function Home() {
  return (
    <FaGlobalScreen
      pageTitle="TrueLayer"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      showBackButton={false}
    />
  );
}
