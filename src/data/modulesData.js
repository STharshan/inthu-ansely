import { Atom, TrendingUp, Bot, Search, Layout } from 'lucide-react';

export const modulesData = [
  {
    id: 1,
    title: "React Comparison Guide",
    category: "Development",
    path: "/learn/react-comparison",
    description: "Deep dive into React patterns, hooks, and component lifecycle comparison.",
    icon: Atom, // Removed emoji, using Lucide component
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "PPC Learning Module",
    category: "Marketing",
    path: "/learn/ppc",
    description: "Master Pay-Per-Click advertising, keyword bidding, and campaign ROI.",
    icon: TrendingUp,
    gradient: "from-blue-700 to-indigo-600"
  },
  {
    id: 3,
    title: "AI Learning Module",
    category: "Artificial Intelligence",
    path: "/learn/ai",
    description: "Explore Generative AI, LLMs, and neural network fundamentals.",
    icon: Bot,
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: 4,
    title: "SEO Learning Platform",
    category: "Marketing",
    path: "/learn/seo",
    description: "On-page and Off-page SEO strategies to rank higher on search engines.",
    icon: Search,
    gradient: "from-blue-500 to-[#0045EF]"
  },
  {
    id: 5,
    title: "Custom Software Service",
    category: "Development",
    path: "/learn/custom-software-guide",
    description: "Tailored software solutions, architecture design, and enterprise scaling strategies.",
    icon: Layout,
    gradient: "from-cyan-600 to-blue-700"
  }
];