import Link from "next/link";
import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
} from "@gravity-ui/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
                <Image
                          src="/images/logo.png"
                          alt="Logo"
                          width={100}
                          height={40}
                          />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
              The AI-native career platform. Built for people who take
              their work seriously.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-medium text-indigo-400">
              Product
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Job discovery
                </Link>
              </li>

              <li>
                <Link
                  href="/worker-ai"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Worker AI
                </Link>
              </li>

              <li>
                <Link
                  href="/companies"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  href="/salary-data"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-sm font-medium text-indigo-400">
              Navigations
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Help center
                </Link>
              </li>

              <li>
                <Link
                  href="/career-library"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Career library
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-indigo-400">
              Resources
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href="/brand-guideline"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Brand Guideline
                </Link>
              </li>

              <li>
                <Link
                  href="/newsroom"
                  className="text-sm text-gray-500 transition hover:text-white"
                >
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

          {/* Social Icons */}
          <div className="flex items-center gap-2">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#111111] text-gray-400 transition hover:bg-[#1877F2] hover:text-white"
            >
              <LogoFacebook size={18} />
            </a>

            {/* Pinterest */}
            <a
              href="#"
              aria-label="Pinterest"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#111111] text-gray-400 transition hover:bg-[#E60023] hover:text-white"
            >
              <LogoGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#111111] text-gray-400 transition hover:bg-[#0A66C2] hover:text-white"
            >
              <LogoLinkedin size={18}/>
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600">
            <span>
              Copyright 2024 — HireLoop
            </span>

            <Link
              href="/terms"
              className="transition hover:text-gray-300"
            >
              Terms & Policy
            </Link>

            <Link
              href="/privacy"
              className="transition hover:text-gray-300"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;