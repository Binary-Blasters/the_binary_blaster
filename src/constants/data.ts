
import { Service, Project, NavItems } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    icon: 'Code',
    title: 'Web Development',
    description: 'Responsive, modern websites crafted for performance. From portfolio sites to full e-commerce solutions.',
  },
  {
    id: '2',
    icon: 'Smartphone',
    title: 'Mobile App Dev',
    description: 'Native Android & iOS applications with stunning UI and blazing-fast performance.',
  },
  {
    id: '3',
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centric, creative designs that captivate and convert. Beautiful interfaces that work.',
  },
  {
    id: '4',
    icon: 'Search',
    title: 'SEO & Optimization',
    description: 'Boost your visibility. We optimize for search engines and peak performance.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'TechStart Dashboard',
    category: 'Web App',
    description: 'Analytics dashboard for SaaS startups',
    image: '/projects/dashboard.png',
    link: '#',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: '2',
    title: 'ShopHub Mobile',
    category: 'Mobile App',
    description: 'E-commerce platform for iOS & Android',
    image: '/projects/shopmobile.png',
    link: '#',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: '3',
    title: 'DesignFlow UI Kit',
    category: 'UI/UX Design',
    description: 'Complete design system & component library',
    image: '/projects/uikit.png',
    link: '#',
    color: 'from-violet-500 to-purple-500',
  },
];

export const  navItems: NavItems[] = [
    { label: 'Home', href: '/', icon: 'Home' },
    { label: 'About', href: '/about', icon: 'Info' },
    {
      label: 'Services',
      href: '/services',
      icon: 'Layers',
      dropdown: [
        { label: 'Web Development', href: '/services/web', icon: 'Code' },
        { label: 'App Development', href: '/services/app', icon: 'Smartphone' },
        { label: 'UI/UX Design', href: '/services/uiux', icon: 'Palette' },
        { label: 'SEO & Optimization', href: '/services/seo', icon: 'Search' },
      ],
    },
    { label: 'Portfolio', href: '/portfolio', icon: 'Briefcase' },
    { label: 'Contact', href: '/contact', icon: 'Mail' },
  ];