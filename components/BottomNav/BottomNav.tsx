'use client';

import React from 'react';
import { Home, ClipboardList, Dumbbell, Ellipsis } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    icon: Home,
  },
  {
    href: '/workouts',
    icon: ClipboardList,
  },
  {
    href: '/exercises',
    icon: Dumbbell,
  },
  {
    href: '/more',
    icon: Ellipsis,
  },
];

const BottomNav = () => {
  const pathName = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-10 bg-gray-100 h-14">
      <div className="flex justify-around items-center h-full">
        {navItems.map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-500 hover:text-black"
          >
            <Icon
              className={`h-8 w-8 ${
                pathName === href ? 'stroke-gray-900' : ''
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
