'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { navItems } from '@/constants/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 border-b border-emerald-500/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center font-bold text-slate-950">
              BB
            </div>
            <span className="font-bold text-lg hidden sm:inline text-white">
              Binary Blasters
            </span>
          </Link>

         
          <div className="hidden md:flex gap-8 relative">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-300 hover:text-emerald-400 transition-colors font-medium relative"
                  >
                    <span className="flex items-center gap-1">
                  
                      {item.icon && (() => {
                        const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                        return <Icon className="w-4 h-4" />;
                      })()}
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`mt-[1px] transition-transform ${
                          isDropdownOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </span>
                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>

               
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-slate-900 border border-emerald-500/20 rounded-lg shadow-lg py-2"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                          >
                            {sub.icon && (() => {
                              const SubIcon = Icons[sub.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                              return <SubIcon className="w-4 h-4 text-emerald-400" />;
                            })()}
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1 text-gray-300 hover:text-emerald-400 transition-colors font-medium relative group"
                >
                 
                  {item.icon && (() => {
                    const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                    return <Icon className="w-4 h-4" />;
                  })()}
                  {item.label}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 font-medium text-gray-300 hover:text-emerald-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && (() => {
                        const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                        return <Icon className="w-4 h-4" />;
                      })()}
                      {item.label}
                    </Link>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center gap-2 pl-8 py-1 text-sm text-gray-400 hover:text-emerald-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.icon && (() => {
                          const SubIcon = Icons[sub.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                          return <SubIcon className="w-4 h-4" />;
                        })()}
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 rounded transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && (() => {
                      const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                      return <Icon className="w-4 h-4" />;
                    })()}
                    {item.label}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
