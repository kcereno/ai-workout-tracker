'use client';

import React from 'react';
import { Home, ClipboardList, Dumbbell, Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    icon: Home,
    label: 'Home',
  },
  {
    href: '/workouts',
    icon: ClipboardList,
    label: 'Workouts',
  },
  {
    href: '/exercises',
    icon: Dumbbell,
    label: 'Exercises',
  },
  {
    href: '/more',
    icon: Ellipsis,
    label: 'More',
  },
];

const BottomNav = () => {
  const pathName = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-10 ">
      <div className="flex justify-around p-3">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center text-gray-500 hover:text-black"
          >
            <Icon
              className={`h-6 w-6 ${
                pathName === href ? 'stroke-gray-900' : ''
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                pathName === href ? 'text-gray-900' : ''
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
