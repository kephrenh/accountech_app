"use client";

import { useHandleMenu } from "@/hooks/use-handle-menu";
import { useHeaderShadow } from "@/hooks/use-header-shadow";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const { isOpen, setIsOpen } = useHandleMenu();
  const pathname = usePathname();
  const hasShadow = useHeaderShadow();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : "shadow-none"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-medium">
                Accoun<span className="text-indigo-600">Tech</span>
              </span>
            </Link>
          </div>
          <div className="hidden sm:flex flex-grow justify-center items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-3 pt-1 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-indigo-600 font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:flex items-center">
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
              Connexion
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>
      {/* Menu mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 ${
                    pathname === item.href ? "text-indigo-600 font-bold" : "text-gray-500"
                  }`}
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}>
                Connexion
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
