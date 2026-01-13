import type { LucideIcon } from "lucide-react";
import { Search, Shield, Clock, TrendingUp, Zap } from "lucide-react";

export interface PlatformProcessStep {
  id: number;
  title: string;
  description: string;
  stat: string;
  statUnit: string;
  statLabel: string;
  image: string;
  icon: LucideIcon;
}

export const platformProcessSteps: PlatformProcessStep[] = [
  {
    id: 1,
    title: "Customers Search Online First",
    description:
      "93% of buying decisions begin with an online search — if you're not visible, you're missing demand.",
    stat: "93",
    statUnit: "%",
    statLabel: "Buying decisions start online",
    image: "/customer-search.jpg",
    icon: Search,
  },
  {
    id: 2,
    title: "Builds Trust & Credibility",
    description:
      "75% of users judge a business's credibility based on its website and online presence.",
    stat: "75",
    statUnit: "%",
    statLabel: "Judged on credibility",
    image: "/trust-credibility.jpg",
    icon: Shield,
  },
  {
    id: 3,
    title: "Works for You 24/7",
    description:
      "60%+ of enquiries happen outside standard business hours through websites and online forms.",
    stat: "60",
    statUnit: "%",
    statLabel: "Outside business hours enquiries",
    image: "/works-247.jpg",
    icon: Clock,
  },
  {
    id: 4,
    title: "Competes & Drives Growth",
    description:
      "Small businesses with strong digital presence see up to 3× higher engagement and SEO-driven leads convert 8× better than outbound methods. Data-led businesses are 5× more likely to make faster, better growth decisions.",
    stat: "8",
    statUnit: "×",
    statLabel: "Better lead conversion",
    image: "/business-growth.jpg",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Enhances Experience & Future-Proofs",
    description:
      "88% of users are less likely to return after a poor digital experience. Consistent branding increases revenue by up to 23% across digital touchpoints, and 70%+ of consumers prefer to engage with businesses that have a strong, modern digital presence.",
    stat: "23",
    statUnit: "%",
    statLabel: "Revenue increase from branding",
    image: "/business-future.jpg",
    icon: Zap,
  },
];
