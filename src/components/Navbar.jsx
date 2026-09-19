"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data:session, isPending } = useSession();
 
   console.log("session Navbar", session, "isPending Data", isPending);
   const user = session?.user;
  //  console.log("user Navbar", user);

   const handleSignOut = async () => {
    await signOut();
   }

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Company",
      href: "/companies",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];



  return (
    <nav className="sticky top-0 z-50 w-full px-4 pt-4">
      <header className="mx-auto max-w-7xl rounded-xl bg-[#1d1d1f]/95 px-5 backdrop-blur-lg">
        
        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* ================= Logo ================= */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={40}
            />
          </Link>


          {/* ================= Desktop Menu ================= */}
          <div className="hidden items-center md:flex">

            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Vertical Divider */}
            <div className="mx-6 h-6 w-px bg-white/20" />

            {/* Sign In */}
             <div className="flex items-center gap-4">
              {
                 user ?  <>
                 
                   Hi, {user.name}!
                    <Button onClick={handleSignOut} variant= "ghost">SignOut</Button>
                 </>
              :
            <Link
              href="/auth/signin"
              className="text-sm font-medium text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
            >
              Sign In
            </Link>
            }
            {/* Get Started */}
            <Link
              href="/auth/signup"
              className="ml-5 rounded-lg bg-[#6252f5] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#5545e8] hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Get Started
            </Link>
            </div>
          </div>

              
          {/* ================= Mobile Menu Button ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>

            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>


        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">

            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Divider */}
            <div className="my-3 h-px bg-white/10" />

            <div className="flex flex-col gap-2">

              {/* Sign In  */}
              <Link
                href="/auth/signin"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-indigo-400 transition hover:bg-white/5"
              >
                Sign In
              </Link>

              {/* Get Started */}
              <Link
                href="/auth/signup"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-[#6252f5] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#5545e8]"
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;