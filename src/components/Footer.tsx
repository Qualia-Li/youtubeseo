import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl text-white mb-6 md:mb-0 font-bold">
            © 2024 YouTubeSEO.ai. All rights reserved.
          </div>
          <div className="flex space-x-12">
            <Link
              href="/terms"
              className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              href="/about-us"
              className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/careers"
              className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
            >
              Careers
            </Link>
            <Link
              href="/cookies"
              className="text-xl font-bold text-white hover:text-[#fcd40b] transition-colors cursor-pointer"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 