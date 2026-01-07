import { BlogArticle, BlogCategory } from '../components/types/blog';

export const blogCategories: BlogCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'ops-strategy', label: 'Ops & Strategy' },
  { id: 'guides-resources', label: 'Guides & Resources' },
  { id: 'product-updates', label: 'Product & Updates' },
  { id: 'team-culture', label: 'Team & Culture' },
  { id: 'insights-analysis', label: 'Insights & Analysis' },
];

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    imageUrl: 'https://framerusercontent.com/images/xQHTLAJm5NoiLEu2lyjmJCm1Lk.jpg',
    imageAlt: 'Scaling Finance Ops',
    date: 'MAY 13, 2025',
    category: 'OPS & STRATEGY',
    title: "Scaling Finance Ops Without Slowing Down",
    author: {
      id: 'ella-navarro',
      name: 'Ella Navarro',
      role: 'Head of Finance Ops',
      avatarUrl: 'https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg',
    },
    link: '#',
  },
  {
    id: '2',
    imageUrl: 'https://framerusercontent.com/images/vzV4ud1UQ7xLnwDx99ukoOvBW4.jpg',
    imageAlt: 'Modern Budget Workflows',
    date: 'MAY 9, 2025',
    category: 'GUIDES & RESOURCES',
    title: "Modern Budget Workflows That Don't Break Under Pressure",
    author: {
      id: 'jordan-malik',
      name: 'Jordan Malik',
      role: 'Head of Customer Success',
      avatarUrl: 'https://framerusercontent.com/images/JKorM5B0WmJOc8WoLSGW2e0hNG8.jpg',
    },
    link: '#',
  },
  {
    id: '3',
    imageUrl: 'https://framerusercontent.com/images/ONkjvQAz3gacwCm0BbwyHGXM9Y.jpg',
    imageAlt: 'Introducing Roles & Permissions',
    date: 'MAY 5, 2025',
    category: 'PRODUCT & UPDATES',
    title: "Introducing Roles & Permissions in Vectura",
    author: {
      id: 'clara-jensen',
      name: 'Clara Jensen',
      role: 'Product Marketing Manager',
      avatarUrl: 'https://framerusercontent.com/images/cmQt0ay0xGNLe9Sc30vSaXtio.jpg',
    },
    link: '#',
  },
  {
    id: '4',
    imageUrl: 'https://framerusercontent.com/images/xQHTLAJm5NoiLEu2lyjmJCm1Lk.jpg',
    imageAlt: 'Two Speeds One Team',
    date: 'MAY 2, 2025',
    category: 'OPS & STRATEGY',
    title: "Two Speeds, One Team: Keeping Weekly Work Aligned With Strategy",
    author: {
      id: 'ella-navarro',
      name: 'Ella Navarro',
      role: 'Head of Finance Ops',
      avatarUrl: 'https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg',
    },
    link: '#',
  },
  {
    id: '5',
    imageUrl: 'https://framerusercontent.com/images/vzV4ud1UQ7xLnwDx99ukoOvBW4.jpg',
    imageAlt: 'High Trust High Ownership',
    date: 'APR 24, 2025',
    category: 'TEAM & CULTURE',
    title: "High-Trust, High-Ownership: How We Built a Team That Ships Fast",
    author: {
      id: 'maya-chen',
      name: 'Maya Chen',
      role: 'Chief People & Operations Officer',
      avatarUrl: 'https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg',
    },
    link: '#',
  },
  {
    id: '6',
    imageUrl: 'https://framerusercontent.com/images/ONkjvQAz3gacwCm0BbwyHGXM9Y.jpg',
    imageAlt: 'User Research Digital Strategy',
    date: 'APR 3, 2025',
    category: 'INSIGHTS & ANALYSIS',
    title: "Why User Research Should Drive Your Digital Strategy",
    author: {
      id: 'rahul-desai',
      name: 'Rahul Desai',
      role: 'VP of Research & Customer Insights',
      avatarUrl: 'https://framerusercontent.com/images/JKorM5B0WmJOc8WoLSGW2e0hNG8.jpg',
    },
    link: '#',
  },
];

export const blogHeroConfig = {
  headline: 'Research-led insights for modern finance teams',
  subheadline: 'Practical tactics, stories, and benchmarks from the field—so finance leaders can move faster with clarity, control, and trust.',
  backgroundImageUrl: '/d1.avif',
};

