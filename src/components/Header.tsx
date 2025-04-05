import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="YouTubeSEO.ai Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <span className="text-3xl font-black text-white">YouTubeSEO</span>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            <Link
              href="/#features"
              className="text-white hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-white hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
            >
              How It Works
            </Link>
            <Link
              href="/#ai-benefits"
              className="text-white hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
            >
              AI Benefits
            </Link>
            <Link
              href="/#testimonials"
              className="text-white hover:underline font-bold cursor-pointer whitespace-nowrap text-xl"
            >
              Testimonials
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-black border-4 border-white rounded-none text-white font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all whitespace-nowrap">
              Log In
            </Button>
            <Button
              variant="outline"
              className="bg-[#fcd40b] border-4 border-white rounded-none text-black font-bold text-lg px-6 py-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 